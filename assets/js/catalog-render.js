/* 在线图册通用渲染：纹理/品牌导航条 + 分组卡片 + 灯箱 + 3D 实景 + 品类按钮跳转
 * 依赖：catalog-data.js（window.CATALOG）、页面声明 window.CATALOG_SCOPE
 * 容器：#catalog-root；灯箱：#catLightbox
 * pages 兼容两种写法：
 *   数字 n           → assets/img/catalog/{album.dir}/cat-NNx.jpg（doors 整册）
 *   "目录/页码" 字符串 → assets/img/catalog/{目录}/cat-NNx.jpg（materials 纹理分组）
 * 单专辑且带 groups 时，顶部导航显示纹理分组；否则显示各专辑。
 */
(function () {
  var en = window.LANG === 'en';
  var C = window.CATALOG;
  var scope = window.CATALOG_SCOPE || 'materials';
  var albums = C && C[scope];
  var root = document.getElementById('catalog-root');
  if (!root || !albums) return;

  var flat = [];
  var pad = function (n) { return n > 99 ? String(n) : ('0' + n).slice(-2); };
  /* 解析页引用：返回 { dir, n } */
  var pageRef = function (al, p) {
    if (typeof p === 'string') {
      var k = p.split('/');
      return { dir: k[0], n: parseInt(k[1], 10) };
    }
    return { dir: al.dir, n: p };
  };
  var imgBase = function (ref, suffix) {
    return 'assets/img/catalog/' + ref.dir + '/cat-' + pad(ref.n) + suffix + '.jpg';
  };
  var vrOf = function (al, p) {
    return (al.pagesVr && al.pagesVr[String(p)]) || [];
  };

  /* 单专辑（materials）：chips 用纹理分组；
     多专辑（cabinets / doors）：第一行专辑，第二行起为该专辑的分组子导航（如衣柜/酒柜/电视柜） */
  var single = albums.length === 1 && albums[0].groups;
  var chips = document.createElement('nav');
  chips.className = 'cat-chips';
  chips.setAttribute('aria-label', en ? 'Catalog sections' : '图册导航');

  var makeChip = function (it, extraCls) {
    if (!it.id) return null;
    var b = document.createElement('a');
    b.className = 'cat-chip' + (extraCls || '');
    b.href = '#' + it.id;
    b.setAttribute('data-target', it.id);
    b.textContent = it.text;
    return b;
  };

  var chipItems = [];
  var pushChip = function (parent, it, extraCls) {
    chipItems.push(it);
    var b = makeChip(it, extraCls);
    if (b) parent.appendChild(b);
  };

  if (single) {
    chips.classList.add('cat-chips--flat');
    albums[0].groups.forEach(function (g) {
      pushChip(chips, { id: 'g-' + g.id, text: en ? g.en : g.zh });
    });
  } else {
    chips.classList.add('cat-chips--multi');
    var rowAlbums = document.createElement('div');
    rowAlbums.className = 'cat-chip-row';
    albums.forEach(function (al) {
      pushChip(rowAlbums, { id: 'al-' + al.id, text: en ? al.en : al.zh });
    });
    chips.appendChild(rowAlbums);
    /* 分组子导航：仅多分组专辑生成（单分组的专辑名与分组名重复，无需再来一行） */
    albums.forEach(function (al) {
      if (!al.groups || al.groups.length < 2) return;
      var row = document.createElement('div');
      row.className = 'cat-chip-row cat-chip-row--sub';
      al.groups.forEach(function (g) {
        pushChip(row, { id: 'g-' + g.id, text: en ? g.en : g.zh }, ' cat-chip--sub');
      });
      chips.appendChild(row);
    });
  }
  root.appendChild(chips);

  /* ---- 专辑与分组 ---- */
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
      /* 屏外网格跳过渲染时用估算高度占位：按当前宽度算列数，避免滚动时页面高度突变 */
      var wrapW = root.clientWidth || 1200;
      var cols = Math.max(2, Math.min(6, Math.floor(wrapW / 220)));
      var cardH = Math.round(wrapW / cols * 1.42) + 36;
      grid.style.containIntrinsicSize = 'auto ' + (Math.ceil(g.pages.length / cols) * cardH) + 'px';
      var gname = en ? g.en : g.zh;
      g.pages.forEach(function (p, gi) {
        var ref = pageRef(al, p);
        var vr = vrOf(al, p);
        var no = pad(gi + 1);
        var label = gname ? gname + ' · ' + no : 'P' + ref.n;
        var idx = flat.length;
        flat.push({ ref: ref, vr: vr, label: label });
        var card = document.createElement('button');
        card.type = 'button';
        card.className = 'cat-card';
        var thumbH = single ? 360 : 676;
        card.setAttribute('aria-label', label);
        var thumbJpg = imgBase(ref, 't');
        var thumbWebp = thumbJpg.replace(/\.jpg$/, '.webp');
        card.innerHTML =
          '<span class="cat-thumb-wrap">' +
            '<img src="' + thumbWebp + '" data-fb="' + thumbJpg + '" alt="' + label + '" width="480" height="' + thumbH + '" loading="lazy" decoding="async">' +
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

  /* ---- 导航条：点击平滑滚动 + 滚动高亮 ---- */
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
    chipItems.forEach(function (it) {
      if (!it.id) return;
      var el = document.getElementById(it.id);
      if (el) spy.observe(el);
    });
  }

  /* ---- 灯箱 ---- */
  var lb = document.getElementById('catLightbox');
  var lbImg = lb.querySelector('.cat-lb-img');
  var lbLabel = lb.querySelector('.cat-lb-label');
  var lbVr = lb.querySelector('.cat-lb-vr');
  var lbHots = lb.querySelector('.cat-lb-hots');
  var lbQr = lb.querySelector('.cat-lb-qr');
  var cur = 0;

  /* 二维码热区：数据来自各册交付包 qr_links.csv（qr-links.js），
   * 坐标为官网大图像素值，这里按图片 naturalWidth/naturalHeight 换算成百分比，
   * 图片无论怎么缩放，热区都精确覆盖原二维码位置。 */
  function renderQr(it) {
    if (!lbHots || !lbQr) return;
    lbHots.innerHTML = '';
    lbQr.innerHTML = '';
    var rec = window.QR_LINKS && window.QR_LINKS[it.ref.dir + '/' + it.ref.n];
    if (!rec || !rec.items || !rec.items.length) return;
    var build = function () {
      var nw = lbImg.naturalWidth, nh = lbImg.naturalHeight;
      if (!nw || !nh) return;
      rec.items.forEach(function (q, k) {
        var a = document.createElement('a');
        a.className = 'cat-lb-hot';
        a.href = q.u;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.setAttribute('aria-label', (en ? 'QR code link ' : '二维码链接 ') + (q.q || k + 1));
        a.style.left = (q.x / nw * 100) + '%';
        a.style.top = (q.y / nh * 100) + '%';
        a.style.width = (q.w / nw * 100) + '%';
        a.style.height = (q.h / nh * 100) + '%';
        lbHots.appendChild(a);
        var l = document.createElement('a');
        l.href = q.u;
        l.target = '_blank';
        l.rel = 'noopener noreferrer';
        l.textContent = (en ? 'QR link ' : '二维码 ') + (q.q || k + 1);
        lbQr.appendChild(l);
      });
    };
    if (lbImg.complete && lbImg.naturalWidth) build();
    else lbImg.onload = build;
  }

  function render() {
    var it = flat[cur];
    lbImg.src = imgBase(it.ref, 'f');
    lbImg.alt = it.label || '';
    lbLabel.textContent = it.label || '';
    lbVr.innerHTML = '';
    renderQr(it);
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
        im.src = imgBase(flat[n].ref, 'f');
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

  /* ---- 触屏滑动翻页（手机端左右滑动切换上一张/下一张）----
   * 阈值 50px 且横向位移明显大于纵向，避免与点击、上下滚动冲突；
   * 起手点若落在二维码热区上同样生效——移动超过浏览器点击判定距离后不会触发误点 */
  var swX = 0, swY = 0;
  lb.addEventListener('touchstart', function (e) {
    if (e.touches.length !== 1) { swX = 0; return; }
    swX = e.touches[0].clientX;
    swY = e.touches[0].clientY;
  }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    if (!swX) return;
    var dx = e.changedTouches[0].clientX - swX;
    var dy = e.changedTouches[0].clientY - swY;
    swX = 0;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      catStep(dx < 0 ? 1 : -1);
    }
  }, { passive: true });

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

  /* ---- 图册图片加载失败自动重试 ----
   * 缩略图默认 WebP：老浏览器不支持时先回退同名 JPG（data-fb），
   * 仍失败再认为是 CDN 瞬断，带时间戳参数重试（1s / 3.5s 两次） */
  document.addEventListener('error', function (e) {
    var img = e.target;
    if (!(img instanceof HTMLImageElement)) return;
    if (!img.closest('.cat-card') && !(img.classList && img.classList.contains('cat-lb-img'))) return;
    /* 1) WebP → JPG 回退 */
    var fb = img.getAttribute('data-fb');
    if (fb) {
      img.removeAttribute('data-fb');
      img.src = fb;
      return;
    }
    /* 2) 网络重试 */
    var n = parseInt(img.getAttribute('data-retry') || '0', 10);
    if (n >= 2) return;
    img.setAttribute('data-retry', String(n + 1));
    setTimeout(function () {
      img.src = (img.getAttribute('src') || '').split('?')[0] + '?r=' + Date.now();
    }, n === 0 ? 1000 : 3500);
  }, true);
  document.addEventListener('load', function (e) {
    var img = e.target;
    if (img instanceof HTMLImageElement && img.hasAttribute('data-retry')) {
      img.removeAttribute('data-retry');
    }
  }, true);

  /* ---- CTA：WhatsApp 预填 ---- */
  var pdfBtn = document.querySelector('.js-wa-pdf');
  if (pdfBtn) {
    var msg = en
      ? 'Hello BOYUE, I would like to get the full materials catalogs (PDF).'
      : '您好，我想索取博粤完整版选材手册（PDF）。';
    pdfBtn.href = 'https://wa.me/8613826418588?text=' + encodeURIComponent(msg);
  }
  var cabBtn = document.querySelector('.js-wa-cab');
  if (cabBtn) {
    var cabMsg = en
      ? 'Hello BOYUE, I would like to enquire about whole-house custom cabinets (design & quotation).'
      : '您好，我想咨询全屋定制柜方案与报价。';
    cabBtn.href = 'https://wa.me/8613826418588?text=' + encodeURIComponent(cabMsg);
  }
})();
