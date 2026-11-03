/* 在线图册通用渲染：品牌导航条 + 分组卡片 + 灯箱 + 3D 实景 + 品类按钮跳转
 * 依赖：catalog-data.js（window.CATALOG）、页面声明 window.CATALOG_SCOPE
 * 容器：#catalog-root；灯箱：#catLightbox
 */
(function () {
  var en = window.LANG === 'en';
  var C = window.CATALOG;
  var scope = window.CATALOG_SCOPE || 'materials';
  var albums = C && C[scope];
  var root = document.getElementById('catalog-root');
  if (!root || !albums) return;

  var flat = [];
  var pad = function (n) { return ('0' + n).slice(-2); };
  var imgBase = function (al, n, suffix) {
    return 'assets/img/catalog/' + al.dir + '/cat-' + pad(n) + suffix + '.jpg';
  };

  /* ---- 顶部品牌导航条（粘性） ---- */
  var chips = document.createElement('nav');
  chips.className = 'cat-chips';
  chips.setAttribute('aria-label', en ? 'Catalog sections' : '图册导航');
  albums.forEach(function (al) {
    var b = document.createElement('a');
    b.className = 'cat-chip';
    b.href = '#al-' + al.id;
    b.setAttribute('data-target', 'al-' + al.id);
    b.textContent = en ? al.en : al.zh;
    chips.appendChild(b);
  });
  root.appendChild(chips);

  /* ---- 各品牌图册 ---- */
  albums.forEach(function (al) {
    var sec = document.createElement('section');
    sec.className = 'cat-album';
    sec.id = 'al-' + al.id;

    var total = al.groups
      ? al.groups.reduce(function (s, g) { return s + g.pages.length; }, 0)
      : (al.count || 0);
    var head = document.createElement('div');
    head.className = 'cat-ahead';
    head.innerHTML = '<h3>' + (en ? al.en : al.zh) + '</h3>' +
      '<span class="cat-gcount">' + (total ? total + ' PAGES' : (en ? 'COMING SOON' : '即将上线')) + '</span>';
    if (al.note) {
      var np = document.createElement('p');
      np.className = 'cat-anote';
      np.textContent = en ? al.note.en : al.note.zh;
      head.appendChild(np);
    }
    sec.appendChild(head);

    var groups = al.groups || [{
      id: '', zh: '', en: '',
      pages: Array.apply(null, { length: al.count }).map(function (_, i) { return i + 1; })
    }];

    groups.forEach(function (g) {
      if (al.groups) {
        var t = document.createElement('h4');
        t.className = 'cat-gtitle';
        if (g.id) t.id = 'g-' + g.id;
        var gc = g.pages.length ? g.pages.length + ' PAGES' : (en ? 'COMING SOON' : '即将上线');
        t.innerHTML = (en ? g.en : g.zh) + '<span class="cat-gcount">' + gc + '</span>';
        sec.appendChild(t);
      }
      if (!g.pages.length) {
        var empty = document.createElement('div');
        empty.className = 'cat-empty';
        empty.innerHTML = '<p>' + (en ? 'This series is being prepared — new pages coming soon.' : '该系列资料整理中，新版页面即将上线。') + '</p>' +
          '<a class="btn btn--ghost" href="' + (en ? 'contact-en.html' : 'contact.html') + '"><span>' + (en ? 'Enquire in advance' : '提前咨询') + '</span><span aria-hidden="true">→</span></a>';
        sec.appendChild(empty);
        return;
      }
      var grid = document.createElement('div');
      grid.className = 'cat-grid';
      g.pages.forEach(function (p) {
        var vr = (al.pagesVr && al.pagesVr[p]) || [];
        var idx = flat.length;
        flat.push({ al: al, p: p, vr: vr, g: g });
        var card = document.createElement('button');
        card.type = 'button';
        card.className = 'cat-card';
        var gname = en ? g.en : g.zh;
        var label = gname ? 'P' + p + ' · ' + gname : 'P' + p;
        card.setAttribute('aria-label', (en ? al.en : al.zh) + ' ' + label);
        card.innerHTML =
          '<span class="cat-thumb-wrap">' +
            '<img src="' + imgBase(al, p, 't') + '" alt="' + (en ? al.en : al.zh) + ' P' + p + '" width="480" height="676" loading="lazy">' +
            (vr.length ? '<span class="cat-vr-badge">3D ×' + vr.length + '</span>' : '') +
          '</span>' +
          '<span class="cat-plabel">' + label + '</span>';
        card.addEventListener('click', function () { catOpen(idx); });
        grid.appendChild(card);
      });
      sec.appendChild(grid);
    });
    root.appendChild(sec);
  });

  /* ---- 品牌导航：点击平滑滚动 + 滚动高亮 ---- */
  var chipLinks = Array.prototype.slice.call(chips.querySelectorAll('.cat-chip'));
  chipLinks.forEach(function (a) {
    a.addEventListener('click', function (e) {
      var t = document.getElementById(a.getAttribute('data-target'));
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', '#' + a.getAttribute('data-target'));
    });
  });
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en2) {
        if (!en2.isIntersecting) return;
        chipLinks.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('data-target') === en2.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    albums.forEach(function (al) {
      var el = document.getElementById('al-' + al.id);
      if (el) spy.observe(el);
    });
  }

  /* ---- 灯箱 ---- */
  var lb = document.getElementById('catLightbox');
  var lbImg = lb.querySelector('.cat-lb-img');
  var lbLabel = lb.querySelector('.cat-lb-label');
  var lbVr = lb.querySelector('.cat-lb-vr');
  var cur = 0;

  function render() {
    var it = flat[cur];
    lbImg.src = imgBase(it.al, it.p, 'f');
    lbImg.alt = (en ? it.al.en : it.al.zh) + ' P' + it.p;
    lbLabel.textContent = (en ? it.al.en : it.al.zh) + ' · P' + it.p;
    lbVr.innerHTML = '';
    if (it.vr.length) {
      it.vr.forEach(function (u, k) {
        var a = document.createElement('a');
        a.href = u;
        a.target = '_blank';
        a.rel = 'noopener';
        a.className = 'cat-lb-vrbtn';
        a.textContent = it.vr.length > 1
          ? (en ? '3D View ' + (k + 1) : '3D 实景 ' + (k + 1))
          : (en ? 'View 3D Space' : '查看 3D 实景');
        lbVr.appendChild(a);
      });
    }
    [cur + 1, cur - 1].forEach(function (n) {
      if (n >= 0 && n < flat.length) {
        var im = new Image();
        im.src = imgBase(flat[n].al, flat[n].p, 'f');
      }
    });
  }
  window.catOpen = function (i) {
    cur = i;
    render();
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
  };
  function catClose() {
    lb.hidden = true;
    document.body.style.overflow = '';
  }
  function catStep(d) {
    cur = (cur + d + flat.length) % flat.length;
    render();
  }
  lb.querySelector('.cat-lb-close').addEventListener('click', catClose);
  lb.querySelector('.cat-lb-prev').addEventListener('click', function () { catStep(-1); });
  lb.querySelector('.cat-lb-next').addEventListener('click', function () { catStep(1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) catClose(); });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') catClose();
    else if (e.key === 'ArrowLeft') catStep(-1);
    else if (e.key === 'ArrowRight') catStep(1);
  });

  /* ---- 品类按钮：JS 平滑滚动兜底 ---- */
  document.querySelectorAll('.campaign-module-link[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href').slice(1);
      var t = document.getElementById(id);
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', '#' + id);
    });
  });

  /* ---- CTA：WhatsApp 预填 ---- */
  var pdfBtn = document.querySelector('.js-wa-pdf');
  if (pdfBtn) {
    var msg = en
      ? 'Hello BOYUE, I would like to get the full materials catalogs (PDF).'
      : '您好，我想索取博粤完整版选材手册（PDF）。';
    pdfBtn.href = 'https://wa.me/8613826418588?text=' + encodeURIComponent(msg);
  }
})();
