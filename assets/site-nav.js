/**
 * 四航三官网 - 公共主导航
 * 读取 assets/site-data.js 的栏目数据，生成一级导航与二级下拉，
 * 替代各页面重复硬编码的 <ul class="nav" id="main-nav"> 内容。
 * 页面保留空占位 <ul class="nav" id="main-nav"></ul> 并引入本脚本即可。
 */
(function () {
    'use strict';

    var PLACEHOLDER_ID = 'main-nav';

    function allCats() {
        return (window.SITE_CATEGORIES || []).filter(function (c) {
            return c && c.slug;
        });
    }

    function findById(list, id) {
        return list.filter(function (c) {
            return c.id === id;
        })[0] || null;
    }

    function findBySlug(list, slug) {
        return list.filter(function (c) {
            return c.slug === slug;
        })[0] || null;
    }

    function bySort(a, b) {
        return (a.sort_order || 0) - (b.sort_order || 0);
    }

    function decodeSafe(name) {
        try {
            return decodeURIComponent(name);
        } catch (e) {
            return name;
        }
    }

    function fileName(url) {
        return String(url || '').split('#')[0].split('?')[0].split('/').pop();
    }

    function currentPageName() {
        return decodeSafe(window.location.pathname.split('/').pop() || '');
    }

    function currentCatSlug() {
        return new URLSearchParams(window.location.search).get('cat') || '';
    }

    // 当前 ?cat= 栏目向上归并到根栏目（三级栏目同样归到一级），父级缺失时返回 null
    function rootFromSlug(list, slug) {
        var cat = findBySlug(list, slug);
        var guard = 0;
        while (cat && cat.parent_id) {
            cat = findById(list, cat.parent_id);
            guard += 1;
            if (!cat || guard > 10) return null;
        }
        return cat || null;
    }

    function hrefOf(cat) {
        if (cat.nav_type === 'LINK' && cat.link_url) return cat.link_url;
        return cat.page_url || '';
    }

    function childLinkHref(root, kid) {
        var link = hrefOf(kid);
        if (link) return link;
        return './' + fileName(root.page_url) + '?cat=' + encodeURIComponent(kid.slug);
    }

    function buildRootItem(root, list, activeRootId) {
        var li = document.createElement('li');
        if (root.id === activeRootId) li.className = 'active';

        var a = document.createElement('a');
        a.href = hrefOf(root) || '#';
        a.textContent = root.name;
        li.appendChild(a);

        var kids = list.filter(function (c) {
            return c.is_nav && c.parent_id === root.id;
        }).sort(bySort);

        if (kids.length) {
            var ul = document.createElement('ul');
            ul.className = 'dropdown';
            kids.forEach(function (kid) {
                var kli = document.createElement('li');
                var ka = document.createElement('a');
                ka.href = childLinkHref(root, kid);
                ka.textContent = kid.name;
                kli.appendChild(ka);
                ul.appendChild(kli);
            });
            li.appendChild(ul);
        }
        return li;
    }

    function resolveActiveRoot(roots, list, page, slug) {
        var byCat = rootFromSlug(list, slug);
        if (byCat && fileName(byCat.page_url) === page) return byCat;
        return roots.filter(function (root) {
            return fileName(root.page_url) === page;
        })[0] || null;
    }

    function render() {
        var nav = document.getElementById(PLACEHOLDER_ID);
        if (!nav) return;
        var list = allCats();
        if (!list.length) return;
        var roots = list.filter(function (c) {
            return c.is_nav && !c.parent_id;
        }).sort(bySort);
        if (!roots.length) return;

        var active = resolveActiveRoot(roots, list, currentPageName(), currentCatSlug());
        var frag = document.createDocumentFragment();
        roots.forEach(function (root) {
            frag.appendChild(buildRootItem(root, list, active ? active.id : 0));
        });
        nav.textContent = '';
        nav.appendChild(frag);
    }

    window.renderSiteNav = render;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', render);
    } else {
        render();
    }
})();
