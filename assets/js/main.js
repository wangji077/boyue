/* ==========================================================================
   博粤美装智造 — 交互脚本
   原则：原生 JS、无依赖、渐进增强
   ========================================================================== */
(function () {
  'use strict';

  /* ---------------------- 1. 导航：滚动变色 + 移动端抽屉 ---------------------- */
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var drawer = document.querySelector('.drawer');

  if (header) {
    var hasHero = !!document.querySelector('.hero, .page-hero:not(.page-hero--plain)');
    var onScroll = function () {
      var solid = !hasHero || window.scrollY > 80;
      header.classList.toggle('is-solid', solid);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  var closeMenu = function () {
    document.body.classList.remove('menu-open');
    document.body.style.overflow = '';
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  };

  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  if (drawer) {
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* ---------------------- 2. 滚动入场动画（可重复调用） ---------------------- */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var io = ('IntersectionObserver' in window && !reduceMotion)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' })
    : null;

  // 供 JS 注入内容后重新挂载观察
  window.observeReveals = function () {
    document.querySelectorAll('.reveal:not(.is-in)').forEach(function (el) {
      if (io) { io.observe(el); }
      else { el.classList.add('is-in'); }
    });
  };
  window.observeReveals();

  /* ---------------------- 2.5 首屏轮播 ---------------------- */
  var slides = document.querySelectorAll('.hero-media .slide');
  if (slides.length > 1) {
    if (reduceMotion) {
      // 减少动效：只显示第一张
      slides.forEach(function (s, i) { s.classList.toggle('is-on', i === 0); });
    } else {
      var dots = document.querySelectorAll('.hero-dots button');
      var cur = 0;
      var timer = null;

      var show = function (i) {
        slides[cur].classList.remove('is-on');
        if (dots[cur]) dots[cur].classList.remove('is-on');
        cur = i % slides.length;
        slides[cur].classList.add('is-on');
        if (dots[cur]) dots[cur].classList.add('is-on');
      };
      var play = function () {
        timer = setInterval(function () { show(cur + 1); }, 2000);
      };

      dots.forEach(function (b, i) {
        b.addEventListener('click', function () {
          clearInterval(timer);
          show(i);
          play();
        });
      });
      play();
    }
  }

  /* ---------------------- 3. 数字滚动 ---------------------- */
  var statNums = document.querySelectorAll('.stats .num[data-num]');
  if (statNums.length > 0 && io) {
    var numIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseFloat(el.dataset.num);
        var dur = 1400;
        var start = null;
        var tick = function (ts) {
          if (start === null) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.firstChild.nodeValue = Math.round(target * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        numIO.unobserve(el);
      });
    }, { threshold: 0.6 });
    statNums.forEach(function (el) { numIO.observe(el); });
  }

  /* ---------------------- 4. 作品筛选（通过重渲染实现） ---------------------- */
  var filterBar = document.querySelector('.filters');
  if (filterBar) {
    var gridId = filterBar.dataset.grid;
    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-filter]');
      if (!btn) return;
      filterBar.querySelectorAll('button').forEach(function (b) {
        b.classList.toggle('is-active', b === btn);
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      var cat = btn.dataset.filter;
      renderCards(gridId, cat === 'all' ? null : cat);
    });
  }

  /* ---------------------- 5. 询单表单：校验后跳转 WhatsApp 发送 ---------------------- */
  var form = document.querySelector('#inquiry-form');
  if (form) {
    var statusEl = form.querySelector('.form-status');
    var isEn = (document.documentElement.lang || '').indexOf('en') === 0;

    var setError = function (field, msg) {
      var wrap = field.closest('.field');
      if (!wrap) return;
      wrap.classList.toggle('has-error', !!msg);
      var errEl = wrap.querySelector('.err');
      if (errEl) errEl.textContent = msg || '';
      field.setAttribute('aria-invalid', msg ? 'true' : 'false');
    };

    var validate = function (field) {
      var v = (field.value || '').trim();
      var name = field.getAttribute('name');
      if (field.hasAttribute('required') && v === '') {
        setError(field, isEn ? 'Please fill in this field' : '这一项还没填');
        return false;
      }
      if (name === 'phone' && v !== '' && !/^\+?\d{7,15}$/.test(v.replace(/[\s-]/g, ''))) {
        setError(field, isEn ? 'Please enter a valid phone / WhatsApp number' : '请填写有效的电话 / WhatsApp 号码');
        return false;
      }
      setError(field, '');
      return true;
    };

    form.querySelectorAll('input, textarea, select').forEach(function (field) {
      field.addEventListener('blur', function () { validate(field); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var fields = Array.prototype.slice.call(
        form.querySelectorAll('input[required], textarea[required], input[name="phone"]')
      );
      if (!fields.every(function (f) { return validate(f); })) {
        var firstErr = form.querySelector('.has-error input, .has-error textarea');
        if (firstErr) firstErr.focus();
        return;
      }

      var val = function (n) {
        var el = form.querySelector('[name="' + n + '"]');
        return el ? (el.value || '').trim() : '';
      };
      var lines = [
        isEn ? 'New Enquiry · BOYUE website' : '网站新询单 · 博粤美装智造',
        (isEn ? 'Name: ' : '姓名：') + val('name'),
        (isEn ? 'Phone: ' : '電話：') + val('phone')
      ];
      if (val('email'))    lines.push((isEn ? 'Email: '     : '信箱：') + val('email'));
      if (val('houseage')) lines.push((isEn ? 'House Age: ' : '屋齡：') + val('houseage'));
      if (val('location')) lines.push((isEn ? 'Location: '  : '地區：') + val('location'));
      if (val('budget'))   lines.push((isEn ? 'Budget: '    : '預算：') + val('budget'));
      if (val('type'))     lines.push((isEn ? 'Type: '      : '類型：') + val('type'));
      if (val('message'))  lines.push((isEn ? 'Message: '   : '詢問：') + val('message'));

      var wa = (window.SITE && window.SITE.whatsapp) || 'https://wa.me/8613826418588';
      window.open(wa + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');

      if (statusEl) {
        statusEl.textContent = isEn
          ? 'WhatsApp opened — press send there and we will get back to you shortly.'
          : '已为你打开 WhatsApp，点发送即可提交，我们会尽快回复。';
      }
      form.reset();
    });
  }

  /* ---------------------- 5.5 语言切换：携带当前查询参数 ---------------------- */
  document.querySelectorAll('[data-lang-href]').forEach(function (a) {
    a.href = a.dataset.langHref + location.search;
  });

  /* ---------------------- 6. 全站配置（config.js）注入 ---------------------- */
  if (window.SITE) {
    // Facebook：填了链接才显示入口
    var fbLinks = document.querySelectorAll('.fb-link, .fb-block');
    if (window.SITE.facebook) {
      document.querySelectorAll('.fb-link').forEach(function (a) {
        a.href = window.SITE.facebook;
      });
      // 联系页的 FB 主页内嵌插件（官方 Page Plugin，无需申请应用 ID）
      var frame = document.getElementById('fb-page-plugin');
      if (frame) {
        frame.src = 'https://www.facebook.com/plugins/page.php?href=' +
          encodeURIComponent(window.SITE.facebook) +
          '&tabs=timeline&width=500&height=620&small_header=false' +
          '&adapt_container_width=true&hide_cover=false&show_facepile=true&locale=zh_CN';
      }
    } else {
      // 未配置：隐藏入口，避免死链
      fbLinks.forEach(function (el) { el.style.display = 'none'; });
      var fbTip = document.getElementById('fb-pending-tip');
      if (fbTip) fbTip.style.display = 'flex';
    }

    // WhatsApp / 邮箱统一注入
    document.querySelectorAll('.js-wa').forEach(function (a) { a.href = window.SITE.whatsapp; });
    document.querySelectorAll('.js-email').forEach(function (a) {
      a.href = 'mailto:' + window.SITE.email;
      if (a.querySelector('svg')) {
        // 图标式链接：保留图标，只注入地址与提示
        a.setAttribute('aria-label', 'Email');
        a.setAttribute('title', window.SITE.email);
      } else {
        a.textContent = a.dataset.text || window.SITE.email;
      }
    });
  }

  /* ---------------------- 7. 页脚年份 ---------------------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
