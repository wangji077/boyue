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
  /* 图片资源版本号：换图或修图后改这里，URL 变化即绕过浏览器与 CDN 旧缓存 */
  var CAT_VER = 'v=3';
  var withVer = function (u) { return u + (u.indexOf('?') < 0 ? '?' : '&') + CAT_VER; };
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

  /* ---- 图片按需加载（自定义懒加载）----
   * 原生 loading="lazy" 在超长图册页里会成批放行请求（实测首屏可发出 600+ 个请求，
   * 源站每张 ~0.5s、并发 6，队列要跑几十秒）。这里改成：
   *   1) 只给视口上下 400px 内的卡片真正赋 src，滚动到哪加载到哪；
   *   2) 离屏超过 1600px 的图清空 src 释放解码内存，滚回来自动重新加载；
   *   3) 两个阈值留出滞后区间，避免来回滚动时反复加载卸载。 */
  var catLazy = (function () {
    if (!('IntersectionObserver' in window)) {
      return function (img) {
        var s = img.getAttribute('data-src');
        if (s) img.src = s;
      };
    }
    var loadObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var img = en.target;
        loadObs.unobserve(img);
        var s = img.getAttribute('data-src');
        if (s && !img.getAttribute('src')) img.src = s;
      });
    }, { rootMargin: '400px 0px' });

    var freeObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var img = en.target;
        if (en.isIntersecting) return;
        var s = img.getAttribute('src');
        if (!s) return;
        img.setAttribute('data-src', s);
        img.removeAttribute('src');   /* 释放已解码位图，降低内存占用 */
        img.removeAttribute('data-fb');
        loadObs.observe(img);         /* 滚回视口时重新加载 */
      });
    }, { rootMargin: '1600px 0px' });

    return function (img) {
      loadObs.observe(img);
      freeObs.observe(img);
    };
  })();

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
        var thumbJpg = withVer(imgBase(ref, 't'));
        var thumbWebp = withVer(imgBase(ref, 't').replace(/\.jpg$/, '.webp'));
        /* src 由 catLazy 在进入视口时按需赋值，这里只放 data-src */
        card.innerHTML =
          '<span class="cat-thumb-wrap">' +
            '<img data-src="' + thumbWebp + '" data-fb="' + thumbJpg + '" alt="" width="480" height="' + thumbH + '" decoding="async">' +
            (vr.length ? '<span class="cat-vr-badge">3D ×' + vr.length + '</span>' : '') +
          '</span>' +
          '<span class="cat-plabel">' + label + '</span>';
        card.addEventListener('click', function () { catOpen(idx); });
        var thumbEl = card.querySelector('img');
        if (thumbEl) catLazy(thumbEl);
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
  var lbStage = lb.querySelector('.cat-lb-stage');
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
    if (lbStage) zReset();
    lbImg.src = withVer(imgBase(it.ref, 'f'));
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
        im.src = withVer(imgBase(flat[n].ref, 'f'));
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
    if (lbStage) zReset();
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

  /* ---- 自由缩放查看细节 ----
   * 桌面：滚轮缩放（以光标为中心）+ 按住拖动平移 + 双击放大/复位；
   * 手机：双指捏合缩放 + 拖动平移 + 双击放大/复位；
   * 缩放时翻页手势关闭，图片不能拖出原框（平移范围钳制）。 */
  var zS = 1, zTx = 0, zTy = 0;
  var zPointers = {};
  var zPinchD = 0, zPinchMid = null;
  var zTapT = 0, zTapX = 0, zTapY = 0;
  function zApply() {
    var w = lbStage.offsetWidth, h = lbStage.offsetHeight;
    zTx = Math.min(0, Math.max(w * (1 - zS), zTx));
    zTy = Math.min(0, Math.max(h * (1 - zS), zTy));
    lbStage.style.transform = 'translate(' + zTx + 'px,' + zTy + 'px) scale(' + zS + ')';
    if (zS > 1.01) lbStage.classList.add('is-zoomed');
    else lbStage.classList.remove('is-zoomed', 'is-panning');
  }
  function zReset() { zS = 1; zTx = 0; zTy = 0; zApply(); }
  function zAt(px, py, ns) {
    ns = Math.max(1, Math.min(6, ns));
    zTx = px - (px - zTx) * ns / zS;
    zTy = py - (py - zTy) * ns / zS;
    zS = ns;
    if (zS === 1) { zTx = 0; zTy = 0; }
    zApply();
  }
  /* 指针位置 → 舞台布局坐标（getBoundingClientRect 已含当前位移，需补回 zTx/zTy） */
  function zPt(clientX, clientY) {
    var r = lbStage.getBoundingClientRect();
    return { x: clientX - r.left + zTx, y: clientY - r.top + zTy };
  }
  if (lbStage) {
    lbStage.addEventListener('wheel', function (e) {
      e.preventDefault();
      var p = zPt(e.clientX, e.clientY);
      zAt(p.x, p.y, zS * (e.deltaY < 0 ? 1.3 : 1 / 1.3));
    }, { passive: false });
    lbStage.addEventListener('pointerdown', function (e) {
      /* 二维码热区走原生点击，不参与缩放拖拽 */
      if (e.target.closest && e.target.closest('.cat-lb-hot')) return;
      zPointers[e.pointerId] = { x: e.clientX, y: e.clientY, lx: e.clientX, ly: e.clientY, sx: e.clientX, sy: e.clientY, t: Date.now() };
      try { lbStage.setPointerCapture(e.pointerId); } catch (err) {}
      if (zS > 1) lbStage.classList.add('is-panning');
      e.preventDefault();
    });
    lbStage.addEventListener('pointermove', function (e) {
      var pd = zPointers[e.pointerId];
      if (!pd) return;
      pd.x = e.clientX; pd.y = e.clientY; pd.lx = e.clientX; pd.ly = e.clientY;
      var ids = Object.keys(zPointers);
      if (ids.length === 1 && zS > 1) {
        /* 单指/鼠标拖动平移 */
        zTx += e.clientX - pd.lx;
        zTy += e.clientY - pd.ly;
        zApply();
      } else if (ids.length === 2) {
        /* 双指捏合缩放 + 中点移动平移 */
        var pts = ids.map(function (k) { return zPointers[k]; });
        var d = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        var mx = (pts[0].x + pts[1].x) / 2, my = (pts[0].y + pts[1].y) / 2;
        if (zPinchD > 0) {
          var p = zPt(mx, my);
          zAt(p.x, p.y, zS * d / zPinchD);
          zTx += mx - zPinchMid.x;
          zTy += my - zPinchMid.y;
          zApply();
        }
        zPinchD = d;
        zPinchMid = { x: mx, y: my };
      }
    });
    function zUp(e) {
      var pd = zPointers[e.pointerId];
      delete zPointers[e.pointerId];
      if (Object.keys(zPointers).length < 2) { zPinchD = 0; zPinchMid = null; }
      lbStage.classList.remove('is-panning');
      if (!pd || lb.hidden) return;
      /* 双击（双触）放大 / 复位 */
      var moved = Math.hypot(e.clientX - pd.sx, e.clientY - pd.sy);
      if (moved < 12 && Date.now() - pd.t < 350 && Object.keys(zPointers).length === 0) {
        var now = Date.now();
        if (now - zTapT < 350 && Math.hypot(e.clientX - zTapX, e.clientY - zTapY) < 48) {
          if (zS > 1) zReset();
          else { var p = zPt(e.clientX, e.clientY); zAt(p.x, p.y, 2.5); }
          zTapT = 0;
        } else { zTapT = now; zTapX = e.clientX; zTapY = e.clientY; }
      }
    }
    lbStage.addEventListener('pointerup', zUp);
    lbStage.addEventListener('pointercancel', zUp);
    /* 右下角缩放控制按钮 */
    var zIn = lb.querySelector('.cat-lb-zin');
    var zOut = lb.querySelector('.cat-lb-zout');
    var zRst = lb.querySelector('.cat-lb-zreset');
    if (zIn) zIn.addEventListener('click', function () { zAt(lbStage.offsetWidth / 2, lbStage.offsetHeight / 2, zS * 1.4); });
    if (zOut) zOut.addEventListener('click', function () { zAt(lbStage.offsetWidth / 2, lbStage.offsetHeight / 2, zS / 1.4); });
    if (zRst) zRst.addEventListener('click', zReset);
  }

  /* ---- 触屏滑动翻页（手机端左右滑动切换上一张/下一张）----
   * 阈值 50px 且横向位移明显大于纵向，避免与点击、上下滚动冲突；
   * 放大状态下（zS>1）滑动用于平移图片，不翻页 */
  var swX = 0, swY = 0;
  lb.addEventListener('touchstart', function (e) {
    if (e.touches.length !== 1 || zS > 1) { swX = 0; return; }
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
    /* 2) 网络重试：保留版本参数，仅追加 r 时间戳 */
    var n = parseInt(img.getAttribute('data-retry') || '0', 10);
    if (n >= 2) return;
    img.setAttribute('data-retry', String(n + 1));
    setTimeout(function () {
      var u = img.getAttribute('src') || img.getAttribute('data-src') || '';
      var q = u.indexOf('?') >= 0 ? u.slice(u.indexOf('?') + 1) : '';
      var keep = q.split('&').filter(function (k) { return k && k.indexOf('r=') !== 0; });
      keep.push('r=' + Date.now());
      img.src = u.split('?')[0] + '?' + keep.join('&');
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
