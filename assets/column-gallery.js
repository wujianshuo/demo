/**
 * 栏目图集 / 列表渲染助手
 * 容器页在栏目存在直属文章时调用，卡片内容全部来自 assets/site-data.js。
 * 需在容器页内联脚本之前加载，故与 assets/app.js 分开。
 */
(function() {
    'use strict';

    var STYLE_ID = 'column-gallery-style';
    var CSS = [
        '.col-gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; }',
        '.col-card { display: block; background: var(--white, #fff); border: 1px solid var(--border, #e0e0e0); border-radius: 0; overflow: hidden; color: inherit; text-decoration: none; transition: box-shadow .2s, transform .2s; }',
        '.col-card:hover { box-shadow: 0 6px 18px rgba(0,0,0,.12); transform: translateY(-2px); }',
        '.col-card img { display: block; width: 100%; height: 210px; object-fit: cover; background: var(--placeholder, #f2f5fa); }',
        '.col-card .col-noimg { display: block; height: 210px; background: var(--placeholder, #f2f5fa); }',
        '.col-card .col-title { display: block; padding: 10px 12px 4px; font-size: 15px; line-height: 1.6; }',
        '.col-card .col-date { display: block; padding: 0 12px 12px; font-size: 13px; color: var(--text-muted, #999); }',
        '@media (max-width: 640px) { .col-gallery { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); } }'
    ].join('\n');

    function ensureStyle() {
        if (document.getElementById(STYLE_ID)) return;
        var s = document.createElement('style');
        s.id = STYLE_ID;
        s.textContent = CSS;
        document.head.appendChild(s);
    }

    function text(v) {
        return String(v == null ? '' : v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    window.columnGalleryHtml = function(list, cat) {
        ensureStyle();
        var slug = cat && cat.slug ? text(cat.slug) : '';
        var html = '<div class="col-gallery" data-cat-slug="' + slug + '">';
        list.forEach(function(a) {
            var href = 'article.html?aid=' + encodeURIComponent(a.hash_id);
            html += '<a class="col-card" href="' + href + '">' +
                (a.cover_image ? '<img src="' + a.cover_image + '" alt="' + text(a.title) + '">' : '<span class="col-noimg"></span>') +
                '<span class="col-title">' + text(a.title) + '</span>' +
                (a.published_at ? '<span class="col-date">' + text(String(a.published_at).substring(0, 10)) + '</span>' : '') +
                '</a>';
        });
        return html + '</div>';
    };

    window.columnOwnArticles = function(catId) {
        return (window.SITE_ARTICLES || []).filter(function(a) {
            return a.category_id === catId;
        });
    };
})();
