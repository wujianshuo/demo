/**
 * 四航三官网 - 公共侧边栏
 * 读取 assets/site-data.js 的栏目数据，统一生成各容器页左侧栏目导航，
 * 替代各页面重复内联的侧边栏渲染代码。
 * 规则：
 *  - 标题为当前根栏目名，下面列出根栏目的二级栏目；
 *  - 二级栏目自身没有直属文章、且下设三级栏目时，三级缩进展开（同官网「科技创新」）；
 *  - 根栏目只有一个二级栏目时，改用正文小标题生成本页锚点导航；
 *  - nav_type 为 LINK 的栏目直接指向外链。
 * 页面保留空占位 <aside class="page-side" id="page-side"></aside> 并引入本脚本即可。
 */
(function () {
    'use strict';

    var SIDE_SELECTOR = '.page-side, .news-sidebar, .party-sidebar, .hr-side, .detail-side';
    var ANCHOR_CLASS = 'sub-title';
    var ANCHOR_PREFIX = 'side-anchor-';

    function catList() {
        return (window.SITE_CATEGORIES || []).filter(function (c) {
            return c && c.slug;
        });
    }

    function findCat(list, id) {
        return list.filter(function (c) {
            return c.id === id;
        })[0] || null;
    }

    function bySort(a, b) {
        return (a.sort_order || 0) - (b.sort_order || 0);
    }

    function childrenOf(list, id) {
        return list.filter(function (c) {
            return c.parent_id === id;
        }).sort(bySort);
    }

    function decodeSafe(name) {
        try {
            return decodeURIComponent(name);
        } catch (e) {
            return name;
        }
    }

    function currentPageFile() {
        return decodeSafe(window.location.pathname.split('/').pop() || '');
    }

    function currentSlug() {
        return new URLSearchParams(window.location.search).get('cat') || '';
    }

    function selfToRoot(list, cat) {
        var chain = [];
        var node = cat;
        var guard = 0;
        while (node && guard++ < 20) {
            chain.push(node.id);
            node = node.parent_id ? findCat(list, node.parent_id) : null;
        }
        return chain;
    }

    function rootOf(list, cat) {
        var node = cat;
        var guard = 0;
        while (node && node.parent_id && guard++ < 20) {
            node = findCat(list, node.parent_id);
        }
        return node || null;
    }

    function fileName(url) {
        return String(url || '').split('#')[0].split('?')[0].split('/').pop();
    }

    function articleCount(catId) {
        return (window.SITE_ARTICLES || []).filter(function (a) {
            return a.category_id === catId;
        }).length;
    }

    function hrefOf(list, cat) {
        if (cat.nav_type === 'LINK' && cat.link_url) return cat.link_url;
        if (cat.page_url) return cat.page_url;
        return './' + currentPageFile() + '?cat=' + encodeURIComponent(cat.slug);
    }

    function esc(value) {
        return String(value == null ? '' : value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function link(cls, href, label) {
        return '<a' + (cls ? ' class="' + cls + '"' : '') + ' href="' + esc(href) + '">' + esc(label) + '</a>';
    }

    // 正文小标题 -> 本页锚点，供只有一个子栏目的容器页使用
    function anchorItems(cat) {
        var out = [];
        var nodes = Array.prototype.slice.call(document.querySelectorAll('.page-content .' + ANCHOR_CLASS + ', .detail-main .' + ANCHOR_CLASS + ', .content-body .' + ANCHOR_CLASS));
        if (nodes.length) {
            nodes.forEach(function (n, i) {
                if (!n.id) n.id = ANCHOR_PREFIX + (i + 1);
                var label = (n.textContent || '').replace(/\s+/g, ' ').trim();
                if (label) out.push({ id: n.id, name: label });
            });
            return out;
        }
        var html = (cat && cat.content) || '';
        var re = new RegExp('<p[^>]*class="' + ANCHOR_CLASS + '"[^>]*>([\\s\\S]*?)<\\/p>', 'g');
        var m;
        var i = 0;
        while ((m = re.exec(html)) && i < 20) {
            i += 1;
            var name = m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
            if (name) out.push({ id: ANCHOR_PREFIX + i, name: name });
        }
        return out;
    }

    function buildHtml(list, root, current) {
        var tops = childrenOf(list, root.id);
        var chain = current ? selfToRoot(list, current) : [];
        var html = '<h4>' + esc(root.name) + '</h4>';

        if (tops.length <= 1) {
            var anchors = anchorItems(current || tops[0] || root);
            if (anchors.length > 1) {
                anchors.forEach(function (a, i) {
                    html += link(i === 0 ? 'active' : '', '#' + a.id, a.name);
                });
                return html;
            }
        }

        tops.forEach(function (top) {
            var kids = childrenOf(list, top.id);
            var onPath = chain.indexOf(top.id) >= 0;
            if (kids.length && !articleCount(top.id)) {
                html += link('side-group' + (onPath ? ' side-group-on' : ''), hrefOf(list, top), top.name);
                kids.forEach(function (k) {
                    html += link('side-sub' + (current && k.id === current.id ? ' active' : ''), hrefOf(list, k), k.name);
                });
            } else {
                html += link(onPath ? 'active' : '', hrefOf(list, top), top.name);
            }
        });
        return html;
    }

    function resolve(list) {
        var slug = currentSlug();
        var current = slug ? list.filter(function (c) {
            return c.slug === slug;
        })[0] : null;
        var root = current ? rootOf(list, current) : null;
        if (!root) {
            var page = currentPageFile();
            root = list.filter(function (c) {
                return c.is_nav && !c.parent_id && fileName(c.page_url) === page;
            })[0] || null;
        }
        if (!root) return null;
        if (!current) current = childrenOf(list, root.id)[0] || root;
        return { root: root, current: current };
    }

    // 小标题锚点：优先平滑滚动，环境不支持平滑滚动时即时定位（留出顶部固定导航高度）
    function jumpTo(target) {
        var offset = 96;
        var top = function () {
            return target.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || 0) - offset;
        };
        try {
            window.scrollTo({ top: top(), behavior: 'smooth' });
        } catch (e) {
            window.scrollTo(0, top());
            return;
        }
        window.setTimeout(function () {
            if (Math.abs(target.getBoundingClientRect().top - offset) > 4) window.scrollTo(0, top());
        }, 220);
    }

    function bindAnchors(el) {
        Array.prototype.forEach.call(el.querySelectorAll('a[href^="#"]'), function (a) {
            a.addEventListener('click', function (e) {
                var target = document.getElementById(a.getAttribute('href').slice(1));
                if (!target) return;
                e.preventDefault();
                jumpTo(target);
                Array.prototype.forEach.call(el.querySelectorAll('a'), function (x) { x.classList.remove('active'); });
                a.classList.add('active');
            });
        });
    }

    function render(el, list, currentCat) {
        if (!el) return;
        list = (list && list.length) ? list : catList();
        if (!list.length) return;
        var root = null;
        if (currentCat) {
            root = rootOf(list, currentCat);
        } else {
            var r = resolve(list);
            if (!r) return;
            currentCat = r.current;
            root = r.root;
        }
        if (!root) return;
        el.innerHTML = buildHtml(list, root, currentCat);
        bindAnchors(el);
    }

    window.renderSiteSidebar = render;

    function autoRender() {
        render(document.querySelector(SIDE_SELECTOR));
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', autoRender);
    } else {
        autoRender();
    }
})();
