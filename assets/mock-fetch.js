/**
 * 四航三官网 - 本地数据拦截层
 * 拦截 fetch('/api/public/shj/...') 请求，返回 site-data.js 里的本地静态数据，
 * 使页面原有依赖后端 API 的轮播 / tab / 列表 / 分页交互在无后端环境下正常运作。
 */
(function() {
    'use strict';

    var realFetch = window.fetch ? window.fetch.bind(window) : function() {
        return Promise.reject(new Error('no fetch'));
    };

    function parseQuery(url) {
        var q = (String(url).split('?')[1] || '');
        var params = {};
        q.split('&').forEach(function(kv) {
            if (!kv) return;
            var p = kv.split('=');
            if (p[0]) params[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || '');
        });
        return params;
    }

    function jsonResponse(data) {
        return {
            ok: true,
            status: 200,
            json: function() {
                return Promise.resolve(data);
            },
            text: function() {
                return Promise.resolve(JSON.stringify(data));
            }
        };
    }

    function sortArticles(list) {
        return (list || []).slice().sort(function(a, b) {
            if (a.is_top && !b.is_top) return -1;
            if (!a.is_top && b.is_top) return 1;
            return (new Date(b.published_at || b.created_at)) - (new Date(a.published_at || a.created_at));
        });
    }

    window.fetch = function(url, opts) {
        var u = String(url);

        // 栏目数据
        if (u.indexOf('/api/public/shj/categories') === 0) {
            return Promise.resolve(jsonResponse(window.SITE_CATEGORIES || []));
        }

        // 文章数据
        if (u.indexOf('/api/public/shj/articles') === 0) {
            var path = u.replace('/api/public/shj/articles', '');

            // 文章详情 /articles/:id
            var detailMatch = path.match(/^\/(\d+)\s*$/);
            if (detailMatch) {
                var id = Number(detailMatch[1]);
                var art = (window.SITE_ARTICLES || []).filter(function(a) {
                    return a.id === id;
                })[0];
                return Promise.resolve(jsonResponse(art || {}));
            }

            var params = parseQuery(u);
            var list = (window.SITE_ARTICLES || []).slice();

            if (params.category_id) {
                var cid = Number(params.category_id);
                list = list.filter(function(a) {
                    return a.category_id === cid;
                });
            }
            if (params.is_image_news) {
                list = list.filter(function(a) {
                    return a.is_image_news;
                });
            }

            list = sortArticles(list);

            var pageSize = Number(params.page_size) || 100;
            list = list.slice(0, pageSize);

            // 页面脚本对列表返回值统一按 (res.data || res) 处理，这里用 data 包装
            return Promise.resolve(jsonResponse({
                data: list
            }));
        }

        // 其余请求走原生 fetch（例如外部链接等，无本地数据时自然失败）
        return realFetch(url, opts);
    };
})();