/**
 * 四航三官网 - 公共交互脚本
 * 移动端菜单 / 返回顶部 / 锚点平滑滚动 / 图片懒加载 / 数据控件 no-op 兜底
 */
(function() {
  'use strict';

  // 移动端菜单
  var toggle = document.querySelector('.mobile-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('open');
      toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
    });
  }

  // 返回顶部
  var backBtn = document.querySelector('.back-top');
  if (backBtn) {
    window.addEventListener('scroll', function() {
      backBtn.classList.toggle('show', window.scrollY > 400);
    });
    backBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 锚点平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 图片懒加载
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });
    document.querySelectorAll('img[data-src]').forEach(function(img) { observer.observe(img); });
  }

  // 依赖后端 API 的数据控件 no-op 兜底：
  // 这些函数本应由各页内联脚本在 fetch 成功后定义；离线静态环境下 fetch 失败，
  // 此处提供空实现，避免残留的 onclick 调用报 "xxx is not defined"。
  // 未来接入后端后，真实实现会覆盖它们。
  window.BIZ_SLIDE = window.BIZ_SLIDE || function() {};
  window.BIZ_PAGE = window.BIZ_PAGE || function() {};
  window._newsPage = window._newsPage || function() {};
  window._newsGo = window._newsGo || function() {};
  window._ppPage = window._ppPage || function() {};
  window._ppGo = window._ppGo || function() {};
  window._hrSwitch = window._hrSwitch || function() {};
  window.showMoreLinks = window.showMoreLinks || function() {};
})();
