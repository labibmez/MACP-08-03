/*
var input = document.querySelector('input');

input.addEventListener('input', function()
{
    console.log('input changed to: ', input.value);
});
*/
/*
document.addEventListener("DOMContentLoaded", function (event) {
    var _selector = document.querySelector('input[name=modaltest]');
    _selector.addEventListener('change', function (event) {
        if (_selector.checked) {
           alert('checked'); // do something if checked
        } else {  alert('not checked');
            // do something else otherwise
        }
    });
});*/
/*
$("input[name='modaltest'").click(function() {
if($(this).is(':checked'))
    {
       
        alert('check');
        // Checkbox is checked.
    }
    else
    {
        
        alert('not check');
        // Checkbox is not checked.
    }    
});
*/
/*
$('input[name=modaltest]').change(function(){

    if($(this).is(':checked'))
    {
       
        alert('check');
        // Checkbox is checked.
    }
    else
    {
        
        alert('not check');
        // Checkbox is not checked.
    }    

});*/
var inputChecked = "";
function closeModalLogin()
{

 myApp.closeModal( ".modal.modal-in" );
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.ucfirst = function() {
    return this.charAt(0).toUpperCase() + this.substr(1);
}

function affect(val, id) {


    inputChecked = val;
    var isChecked = false;


}

! function() {
    "use strict";
    window.Framework7 = function(a) {
        function t(e) {
            var a = e.replace(/^./, function(e) {
                return e.toUpperCase()
            });
            i["onPage" + a] = function(a, t) {
                return i.onPage(e, a, t)
            }
        }

        function n() {
            var e, a = s(this),
                t = a[0].scrollTop,
                n = a[0].scrollHeight,
                r = a[0].offsetHeight,
                i = a[0].getAttribute("data-distance"),
                o = a.find(".virtual-list"),
                l = a.hasClass("infinite-scroll-top");
            if (i || (i = 50), "string" == typeof i && i.indexOf("%") >= 0 && (i = parseInt(i, 10) / 100 * r), i > r && (i = r), l) i > t && a.trigger("infinite");
            else if (t + r >= n - i) {
                if (o.length > 0 && (e = o[0].f7VirtualList, e && !e.reachEnd)) return;
                a.trigger("infinite")
            }
        }

        function r() {
            i.device.ipad && (document.body.scrollLeft = 0, setTimeout(function() {
                document.body.scrollLeft = 0
            }, 0))
        }
        var i = this;
        i.version = "1.0.0", i.params = {
            cache: !0,
            cacheIgnore: [],
            cacheIgnoreGetParameters: !1,
            cacheDuration: 6e5,
            preloadPreviousPage: !0,
            uniqueHistory: !1,
            uniqueHistoryIgnoreGetParameters: !1,
            dynamicPageUrl: "content-{{index}}",
            allowDuplicateUrls: !1,
            router: !0,
            pushState: !1,
            pushStateRoot: void 0,
            pushStateNoAnimation: !1,
            pushStateSeparator: "#!/",
            fastClicks: !0,
            fastClicksDistanceThreshold: 0,
            fastClicksDelayBetweenClicks: 50,
            activeState: !0,
            activeStateElements: "a, button, label, span",
            animateNavBackIcon: !1,
            swipeBackPage: !0,
            swipeBackPageThreshold: 0,
            swipeBackPageActiveArea: 30,
            swipeBackPageAnimateShadow: !0,
            swipeBackPageAnimateOpacity: !0,
            ajaxLinks: void 0,
            externalLinks: ".external",
            sortable: !0,
            hideNavbarOnPageScroll: !1,
            hideToolbarOnPageScroll: !1,
            hideTabbarOnPageScroll: !1,
            showBarsOnPageScrollEnd: !0,
            swipeout: !0,
            swipeoutActionsNoFold: !1,
            swipeoutNoFollow: !1,
            smartSelectBackTemplate: '<div class="left sliding"><a href="#"  style="color: #FFFFFF"   class="back link"><i class="icon icon-back"></i><span>{{backText}}</span></a></div>',
            smartSelectBackText: "Back",
            smartSelectInPopup: !1,
            smartSelectPopupCloseTemplate: '<div class="left"><a href="#"  style="color: #FFFFFF"   class="link close-popup"><i class="icon icon-back"></i><span>{{closeText}}</span></a></div>',
            smartSelectPopupCloseText: "Close",
            smartSelectSearchbar: !1,
            smartSelectBackOnSelect: !1,
            searchbarHideDividers: !0,
            searchbarHideGroups: !0,
            scrollTopOnNavbarClick: !1,
            scrollTopOnStatusbarClick: !1,
            swipePanel: !1,
            swipePanelActiveArea: 0,
            swipePanelCloseOpposite: !0,
            swipePanelOnlyClose: !1,
            swipePanelNoFollow: !1,
            swipePanelThreshold: 0,
            panelsCloseByOutside: !0,
            modalButtonOk: "OK",
            modalButtonCancel: "Cancel",
            modalUsernamePlaceholder: "Username",
            modalPasswordPlaceholder: "Password",
            modalTitle: "Framework7",
            modalCloseByOutside: !1,
            actionsCloseByOutside: !0,
            popupCloseByOutside: !0,
            modalPreloaderTitle: "Loading... ",
            modalStack: !0,
            imagesLazyLoadThreshold: 0,
            imagesLazyLoadSequential: !0,
            viewClass: "view",
            viewMainClass: "view-main",
            viewsClass: "views",
            notificationCloseOnClick: !1,
            notificationCloseIcon: !0,
            animatePages: !0,
            templates: {},
            template7Data: {},
            template7Pages: !1,
            precompileTemplates: !1,
            init: !0
        };
        for (var o in a) i.params[o] = a[o];
        var s = e,
            l = Template7;
        i._compiledTemplates = {}, i.touchEvents = {
            start: i.support.touch ? "touchstart" : "mousedown",
            move: i.support.touch ? "touchmove" : "mousemove",
            end: i.support.touch ? "touchend" : "mouseup"
        }, i.ls = localStorage, i.rtl = "rtl" === s("body").css("direction"), i.rtl && s("html").attr("dir", "rtl"), "undefined" != typeof i.params.statusbarOverlay && (i.params.statusbarOverlay ? s("html").addClass("with-statusbar-overlay") : s("html").removeClass("with-statusbar-overlay")), i.views = [];
        var p = function(e, a) {
            var t, n = {
                dynamicNavbar: !1,
                domCache: !1,
                linksView: void 0,
                reloadPages: !1,
                uniqueHistory: i.params.uniqueHistory,
                uniqueHistoryIgnoreGetParameters: i.params.uniqueHistoryIgnoreGetParameters,
                allowDuplicateUrls: i.params.allowDuplicateUrls,
                swipeBackPage: i.params.swipeBackPage,
                swipeBackPageAnimateShadow: i.params.swipeBackPageAnimateShadow,
                swipeBackPageAnimateOpacity: i.params.swipeBackPageAnimateOpacity,
                swipeBackPageActiveArea: i.params.swipeBackPageActiveArea,
                swipeBackPageThreshold: i.params.swipeBackPageThreshold,
                animatePages: i.params.animatePages,
                preloadPreviousPage: i.params.preloadPreviousPage
            };
            a = a || {};
            for (var r in n) "undefined" == typeof a[r] && (a[r] = n[r]);
            var o = this;
            o.params = a, o.selector = e;
            var l = s(e);
            if (o.container = l[0], o.contentCache = {}, o.pagesCache = {}, l[0].f7View = o, o.pagesContainer = l.find(".pages")[0], o.initialPages = [], o.initialNavbars = [], o.params.domCache) {
                var p = l.find(".page");
                for (t = 0; t < p.length; t++) o.initialPages.push(p[t]);
                if (o.params.dynamicNavbar) {
                    var d = l.find(".navbar-inner");
                    for (t = 0; t < d.length; t++) o.initialNavbars.push(d[t])
                }
            }
            o.allowPageChange = !0;
            var c = document.location.href;
            o.history = [];
            var f = c,
                u = i.params.pushStateSeparator,
                m = i.params.pushStateRoot;
            i.params.pushState && (m ? f = m : f.indexOf(u) >= 0 && f.indexOf(u + "#") < 0 && (f = f.split(u)[0]));
            var h, g;
            o.activePage || (h = s(o.pagesContainer).find(".page-on-center"), 0 === h.length && (h = s(o.pagesContainer).find(".page:not(.cached)"), h = h.eq(h.length - 1)), h.length > 0 && (g = h[0].f7PageData)), o.params.domCache && h ? (o.url = l.attr("data-url") || o.params.url || "#" + h.attr("data-page"), o.pagesCache[o.url] = h.attr("data-page")) : o.url = l.attr("data-url") || o.params.url || f, g && (g.view = o, g.url = o.url, o.activePage = g, h[0].f7PageData = g), o.url && o.history.push(o.url), o.main = l.hasClass(i.params.viewMainClass);
            var v, w, b, C, y, x, T, k, S, P, M = !1,
                O = !1,
                I = {},
                E = [],
                D = [],
                L = !0,
                N = [],
                B = [];
            if (o.handleTouchStart = function(e) {
                    L && o.params.swipeBackPage && !M && !i.swipeoutOpenedEl && (O = !1, M = !0, v = void 0, I.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, I.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, C = (new Date).getTime(), S = o.params.dynamicNavbar && l.find(".navbar-inner").length > 1)
                }, o.handleTouchMove = function(e) {
                    if (M) {
                        var a = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                            t = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY;
                        if ("undefined" == typeof v && (v = !!(v || Math.abs(t - I.y) > Math.abs(a - I.x))), v || e.f7PreventSwipeBack || i.preventSwipeBack) return void(M = !1);
                        if (!O) {
                            var n = !1;
                            w = l.width();
                            var r = s(e.target),
                                p = r.hasClass("swipeout") ? r : r.parents(".swipeout");
                            p.length > 0 && (!i.rtl && p.find(".swipeout-actions-left").length > 0 && (n = !0), i.rtl && p.find(".swipeout-actions-right").length > 0 && (n = !0)), E = r.is(".page") ? r : r.parents(".page"), E.hasClass("no-swipeback") && (n = !0), D = l.find(".page-on-left:not(.cached)");
                            var d = I.x - l.offset().left > o.params.swipeBackPageActiveArea;
                            if (d = i.rtl ? I.x < l.offset().left - l[0].scrollLeft + w - o.params.swipeBackPageActiveArea : I.x - l.offset().left > o.params.swipeBackPageActiveArea, d && (n = !0), (0 === D.length || 0 === E.length) && (n = !0), n) return void(M = !1);
                            S && (N = l.find(".navbar-on-center:not(.cached)"), B = l.find(".navbar-on-left:not(.cached)"), y = N.find(".left, .center, .right, .subnavbar, .fading"), x = B.find(".left, .center, .right, .subnavbar, .fading"), i.params.animateNavBackIcon && (T = N.find(".left.sliding .back .icon"), k = B.find(".left.sliding .back .icon")))
                        }
                        e.f7PreventPanelSwipe = !0, O = !0, e.preventDefault();
                        var c = i.rtl ? -1 : 1;
                        b = (a - I.x - o.params.swipeBackPageThreshold) * c, 0 > b && (b = 0);
                        var f = b / w,
                            u = {
                                percentage: f,
                                activePage: E[0],
                                previousPage: D[0],
                                activeNavbar: N[0],
                                previousNavbar: B[0]
                            };
                        o.params.onSwipeBackMove && o.params.onSwipeBackMove(u), l.trigger("swipebackmove", u);
                        var m = b * c,
                            h = (b / 5 - w / 5) * c;
                        if (1 === i.device.pixelRatio && (m = Math.round(m), h = Math.round(h)), E.transform("translate3d(" + m + "px,0,0)"), o.params.swipeBackPageAnimateShadow && "android" !== i.device.os && (E[0].style.boxShadow = "0px 0px 12px rgba(0,0,0," + (.5 - .5 * f) + ")"), D.transform("translate3d(" + h + "px,0,0)"), o.params.swipeBackPageAnimateOpacity && (D[0].style.opacity = .9 + .1 * f), S) {
                            var g;
                            for (g = 0; g < y.length; g++)
                                if (P = s(y[g]), P.is(".subnavbar.sliding") || (P[0].style.opacity = 1 - 1.3 * f), P[0].className.indexOf("sliding") >= 0) {
                                    var C = f * P[0].f7NavbarRightOffset;
                                    1 === i.device.pixelRatio && (C = Math.round(C)), P.transform("translate3d(" + C + "px,0,0)"), i.params.animateNavBackIcon && P[0].className.indexOf("left") >= 0 && T.length > 0 && T.transform("translate3d(" + -C + "px,0,0)")
                                }
                            for (g = 0; g < x.length; g++)
                                if (P = s(x[g]), P.is(".subnavbar.sliding") || (P[0].style.opacity = 1.3 * f - .3), P[0].className.indexOf("sliding") >= 0) {
                                    var L = P[0].f7NavbarLeftOffset * (1 - f);
                                    1 === i.device.pixelRatio && (L = Math.round(L)), P.transform("translate3d(" + L + "px,0,0)"), i.params.animateNavBackIcon && P[0].className.indexOf("left") >= 0 && k.length > 0 && k.transform("translate3d(" + -L + "px,0,0)")
                                }
                        }
                    }
                }, o.handleTouchEnd = function() {
                    if (!M || !O) return M = !1, void(O = !1);
                    if (M = !1, O = !1, 0 === b) return s([E[0], D[0]]).transform("").css({
                        opacity: "",
                        boxShadow: ""
                    }), void(S && (y.transform("").css({
                        opacity: ""
                    }), x.transform("").css({
                        opacity: ""
                    }), T && T.length > 0 && T.transform(""), k && T.length > 0 && k.transform("")));
                    var e = (new Date).getTime() - C,
                        a = !1;
                    if ((300 > e && b > 10 || e >= 300 && b > w / 2) && (E.removeClass("page-on-center").addClass("page-on-right"), D.removeClass("page-on-left").addClass("page-on-center"), S && (N.removeClass("navbar-on-center").addClass("navbar-on-right"), B.removeClass("navbar-on-left").addClass("navbar-on-center")), a = !0), s([E[0], D[0]]).transform("").css({
                            opacity: "",
                            boxShadow: ""
                        }).addClass("page-transitioning"), S && (y.css({
                            opacity: ""
                        }).each(function() {
                            var e = a ? this.f7NavbarRightOffset : 0,
                                t = s(this);
                            t.transform("translate3d(" + e + "px,0,0)"), i.params.animateNavBackIcon && t.hasClass("left") && T.length > 0 && T.addClass("page-transitioning").transform("translate3d(" + -e + "px,0,0)")
                        }).addClass("page-transitioning"), x.transform("").css({
                            opacity: ""
                        }).each(function() {
                            var e = a ? 0 : this.f7NavbarLeftOffset,
                                t = s(this);
                            t.transform("translate3d(" + e + "px,0,0)"), i.params.animateNavBackIcon && t.hasClass("left") && k.length > 0 && k.addClass("page-transitioning").transform("translate3d(" + -e + "px,0,0)")
                        }).addClass("page-transitioning")), L = !1, o.allowPageChange = !1, a) {
                        var t = o.history[o.history.length - 2];
                        o.url = t, i.pageBackCallbacks("before", o, {
                            pageContainer: E[0],
                            url: t,
                            position: "center",
                            newPage: D,
                            oldPage: E,
                            swipeBack: !0
                        }), i.pageAnimCallbacks("before", o, {
                            pageContainer: D[0],
                            url: t,
                            position: "left",
                            newPage: D,
                            oldPage: E,
                            swipeBack: !0
                        })
                    }
                    E.transitionEnd(function() {
                        s([E[0], D[0]]).removeClass("page-transitioning"), S && (y.removeClass("page-transitioning").css({
                            opacity: ""
                        }), x.removeClass("page-transitioning").css({
                            opacity: ""
                        }), T && T.length > 0 && T.removeClass("page-transitioning"), k && k.length > 0 && k.removeClass("page-transitioning")), L = !0, o.allowPageChange = !0, a && (i.params.pushState && history.back(), i.pageBackCallbacks("after", o, {
                            pageContainer: E[0],
                            url: t,
                            position: "center",
                            newPage: D,
                            oldPage: E,
                            swipeBack: !0
                        }), i.pageAnimCallbacks("after", o, {
                            pageContainer: D[0],
                            url: t,
                            position: "left",
                            newPage: D,
                            oldPage: E,
                            swipeBack: !0
                        }), i.router.afterBack(o, E, D))
                    })
                }, o.attachEvents = function(e) {
                    var a = e ? "off" : "on";
                    l[a](i.touchEvents.start, o.handleTouchStart), l[a](i.touchEvents.move, o.handleTouchMove), l[a](i.touchEvents.end, o.handleTouchEnd)
                }, o.detachEvents = function() {
                    o.attachEvents(!0)
                }, o.params.swipeBackPage && o.attachEvents(), i.views.push(o), o.main && (i.mainView = o), o.router = {
                    load: function(e) {
                        return i.router.load(o, e)
                    },
                    back: function(e) {
                        return i.router.back(o, e)
                    },
                    loadPage: function(e) {
                        if (e = e || {}, "string" == typeof e) {
                            var a = e;
                            e = {}, a && 0 === a.indexOf("#") && o.params.domCache ? e.pageName = a.split("#")[1] : e.url = a
                        }
                        return i.router.load(o, e)
                    },
                    loadContent: function(e) {
                        return i.router.load(o, {
                            content: e
                        })
                    },
                    reloadPage: function(e) {
                        return i.router.load(o, {
                            url: e,
                            reload: !0
                        })
                    },
                    reloadContent: function(e) {
                        return i.router.load(o, {
                            content: e,
                            reload: !0
                        })
                    },
                    reloadPreviousPage: function(e) {
                        return i.router.load(o, {
                            url: e,
                            reloadPrevious: !0,
                            reload: !0
                        })
                    },
                    reloadPreviousContent: function(e) {
                        return i.router.load(o, {
                            content: e,
                            reloadPrevious: !0,
                            reload: !0
                        })
                    },
                    refreshPage: function() {
                        var e = {
                            url: o.url,
                            reload: !0,
                            ignoreCache: !0
                        };
                        return e.url && 0 === e.url.indexOf("#") && (o.params.domCache && o.pagesCache[e.url] ? (e.pageName = o.pagesCache[e.url], e.url = void 0, delete e.url) : o.contentCache[e.url] && (e.content = o.contentCache[e.url], e.url = void 0, delete e.url)), i.router.load(o, e)
                    },
                    refreshPreviousPage: function() {
                        var e = {
                            url: o.history[o.history.length - 2],
                            reload: !0,
                            reloadPrevious: !0,
                            ignoreCache: !0
                        };
                        return e.url && 0 === e.url.indexOf("#") && o.params.domCache && o.pagesCache[e.url] && (e.pageName = o.pagesCache[e.url], e.url = void 0, delete e.url), i.router.load(o, e)
                    }
                }, o.loadPage = o.router.loadPage, o.loadContent = o.router.loadContent, o.reloadPage = o.router.reloadPage, o.reloadContent = o.router.reloadContent, o.reloadPreviousPage = o.router.reloadPreviousPage, o.reloadPreviousContent = o.router.reloadPreviousContent, o.refreshPage = o.router.refreshPage, o.refreshPreviousPage = o.router.refreshPreviousPage, o.back = o.router.back, o.hideNavbar = function() {
                    return i.hideNavbar(l.find(".navbar"))
                }, o.showNavbar = function() {
                    return i.showNavbar(l.find(".navbar"))
                }, o.hideToolbar = function() {
                    return i.hideToolbar(l.find(".toolbar"))
                }, o.showToolbar = function() {
                    return i.showToolbar(l.find(".toolbar"))
                }, i.params.pushState && o.main) {
                var A;
                m ? A = c.split(i.params.pushStateRoot + u)[1] : c.indexOf(u) >= 0 && c.indexOf(u + "#") < 0 && (A = c.split(u)[1]);
                var z = i.params.pushStateNoAnimation ? !1 : void 0;
                if (A) i.router.load(o, {
                    url: A,
                    animatePages: z,
                    pushState: !1
                });
                else if (c.indexOf(u + "#") >= 0) {
                    var H = history.state;
                    H.pageName && "viewIndex" in H && i.router.load(o, {
                        pageName: H.pageName,
                        pushState: !1
                    })
                }
            }
            return o.destroy = function() {
                o.detachEvents(), o = void 0
            }, i.pluginHook("addView", o), o
        };
        i.addView = function(e, a) {
            return new p(e, a)
        }, i.navbarInitCallback = function(e, a, t, n, r, o) {
            var l = {
                    container: t,
                    innerContainer: n
                },
                p = {
                    url: r,
                    query: s.parseUrlQuery(r || ""),
                    container: a,
                    name: s(a).attr("data-page"),
                    view: e,
                    from: o
                },
                d = {
                    navbar: l,
                    page: p
                };
            i.pluginHook("navbarInit", l, p), s(n).trigger("navbarInit", d)
        }, i.sizeNavbars = function(e) {
            var a = e ? s(e).find(".navbar .navbar-inner:not(.cached)") : s(".navbar .navbar-inner:not(.cached)");
            a.each(function() {
                var e = s(this);
                if (!e.hasClass("cached")) {
                    var a, t, n = e.find(i.rtl ? ".right" : ".left"),
                        r = e.find(i.rtl ? ".left" : ".right"),
                        o = e.find(".center"),
                        l = e.find(".subnavbar"),
                        p = 0 === n.length,
                        d = 0 === r.length,
                        c = p ? 0 : n.outerWidth(!0),
                        f = d ? 0 : r.outerWidth(!0),
                        u = o.outerWidth(!0),
                        m = e[0].offsetWidth - parseInt(e.css("padding-left"), 10) - parseInt(e.css("padding-right"), 10),
                        h = e.hasClass("navbar-on-left");
                    d && (a = m - u), p && (a = 0), p || d || (a = (m - f - u + c) / 2);
                    var g = (m - u) / 2;
                    m - c - f > u ? (c > g && (g = c), g + u > m - f && (g = m - f - u), t = g - a) : t = 0;
                    var v = i.rtl ? -1 : 1,
                        w = t;
                    i.rtl && p && d && o.length > 0 && (w = -w), o.css({
                        left: w + "px"
                    }), o.hasClass("sliding") && (o[0].f7NavbarLeftOffset = -(a + t) * v, o[0].f7NavbarRightOffset = (m - a - t - u) * v, h && o.transform("translate3d(" + o[0].f7NavbarLeftOffset + "px, 0, 0)")), !p && n.hasClass("sliding") && (i.rtl ? (n[0].f7NavbarLeftOffset = -(m - n.outerWidth()) / 2 * v, n[0].f7NavbarRightOffset = c * v) : (n[0].f7NavbarLeftOffset = -c, n[0].f7NavbarRightOffset = (m - n.outerWidth()) / 2), h && n.transform("translate3d(" + n[0].f7NavbarLeftOffset + "px, 0, 0)")), !d && r.hasClass("sliding") && (i.rtl ? (r[0].f7NavbarLeftOffset = -f * v, r[0].f7NavbarRightOffset = (m - r.outerWidth()) / 2 * v) : (r[0].f7NavbarLeftOffset = -(m - r.outerWidth()) / 2, r[0].f7NavbarRightOffset = f), h && r.transform("translate3d(" + r[0].f7NavbarLeftOffset + "px, 0, 0)")), l.length && l.hasClass("sliding") && (l[0].f7NavbarLeftOffset = i.rtl ? l[0].offsetWidth : -l[0].offsetWidth, l[0].f7NavbarRightOffset = -l[0].f7NavbarLeftOffset)
                }
            })
        }, i.hideNavbar = function(e) {
            return s(e).addClass("navbar-hidden"), !0
        }, i.showNavbar = function(e) {
            var a = s(e);
            return a.addClass("navbar-hiding").removeClass("navbar-hidden").transitionEnd(function() {
                a.removeClass("navbar-hiding")
            }), !0
        }, i.hideToolbar = function(e) {
            return s(e).addClass("toolbar-hidden"), !0
        }, i.showToolbar = function(e) {
            var a = s(e);
            a.addClass("toolbar-hiding").removeClass("toolbar-hidden").transitionEnd(function() {
                a.removeClass("toolbar-hiding")
            })
        }, i.initSearchbar = function(e) {
            function a() {
                h.val("").trigger("change"), f.removeClass("searchbar-active searchbar-not-empty"), v.length > 0 && v.css(T, -v[0].offsetWidth + "px"), w && m.removeClass("searchbar-overlay-active"), i.device.ios ? setTimeout(function() {
                    h.blur(), w.trigger("disableSearch")
                }, 400) : (h.blur(), w.trigger("disableSearch"))
            }

            function t() {
                i.device.ios ? setTimeout(function() {
                    w && !f.hasClass("searchbar-active") && m.addClass("searchbar-overlay-active"), f.addClass("searchbar-active"), v.length > 0 && v.css(T, "0px"), w.trigger("enableSearch")
                }, 400) : (w && !f.hasClass("searchbar-active") && m.addClass("searchbar-overlay-active"), f.addClass("searchbar-active"), v.length > 0 && v.css(T, "0px"), w.trigger("enableSearch"))
            }

            function n() {
                h.val("").trigger("change").focus(), w.trigger("clearSearch")
            }

            function r() {
                setTimeout(function() {
                    var e = h.val().trim();
                    0 === e.length ? (f.removeClass("searchbar-not-empty"), w && f.hasClass("searchbar-active") && m.addClass("searchbar-overlay-active")) : (f.addClass("searchbar-not-empty"), w && f.hasClass("searchbar-active") && m.removeClass("searchbar-overlay-active")), w.length > 0 && (C || b) && d(e)
                }, 0)
            }

            function o(e) {
                e.preventDefault()
            }

            function l(e) {
                var i = e ? "off" : "on";
                f[i]("submit", o), v[i]("click", a), m[i]("click", a), h[i]("focus", t), h[i]("change keydown keypress keyup", r), g[i]("click", n)
            }

            function p() {
                l(!0)
            }

            function d(e) {
                if (e.trim() !== k) {
                    k = e.trim();
                    var a = e.trim().toLowerCase().split(" "),
                        t = [];
                    if (b) {
                        if (u = w[0].f7VirtualList, "" === e.trim()) return u.resetFilter(), x.hide(), void y.show();
                        if (u.params.searchAll) t = u.params.searchAll(e, u.items) || [];
                        else if (u.params.searchByItem)
                            for (var n = 0; n < u.items.length; n++) u.params.searchByItem(e, n, u.params.items[n]) && t.push(n)
                    } else C = f.attr("data-search-in"), w.find("li").removeClass("hidden-by-searchbar").each(function(e, n) {
                        n = s(n);
                        var r = n.find(C);
                        if (0 !== r.length) {
                            var i;
                            i = r.text().trim().toLowerCase();
                            for (var o = 0, l = 0; l < a.length; l++) i.indexOf(a[l]) >= 0 && o++;
                            o !== a.length ? n.addClass("hidden-by-searchbar") : t.push(n[0])
                        }
                    }), i.params.searchbarHideDividers && w.find(".item-divider, .list-group-title").each(function() {
                        for (var e = s(this), a = e.nextAll("li"), t = !0, n = 0; n < a.length; n++) {
                            var r = s(a[n]);
                            if (r.hasClass("list-group-title") || r.hasClass("item-divider")) break;
                            r.hasClass("hidden-by-searchbar") || (t = !1)
                        }
                        t ? e.addClass("hidden-by-searchbar") : e.removeClass("hidden-by-searchbar")
                    }), i.params.searchbarHideGroups && w.find(".list-group").each(function() {
                        var e = s(this),
                            a = e.find("li:not(.hidden-by-searchbar)");
                        0 === a.length ? e.addClass("hidden-by-searchbar") : e.removeClass("hidden-by-searchbar")
                    });
                    w.trigger("search", {
                        query: e,
                        foundItems: t
                    }), 0 === t.length ? (x.show(), y.hide()) : (x.hide(), y.show()), b && u.filterItems(t)
                }
            }

            function c() {
                p(), e.off("pageBeforeRemove", c)
            }
            e = s(e);
            var f = e.hasClass("searchbar") ? e : e.find(".searchbar");
            if (0 !== f.length) {
                e.hasClass("page") || (e = f.parents(".page").eq(0));
                var u, m = e.hasClass("page") ? e.find(".searchbar-overlay") : s(".searchbar-overlay"),
                    h = f.find('input[type="search"]'),
                    g = f.find(".searchbar-clear"),
                    v = f.find(".searchbar-cancel"),
                    w = s(f.attr("data-search-list")),
                    b = w.hasClass("virtual-list"),
                    C = f.attr("data-search-in"),
                    y = (f.attr("data-search-by"), f.attr("data-searchbar-found"));
                y ? y = s(y) : (y = e.find(".searchbar-found"), 0 === y.length && (y = s(".searchbar-found")));
                var x = f.attr("data-searchbar-not-found");
                x ? x = s(x) : (x = e.find(".searchbar-not-found"), 0 === x.length && (x = s(".searchbar-not-found")));
                var T = i.rtl ? "margin-left" : "margin-right";
                v.length > 0 && (v.show(), v.css(T, -v[0].offsetWidth + "px")), f[0].f7DestroySearchbar = p, l();
                var k;
                e.hasClass("page") && e.on("pageBeforeRemove", c)
            }
        }, i.destroySearchbar = function(e) {
            e = s(e);
            var a = e.hasClass("searchbar") ? e : e.find(".searchbar");
            0 !== a.length && a[0].f7DestroySearchbar && a[0].f7DestroySearchbar()
        }, i.initMessagebar = function(e) {
            function a(e) {
                e.preventDefault()
            }

            function t() {
                d.css({
                    height: ""
                });
                var e = d[0].offsetHeight,
                    a = e - d[0].clientHeight,
                    t = d[0].scrollHeight,
                    n = parseInt(l.attr("data-keyboard-height") || 0, 10);
                if (t + a > e) {
                    var r = t + a,
                        i = u + (r - m),
                        o = l.attr("data-max-height") || l.parents(".view")[0].offsetHeight - 88;
                    i > o && (i = parseInt(o, 10), r = i - u + m), d.css("height", r + "px"), l.css("height", i + "px"), c.length > 0 && (c.css("padding-bottom", i + n + "px"), c.scrollTop(c[0].scrollHeight - c[0].offsetHeight))
                } else c.length > 0 && (l.css({
                    height: ""
                }), c.css({
                    "padding-bottom": n ? f + n + "px" : ""
                }))
            }

            function n() {
                clearTimeout(p), p = setTimeout(function() {
                    t()
                }, 0)
            }

            function r(e) {
                var t = e ? "off" : "on";
                l[t]("submit", a), d[t]("change keydown keypress keyup paste cut", n)
            }

            function i() {
                r(!0)
            }

            function o() {
                i(), e.off("pageBeforeRemove", o)
            }
            e = s(e);
            var l = e.hasClass("messagebar") ? e : e.find(".messagebar");
            if (0 !== l.length) {
                var p, d = l.find("textarea"),
                    c = l.parents(".page").find(".page-content"),
                    f = parseInt(c.css("padding-bottom")),
                    u = l[0].offsetHeight,
                    m = d[0].offsetHeight;
                l[0].f7DestroyMessagebar = i, r(), e.hasClass("page") && e.on("pageBeforeRemove", o)
            }
        }, i.destroyMessagebar = function(e) {
            e = s(e);
            var a = e.hasClass("messagebar") ? e : e.find(".messagebar");
            0 !== a.length && a[0].f7DestroyMessagebar && a[0].f7DestroyMessagebar()
        }, i.cache = [], i.removeFromCache = function(e) {
            for (var a = !1, t = 0; t < i.cache.length; t++) i.cache[t].url === e && (a = t);
            a !== !1 && i.cache.splice(a, 1)
        }, i.xhr = !1, i.get = function(e, a, t, n) {
            var r = e;
            if (i.params.cacheIgnoreGetParameters && e.indexOf("?") >= 0 && (r = e.split("?")[0]), i.params.cache && !t && e.indexOf("nocache") < 0 && i.params.cacheIgnore.indexOf(r) < 0)
                for (var o = 0; o < i.cache.length; o++)
                    if (i.cache[o].url === r && (new Date).getTime() - i.cache[o].time < i.params.cacheDuration) return n(i.cache[o].content), !1;
            return i.xhr = s.ajax({
                url: e,
                method: "GET",
                beforeSend: i.params.onAjaxStart,
                complete: function(e) {
                    200 === e.status || 0 === e.status ? (i.params.cache && !t && (i.removeFromCache(r), i.cache.push({
                        url: r,
                        time: (new Date).getTime(),
                        content: e.responseText
                    })), n(e.responseText, !1)) : n(e.responseText, !0), i.params.onAjaxComplete && i.params.onAjaxComplete(e)
                },
                error: function(e) {
                    n(e.responseText, !0), i.params.onAjaxError && i.params.onAjaxonAjaxError(e)
                }
            }), a && (a.xhr = i.xhr), i.xhr
        }, i.pageCallbacks = {}, i.onPage = function(e, a, t) {
            if (a && a.split(" ").length > 1) {
                for (var n = a.split(" "), r = [], o = 0; o < n.length; o++) r.push(i.onPage(e, n[o], t));
                return r.remove = function() {
                    for (var e = 0; e < r.length; e++) r[e].remove()
                }, r.trigger = function() {
                    for (var e = 0; e < r.length; e++) r[e].trigger()
                }, r
            }
            var s = i.pageCallbacks[e][a];
            return s || (s = i.pageCallbacks[e][a] = []), i.pageCallbacks[e][a].push(t), {
                remove: function() {
                    for (var e, a = 0; a < s.length; a++) s[a].toString() === t.toString() && (e = a);
                    "undefined" != typeof e && s.splice(e, 1)
                },
                trigger: t
            }
        };
        for (var d = "beforeInit init reinit beforeAnimation afterAnimation back afterBack beforeRemove".split(" "), c = 0; c < d.length; c++) i.pageCallbacks[d[c]] = {}, t(d[c]);
        i.triggerPageCallbacks = function(e, a, t) {
            var n = i.pageCallbacks[e]["*"];
            if (n)
                for (var r = 0; r < n.length; r++) n[r](t);
            var o = i.pageCallbacks[e][a];
            if (o && 0 !== o.length)
                for (var s = 0; s < o.length; s++) o[s](t)
        }, i.pageInitCallback = function(e, a) {
            var t = a.pageContainer;
            if (!t.f7PageInitialized || e.params.domCache) {
                var n = {
                    container: t,
                    url: a.url,
                    query: a.query || s.parseUrlQuery(a.url || ""),
                    name: s(t).attr("data-page"),
                    view: e,
                    from: a.position,
                    context: a.context,
                    navbarInnerContainer: a.navbarInnerContainer,
                    fromPage: a.fromPage
                };
                if (t.f7PageInitialized && e.params.domCache) return i.reinitPage(t), i.pluginHook("pageReinit", n), i.params.onPageReinit && i.params.onPageBeforeInit(i, n), i.triggerPageCallbacks("reinit", n.name, n), void s(n.container).trigger("pageReinit", {
                    page: n
                });
                t.f7PageInitialized = !0, t.f7PageData = n, e && !a.preloadOnly && (e.activePage = n), i.pluginHook("pageBeforeInit", n), i.params.onPageBeforeInit && i.params.onPageBeforeInit(i, n), i.triggerPageCallbacks("beforeInit", n.name, n), s(n.container).trigger("pageBeforeInit", {
                    page: n
                }), i.initPage(t), i.pluginHook("pageInit", n), i.params.onPageInit && i.params.onPageInit(i, n), i.triggerPageCallbacks("init", n.name, n), s(n.container).trigger("pageInit", {
                    page: n
                })
            }
        }, i.pageRemoveCallback = function(e, a, t) {
            var n;
            a.f7PageData && (n = a.f7PageData.context);
            var r = {
                container: a,
                name: s(a).attr("data-page"),
                view: e,
                url: a.f7PageData && a.f7PageData.url,
                query: a.f7PageData && a.f7PageData.query,
                from: t,
                context: n
            };
            i.pluginHook("pageBeforeRemove", r), i.params.onPageBeforeRemove && i.params.onPageBeforeRemove(i, r), i.triggerPageCallbacks("beforeRemove", r.name, r), s(r.container).trigger("pageBeforeRemove", {
                page: r
            })
        }, i.pageBackCallbacks = function(e, a, t) {
            var n, r = t.pageContainer;
            r.f7PageData && (n = r.f7PageData.context);
            var o = {
                container: r,
                name: s(r).attr("data-page"),
                url: r.f7PageData && r.f7PageData.url,
                query: r.f7PageData && r.f7PageData.query,
                view: a,
                from: t.position,
                context: n,
                swipeBack: t.swipeBack
            };
            "after" === e && (i.pluginHook("pageAfterBack", o), i.params.onPageAfterBack && i.params.onPageAfterBack(i, o), i.triggerPageCallbacks("afterBack", o.name, o), s(r).trigger("pageAfterBack", {
                page: o
            })), "before" === e && (i.pluginHook("pageBack", o), i.params.onPageBack && i.params.onPageBack(i, o), i.triggerPageCallbacks("back", o.name, o), s(o.container).trigger("pageBack", {
                page: o
            }))
        }, i.pageAnimCallbacks = function(e, a, t) {
            var n, r = t.pageContainer;
            r.f7PageData && (n = r.f7PageData.context);
            var o = {
                    container: r,
                    url: t.url,
                    query: t.query || s.parseUrlQuery(t.url || ""),
                    name: s(r).attr("data-page"),
                    view: a,
                    from: t.position,
                    context: n,
                    swipeBack: t.swipeBack,
                    fromPage: t.fromPage
                },
                l = t.oldPage,
                p = t.newPage;
            if (r.f7PageData = o, "after" === e && (i.pluginHook("pageAfterAnimation", o), i.params.onPageAfterAnimation && i.params.onPageAfterAnimation(i, o), i.triggerPageCallbacks("afterAnimation", o.name, o), s(o.container).trigger("pageAfterAnimation", {
                    page: o
                })), "before" === e) {
                s(a.container).attr("data-page", o.name), a && (a.activePage = o), p.hasClass("no-navbar") && !l.hasClass("no-navbar") && a.hideNavbar(), p.hasClass("no-navbar") || !l.hasClass("no-navbar") && !l.hasClass("no-navbar-by-scroll") || a.showNavbar(), p.hasClass("no-toolbar") && !l.hasClass("no-toolbar") && a.hideToolbar(), p.hasClass("no-toolbar") || !l.hasClass("no-toolbar") && !l.hasClass("no-toolbar-by-scroll") || a.showToolbar();
                var d;
                p.hasClass("no-tabbar") && !l.hasClass("no-tabbar") && (d = s(a.container).find(".tabbar"), 0 === d.length && (d = s(a.container).parents("." + i.params.viewsClass).find(".tabbar")), i.hideToolbar(d)), p.hasClass("no-tabbar") || !l.hasClass("no-tabbar") && !l.hasClass("no-tabbar-by-scroll") || (d = s(a.container).find(".tabbar"), 0 === d.length && (d = s(a.container).parents("." + i.params.viewsClass).find(".tabbar")), i.showToolbar(d)), l.removeClass("no-navbar-by-scroll no-toolbar-by-scroll"), i.pluginHook("pageBeforeAnimation", o), i.params.onPageBeforeAnimation && i.params.onPageBeforeAnimation(i, o), i.triggerPageCallbacks("beforeAnimation", o.name, o), s(o.container).trigger("pageBeforeAnimation", {
                    page: o
                })
            }
        }, i.initPage = function(e) {
            i.sizeNavbars && i.sizeNavbars(s(e).parents("." + i.params.viewClass)[0]), i.initMessages && i.initMessages(e), i.initFormsStorage && i.initFormsStorage(e), i.initSmartSelects && i.initSmartSelects(e), i.initSlider && i.initSlider(e), i.initSwiper && i.initSwiper(e), i.initPullToRefresh && i.initPullToRefresh(e), i.initInfiniteScroll && i.initInfiniteScroll(e), i.initSearchbar && i.initSearchbar(e), i.initMessagebar && i.initMessagebar(e), i.initScrollToolbars && i.initScrollToolbars(e), i.initImagesLazyLoad && i.initImagesLazyLoad(e)
        }, i.reinitPage = function(e) {
            i.sizeNavbars && i.sizeNavbars(s(e).parents("." + i.params.viewClass)[0]), i.reinitSlider && i.reinitSlider(e), i.reinitSwiper && i.reinitSwiper(e), i.reinitLazyLoad && i.reinitLazyLoad(e)
        }, i.router = {
            temporaryDom: document.createElement("div"),
            findElement: function(e, a, t, n) {
                a = s(a), n && (e += ":not(.cached)");
                var r = a.find(e);
                return r.length > 1 && ("string" == typeof t.selector && (r = a.find(t.selector + " " + e)), r.length > 1 && (r = a.find("." + i.params.viewMainClass + " " + e))), 1 === r.length ? r : (n || (r = i.router.findElement(e, a, t, !0)), r && 1 === r.length ? r : void 0)
            },
            animatePages: function(e, a, t) {
                var n = "page-on-center page-on-right page-on-left";
                "to-left" === t && (e.removeClass(n).addClass("page-from-center-to-left"), a.removeClass(n).addClass("page-from-right-to-center")), "to-right" === t && (e.removeClass(n).addClass("page-from-left-to-center"), a.removeClass(n).addClass("page-from-center-to-right"))
            },
            prepareNavbar: function(e, a, t) {
                s(e).find(".sliding").each(function() {
                    var e = s(this),
                        n = "right" === t ? this.f7NavbarRightOffset : this.f7NavbarLeftOffset;
                    i.params.animateNavBackIcon && (e.hasClass("left") && e.find(".back .icon").length > 0 && e.find(".back .icon").transform("translate3d(" + -n + "px,0,0)"), "left" === t && e.hasClass("center") && s(a).find(".left .back .icon ~ span").length > 0 && (n += s(a).find(".left .back span")[0].offsetLeft)), e.transform("translate3d(" + n + "px,0,0)")
                })
            },
            animateNavbars: function(e, a, t) {
                var n = "navbar-on-right navbar-on-center navbar-on-left";
                "to-left" === t && (a.removeClass(n).addClass("navbar-from-right-to-center"), a.find(".sliding").each(function() {
                    var e = s(this);
                    e.transform("translate3d(0px,0,0)"), i.params.animateNavBackIcon && e.hasClass("left") && e.find(".back .icon").length > 0 && e.find(".back .icon").transform("translate3d(0px,0,0)")
                }), e.removeClass(n).addClass("navbar-from-center-to-left"), e.find(".sliding").each(function() {
                    var e = s(this);
                    i.params.animateNavBackIcon && (e.hasClass("center") && a.find(".sliding.left .back .icon").length > 0 && (this.f7NavbarLeftOffset += a.find(".sliding.left .back span")[0].offsetLeft), e.hasClass("left") && e.find(".back .icon").length > 0 && e.find(".back .icon").transform("translate3d(" + -this.f7NavbarLeftOffset + "px,0,0)")), e.transform("translate3d(" + this.f7NavbarLeftOffset + "px,0,0)")
                })), "to-right" === t && (e.removeClass(n).addClass("navbar-from-left-to-center"), e.find(".sliding").each(function() {
                    var e = s(this);
                    e.transform("translate3d(0px,0,0)"), i.params.animateNavBackIcon && e.hasClass("left") && e.find(".back .icon").length > 0 && e.find(".back .icon").transform("translate3d(0px,0,0)")
                }), a.removeClass(n).addClass("navbar-from-center-to-right"), a.find(".sliding").each(function() {
                    var e = s(this);
                    i.params.animateNavBackIcon && e.hasClass("left") && e.find(".back .icon").length > 0 && e.find(".back .icon").transform("translate3d(" + -this.f7NavbarRightOffset + "px,0,0)"), e.transform("translate3d(" + this.f7NavbarRightOffset + "px,0,0)")
                }))
            },
            preprocess: function(e, a, t) {
                i.pluginHook("routerPreprocess", e, a, t), e = i.pluginProcess("preprocess", e), i.params.preprocess ? (e = i.params.preprocess(e, a, t), "undefined" != typeof e && t(e)) : t(e)
            },
            template7Render: function(e, a) {
                {
                    var t, n, r = a.url,
                        o = a.content,
                        p = a.content,
                        d = a.context,
                        c = a.contextName,
                        f = a.template;
                    a.pageName
                }
                if ("string" == typeof o ? r ? i.template7Cache[r] ? n = l.cache[r] : (n = l.compile(o), l.cache[r] = n) : n = l.compile(o) : f && (n = f), d) t = d;
                else {
                    if (c)
                        if (c.indexOf(".") >= 0) {
                            for (var u = c.split("."), m = l.data[u[0]], h = 1; h < u.length; h++) u[h] && (m = m[u[h]]);
                            t = m
                        } else t = l.data[c];
                    if (!t && r && (t = l.data["url:" + r]), !t && "string" == typeof o && !f) {
                        var g = o.match(/(data-page=["'][^"^']*["'])/);
                        if (g) {
                            var v = g[0].split("data-page=")[1].replace(/['"]/g, "");
                            v && (t = l.data["page:" + v])
                        }
                    }
                    if (!t && f && l.templates)
                        for (var w in l.templates) l.templates[w] === f && (t = l.data[w]);
                    t || (t = {})
                }
                if (n && t) {
                    if ("function" == typeof t && (t = t()), r) {
                        var b = s.parseUrlQuery(r);
                        t.url_query = {};
                        for (var C in b) t.url_query[C] = b[C]
                    }
                    p = n(t)
                }
                return {
                    content: p,
                    context: t
                }
            }
        }, i.router._load = function(e, a) {
            function t() {
                e.allowPageChange = !0, n.removeClass("page-from-right-to-center page-on-right").addClass("page-on-center"), r.removeClass("page-from-center-to-left page-on-center").addClass("page-on-left"), f && (d.removeClass("navbar-from-right-to-center navbar-on-left navbar-on-right").addClass("navbar-on-center"), p.removeClass("navbar-from-center-to-left navbar-on-center").addClass("navbar-on-left")), i.pageAnimCallbacks("after", e, {
                    pageContainer: n[0],
                    url: m,
                    position: "right",
                    oldPage: r,
                    newPage: n,
                    query: a.query,
                    fromPage: r && r.length && r[0].f7PageData
                }), i.params.pushState && i.pushStateClearQueue(), e.params.swipeBackPage || e.params.preloadPreviousPage || (e.params.domCache ? (r.addClass("cached"), p.addClass("cached")) : (0 !== m.indexOf("#") || 0 !== n.attr("data-page").indexOf("smart-select-")) && (i.pageRemoveCallback(e, r[0], "left"), r.remove(), f && p.remove())), e.params.uniqueHistory && I && e.refreshPreviousPage()
            }
            a = a || {};
            var n, r, o, l, p, d, c, f, u, m = a.url,
                h = a.content,
                g = {
                    content: a.content
                },
                v = a.template,
                w = a.pageName,
                b = s(e.container),
                C = s(e.pagesContainer),
                y = a.animatePages,
                x = "undefined" == typeof m && h || v,
                T = a.pushState;
            if ("undefined" == typeof y && (y = e.params.animatePages), i.pluginHook("routerLoad", e, a), (i.params.template7Pages && "string" == typeof h || v) && (g = i.router.template7Render(e, a), g.content && !h && (h = g.content)), i.router.temporaryDom.innerHTML = "", !w)
                if (m || "string" == typeof h) i.router.temporaryDom.innerHTML = g.content;
                else if ("length" in h && h.length > 1)
                for (var k = 0; k < h.length; k++) s(i.router.temporaryDom).append(h[k]);
            else s(i.router.temporaryDom).append(h);
            if (u = a.reload && (a.reloadPrevious ? "left" : "center"), n = w ? C.find('.page[data-page="' + w + '"]') : i.router.findElement(".page", i.router.temporaryDom, e), !n || 0 === n.length || w && e.activePage && e.activePage.name === w) return void(e.allowPageChange = !0);
            if (n.addClass(a.reload ? "page-on-" + u : "page-on-right"), o = C.children(".page:not(.cached)"), a.reload && a.reloadPrevious && 1 === o.length) return void(e.allowPageChange = !0);
            if (a.reload) r = o.eq(o.length - 1);
            else {
                if (o.length > 1) {
                    for (l = 0; l < o.length - 2; l++) e.params.domCache ? s(o[l]).addClass("cached") : (i.pageRemoveCallback(e, o[l], "left"), s(o[l]).remove());
                    e.params.domCache ? s(o[l]).addClass("cached") : (i.pageRemoveCallback(e, o[l], "left"), s(o[l]).remove())
                }
                r = C.children(".page:not(.cached)")
            }
            if (e.params.domCache && n.removeClass("cached"), e.params.dynamicNavbar)
                if (f = !0, d = w ? b.find('.navbar-inner[data-page="' + w + '"]') : i.router.findElement(".navbar-inner", i.router.temporaryDom, e), d && 0 !== d.length || (f = !1), c = b.find(".navbar"), a.reload) p = c.find(".navbar-inner:not(.cached):last-child");
                else if (p = c.find(".navbar-inner:not(.cached)"), p.length > 0) {
                for (l = 0; l < p.length - 1; l++) e.params.domCache ? s(p[l]).addClass("cached") : s(p[l]).remove();
                d || 1 !== p.length || (e.params.domCache ? s(p[0]).addClass("cached") : s(p[0]).remove()), p = c.find(".navbar-inner:not(.cached)")
            }
            if (f && (d.addClass(a.reload ? "navbar-on-" + u : "navbar-on-right"), e.params.domCache && d.removeClass("cached"), n[0].f7RelatedNavbar = d[0], d[0].f7RelatedPage = n[0]), !m) {
                var S = w || n.attr("data-page");
                m = x ? "#" + i.params.dynamicPageUrl.replace(/{{name}}/g, S).replace(/{{index}}/g, e.history.length - (a.reload ? 1 : 0)) : "#" + S, e.params.domCache || (e.contentCache[m] = h), e.params.domCache && w && (e.pagesCache[m] = w)
            }
            if (i.params.pushState && !a.reloadPrevious && e.main) {
                "undefined" == typeof T && (T = !0);
                var P = i.params.pushStateRoot || "",
                    M = a.reload ? "replaceState" : "pushState";
                T && (x || w ? x && h ? history[M]({
                    content: h,
                    url: m,
                    viewIndex: i.views.indexOf(e)
                }, "", P + i.params.pushStateSeparator + m) : w && history[M]({
                    pageName: w,
                    url: m,
                    viewIndex: i.views.indexOf(e)
                }, "", P + i.params.pushStateSeparator + m) : history[M]({
                    url: m,
                    viewIndex: i.views.indexOf(e)
                }, "", P + i.params.pushStateSeparator + m))
            }
            if (e.url = m, a.reload) {
                var O = e.history[e.history.length - (a.reloadPrevious ? 2 : 1)];
                O && 0 === O.indexOf("#") && O in e.contentCache && O !== m && (e.contentCache[O] = null, delete e.contentCache[O]), e.history[e.history.length - (a.reloadPrevious ? 2 : 1)] = m
            } else e.history.push(m);
            var I = !1;
            if (e.params.uniqueHistory) {
                var E = e.history,
                    D = m;
                if (e.params.uniqueHistoryIgnoreGetParameters)
                    for (E = [], D = m.split("?")[0], l = 0; l < e.history.length; l++) E.push(e.history[l].split("?")[0]);
                E.indexOf(D) !== E.lastIndexOf(D) && (e.history = e.history.slice(0, E.indexOf(D)), e.history.push(m), I = !0)
            }
            if (a.reloadPrevious ? (r = r.prev(".page"), n.insertBefore(r), f && (p = p.prev(".navbar-inner"), d.insertAfter(p))) : (C.append(n[0]), f && c.append(d[0])), a.reload && (e.params.domCache && e.initialPages.indexOf(r[0]) >= 0 ? (r.addClass("cached"), f && p.addClass("cached")) : (i.pageRemoveCallback(e, r[0], u), r.remove(), f && p.remove())), i.pageInitCallback(e, {
                    pageContainer: n[0],
                    url: m,
                    position: a.reload ? u : "right",
                    navbarInnerContainer: f ? d[0] : void 0,
                    context: g.context,
                    query: a.query,
                    fromPage: r && r.length && r[0].f7PageData
                }), f && i.navbarInitCallback(e, n[0], c[0], d[0], m, a.reload ? u : "right"), a.reload) return e.allowPageChange = !0, void(I && e.refreshPreviousPage());
            f && y && i.router.prepareNavbar(d, p, "right");
            n[0].clientLeft;
            i.pageAnimCallbacks("before", e, {
                pageContainer: n[0],
                url: m,
                position: "right",
                oldPage: r,
                newPage: n,
                query: a.query,
                fromPage: r && r.length && r[0].f7PageData
            }), y ? (i.router.animatePages(r, n, "to-left", e), f && setTimeout(function() {
                i.router.animateNavbars(p, d, "to-left", e)
            }, 0), n.animationEnd(function() {
                t()
            })) : (d.find(".sliding, .sliding .back .icon").transform(""), t())
        }, i.router.load = function(e, a) {
            function t(t) {
                i.router.preprocess(t, n, function(t) {
                    a.content = t, i.router._load(e, a)
                })
            }
            a = a || {};
            var n = a.url,
                r = a.content,
                o = a.pageName;
            o && o.indexOf("?") > 0 && (a.query = s.parseUrlQuery(o), a.pageName = o = o.split("?")[0]);
            var l = a.template;
            return e.params.reloadPages === !0 && (a.reload = !0), e.allowPageChange && (!n || e.url !== n || a.reload || e.params.allowDuplicateUrls) ? (e.allowPageChange = !1, i.xhr && e.xhr && e.xhr === i.xhr && (i.xhr.abort(), i.xhr = !1), r || o ? void t(r) : l ? void i.router._load(e, a) : a.url && "#" !== a.url ? void i.get(a.url, e, a.ignoreCache, function(a, n) {
                return n ? void(e.allowPageChange = !0) : void t(a)
            }) : void(e.allowPageChange = !0)) : !1
        }, i.router._back = function(e, a) {
            function t() {
                i.pageBackCallbacks("after", e, {
                    pageContainer: l[0],
                    url: h,
                    position: "center",
                    oldPage: l,
                    newPage: p
                }), i.pageAnimCallbacks("after", e, {
                    pageContainer: p[0],
                    url: h,
                    position: "left",
                    oldPage: l,
                    newPage: p,
                    query: a.query,
                    fromPage: l && l.length && l[0].f7PageData
                }), i.router.afterBack(e, l[0], p[0])
            }

            function n() {
                i.pageBackCallbacks("before", e, {
                    pageContainer: l[0],
                    url: h,
                    position: "center",
                    oldPage: l,
                    newPage: p
                }), i.pageAnimCallbacks("before", e, {
                    pageContainer: p[0],
                    url: h,
                    position: "left",
                    oldPage: l,
                    newPage: p,
                    query: a.query,
                    fromPage: l && l.length && l[0].f7PageData
                }), b ? (i.router.animatePages(p, l, "to-right", e), m && setTimeout(function() {
                    i.router.animateNavbars(c, d, "to-right", e)
                }, 0), p.animationEnd(function() {
                    t()
                })) : (c.find(".sliding, .sliding .back .icon").transform(""), t())
            }

            function r() {
                if (i.router.temporaryDom.innerHTML = "", h || "string" == typeof g) i.router.temporaryDom.innerHTML = v.content;
                else if ("length" in g && g.length > 1)
                    for (var a = 0; a < g.length; a++) s(i.router.temporaryDom).append(g[a]);
                else s(i.router.temporaryDom).append(g);
                p = i.router.findElement(".page", i.router.temporaryDom, e), e.params.dynamicNavbar && (c = i.router.findElement(".navbar-inner", i.router.temporaryDom, e))
            }

            function o() {
                if (!p || 0 === p.length) return void(e.allowPageChange = !0);
                if (e.params.dynamicNavbar && "undefined" == typeof m && (m = c && 0 !== c.length ? !0 : !1), p.addClass("page-on-left").removeClass("cached"), m && (f = k.find(".navbar"), u = k.find(".navbar-inner:not(.cached)"), c.addClass("navbar-on-left").removeClass("cached")), x) {
                    var t, r;
                    t = s(P[P.length - 2]), m && (r = s(t[0] && t[0].f7RelatedNavbar || u[u.length - 2])), e.params.domCache && e.initialPages.indexOf(t[0]) >= 0 ? (t.length && t[0] !== p[0] && t.addClass("cached"), m && r.length && r[0] !== c[0] && r.addClass("cached")) : (t.length && t.remove(), m && r.length && r.remove()), P = S.children(".page:not(.cached)"), m && (u = k.find(".navbar-inner:not(.cached)")), e.history.indexOf(h) >= 0 ? e.history = e.history.slice(0, e.history.indexOf(h) + 2) : e.history[[e.history.length - 2]] ? e.history[e.history.length - 2] = h : e.history.unshift(h)
                }
                if (l = s(P[P.length - 1]), e.params.domCache && l[0] === p[0] && (l = S.children(".page.page-on-center"), 0 === l.length && e.activePage && (l = s(e.activePage.container))), m && !d && (d = s(u[u.length - 1]), e.params.domCache && (d[0] === c[0] && (d = f.children(".navbar-inner.navbar-on-center:not(.cached)")), 0 === d.length && (d = f.children('.navbar-inner[data-page="' + l.attr("data-page") + '"]'))), (0 === d.length || c[0] === d[0]) && (m = !1)), m && (M && c.insertBefore(d), c[0].f7RelatedPage = p[0], p[0].f7RelatedNavbar = c[0]), M && p.insertBefore(l), i.pageInitCallback(e, {
                        pageContainer: p[0],
                        url: h,
                        position: "left",
                        navbarInnerContainer: m ? c[0] : void 0,
                        context: v.context,
                        query: a.query,
                        fromPage: l && l.length && l[0].f7PageData,
                        preloadOnly: C
                    }), m && i.navbarInitCallback(e, p[0], f[0], c[0], h, "right"), m && c.hasClass("navbar-on-left") && b && i.router.prepareNavbar(c, d, "left"), C) return void(e.allowPageChange = !0);
                e.url = h;
                p[0].clientLeft;
                n()
            }
            a = a || {};
            var l, p, d, c, f, u, m, h = a.url,
                g = a.content,
                v = {
                    content: a.content
                },
                w = a.template,
                b = a.animatePages,
                C = a.preloadOnly,
                y = a.pushState,
                x = (a.ignoreCache, a.force),
                T = a.pageName,
                k = s(e.container),
                S = s(e.pagesContainer),
                P = S.children(".page:not(.cached)"),
                M = !0;
            return "undefined" == typeof b && (b = e.params.animatePages), i.pluginHook("routerBack", e, a), (i.params.template7Pages && "string" == typeof g || w) && (v = i.router.template7Render(e, a), v.content && !g && (g = v.content)), i.params.pushState && ("undefined" == typeof y && (y = !0), !C && history.state && y && history.back()), P.length > 1 && !x ? C ? void(e.allowPageChange = !0) : (e.url = e.history[e.history.length - 2], h = e.url, p = s(P[P.length - 2]), l = s(P[P.length - 1]), e.params.dynamicNavbar && (m = !0, u = k.find(".navbar-inner:not(.cached)"), c = s(u[0]), d = s(u[1]), (0 === c.length || 0 === d.length || d[0] === c[0]) && (m = !1)), M = !1, void o()) : x ? h && h === e.url || T && e.activePage && e.activePage.name === T ? void(e.allowPageChange = !0) : g ? (r(), void o()) : T && e.params.domCache ? (T && (h = "#" + T), p = s(k).find('.page[data-page="' + T + '"]'), p[0].f7PageData && p[0].f7PageData.url && (h = p[0].f7PageData.url), e.params.dynamicNavbar && (c = s(k).find('.navbar-inner[data-page="' + T + '"]'), 0 === c.length && (c = s(p[0].f7RelatedNavbar))), void o()) : void(e.allowPageChange = !0) : (C || (e.url = e.history[e.history.length - 2], h = e.url), g ? (r(), void o()) : T ? (p = s(k).find('.page[data-page="' + T + '"]'), e.params.dynamicNavbar && (c = s(k).find('.navbar-inner[data-page="' + T + '"]')), void o()) : void(e.allowPageChange = !0))
        }, i.router.back = function(e, a) {
            function t(t) {
                i.router.preprocess(t, n, function(t) {
                    a.content = t, i.router._back(e, a)
                })
            }
            a = a || {};
            var n = a.url,
                r = a.content,
                o = a.pageName;
            o && o.indexOf("?") > 0 && (a.query = s.parseUrlQuery(o), a.pageName = o = o.split("?")[0]);
            var l = a.force;
            if (!e.allowPageChange) return !1;
            e.allowPageChange = !1, i.xhr && e.xhr && e.xhr === i.xhr && (i.xhr.abort(), i.xhr = !1);
            var p = s(e.pagesContainer).find(".page:not(.cached)");
            if (p.length > 1 && !l) return void i.router._back(e, a);
            if (l) {
                if (!n && r) return void t(r);
                if (!n && o) return o && (n = "#" + o), void t();
                if (n) return void i.get(a.url, e, a.ignoreCache, function(a, n) {
                    return n ? void(e.allowPageChange = !0) : void t(a)
                })
            } else {
                if (n = a.url = e.history[e.history.length - 2], !n) return void(e.allowPageChange = !0);
                if (0 === n.indexOf("#") && e.contentCache[n]) return void t(e.contentCache[n]);
                if (0 === n.indexOf("#") && e.params.domCache) return o || (a.pageName = n.split("#")[1]), void t();
                if (0 !== n.indexOf("#")) return void i.get(a.url, e, a.ignoreCache, function(a, n) {
                    return n ? void(e.allowPageChange = !0) : void t(a)
                })
            }
            e.allowPageChange = !0
        }, i.router.afterBack = function(e, a, t) {
            a = s(a), t = s(t), e.params.domCache && e.initialPages.indexOf(a[0]) >= 0 ? a.removeClass("page-from-center-to-right").addClass("cached") : (a.remove(), i.pageRemoveCallback(e, a[0], "right")), t.removeClass("page-from-left-to-center page-on-left").addClass("page-on-center"), e.allowPageChange = !0;
            var n, r = e.history.pop();
            if (e.params.dynamicNavbar) {
                var o = s(e.container).find(".navbar-inner:not(.cached)"),
                    l = s(a[0].f7RelatedNavbar || o[1]);
                e.params.domCache && e.initialNavbars.indexOf(l[0]) >= 0 ? l.removeClass("navbar-from-center-to-right").addClass("cached") : l.remove(), n = s(o[0]).removeClass("navbar-on-left navbar-from-left-to-center").addClass("navbar-on-center")
            }
            if (e.params.domCache && s(e.container).find(".page.cached").each(function() {
                    var a = s(this),
                        t = (a.index(), a[0].f7PageData && a[0].f7PageData.url);
                    t && e.history.indexOf(t) < 0 && e.initialPages.indexOf(this) < 0 && (a[0].f7RelatedNavbar && s(a[0].f7RelatedNavbar).remove(), a.remove())
                }), !e.params.domCache && r && r.indexOf("#") > -1 && r in e.contentCache && (e.contentCache[r] = null, delete e.contentCache[r]), i.params.pushState && i.pushStateClearQueue(), e.params.preloadPreviousPage)
                if (e.params.domCache && e.history.length > 1) {
                    var p, d, c = e.history[e.history.length - 2];
                    c && e.pagesCache[c] ? (p = s(e.container).find('.page[data-page="' + e.pagesCache[c] + '"]'), p.insertBefore(t), n && (d = s(e.container).find('.navbar-inner[data-page="' + e.pagesCache[c] + '"]'), d.insertBefore(n), d && 0 !== d.length || (d = n.prev(".navbar-inner.cached")))) : (p = t.prev(".page.cached"), n && (d = n.prev(".navbar-inner.cached"))), p && p.length > 0 && p.removeClass("cached page-on-right page-on-center").addClass("page-on-left"), d && d.length > 0 && d.removeClass("cached navbar-on-right navbar-on-center").addClass("navbar-on-left")
                } else i.router.back(e, {
                    preloadOnly: !0
                })
        };
        var f = document.createElement("div");
        i.modalStack = [], i.modalStackClearQueue = function() {
            i.modalStack.length && i.modalStack.shift()()
        }, i.modal = function(e) {
            e = e || {};
            var a = "";
            if (i.params.modalTemplate) i._compiledTemplates.modal || (i._compiledTemplates.modal = l.compile(i.params.modalTemplate)), a = i._compiledTemplates.modal(e);
            else {
                var t = "";
                if (e.buttons && e.buttons.length > 0)
                    for (var n = 0; n < e.buttons.length; n++) t += '<span class="modal-button' + (e.buttons[n].bold ? " modal-button-bold" : "") + '">' + e.buttons[n].text + "</span>";
                var r = e.title ? '<div class="modal-title">' + e.title + "</div>" : "",
                    o = e.text ? '<div class="modal-text">' + e.text + "</div>" : "",
                    p = e.afterText ? e.afterText : "",
                    d = e.buttons && 0 !== e.buttons.length ? "" : "modal-no-buttons",
                    c = e.verticalButtons ? "modal-buttons-vertical" : "";
                a = '<div class="modal ' + d + '"><div class="modal-inner">' + (r + o + p) + '</div><div class="modal-buttons ' + c + '">' + t + "</div></div>"
            }
            f.innerHTML = a;
            var u = s(f).children();
            return s("body").append(u[0]), u.find(".modal-button").each(function(a, t) {
                s(t).on("click", function(t) {
                    e.buttons[a].close !== !1 && i.closeModal(u), e.buttons[a].onClick && e.buttons[a].onClick(u, t), e.onClick && e.onClick(u, a)
                })
            }), i.openModal(u), u[0]
        }, i.alert = function(e, a, t) {
            return "function" == typeof a && (t = arguments[1], a = void 0), i.modal({
                text: e || "",
                title: "undefined" == typeof a ? i.params.modalTitle : a,
                buttons: [{
                    text: i.params.modalButtonOk,
                    bold: !0,
                    onClick: t
                }]
            })
        }, i.confirm = function(e, a, t, n) {
            return "function" == typeof a && (n = arguments[2], t = arguments[1], a = void 0), i.modal({
                text: e || "",
                title: "undefined" == typeof a ? i.params.modalTitle : a,
                buttons: [{
                    text: i.params.modalButtonCancel,
                    onClick: n
                }, {
                    text: i.params.modalButtonOk,
                    bold: !0,
                    onClick: t
                }]
            })
        }, i.prompt = function(e, a, t, n) {
            return "function" == typeof a && (n = arguments[2], t = arguments[1], a = void 0), i.modal({
                text: e || "",
                title: "undefined" == typeof a ? i.params.modalTitle : a,
                afterText: '<input type="text" class="modal-text-input">',
                buttons: [{
                    text: i.params.modalButtonCancel
                }, {
                    text: i.params.modalButtonOk,
                    bold: !0
                }],
                onClick: function(e, a) {
                    0 === a && n && n(s(e).find(".modal-text-input").val()), 1 === a && t && t(s(e).find(".modal-text-input").val())
                }
            })
        }, i.modalLogin = function(e, a, t, n) {


            //here modification of modal login

            var output = '<div class="list-block">  <ul> ';
            if (e.indexOf(',') === -1) {
 
 output = output + '  <li  data-popup=".popup-about"  class="Edit open-popup" id="'+e+'"  onclick=" addItem(this.id);  " >  <label class="label-checkbox item-content">          <input   type="checkbox"  id="' + e  + '"   name = "selectedSearchPopOn"  onchange="sessionStorage.setItem(this.name,this.id);createSearchScreenPopOn();closeModalLogin();   "    >  <div class="item-media"> <i class="icon icon-form-checkbox"></i>  </div> <div class="item-inner">  <div class="item-title">' + e  + '</div> </div> </label>  </li>    ';
            } else {
                for (var count = 0; count < e.split(',').length; count++) {
                 
                    output = output + '  <li  data-popup=".popup-about"  class="Edit open-popup" id="' + e.split(',')[count] + '"  onclick=" addItem(this.id);  " >  <label class="label-checkbox item-content">          <input   type="checkbox"  id="' + e.split(',')[count] + '"   name = "selectedSearchPopOn"  onchange="sessionStorage.setItem(this.name,this.id);createSearchScreenPopOn();closeModalLogin();   "    >  <div class="item-media"> <i class="icon icon-form-checkbox"></i>  </div> <div class="item-inner">  <div class="item-title">' + e.split(',')[count] + '</div> </div> </label>  </li>    ';
              
            
  
            
            }
                
            }
            output = '<form id = "formcheck"  />' + output + '</form> ';

            return "function" == typeof a && (n = arguments[2], t = arguments[1], a = void 0), i.modal({
                text: " ",
                title: "",
                afterText: output + '</ul></div> ',

                buttons: [{
                        text: i.params.modalButtonCancel/*,
                        onClick: i.close*/

                    } //, {
                    //   text: '<a href="#"  style="color: #FFFFFF"   id="" onclick="addItem(this.id,this.name); "    data-popup=".popup-about"  class="Edit open-popup" name=""   >   OK</a>',

                    // text: '<a href="#"  style="color: #FFFFFF"    id="" onclick=" addItem(this.id); "   data-popup=".popup-about"  class="Edit open-popup" name=""   >   &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;OK&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; </a>',
                    //   text:'',// 'ok',//'<a href="#"  style="color: #FFFFFF"    id="" onclick=" addItem(this.id); "  data-popup=".popup-about"  class="Edit open-popup" name=""    >   &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;OK&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; </a>',


                    //     bold: !0
                    // }

                ],
                onClick: function(e, a) { 
                    var r = inputChecked,
                        i = "";
                    0 === a && n && n(r, i), 1 === a && t && t(r, i)
                }
            })

        }, i.modalPassword = function(e, a, t, n) {
            return "function" == typeof a && (n = arguments[2], t = arguments[1], a = void 0), i.modal({
                text: e || "",
                title: "undefined" == typeof a ? i.params.modalTitle : a,
                afterText: '<input type="password" name="modal-password" placeholder="' + i.params.modalPasswordPlaceholder + '" class="modal-text-input">',
                buttons: [{
                    text: i.params.modalButtonCancel
                }, {
                    text: i.params.modalButtonOk,
                    bold: !0
                }],
                onClick: function(e, a) {
                    var r = s(e).find('.modal-text-input[name="modal-password"]').val();
                    0 === a && n && n(r), 1 === a && t && t(r)
                }
            })
        }, i.showPreloader = function(e) {
            return i.modal({
                title: e || i.params.modalPreloaderTitle,
                text: '<div class="preloader"></div>'
            })
        }, i.hidePreloader = function() {
            i.closeModal(".modal.modal-in")
        }, i.showIndicator = function() {
            s("body").append('<div class="preloader-indicator-overlay"></div><div class="preloader-indicator-modal"><span class="preloader preloader-white"></span></div>')
        }, i.hideIndicator = function() {
            s(".preloader-indicator-overlay, .preloader-indicator-modal").remove()
        }, i.actions = function(e, a) {
            var t, n, r, o = !1;
            1 === arguments.length ? a = e : i.device.ios ? i.device.ipad && (o = !0) : s(window).width() >= 768 && (o = !0), a = a || [], a.length > 0 && !s.isArray(a[0]) && (a = [a]);
            var p;
            if (o) {
                var d = '<div class="popover actions-popover"><div class="popover-inner">{{#each this}}<div class="list-block"><ul>{{#each this}}{{#if label}}<li class="actions-popover-label {{#if color}}color-{{color}}{{/if}} {{#if bold}}actions-popover-bold{{/if}}">{{text}}</li>{{else}}<li><a href="#"  style="color: #FFFFFF"   class="item-link list-button {{#if color}}color-{{color}}{{/if}} {{#if bg}}bg-{{bg}}{{/if}} {{#if bold}}actions-popover-bold{{/if}}">{{text}}</a></li>{{/if}}{{/each}}</ul></div>{{/each}}</div></div>';
                i._compiledTemplates.actionsPopover || (i._compiledTemplates.actionsPopover = l.compile(d));
                var c = i._compiledTemplates.actionsPopover(a);
                t = s(i.popover(c, e, !0)), n = ".list-block ul", r = ".list-button"
            } else {
                if (i.params.modalActionsTemplate) i._compiledTemplates.actions || (i._compiledTemplates.actions = l.compile(i.params.modalActionsTemplate)), p = i._compiledTemplates.actions(a);
                else {
                    for (var u = "", m = 0; m < a.length; m++)
                        for (var h = 0; h < a[m].length; h++) {
                            0 === h && (u += '<div class="actions-modal-group">');
                            var g = a[m][h],
                                v = g.label ? "actions-modal-label" : "actions-modal-button";
                            g.bold && (v += " actions-modal-button-bold"), g.color && (v += " color-" + g.color), g.bg && (v += " bg-" + g.bg), u += '<span class="' + v + '">' + g.text + "</span>", h === a[m].length - 1 && (u += "</div>")
                        }
                    p = '<div class="actions-modal">' + u + "</div>"
                }
                f.innerHTML = p, t = s(f).children(), s("body").append(t[0]), n = ".actions-modal-group", r = ".actions-modal-button"
            }
            var w = t.find(n);
            return w.each(function(e, n) {
                var l = e;
                s(n).children().each(function(e, n) {
                    var p, d = e,
                        c = a[l][d];
                    !o && s(n).is(r) && (p = s(n)), o && s(n).find(r).length > 0 && (p = s(n).find(r)), p && p.on("click", function(e) {
                        c.close !== !1 && i.closeModal(t), c.onClick && c.onClick(t, e)
                    })
                })
            }), o || i.openModal(t), t[0]
        }, i.popover = function(e, a, t) {
            function n() {
                e.css({
                    left: "",
                    top: ""
                });
                var t, n, r = e.width(),
                    i = e.height(),
                    o = e.find(".popover-angle"),
                    l = o.width() / 2;
                o.removeClass("on-left on-right on-top on-bottom").css({
                    left: "",
                    top: ""
                });
                var p = a.outerWidth(),
                    d = a.outerHeight(),
                    c = a.offset(),
                    f = a.parents(".page");
                f.length > 0 && (c.top = c.top - f[0].scrollTop);
                var u = s(window).height(),
                    m = s(window).width(),
                    h = 0,
                    g = 0,
                    v = 0,
                    w = "top";
                i + l < c.top ? h = c.top - i - l : i + l < u - c.top - d ? (w = "bottom", h = c.top + d + l) : (w = "middle", h = d / 2 + c.top - i / 2, v = h, 0 > h ? h = 5 : h + i > u && (h = u - i - 5), v -= h), "top" === w || "bottom" === w ? (g = p / 2 + c.left - r / 2, v = g, 5 > g && (g = 5), g + r > m && (g = m - r - 5), "top" === w && o.addClass("on-bottom"), "bottom" === w && o.addClass("on-top"), v -= g, t = r / 2 - l + v, t = Math.max(Math.min(t, r - 2 * l - 6), 6), o.css({
                    left: t + "px"
                })) : "middle" === w && (g = c.left - r - l, o.addClass("on-right"), 5 > g && (g = c.left + p + l, o.removeClass("on-right").addClass("on-left")), g + r > m && (g = m - r - 5, o.removeClass("on-right").addClass("on-left")), n = i / 2 - l + v, n = Math.max(Math.min(n, i - 2 * l - 6), 6), o.css({
                    top: n + "px"
                })), e.css({
                    top: h + "px",
                    left: g + "px"
                })
            }
            if ("undefined" == typeof t && (t = !0), "string" == typeof e && e.indexOf("<") >= 0) {
                var r = document.createElement("div");
                if (r.innerHTML = e.trim(), !(r.childNodes.length > 0)) return !1;
                e = r.childNodes[0], t && e.classList.add("remove-on-close"), s("body").append(e)
            }
            return e = s(e), a = s(a), 0 === e.length || 0 === a.length ? !1 : (0 === e.find(".popover-angle").length && e.append('<div class="popover-angle"></div>'), e.show(), n(), s(window).on("resize", n), e.on("close", function() {
                s(window).off("resize", n)
            }), e.find("." + i.params.viewClass).length > 0 && i.sizeNavbars(e.find("." + i.params.viewClass)[0]), i.openModal(e), e[0])
        }, i.popup = function(e, a) {
            if ("undefined" == typeof a && (a = !0), "string" == typeof e && e.indexOf("<") >= 0) {
                var t = document.createElement("div");
                if (t.innerHTML = e.trim(), !(t.childNodes.length > 0)) return !1;
                e = t.childNodes[0], a && e.classList.add("remove-on-close"), s("body").append(e)
            }
            return e = s(e), 0 === e.length ? !1 : (e.show(), e.find("." + i.params.viewClass).length > 0 && i.sizeNavbars(e.find("." + i.params.viewClass)[0]), i.openModal(e), e[0])
        }, i.pickerModal = function(e, a) {
            if ("undefined" == typeof a && (a = !0), "string" == typeof e && e.indexOf("<") >= 0) {
                if (e = s(e), !(e.length > 0)) return !1;
                a && e.addClass("remove-on-close"), s("body").append(e[0])
            }
            return e = s(e), 0 === e.length ? !1 : (e.show(), i.openModal(e), e[0])
        }, i.loginScreen = function(e) {
            return e || (e = ".login-screen"), e = s(e), 0 === e.length ? !1 : (e.show(), e.find("." + i.params.viewClass).length > 0 && i.sizeNavbars(e.find("." + i.params.viewClass)[0]), i.openModal(e), e[0])
        }, i.openModal = function(e) {
            e = s(e);
            var a = e.hasClass("modal");
            if (s(".modal.modal-in:not(.modal-out)").length && i.params.modalStack && a) return void i.modalStack.push(function() {
                i.openModal(e)
            });
            var t = (e.hasClass("popover"), e.hasClass("popup")),
                n = e.hasClass("login-screen"),
                r = e.hasClass("picker-modal");
            a && (e.show(), e.css({
                marginTop: -Math.round(e.outerHeight() / 2) + "px"
            }));
            var o;
            n || r || (0 !== s(".modal-overlay").length || t || s("body").append('<div class="modal-overlay"></div>'), 0 === s(".popup-overlay").length && t && s("body").append('<div class="popup-overlay"></div>'), o = s(t ? ".popup-overlay" : ".modal-overlay"));
            e[0].clientLeft;
            return e.trigger("open"), r && s("body").addClass("with-picker-modal"), n || r || o.addClass("modal-overlay-visible"), e.removeClass("modal-out").addClass("modal-in").transitionEnd(function() {
                e.trigger(e.hasClass("modal-out") ? "closed" : "opened")
            }), !0
        }, i.closeModal = function(e) {
            if (e = s(e || ".modal-in"), "undefined" == typeof e || 0 !== e.length) {
                var a = e.hasClass("modal"),
                    t = e.hasClass("popover"),
                    n = e.hasClass("popup"),
                    r = e.hasClass("login-screen"),
                    o = e.hasClass("picker-modal"),
                    l = e.hasClass("remove-on-close"),
                    p = s(n ? ".popup-overlay" : ".modal-overlay");
                return n ? e.length === s(".popup.modal-in").length && p.removeClass("modal-overlay-visible") : o || p.removeClass("modal-overlay-visible"), e.trigger("close"), o && (s("body").removeClass("with-picker-modal"), s("body").addClass("picker-modal-closing")), t ? (e.removeClass("modal-in modal-out").trigger("closed").hide(), l && e.remove()) : (e.removeClass("modal-in").addClass("modal-out").transitionEnd(function() {
                    e.trigger(e.hasClass("modal-out") ? "closed" : "opened"), o && s("body").removeClass("picker-modal-closing"), n || r || o ? (e.removeClass("modal-out").hide(), l && e.length > 0 && e.remove()) : e.remove()
                }), a && i.params.modalStack && i.modalStackClearQueue()), !0
            }
        }, i.allowPanelOpen = !0, i.openPanel = function(e) {
            function a() {
                r.transitionEnd(function(e) {
                    s(e.target).is(r) ? (t.trigger(t.hasClass("active") ? "opened" : "closed"), i.allowPanelOpen = !0) : a()
                })
            }
            if (!i.allowPanelOpen) return !1;
            var t = s(".panel-" + e);
            if (0 === t.length || t.hasClass("active")) return !1;
            i.closePanel(), i.allowPanelOpen = !1;
            var n = t.hasClass("panel-reveal") ? "reveal" : "cover";
            t.css({
                display: "block"
            }).addClass("active"), t.trigger("open"), t.find("." + i.params.viewClass).length > 0 && i.sizeNavbars && i.sizeNavbars(t.find("." + i.params.viewClass)[0]);
            var r = (t[0].clientLeft, "reveal" === n ? s("." + i.params.viewsClass) : t);
            return a(), s("body").addClass("with-panel-" + e + "-" + n), !0
        }, i.closePanel = function() {
            var e = s(".panel.active");
            if (0 === e.length) return !1;
            var a = e.hasClass("panel-reveal") ? "reveal" : "cover",
                t = e.hasClass("panel-left") ? "left" : "right";
            e.removeClass("active");
            var n = "reveal" === a ? s("." + i.params.viewsClass) : e;
            e.trigger("close"), i.allowPanelOpen = !1, n.transitionEnd(function() {
                e.hasClass("active") || (e.css({
                    display: ""
                }), e.trigger("closed"), s("body").removeClass("panel-closing"), i.allowPanelOpen = !0)
            }), s("body").addClass("panel-closing").removeClass("with-panel-" + t + "-" + a)
        }, i.initSwipePanels = function() {
            function e(e) {
                if (i.allowPanelOpen && (i.params.swipePanel || i.params.swipePanelOnlyClose) && !o && !(s(".modal-in, .photo-browser-in").length > 0 || !i.params.swipePanelCloseOpposite && !i.params.swipePanelOnlyClose && s(".panel.active").length > 0 && !n.hasClass("active"))) {
                    if (w.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, w.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, (i.params.swipePanelCloseOpposite || i.params.swipePanelOnlyClose) && (r = s(".panel.active").length > 0 ? s(".panel.active").hasClass("panel-left") ? "left" : "right" : i.params.swipePanel), n = s(".panel.panel-" + r), u = n.hasClass("active"), i.params.swipePanelActiveArea && !u) {
                        if ("left" === r && w.x > i.params.swipePanelActiveArea) return;
                        if ("right" === r && w.x < window.innerWidth - i.params.swipePanelActiveArea) return
                    }
                    l = !1, o = !0, p = void 0, d = (new Date).getTime(), g = void 0
                }
            }

            function a(e) {
                if (o && !e.f7PreventPanelSwipe) {
                    var a = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                        t = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY;
                    if ("undefined" == typeof p && (p = !!(p || Math.abs(t - w.y) > Math.abs(a - w.x))), p) return void(o = !1);
                    if (!g && (g = a > w.x ? "to-right" : "to-left", "left" === r && "to-left" === g && !n.hasClass("active") || "right" === r && "to-right" === g && !n.hasClass("active"))) return void(o = !1);
                    if (i.params.swipePanelNoFollow) {
                        var s = (new Date).getTime() - d;
                        return 300 > s && ("to-left" === g && ("right" === r && i.openPanel(r), "left" === r && n.hasClass("active") && i.closePanel()), "to-right" === g && ("left" === r && i.openPanel(r), "right" === r && n.hasClass("active") && i.closePanel())), o = !1, void(l = !1)
                    }
                    l || (h = n.hasClass("panel-cover") ? "cover" : "reveal", u || (n.show(), v.show()), m = n[0].offsetWidth, n.transition(0), n.find("." + i.params.viewClass).length > 0 && i.sizeNavbars && i.sizeNavbars(n.find("." + i.params.viewClass)[0])), l = !0, e.preventDefault();
                    var C = u ? 0 : -i.params.swipePanelThreshold;
                    "right" === r && (C = -C), c = a - w.x + C, "right" === r ? (f = c - (u ? m : 0), f > 0 && (f = 0), -m > f && (f = -m)) : (f = c + (u ? m : 0), 0 > f && (f = 0), f > m && (f = m)), "reveal" === h ? (b.transform("translate3d(" + f + "px,0,0)").transition(0), v.transform("translate3d(" + f + "px,0,0)"), i.pluginHook("swipePanelSetTransform", b[0], n[0], Math.abs(f / m))) : (n.transform("translate3d(" + f + "px,0,0)").transition(0), i.pluginHook("swipePanelSetTransform", b[0], n[0], Math.abs(f / m)))
                }
            }

            function t() {
                if (!o || !l) return o = !1, void(l = !1);
                o = !1, l = !1;
                var e, a = (new Date).getTime() - d,
                    t = 0 === f || Math.abs(f) === m;
                if (e = u ? f === -m ? "reset" : 300 > a && Math.abs(f) >= 0 || a >= 300 && Math.abs(f) <= m / 2 ? "left" === r && f === m ? "reset" : "swap" : "reset" : 0 === f ? "reset" : 300 > a && Math.abs(f) > 0 || a >= 300 && Math.abs(f) >= m / 2 ? "swap" : "reset", "swap" === e && (i.allowPanelOpen = !0, u ? (i.closePanel(), t && (n.css({
                        display: ""
                    }), s("body").removeClass("panel-closing"))) : i.openPanel(r), t && (i.allowPanelOpen = !0)), "reset" === e)
                    if (u) i.allowPanelOpen = !0, i.openPanel(r);
                    else if (i.closePanel(), t) i.allowPanelOpen = !0, n.css({
                    display: ""
                });
                else {
                    var p = "reveal" === h ? b : n;
                    s("body").addClass("panel-closing"), p.transitionEnd(function() {
                        i.allowPanelOpen = !0, n.css({
                            display: ""
                        }), s("body").removeClass("panel-closing")
                    })
                }
                "reveal" === h && (b.transition(""), b.transform("")), n.transition("").transform(""), v.css({
                    display: ""
                }).transform("")
            }
            var n, r;
            if (i.params.swipePanel) {
                if (n = s(".panel.panel-" + i.params.swipePanel), r = i.params.swipePanel, 0 === n.length) return
            } else {
                if (!i.params.swipePanelOnlyClose) return;
                if (0 === s(".panel").length) return
            }
            var o, l, p, d, c, f, u, m, h, g, v = s(".panel-overlay"),
                w = {},
                b = s("." + i.params.viewsClass);
            s(document).on(i.touchEvents.start, e), s(document).on(i.touchEvents.move, a), s(document).on(i.touchEvents.end, t)
        }, i.initImagesLazyLoad = function(e) {
            function a(e) {
                function t() {
                    e.removeClass("lazy").addClass("lazy-loaded"), n ? e.css("background-image", "url(" + r + ")") : e.attr("src", r), i.params.imagesLazyLoadSequential && (f = !1, c.length > 0 && a(c.shift()))
                }
                e = s(e);
                var n = e.attr("data-background"),
                    r = n ? n : e.attr("data-src");
                if (r) {
                    if (!i.params.imagesLazyLoadSequential) return void t();
                    if (f) return void(c.indexOf(e[0]) < 0 && c.push(e[0]));
                    f = !0;
                    var o = new Image;
                    o.onload = t, o.onerror = t, o.src = r
                }
            }

            function t() {
                l = e.find(".lazy"), l.each(function(e, t) {
                    t = s(t), n(t[0]) && a(t)
                })
            }

            function n(e) {
                var a = e.getBoundingClientRect(),
                    t = i.params.imagesLazyLoadThreshold || 0;
                return a.top >= 0 - t && a.left >= 0 - t && a.top <= window.innerHeight + t && a.left <= window.innerWidth + t
            }

            function r(e) {
                var a = e ? "off" : "on";
                l[a]("lazy", t), p[a]("lazy", t), p[a]("scroll", t), s(window)[a]("resize", t)
            }

            function o() {
                r(!0)
            }
            e = s(e);
            var l;
            if (e.hasClass("lazy") ? (l = e, e = l.parents(".page")) : l = e.find(".lazy"), 0 !== l.length) {
                var p;
                if (e.hasClass("page-content") ? (p = e, e = e.parents(".page")) : p = e.find(".page-content"), 0 !== p.length) {
                    var d = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXCwsK592mkAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==";
                    "string" == typeof i.params.imagesLazyLoadPlaceholder && (d = i.params.imagesLazyLoadPlaceholder), i.params.imagesLazyLoadPlaceholder !== !1 && l.attr("src", d);
                    var c = [],
                        f = !1;
                    e[0].f7DestroyImagesLazyLoad = o, r(), e.hasClass("page") && e.once("pageBeforeRemove", o), t(), e.once("pageAfterAnimation", t)
                }
            }
        }, i.destroyImagesLazyLoad = function(e) {
            e = s(e), e.length > 0 && e[0].f7DestroyImagesLazyLoad && e[0].f7DestroyLazyLoad()
        }, i.reinitImagesLazyLoad = function(e) {
            e = s(e), e.length > 0 && e.trigger("lazy")
        }, i.initMessages = function(e) {
            var a = s(e),
                t = a.find(".messages");
            if (0 !== t.length) {
                var n = a.find(".page-content");
                t.hasClass("messages-auto-layout") && i.updateMessagesLayout(t), t.hasClass("new-messages-first") || (n[0].scrollTop = n[0].scrollHeight - n[0].offsetHeight)
            }
        }, i.addMessage = function(e, a, t) {
            if (e = e || {}, e.type = e.type || "sent", !e.text || 0 === e.length) return !1;
            if (a = s(a || ".messages-content"), 0 === a.length) return !1;
            var n = a.find(".messages"),
                r = n.hasClass("new-messages-first");
            "undefined" == typeof t && (t = r ? !0 : !1);
            var o = t ? "prepend" : "append",
                l = "";
            e.day && (l += '<div class="messages-date">' + e.day + (e.time ? "," : "") + (e.time ? " <span>" + e.time + "</span>" : "") + "</div>");
            var p = e.text.indexOf("<img") >= 0 ? "message-pic" : "",
                d = e.avatar ? "message-with-avatar" : "",
                c = "message message-" + e.type + " " + p + " " + d + " message-appear-from-" + ("append" === o ? "bottom" : "top");
            l += '<div class="' + c + '">' + (e.name ? '<div class="message-name">' + e.name + "</div>" : "") + '<div class="message-text">' + e.text + "</div>" + (e.avatar ? '<div class="message-avatar" style="background-image:url(' + e.avatar + ')"></div>' : "") + (e.label ? '<div class="message-label">' + e.label + "</div>" : "") + "</div>", n[o](l), n.hasClass("messages-auto-layout") && i.updateMessagesLayout(n), ("append" === o && !r || "prepend" === o && r) && i.scrollMessagesContainer(a)
        }, i.updateMessagesLayout = function(e) {
            e.find(".message").each(function() {
                var e = s(this);
                e.find(".message-text img").length > 0 && e.addClass("message-pic"), e.find(".message-avatar").length > 0 && e.addClass("message-with-avatar")
            }), e.find(".message-sent").each(function() {
                var e = s(this),
                    a = e.next(".message-sent"),
                    t = e.prev(".message-sent");
                0 === a.length ? e.addClass("message-last message-with-tail") : e.removeClass("message-last message-with-tail"), 0 === t.length ? e.addClass("message-first") : e.removeClass("message-first"), t.length > 0 && t.find(".message-name").length > 0 && e.find(".message-name").length > 0 && t.find(".message-name").text() !== e.find(".message-name").text() && (t.addClass("message-last message-with-tail"), e.addClass("message-first"))
            }), e.find(".message-received").each(function() {
                var e = s(this),
                    a = e.next(".message-received"),
                    t = e.prev(".message-received");
                0 === a.length ? e.addClass("message-last message-with-tail") : e.removeClass("message-last message-with-tail"), 0 === t.length ? e.addClass("message-first") : e.removeClass("message-first"), t.length > 0 && t.find(".message-name").length > 0 && e.find(".message-name").length > 0 && t.find(".message-name").text() !== e.find(".message-name").text() && (t.addClass("message-last message-with-tail"), e.addClass("message-first"))
            })
        }, i.scrollMessagesContainer = function(e) {
            if (e = s(e || ".messages-content"), 0 !== e.length) {
                var a = e.find(".messages"),
                    t = a.hasClass("new-messages-first"),
                    n = e[0].scrollTop,
                    r = t ? 0 : e[0].scrollHeight - e[0].offsetHeight;
                r !== n && e.scrollTop(r, 400)
            }
        }, i.swipeoutOpenedEl = void 0, i.allowSwipeout = !0, i.initSwipeout = function(e) {
            function a(e) {
                i.allowSwipeout && (o = !1, r = !0, l = void 0, I.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, I.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, p = (new Date).getTime())
            }

            function t(e) {
                if (r) {
                    var a = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                        t = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY;
                    if ("undefined" == typeof l && (l = !!(l || Math.abs(t - I.y) > Math.abs(a - I.x))), l) return void(r = !1);
                    if (!o) {
                        if (s(".list-block.sortable-opened").length > 0) return;
                        c = s(this), f = c.find(".swipeout-content"), u = c.find(".swipeout-actions-right"), m = c.find(".swipeout-actions-left"), h = g = C = y = k = T = null, M = m.hasClass("swipeout-actions-no-fold") || i.params.swipeoutActionsNoFold, O = u.hasClass("swipeout-actions-no-fold") || i.params.swipeoutActionsNoFold, m.length > 0 && (h = m.outerWidth(), C = m.children("a"), T = m.find(".swipeout-overswipe")), u.length > 0 && (g = u.outerWidth(), y = u.children("a"), k = u.find(".swipeout-overswipe")), w = c.hasClass("swipeout-opened"), w && (b = c.find(".swipeout-actions-left.swipeout-actions-opened").length > 0 ? "left" : "right"), c.removeClass("transitioning"), i.params.swipeoutNoFollow || (c.find(".swipeout-actions-opened").removeClass("swipeout-actions-opened"), c.removeClass("swipeout-opened"))
                    }
                    if (o = !0, e.preventDefault(), d = a - I.x, v = d, w && ("right" === b ? v -= g : v += h), v > 0 && 0 === m.length || 0 > v && 0 === u.length) {
                        if (!w) return void(r = o = !1);
                        v = 0
                    }
                    x = 0 > v ? "to-left" : v > 0 ? "to-right" : x ? x : "to-left";
                    var n, p, E;
                    if (e.f7PreventPanelSwipe = !0, i.params.swipeoutNoFollow) return w ? ("right" === b && d > 0 && i.swipeoutClose(c), "left" === b && 0 > d && i.swipeoutClose(c)) : (0 > d && u.length > 0 && i.swipeoutOpen(c, "right"), d > 0 && m.length > 0 && i.swipeoutOpen(c, "left")), r = !1, void(o = !1);
                    S = !1, P = !1;
                    var D;
                    if (u.length > 0)
                        for (E = v / g, -g > v && (v = -g - Math.pow(-v - g, .8), k.length > 0 && (P = !0)), n = 0; n < y.length; n++) "undefined" == typeof y[n]._buttonOffset && (y[n]._buttonOffset = y[n].offsetLeft), p = y[n]._buttonOffset, D = s(y[n]), k.length > 0 && D.hasClass("swipeout-overswipe") && D.css({
                            left: (P ? -p : 0) + "px"
                        }), D.transform("translate3d(" + (v - p * (1 + Math.max(E, -1))) + "px,0,0)");
                    if (m.length > 0)
                        for (E = v / h, v > h && (v = h + Math.pow(v - h, .8), T.length > 0 && (S = !0)), n = 0; n < C.length; n++) "undefined" == typeof C[n]._buttonOffset && (C[n]._buttonOffset = h - C[n].offsetLeft - C[n].offsetWidth), p = C[n]._buttonOffset, D = s(C[n]), T.length > 0 && D.hasClass("swipeout-overswipe") && D.css({
                            left: (S ? p : 0) + "px"
                        }), C.length > 1 && D.css("z-index", C.length - n), D.transform("translate3d(" + (v + p * (1 - Math.min(E, 1))) + "px,0,0)");
                    f.transform("translate3d(" + v + "px,0,0)")
                }
            }

            function n() {
                if (!r || !o) return r = !1, void(o = !1);
                r = !1, o = !1;
                var e, a, t, n, l, b, T = (new Date).getTime() - p;
                if (b = "to-left" === x ? O : M, t = "to-left" === x ? u : m, a = "to-left" === x ? g : h, e = 300 > T && (-10 > d && "to-left" === x || d > 10 && "to-right" === x) || T >= 300 && Math.abs(v) > a / 2 ? "open" : "close", 300 > T && (0 === Math.abs(v) && (e = "close"), Math.abs(v) === a && (e = "open")), "open" === e) {
                    i.swipeoutOpenedEl = c, c.trigger("open"), c.addClass("swipeout-opened transitioning");
                    var k = "to-left" === x ? -a : a;
                    if (f.transform("translate3d(" + k + "px,0,0)"), t.addClass("swipeout-actions-opened"), n = "to-left" === x ? y : C)
                        for (l = 0; l < n.length; l++) s(n[l]).transform("translate3d(" + k + "px,0,0)");
                    P && u.find(".swipeout-overswipe")[0].click(), S && m.find(".swipeout-overswipe")[0].click()
                } else c.trigger("close"), i.swipeoutOpenedEl = void 0, c.addClass("transitioning").removeClass("swipeout-opened"), f.transform(""), t.removeClass("swipeout-actions-opened");
                var I;
                if (C && C.length > 0 && C !== n)
                    for (l = 0; l < C.length; l++) I = C[l]._buttonOffset, "undefined" == typeof I && (C[l]._buttonOffset = h - C[l].offsetLeft - C[l].offsetWidth), s(C[l]).transform("translate3d(" + I + "px,0,0)");
                if (y && y.length > 0 && y !== n)
                    for (l = 0; l < y.length; l++) I = y[l]._buttonOffset, "undefined" == typeof I && (y[l]._buttonOffset = y[l].offsetLeft), s(y[l]).transform("translate3d(" + -I + "px,0,0)");
                f.transitionEnd(function() {
                    w && "open" === e || closed && "close" === e || (c.trigger("open" === e ? "opened" : "closed"), w && "close" === e && (u.length > 0 && y.transform(""), m.length > 0 && C.transform("")))
                })
            }
            var r, o, l, p, d, c, f, u, m, h, g, v, w, b, C, y, x, T, k, S, P, M, O, I = {};
            s(document).on(i.touchEvents.start, function(e) {
                if (i.swipeoutOpenedEl) {
                    var a = s(e.target);
                    i.swipeoutOpenedEl.is(a[0]) || a.parents(".swipeout").is(i.swipeoutOpenedEl) || a.hasClass("modal-in") || a.parents(".modal.modal-in").length > 0 || a.hasClass("modal-overlay") || i.swipeoutClose(i.swipeoutOpenedEl)
                }
            }), e ? (s(e).on(i.touchEvents.start, a), s(e).on(i.touchEvents.move, t), s(e).on(i.touchEvents.end, n)) : (s(document).on(i.touchEvents.start, ".list-block li.swipeout", a), s(document).on(i.touchEvents.move, ".list-block li.swipeout", t), s(document).on(i.touchEvents.end, ".list-block li.swipeout", n))
        }, i.swipeoutOpen = function(e, a, t) {
            if (e = s(e), 2 === arguments.length && "function" == typeof arguments[1] && (t = a), 0 !== e.length && (e.length > 1 && (e = s(e[0])), e.hasClass("swipeout") && !e.hasClass("swipeout-opened"))) {
                a || (a = e.find(".swipeout-actions-right").length > 0 ? "right" : "left");
                var n = e.find(".swipeout-actions-" + a);
                if (0 !== n.length) {
                    {
                        n.hasClass("swipeout-actions-no-fold") || i.params.swipeoutActionsNoFold
                    }
                    e.trigger("open").addClass("swipeout-opened").removeClass("transitioning"), n.addClass("swipeout-actions-opened");
                    var r, o = n.children("a"),
                        l = n.outerWidth(),
                        p = "right" === a ? -l : l;
                    if (o.length > 1) {
                        for (r = 0; r < o.length; r++) "right" === a ? s(o[r]).transform("translate3d(" + -o[r].offsetLeft + "px,0,0)") : s(o[r]).css("z-index", o.length - r).transform("translate3d(" + (l - o[r].offsetWidth - o[r].offsetLeft) + "px,0,0)"); {
                            o[1].clientLeft
                        }
                    }
                    for (e.addClass("transitioning"), r = 0; r < o.length; r++) s(o[r]).transform("translate3d(" + p + "px,0,0)");
                    e.find(".swipeout-content").transform("translate3d(" + p + "px,0,0)").transitionEnd(function() {
                        e.trigger("opened"), t && t.call(e[0])
                    }), i.swipeoutOpenedEl = e
                }
            }
        }, i.swipeoutClose = function(e, a) {
            if (e = s(e), 0 !== e.length && e.hasClass("swipeout-opened")) {
                var t = e.find(".swipeout-actions-opened").hasClass("swipeout-actions-right") ? "right" : "left",
                    n = e.find(".swipeout-actions-opened").removeClass("swipeout-actions-opened"),
                    r = (n.hasClass("swipeout-actions-no-fold") || i.params.swipeoutActionsNoFold, n.children("a")),
                    o = n.outerWidth();
                i.allowSwipeout = !1, e.trigger("close"), e.removeClass("swipeout-opened").addClass("transitioning"), e.find(".swipeout-content").transform("translate3d(0px,0,0)").transitionEnd(function() {
                    i.allowSwipeout = !0, r.transform(""), e.trigger("closed"), a && a.call(e[0])
                });
                for (var l = 0; l < r.length; l++) s(r[l]).transform("right" === t ? "translate3d(" + -r[l].offsetLeft + "px,0,0)" : "translate3d(" + (o - r[l].offsetWidth - r[l].offsetLeft) + "px,0,0)"), s(r[l]).css({
                    left: "0px"
                });
                i.swipeoutOpenedEl && i.swipeoutOpenedEl[0] === e[0] && (i.swipeoutOpenedEl = void 0)
            }
        }, i.swipeoutDelete = function(e, a) {
            if (e = s(e), 0 !== e.length) {
                e.length > 1 && (e = s(e[0])), i.swipeoutOpenedEl = void 0, e.trigger("delete"), e.css({
                    height: e.outerHeight() + "px"
                }); {
                    e[0].clientLeft
                }
                e.css({
                    height: "0px"
                }).addClass("deleting transitioning").transitionEnd(function() {
                    if (e.trigger("deleted"), a && a.call(e[0]), e.parents(".virtual-list").length > 0) {
                        var t = e.parents(".virtual-list")[0].f7VirtualList,
                            n = e[0].f7VirtualListIndex;
                        t && "undefined" != typeof n && t.deleteItem(n)
                    } else e.remove()
                });
                var t = "-100%";
                e.find(".swipeout-content").transform("translate3d(" + t + ",0,0)")
            }
        }, i.sortableToggle = function(e) {
            return e = s(e), 0 === e.length && (e = s(".list-block.sortable")), e.toggleClass("sortable-opened"), e.trigger(e.hasClass("sortable-opened") ? "open" : "close"), e
        }, i.sortableOpen = function(e) {
            return e = s(e), 0 === e.length && (e = s(".list-block.sortable")), e.addClass("sortable-opened"), e.trigger("open"), e
        }, i.sortableClose = function(e) {
            return e = s(e), 0 === e.length && (e = s(".list-block.sortable")), e.removeClass("sortable-opened"), e.trigger("close"), e
        }, i.initSortable = function() {
            function e(e) {
                r = !1, n = !0, o = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, p = s(this).parent(), c = p.parent().find("li"), g = p.parents(".sortable"), e.preventDefault(), i.allowPanelOpen = i.allowSwipeout = !1
            }

            function a(e) {
                if (n && p) {
                    var a = ("touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
                    r || (p.addClass("sorting"), g.addClass("sortable-sorting"), f = p[0].offsetTop, u = p.parent().height() - p[0].offsetTop - p.height(), d = p[0].offsetHeight), r = !0, e.preventDefault(), e.f7PreventPanelSwipe = !0, l = a - o;
                    var t = l; - f > t && (t = -f), t > u && (t = u), p.transform("translate3d(0," + t + "px,0)"), h = m = void 0, c.each(function() {
                        var e = s(this);
                        if (e[0] !== p[0]) {
                            var a = e[0].offsetTop,
                                n = e.height(),
                                r = p[0].offsetTop + t;
                            r >= a - n / 2 && p.index() < e.index() ? (e.transform("translate3d(0, " + -d + "px,0)"), m = e, h = void 0) : a + n / 2 >= r && p.index() > e.index() ? (e.transform("translate3d(0, " + d + "px,0)"), m = void 0, h || (h = e)) : s(this).transform("translate3d(0, 0%,0)")
                        }
                    })
                }
            }

            function t(e) {
                if (i.allowPanelOpen = i.allowSwipeout = !0, !n || !r) return n = !1, void(r = !1);
                e.preventDefault(), c.transform(""), p.removeClass("sorting"), g.removeClass("sortable-sorting");
                var a, t, o;
                m && (p.insertAfter(m), p.trigger("sort")), h && (p.insertBefore(h), p.trigger("sort")), (m || h) && g.hasClass("virtual-list") && (a = g[0].f7VirtualList, t = p[0].f7VirtualListIndex, o = h ? h[0].f7VirtualListIndex : m[0].f7VirtualListIndex, a && a.moveItem(t, o)), m = h = void 0, n = !1, r = !1
            }
            var n, r, o, l, p, d, c, f, u, m, h, g;
            s(document).on(i.touchEvents.start, ".list-block.sortable .sortable-handler", e), i.support.touch ? (s(document).on(i.touchEvents.move, ".list-block.sortable .sortable-handler", a), s(document).on(i.touchEvents.end, ".list-block.sortable .sortable-handler", t)) : (s(document).on(i.touchEvents.move, a), s(document).on(i.touchEvents.end, t))
        }, i.initSmartSelects = function(e) {
            var a = s(e);
            if (0 !== a.length) {
                var t = a.find(".smart-select");
                0 !== t.length && t.each(function() {
                    var e = s(this),
                        a = e.find("select");
                    if (0 !== a.length) {
                        var t = a[0];
                        if (0 !== t.length) {
                            for (var n = [], r = 0; r < t.length; r++) t[r].selected && n.push(t[r].textContent.trim());
                            var i = e.find(".item-after");
                            if (0 === i.length) e.find(".item-inner").append('<div class="item-after">' + n.join(", ") + "</div>");
                            else {
                                var o = i.text();
                                if (i.hasClass("smart-select-value"))
                                    for (r = 0; r < t.length; r++) t[r].selected = t[r].textContent.trim() === o.trim();
                                else i.text(n)
                            }
                        }
                    }
                })
            }
        }, i.smartSelectOpen = function(e) {
            function a(a) {
                if (m) {
                    var t = i.virtualList(s(a).find(".virtual-list"), {
                        items: P,
                        template: D,
                        height: h || void 0,
                        searchByItem: function(e, a, t) {
                            return t.text.toLowerCase().indexOf(e.trim()) >= 0 ? !0 : !1
                        }
                    });
                    s(a).once("popup" === r ? "closed" : "pageBeforeRemove", function() {
                        t && t.destroy && t.destroy()
                    })
                }
                s(a).on("change", 'input[name="' + I + '"]', function() {
                    var a = this,
                        t = a.value,
                        o = [];
                    if ("checkbox" === a.type)
                        for (var s = 0; s < g.options.length; s++) {

                            var l = g.options[s];
                            l.value === t && (l.selected = a.checked), l.selected && o.push(l.textContent.trim())
                        } else o = [e.find('option[value="' + t + '"]').text()], g.value = t;
                    v.trigger("change"), e.find(".item-after").text(o.join(", ")), c && "radio" === O && ("popup" === r ? i.closeModal(G) : n.router.back())
                })
            }

            function t(e) {
                var n = e.detail.page;
                n.name === q && (s(document).off("pageInit", t), a(n.container))
            }
            if (e = s(e), 0 !== e.length) {
                var n = e.parents("." + i.params.viewClass);
                if (0 !== n.length && (n = n[0].f7View)) {
                    var r = e.attr("data-open-in");
                    r || (r = i.params.smartSelectInPopup ? "popup" : "page");
                    var o = e.attr("data-page-title") || e.find(".item-title").text(),
                        p = e.attr("data-back-text") || i.params.smartSelectBackText,
                        d = e.attr("data-popup-close-text") || e.attr("data-back-text") || i.params.smartSelectPopupCloseText,
                        c = e.attr("data-back-onselect") ? "true" === e.attr("data-back-onselect") ? !0 : !1 : i.params.smartSelectBackOnSelect,
                        f = e.attr("data-form-theme") || i.params.smartSelectFormTheme,
                        u = e.attr("data-navbar-theme") || i.params.smartSelectNavbarTheme,
                        m = "true" === e.attr("data-virtual-list"),
                        h = e.attr("data-virtual-list-height"),
                        g = e.find("select")[0],
                        v = s(g);
                    if (!(g.disabled || e.hasClass("disabled") || v.hasClass("disabled"))) {
                        for (var w, b, C, y, x, T, k, S, P = [], M = (new Date).getTime(), O = g.multiple ? "checkbox" : "radio", I = O + "-" + M, E = 0; E < g.length; E++) w = s(g[E]), w[0].disabled || (C = w.attr("data-option-image") || v.attr("data-option-image"), y = w.attr("data-option-icon") || v.attr("data-option-icon"), b = C || y || "checkbox" === O, x = w.parent("optgroup")[0], T = x && x.label, k = !1, x && x !== S && (k = !0, S = x), P.push({
                            value: w[0].value,
                            text: w[0].textContent.trim(),
                            selected: w[0].selected,
                            group: x,
                            groupLabel: T,
                            showGroupLabel: k,
                            image: C,
                            icon: y,
                            disabled: w[0].disabled,
                            inputType: O,
                            id: M,
                            hasMedia: b,
                            checkbox: "checkbox" === O,
                            inputName: I,
                            test: this
                        }));
                        i._compiledTemplates.smartSelectItem || (i._compiledTemplates.smartSelectItem = l.compile(i.params.smartSelectItemTemplate || '{{#if showGroupLabel}}<li class="item-divider">{{groupLabel}}</li>{{/if}}<li><label class="label-{{inputType}} item-content"><input type="{{inputType}}" name="{{inputName}}" value="{{value}}" {{#if selected}}checked{{/if}}>{{#if hasMedia}}<div class="item-media">{{#if checkbox}}<i class="icon icon-form-checkbox"></i>{{/if}}{{#if icon}}<i class="icon {{icon}}"></i>{{/if}}{{#if image}}<img src="{{image}}">{{/if}}</div>{{/if}}<div class="item-inner"><div class="item-title">{{text}}</div></div></label></li>'));
                        var D = i._compiledTemplates.smartSelectItem,
                            L = "";
                        if (!m)
                            for (var N = 0; N < P.length; N++) L += D(P[N]);
                        i._compiledTemplates.smartSelectNavbar || (i._compiledTemplates.smartSelectNavbar = l.compile(i.params.smartSelectNavbarTemplate || '<div class="navbar {{#if navbarTheme}}theme-{{navbarTheme}}{{/if}}"><div class="navbar-inner">{{leftTemplate}}<div class="center sliding">{{pageTitle}}</div></div></div>'));
                        var B, A = i._compiledTemplates.smartSelectNavbar({
                                pageTitle: o,
                                backText: p,
                                closeText: d,
                                openIn: r,
                                navbarTheme: u,
                                inPopup: "popup" === r,
                                inPage: "page" === r,
                                leftTemplate: "popup" === r ? i.params.smartSelectPopupCloseTemplate.replace(/{{closeText}}/g, d) : i.params.smartSelectBackTemplate.replace(/{{backText}}/g, p)
                            }),
                            z = "",
                            H = "";
                        "page" === r ? (B = "static", e.parents(".navbar-through").length > 0 && (B = "through"), e.parents(".navbar-fixed").length > 0 && (B = "fixed"), H = e.parents(".page").hasClass("no-toolbar") ? "no-toolbar" : "", z = e.parents(".page").hasClass("no-navbar") ? "no-navbar" : "navbar-" + B) : B = "fixed";
                        var R, V, q = "smart-select-" + I,
                            F = "undefined" == typeof e.data("searchbar") ? i.params.smartSelectSearchbar : "true" === e.data("searchbar") ? !0 : !1;
                        F && (R = e.data("searchbar-placeholder") || "Search", V = e.data("searchbar-cancel") || "Cancel");
                        var G, W = '<form class="searchbar" data-search-list=".smart-select-list-' + M + '" data-search-in=".item-title"><div class="searchbar-input"><input type="search" placeholder="' + R + '"><a href="#"  style="color: #FFFFFF"   class="searchbar-clear"></a></div><a href="#"  style="color: #FFFFFF"   class="searchbar-cancel">' + V + '</a></form><div class="searchbar-overlay"></div>',
                            Y = ("through" === B ? A : "") + '<div class="pages">  <div data-page="' + q + '" class="page smart-select-page ' + z + " " + H + '">' + ("fixed" === B ? A : "") + (F ? W : "") + '    <div class="page-content">' + ("static" === B ? A : "") + '      <div class="list-block ' + (m ? "virtual-list" : "") + " smart-select-list-" + M + " " + (f ? "theme-" + f : "") + '">        <ul>' + (m ? "" : L) + "        </ul>      </div>    </div>  </div></div>";
                        "popup" === r ? (G = i.popup('<div class="popup smart-select-popup smart-select-popup-' + I + '"><div class="view navbar-fixed">' + Y + "</div></div>"), i.initPage(s(G).find(".page")), a(G)) : (s(document).on("pageInit", t), n.router.load({
                            content: Y
                        }))
                    }
                }
            }
        };
        var u = function(e, a) {
            var t = {
                cols: 1,
                height: 44,
                cache: !0,
                dynamicHeightBufferSize: 1
            };
            a = a || {};
            for (var n in t) "undefined" == typeof a[n] && (a[n] = t[n]);
            var r = this;
            r.listBlock = s(e), r.params = a, r.items = a.items, a.template && ("string" == typeof a.template ? r.template = l.compile(a.template) : "function" == typeof a.template && (r.template = a.template)), r.pageContent = r.listBlock.parents(".page-content");
            var o;
            "undefined" != typeof r.params.updatableScroll ? o = r.params.updatableScroll : (o = !0, i.device.ios && i.device.osVersion.split(".")[0] < 8 && (o = !1)), r.ul = r.params.ul ? s(r.params.ul) : r.listBlock.children("ul"), 0 === r.ul.length && (r.listBlock.append("<ul></ul>"), r.ul = r.listBlock.children("ul")), r.domCache = {}, r.displayDomCache = {}, r.tempDomElement = document.createElement("ul"), r.lastRepaintY = null, r.fragment = document.createDocumentFragment(), r.filterItems = function(e, a) {
                r.filteredItems = [];
                for (var t = (e[0], e[e.length - 1], 0); t < e.length; t++) r.filteredItems.push(r.items[e[t]]);
                "undefined" == typeof a && (a = !0), a && (r.pageContent[0].scrollTop = 0), r.update()
            }, r.resetFilter = function() {
                r.filteredItems = null, delete r.filteredItems, r.update()
            };
            var p, d, c, f, u, m, h = 0,
                g = "function" == typeof r.params.height;
            return r.setListSize = function() {
                var e = r.filteredItems || r.items;
                if (p = r.pageContent[0].offsetHeight, g) {
                    m = 0, r.heights = [];
                    for (var a = 0; a < e.length; a++) {
                        var t = r.params.height(e[a]);
                        m += t, r.heights.push(t)
                    }
                } else m = e.length * r.params.height / r.params.cols, d = Math.ceil(p / r.params.height), c = r.params.rowsBefore || 2 * d, f = r.params.rowsAfter || d, u = d + c + f, h = c / 2 * r.params.height;
                o && r.ul.css({
                    height: m + "px"
                })
            }, r.render = function(e, a) {
                e && (r.lastRepaintY = null);
                var t = -(r.listBlock[0].getBoundingClientRect().top + r.pageContent[0].getBoundingClientRect().top);
                if ("undefined" != typeof a && (t = a), null === r.lastRepaintY || Math.abs(t - r.lastRepaintY) > h || !o && r.pageContent[0].scrollTop + p >= r.pageContent[0].scrollHeight) {
                    r.lastRepaintY = t;
                    var n, i, s = r.filteredItems || r.items,
                        l = 0,
                        d = 0;
                    if (g) {
                        var f, m, v = 0;
                        for (h = p, f = 0; f < r.heights.length; f++) m = r.heights[f], "undefined" == typeof n && (v + m >= t - 2 * p * r.params.dynamicHeightBufferSize ? n = f : l += m), "undefined" == typeof i && ((v + m >= t + 2 * p * r.params.dynamicHeightBufferSize || f === r.heights.length - 1) && (i = f + 1), d += m), v += m;
                        i = Math.min(i, s.length)
                    } else n = (parseInt(t / r.params.height) - c) * r.params.cols, 0 > n && (n = 0), i = Math.min(n + u * r.params.cols, s.length);
                    var w;
                    r.reachEnd = !1;
                    for (var b = n; i > b; b++) {
                        var C, y;
                        y = r.items.indexOf(s[b]), b === n && (r.currentFromIndex = y), b === i - 1 && (r.currentToIndex = y), y === r.items.length - 1 && (r.reachEnd = !0), r.domCache[y] ? C = r.domCache[y] : (r.tempDomElement.innerHTML = r.template ? r.template(s[b], {
                            index: y
                        }) : r.params.renderItem ? r.params.renderItem(y, s[b]) : s[b], C = r.tempDomElement.childNodes[0], r.params.cache && (r.domCache[y] = C)), C.f7VirtualListIndex = y, b === n && (w = g ? l : b * r.params.height / r.params.cols), C.style.top = w + "px", r.params.onItemBeforeInsert && r.params.onItemBeforeInsert(r, C), r.fragment.appendChild(C)
                    }
                    o || (r.ul[0].style.height = g ? d + "px" : b * r.params.height / r.params.cols + "px"), r.params.onBeforeClear && r.params.onBeforeClear(r, r.fragment), r.ul[0].innerHTML = "", r.params.onItemsBeforeInsert && r.params.onItemsBeforeInsert(r, r.fragment), r.ul[0].appendChild(r.fragment), r.params.onItemsAfterInsert && r.params.onFragmentAfterInsert(r, r.fragment), "undefined" != typeof a && e && r.pageContent.scrollTop(a, 0)
                }
            }, r.scrollToItem = function(e) {
                if (e > r.items.length) return !1;
                var a, t = 0;
                if (g)
                    for (var n = 0; e > n; n++) t += r.heights[n];
                else t = e * r.params.height;
                return a = r.listBlock[0].offsetTop, r.render(!0, a + t - parseInt(r.pageContent.css("padding-top"), 10)), !0
            }, r.handleScroll = function() {
                r.render()
            }, r.handleResize = function() {
                r.setListSize(), r.render(!0)
            }, r.attachEvents = function(e) {
                var a = e ? "off" : "on";
                r.pageContent[a]("scroll", r.handleScroll), s(window)[a]("resize", r.handleResize)
            }, r.init = function() {
                r.attachEvents(), r.setListSize(), r.render()
            }, r.appendItems = function(e) {
                for (var a = 0; a < e.length; a++) r.items.push(e[a]);
                r.update()
            }, r.appendItem = function(e) {
                r.appendItems([e])
            }, r.replaceAllItems = function(e) {
                r.items = e, delete r.filteredItems, r.domCache = {}, r.update()
            }, r.replaceItem = function(e, a) {
                r.items[e] = a, r.params.cache && delete r.domCache[e], r.update()
            }, r.prependItems = function(e) {
                for (var a = e.length - 1; a >= 0; a--) r.items.unshift(e[a]);
                if (r.params.cache) {
                    var t = {};
                    for (var n in r.domCache) t[parseInt(n, 10) + e.length] = r.domCache[n];
                    r.domCache = t
                }
                r.update()
            }, r.prependItem = function(e) {
                r.prependItems([e])
            }, r.moveItem = function(e, a) {
                if (e !== a) {
                    var t = r.items.splice(e, 1)[0];
                    if (a >= r.items.length ? (r.items.push(t), a = r.items.length - 1) : r.items.splice(a, 0, t), r.params.cache) {
                        var n = {};
                        for (var i in r.domCache) {
                            var o = parseInt(i, 10),
                                s = a > e ? e : a,
                                l = a > e ? a : e,
                                p = a > e ? -1 : 1;
                            (s > o || o > l) && (n[o] = r.domCache[o]), o === s && (n[l] = r.domCache[o]), o > s && l >= o && (n[o + p] = r.domCache[o])
                        }
                        r.domCache = n
                    }
                    r.update()
                }
            }, r.insertItemBefore = function(e, a) {
                if (0 === e) return void r.prependItem(a);
                if (e >= r.items.length) return void r.appendItem(a);
                if (r.items.splice(e, 0, a), r.params.cache) {
                    var t = {};
                    for (var n in r.domCache) {
                        var i = parseInt(n, 10);
                        i >= e && (t[i + 1] = r.domCache[i])
                    }
                    r.domCache = t
                }
                r.update()
            }, r.deleteItems = function(e) {
                for (var a, t = 0, n = 0; n < e.length; n++) {
                    var i = e[n];
                    "undefined" != typeof a && i > a && (t = -n), i += t, a = e[n];
                    var o = r.items.splice(i, 1)[0];
                    if (r.filteredItems && r.filteredItems.indexOf(o) >= 0 && r.filteredItems.splice(r.filteredItems.indexOf(o), 1), r.params.cache) {
                        var s = {};
                        for (var l in r.domCache) {
                            var p = parseInt(l, 10);
                            p === i ? delete r.domCache[i] : parseInt(l, 10) > i ? s[p - 1] = r.domCache[l] : s[p] = r.domCache[l]
                        }
                        r.domCache = s
                    }
                }
                r.update()
            }, r.deleteAllItems = function() {
                r.items = [], delete r.filteredItems, r.params.cache && (r.domCache = {}), r.update()
            }, r.deleteItem = function(e) {
                r.deleteItems([e])
            }, r.clearCache = function() {
                r.domCache = {}
            }, r.update = function() {
                r.setListSize(), r.render(!0)
            }, r.destroy = function() {
                r.attachEvents(!0), delete r.items, delete r.domCache
            }, r.init(), r.listBlock[0].f7VirtualList = r, r
        };
        i.virtualList = function(e, a) {
            return new u(e, a)
        }, i.reinitVirtualList = function(e) {
            var a = s(e),
                t = a.find(".virtual-list");
            if (0 !== t.length)
                for (var n = 0; n < t.length; n++) {
                    var r = r[0].f7VirtualList;
                    r && r.update()
                }
        }, i.initPullToRefresh = function(e) {
            function a(e) {
                if (p) {
                    if ("android" !== i.device.os) return;
                    if ("targetTouches" in e && e.targetTouches.length > 1) return
                }
                d = !1, p = !0, c = void 0, v = void 0, C.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, C.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, u = (new Date).getTime(), m = s(this)
            }

            function t(e) {
                if (p) {
                    var a = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                        t = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY;
                    if ("undefined" == typeof c && (c = !!(c || Math.abs(t - C.y) > Math.abs(a - C.x))), !c) return void(p = !1);
                    if (g = m[0].scrollTop, "undefined" == typeof v && 0 !== g && (v = !0), !d) {
                        if (m.removeClass("transitioning"), g > m[0].offsetHeight) return void(p = !1);
                        b && (w = m.attr("data-ptr-distance"), w.indexOf("%") >= 0 && (w = m[0].offsetHeight * parseInt(w, 10) / 100)), T = m.hasClass("refreshing") ? w : 0, x = m[0].scrollHeight === m[0].offsetHeight || "ios" !== i.device.os ? !0 : !1
                    }
                    return d = !0, f = t - C.y, f > 0 && 0 >= g || 0 > g ? ("ios" === i.device.os && parseInt(i.device.osVersion.split(".")[0], 10) > 7 && 0 === g && !v && (x = !0), x && (e.preventDefault(), h = Math.pow(f, .85) + T, m.transform("translate3d(0," + h + "px,0)")), x && Math.pow(f, .85) > w || !x && f >= 2 * w ? (y = !0, m.addClass("pull-up").removeClass("pull-down")) : (y = !1, m.removeClass("pull-up").addClass("pull-down")), void 0) : (m.removeClass("pull-up pull-down"), void(y = !1))
                }
            }

            function n() {
                return p && d ? (h && (m.addClass("transitioning"), h = 0), m.transform(""), y ? (m.addClass("refreshing"), m.trigger("refresh", {
                    done: function() {
                        i.pullToRefreshDone(m)
                    }
                })) : m.removeClass("pull-down"), p = !1, void(d = !1)) : (p = !1, void(d = !1))
            }

            function r() {
                l.off(i.touchEvents.start, a), l.off(i.touchEvents.move, t), l.off(i.touchEvents.end, n)
            }

            function o() {
                r(), k.off("pageBeforeRemove", o)
            }
            var l = s(e);
            if (l.hasClass("pull-to-refresh-content") || (l = l.find(".pull-to-refresh-content")), l && 0 !== l.length) {
                var p, d, c, f, u, m, h, g, v, w, b, C = {},
                    y = !1,
                    x = !1,
                    T = 0,
                    k = l.hasClass("page") ? l : l.parents(".page"),
                    S = !1;
                (k.find(".navbar").length > 0 || k.parents(".navbar-fixed, .navbar-through").length > 0 || k.hasClass("navbar-fixed") || k.hasClass("navbar-through")) && (S = !0), k.hasClass("no-navbar") && (S = !1), S || l.addClass("pull-to-refresh-no-navbar"), m = l, m.attr("data-ptr-distance") ? b = !0 : w = 44, l.on(i.touchEvents.start, a), l.on(i.touchEvents.move, t), l.on(i.touchEvents.end, n), 0 !== k.length && (l[0].f7DestroyPullToRefresh = r, k.on("pageBeforeRemove", o))
            }
        }, i.pullToRefreshDone = function(e) {
            e = s(e), 0 === e.length && (e = s(".pull-to-refresh-content.refreshing")), e.removeClass("refreshing").addClass("transitioning"), e.transitionEnd(function() {
                e.removeClass("transitioning pull-up pull-down")
            })
        }, i.pullToRefreshTrigger = function(e) {
            e = s(e), 0 === e.length && (e = s(".pull-to-refresh-content")), e.hasClass("refreshing") || (e.addClass("transitioning refreshing"), e.trigger("refresh", {
                done: function() {
                    i.pullToRefreshDone(e)
                }
            }))
        }, i.destroyPullToRefresh = function(e) {
            e = s(e);
            var a = e.hasClass("pull-to-refresh-content") ? e : e.find(".pull-to-refresh-content");
            0 !== a.length && a[0].f7DestroyPullToRefresh && a[0].f7DestroyPullToRefresh()
        }, i.attachInfiniteScroll = function(e) {
            s(e).on("scroll", n)
        }, i.detachInfiniteScroll = function(e) {
            s(e).off("scroll", n)
        }, i.initInfiniteScroll = function(e) {
            function a() {
                i.detachInfiniteScroll(t), e.off("pageBeforeRemove", a)
            }
            e = s(e);
            var t = e.find(".infinite-scroll");
            0 !== t.length && (i.attachInfiniteScroll(t), e.on("pageBeforeRemove", a))
        }, i.initScrollToolbars = function(e) {
            function a() {
                e.hasClass("page-on-left") || (u = t[0].scrollTop, v = t[0].scrollHeight, w = t[0].offsetHeight, b = i.params.showBarsOnPageScrollEnd && u + w >= v - P, y = d.hasClass("navbar-hidden"), x = c.hasClass("toolbar-hidden"), T = p && p.hasClass("toolbar-hidden"), C = f > u || b ? "show" : u > 44 ? "hide" : "show", "show" === C ? (m && n && y && (i.showNavbar(d), e.removeClass("no-navbar-by-scroll"), y = !1), h && r && x && (i.showToolbar(c), e.removeClass("no-toolbar-by-scroll"), x = !1), g && o && T && (i.showToolbar(p), e.removeClass("no-tabbar-by-scroll"), T = !1)) : (m && n && !y && (i.hideNavbar(d), e.addClass("no-navbar-by-scroll"), y = !0), h && r && !x && (i.hideToolbar(c), e.addClass("no-toolbar-by-scroll"), x = !0), g && o && !T && (i.hideToolbar(p), e.addClass("no-tabbar-by-scroll"), T = !0)), f = u)
            }
            e = s(e);
            var t = e.find(".page-content");
            if (0 !== t.length) {
                var n = (i.params.hideNavbarOnPageScroll || t.hasClass("hide-navbar-on-scroll") || t.hasClass("hide-bars-on-scroll")) && !(t.hasClass("keep-navbar-on-scroll") || t.hasClass("keep-bars-on-scroll")),
                    r = (i.params.hideToolbarOnPageScroll || t.hasClass("hide-toolbar-on-scroll") || t.hasClass("hide-bars-on-scroll")) && !(t.hasClass("keep-toolbar-on-scroll") || t.hasClass("keep-bars-on-scroll")),
                    o = (i.params.hideTabbarOnPageScroll || t.hasClass("hide-tabbar-on-scroll")) && !t.hasClass("keep-tabbar-on-scroll");
                if (n || r || o) {
                    var l = t.parents("." + i.params.viewClass);
                    if (0 !== l.length) {
                        var p, d = l.find(".navbar"),
                            c = l.find(".toolbar");
                        o && (p = l.find(".tabbar"), 0 === p.length && (p = l.parents("." + i.params.viewsClass).find(".tabbar")));
                        var f, u, m = d.length > 0,
                            h = c.length > 0,
                            g = p && p.length > 0;
                        f = u = t[0].scrollTop;
                        var v, w, b, C, y, x, T, k = h && r ? c[0].offsetHeight : 0,
                            S = g && o ? p[0].offsetHeight : 0,
                            P = S || k;
                        t.on("scroll", a), t[0].f7ScrollToolbarsHandler = a
                    }
                }
            }
        }, i.destroyScrollToolbars = function(e) {
            e = s(e);
            var a = e.find(".page-content");
            if (0 !== a.length) {
                var t = a[0].f7ScrollToolbarsHandler;
                t && a.off("scroll", a[0].f7ScrollToolbarsHandler)
            }
        }, i.showTab = function(e, a, t) {
            var n = s(e);
            if (2 === arguments.length && "boolean" == typeof a && (t = a), 0 === n.length) return !1;
            if (n.hasClass("active")) return t && n.trigger("show"), !1;
            var r = n.parent(".tabs");
            if (0 === r.length) return !1;
            i.allowSwipeout = !0;
            var o = r.parent().hasClass("tabs-animated-wrap");
            o && r.transform("translate3d(" + 100 * -n.index() + "%,0,0)");
            var l = r.children(".tab.active").removeClass("active");
            if (n.addClass("active"), n.trigger("show"), !o && n.find(".navbar").length > 0) {
                var p;
                p = n.hasClass(i.params.viewClass) ? n[0] : n.parents("." + i.params.viewClass)[0], i.sizeNavbars(p)
            }
            if (a ? a = s(a) : (a = s("string" == typeof e ? '.tab-link[href="' + e + '"]' : '.tab-link[href="#' + n.attr("id") + '"]'), (!a || a && 0 === a.length) && s("[data-tab]").each(function() {
                    n.is(s(this).attr("data-tab")) && (a = s(this))
                })), 0 !== a.length) {
                var d;
                if (l && l.length > 0) {
                    var c = l.attr("id");
                    c && (d = s('.tab-link[href="#' + c + '"]')), (!d || d && 0 === d.length) && s("[data-tab]").each(function() {
                        l.is(s(this).attr("data-tab")) && (d = s(this))
                    })
                }
                return a && a.length > 0 && a.addClass("active"), d && d.length > 0 && d.removeClass("active"), !0
            }
        }, i.accordionToggle = function(e) {
            e = s(e), 0 !== e.length && (e.hasClass("accordion-item-expanded") ? i.accordionClose(e) : i.accordionOpen(e))
        }, i.accordionOpen = function(e) {
            e = s(e);
            var a = e.parents(".accordion-list").eq(0),
                t = e.children(".accordion-item-content");
            0 === t.length && (t = e.find(".accordion-item-content"));
            var n = a.length > 0 && e.parent().children(".accordion-item-expanded");
            n.length > 0 && i.accordionClose(n), t.css("height", t[0].scrollHeight + "px").transitionEnd(function() {
                if (e.hasClass("accordion-item-expanded")) {
                    t.transition(0), t.css("height", "auto"); {
                        t[0].clientLeft
                    }
                    t.transition(""), e.trigger("opened")
                } else t.css("height", ""), e.trigger("closed")
            }), e.trigger("open"), e.addClass("accordion-item-expanded")
        }, i.accordionClose = function(e) {
            e = s(e);
            var a = e.children(".accordion-item-content");
            0 === a.length && (a = e.find(".accordion-item-content")), e.removeClass("accordion-item-expanded"), a.transition(0), a.css("height", a[0].scrollHeight + "px");
            a[0].clientLeft;
            a.transition(""), a.css("height", "").transitionEnd(function() {
                if (e.hasClass("accordion-item-expanded")) {
                    a.transition(0), a.css("height", "auto"); {
                        a[0].clientLeft
                    }
                    a.transition(""), e.trigger("opened")
                } else a.css("height", ""), e.trigger("closed")
            }), e.trigger("close")
        }, i.initFastClicks = function() {
            function e(e) {
                var a, t = s(e.target),
                    n = t.parents(i.params.activeStateElements);
                return t.is(i.params.activeStateElements) && (a = t), n.length > 0 && (a = a ? a.add(n) : n), a ? a : t
            }

            function a() {
                var e = M.parents(".page-content, .panel");
                return 0 === e.length ? !1 : ("yes" !== e.prop("scrollHandlerSet") && (e.on("scroll", function() {
                    clearTimeout(O)
                }), e.prop("scrollHandlerSet", "yes")), !0)
            }

            function t() {
                M.addClass("active-state")
            }

            function n() {
                M.removeClass("active-state")
            }

            function r(e) {
                var a = "button checkbox file image radio submit input textarea".split(" ");
                return document.activeElement && e !== document.activeElement && document.activeElement !== document.body ? a.indexOf(e.nodeName.toLowerCase()) >= 0 ? !1 : !0 : !1
            }

            function o(e) {
                var a = s(e);
                return "input" === e.nodeName.toLowerCase() && "file" === e.type ? !1 : a.hasClass("no-fastclick") || a.parents(".no-fastclick").length > 0 ? !1 : !0
            }

            function l(e) {
                if (document.activeElement === e) return !1;
                var a = e.nodeName.toLowerCase(),
                    t = "button checkbox file image radio submit".split(" ");
                return e.disabled || e.readOnly ? !1 : "textarea" === a ? !0 : "select" === a ? "android" === i.device.os ? !1 : !0 : "input" === a && t.indexOf(e.type) < 0 ? !0 : void 0
            }

            function p(e) {
                if (e = s(e), e.is("label") || e.parents("label").length > 0) {
                    if ("android" === i.device.os) {
                        var a = i.device.osVersion.split(".");
                        return 1 * a[0] > 4 || 1 * a[0] === 4 && 1 * a[1] >= 4 ? !1 : !0
                    }
                    return !1
                }
                return !0
            }

            function d(a) {
                e(a).addClass("active-state"), "which" in a && 3 === a.which && setTimeout(function() {
                    s(".active-state").removeClass("active-state")
                }, 0)
            }

            function c() {
                s(".active-state").removeClass("active-state")
            }

            function f() {
                s(".active-state").removeClass("active-state")
            }

            function u(n) {
                if (P = !1, n.targetTouches.length > 1) return !0;
                if (I = o(n.target), !I) return x = !1, !0;
                if ("ios" === i.device.os) {
                    var l = window.getSelection();
                    if (l.rangeCount && l.focusNode !== document.body && (!l.isCollapsed || document.activeElement === l.focusNode)) return T = !0, !0;
                    T = !1
                }
                "android" === i.device.os && r(n.target) && document.activeElement.blur(), x = !0, y = n.target, C = (new Date).getTime(), w = n.targetTouches[0].pageX, b = n.targetTouches[0].pageY, "ios" === i.device.os && (k = void 0, s(y).parents().each(function() {
                    var e = this;
                    e.scrollHeight > e.offsetHeight && !k && (k = e, k.f7ScrollTop = k.scrollTop)
                })), n.timeStamp - S < i.params.fastClicksDelayBetweenClicks && n.preventDefault(), i.params.activeState && (M = e(n), a(n) ? O = setTimeout(t, 80) : t())
            }

            function m(e) {
                if (x) {
                    var a = !1,
                        t = i.params.fastClicksDistanceThreshold;
                    if (t) {
                        var r = e.targetTouches[0].pageX,
                            o = e.targetTouches[0].pageY;
                        (Math.abs(r - w) > t || Math.abs(o - b) > t) && (a = !0)
                    } else a = !0;
                    a && (x = !1, y = null, P = !0), i.params.activeState && (clearTimeout(O), n())
                }
            }

            function h(e) {
                if (clearTimeout(O), !x) return !T && I && e.preventDefault(), !0;
                if (document.activeElement === e.target) return !0;
                if (T || e.preventDefault(), e.timeStamp - S < i.params.fastClicksDelayBetweenClicks) return setTimeout(n, 0), !0;
                if (S = e.timeStamp, x = !1, "ios" === i.device.os && k && k.scrollTop !== k.f7ScrollTop) return !1;
                i.params.activeState && (t(), setTimeout(n, 0)), l(y) && y.focus(), document.activeElement && y !== document.activeElement && document.activeElement !== document.body && "label" !== y.nodeName.toLowerCase() && document.activeElement.blur(), e.preventDefault();
                var a = e.changedTouches[0],
                    r = document.createEvent("MouseEvents"),
                    o = "click";
                return "android" === i.device.os && "select" === y.nodeName.toLowerCase() && (o = "mousedown"), r.initMouseEvent(o, !0, !0, window, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), r.forwardedTouchEvent = !0, y.dispatchEvent(r), !1
            }

            function g() {
                x = !1, y = null
            }

            function v(e) {
                var a = !1;
                return x ? (y = null, x = !1, !0) : "submit" === e.target.type && 0 === e.detail ? !0 : (y || (a = !0), document.activeElement === y && (a = !0), e.forwardedTouchEvent && (a = !0), e.cancelable || (a = !0), a || (e.stopImmediatePropagation(), e.stopPropagation(), y ? (p(y) || P) && e.preventDefault() : e.preventDefault(), y = null), a)
            }
            i.params.activeState && s("html").addClass("watch-active-state");
            var w, b, C, y, x, T, k, S, P, M, O, I;
            i.support.touch ? (document.addEventListener("click", v, !0), document.addEventListener("touchstart", u), document.addEventListener("touchmove", m), document.addEventListener("touchend", h), document.addEventListener("touchcancel", g)) : i.params.activeState && (document.addEventListener("mousedown", d), document.addEventListener("mousemove", c), document.addEventListener("mouseup", f))
        }, i.initClickEvents = function() {
            function e(e) {
                var a = s(this),
                    t = s(e.target),
                    n = "a" === a[0].nodeName.toLowerCase() || a.parents("a").length > 0 || "a" === t[0].nodeName.toLowerCase() || t.parents("a").length > 0;
                if (!n) {
                    var r;
                    if (i.params.scrollTopOnNavbarClick && a.is(".navbar .center")) {
                        var o = a.parents(".navbar");
                        r = o.parents(".page-content"), 0 === r.length && (o.parents(".page").length > 0 && (r = o.parents(".page").find(".page-content")), 0 === r.length && o.nextAll(".pages").length > 0 && (r = o.nextAll(".pages").find(".page:not(.page-on-left):not(.page-on-right):not(.cached)").find(".page-content")))
                    }
                    i.params.scrollTopOnStatusbarClick && a.is(".statusbar-overlay") && (r = s(".popup.modal-in").length > 0 ? s(".popup.modal-in").find(".page:not(.page-on-left):not(.page-on-right):not(.cached)").find(".page-content") : s(".panel.active").length > 0 ? s(".panel.active").find(".page:not(.page-on-left):not(.page-on-right):not(.cached)").find(".page-content") : s(".views > .view.active").length > 0 ? s(".views > .view.active").find(".page:not(.page-on-left):not(.page-on-right):not(.cached)").find(".page-content") : s(".views").find(".page:not(.page-on-left):not(.page-on-right):not(.cached)").find(".page-content")), r && r.length > 0 && (r.hasClass("tab") && (r = r.parent(".tabs").children(".page-content.active")), r.length > 0 && r.scrollTop(0, 300))
                }
            }

            function a(e) {
                function a(e) {
                    return "false" === e ? !1 : "true" === e ? !0 : void 0
                }
                var t = s(this),
                    n = t.attr("href"),
                    r = "a" === t[0].nodeName.toLowerCase();
                if (r && t.is(i.params.externalLinks)) return void("_system" === t.attr("target") && (e.preventDefault(), window.open(n, "_system")));
                if (t.hasClass("smart-select") && i.smartSelectOpen && i.smartSelectOpen(t), t.hasClass("open-panel") && i.openPanel(1 === s(".panel").length ? s(".panel").hasClass("panel-left") ? "left" : "right" : "right" === t.attr("data-panel") ? "right" : "left"), t.hasClass("close-panel") && i.closePanel(), t.hasClass("panel-overlay") && i.params.panelsCloseByOutside && i.closePanel(), t.hasClass("open-popover")) {
                    var o;
                    o = t.attr("data-popover") ? t.attr("data-popover") : ".popover", i.popover(o, t)
                }
                t.hasClass("close-popover") && i.closeModal(".popover.modal-in");
                var d;
                t.hasClass("open-popup") && (d = t.attr("data-popup") ? t.attr("data-popup") : ".popup", i.popup(d)), t.hasClass("close-popup") && (d = t.attr("data-popup") ? t.attr("data-popup") : ".popup.modal-in", i.closeModal(d));
                var c;
                if (t.hasClass("open-login-screen") && (c = t.attr("data-login-screen") ? t.attr("data-login-screen") : ".login-screen", i.loginScreen(c)), t.hasClass("close-login-screen") && i.closeModal(".login-screen.modal-in"), t.hasClass("modal-overlay") && (s(".modal.modal-in").length > 0 && i.params.modalCloseByOutside && i.closeModal(".modal.modal-in"), s(".actions-modal.modal-in").length > 0 && i.params.actionsCloseByOutside && i.closeModal(".actions-modal.modal-in"), s(".popover.modal-in").length > 0 && i.closeModal(".popover.modal-in")), t.hasClass("popup-overlay") && s(".popup.modal-in").length > 0 && i.params.popupCloseByOutside && i.closeModal(".popup.modal-in"), t.hasClass("close-picker")) {
                    var f = s(".picker-modal.modal-in");
                    f.length > 0 ? i.closeModal(f) : (f = s(".popover.modal-in .picker-modal"), f.length > 0 && i.closeModal(f.parents(".popover")))
                }
                if (t.hasClass("open-picker")) {
                    var u;
                    u = t.attr("data-picker") ? t.attr("data-picker") : ".picker-modal", i.pickerModal(u, t)
                }
                var m;
                if (t.hasClass("tab-link") && (m = !0, i.showTab(t.attr("data-tab") || t.attr("href"), t)), t.hasClass("swipeout-close") && i.swipeoutClose(t.parents(".swipeout-opened")), t.hasClass("swipeout-delete"))
                    if (t.attr("data-confirm")) {
                        var h = t.attr("data-confirm"),
                            g = t.attr("data-confirm-title");
                        g ? i.confirm(h, g, function() {
                            i.swipeoutDelete(t.parents(".swipeout"))
                            if (deleteItem(t.attr("id"), t.attr("name")) === "success") {
                                myApp.alert('', 'Successfully Deleted');

                            }


                        }) : i.confirm(h, function() {
                            i.swipeoutDelete(t.parents(".swipeout"))
                        })
                    } else i.swipeoutDelete(t.parents(".swipeout"));
                if (t.hasClass("toggle-sortable") && i.sortableToggle(t.data("sortable")), t.hasClass("open-sortable") && i.sortableOpen(t.data("sortable")), t.hasClass("close-sortable") && i.sortableClose(t.data("sortable")), t.hasClass("accordion-item-toggle") || t.hasClass("item-link") && t.parent().hasClass("accordion-item")) {
                    var v = t.parent(".accordion-item");
                    0 === v.length && (v = t.parents(".accordion-item")), 0 === v.length && (v = t.parents("li")), i.accordionToggle(v)
                }
                if ((!i.params.ajaxLinks || t.is(i.params.ajaxLinks)) && r && i.params.router) {
                    r && e.preventDefault();
                    var w = n && n.length > 0 && "#" !== n && !m,
                        b = t.attr("data-template");
                    if (w || t.hasClass("back") || b) {
                        var C;
                        if (t.attr("data-view") ? C = s(t.attr("data-view"))[0].f7View : (C = t.parents("." + i.params.viewClass)[0] && t.parents("." + i.params.viewClass)[0].f7View, C && C.params.linksView && ("string" == typeof C.params.linksView ? C = s(C.params.linksView)[0].f7View : C.params.linksView instanceof p && (C = C.params.linksView))), C || i.mainView && (C = i.mainView), !C) return;
                        var y;
                        if (b) n = void 0;
                        else {
                            if (0 === n.indexOf("#") && "#" !== n) {
                                if (!C.params.domCache) return;
                                y = n.split("#")[1], n = void 0
                            }
                            if ("#" === n && !t.hasClass("back")) return
                        }
                        var x;
                        t.attr("data-animatePages") ? x = a(t.attr("data-animatePages")) : (t.hasClass("with-animation") && (x = !0), t.hasClass("no-animation") && (x = !1));
                        var T = {
                            animatePages: x,
                            ignoreCache: a(t.attr("data-ignoreCache")),
                            force: a(t.attr("data-force")),
                            reload: a(t.attr("data-reload")),
                            reloadPrevious: a(t.attr("data-reloadPrevious")),
                            pageName: y,
                            url: n
                        };
                        if (i.params.template7Pages) {
                            T.contextName = t.attr("data-contextName");
                            var k = t.attr("data-context");
                            k && (T.context = JSON.parse(k))
                        }
                        b && b in l.templates && (T.template = l.templates[b]), t.hasClass("back") ? C.router.back(T) : C.router.load(T)
                    }
                }
            }

            function t(e) {
                e.preventDefault()
            }
            s(document).on("click", "a, .open-panel, .close-panel, .panel-overlay, .modal-overlay, .popup-overlay, .swipeout-delete, .swipeout-close, .close-popup, .open-popup, .open-popover, .open-login-screen, .close-login-screen .smart-select, .toggle-sortable, .open-sortable, .close-sortable, .accordion-item-toggle, .close-picker", a), (i.params.scrollTopOnNavbarClick || i.params.scrollTopOnStatusbarClick) && s(document).on("click", ".statusbar-overlay, .navbar .center", e), i.support.touch && s(document).on("touchstart", ".panel-overlay, .modal-overlay, .preloader-indicator-overlay, .popup-overlay, .searchbar-overlay", t)
        }, i.initResize = function() {
            s(window).on("resize", i.resize), s(window).on("orientationchange", i.orientationchange)
        }, i.resize = function() {
            i.sizeNavbars && i.sizeNavbars(), r()
        }, i.orientationchange = function() {
            i.device && i.device.minimalUi && (90 === window.orientation || -90 === window.orientation) && (document.body.scrollTop = 0), r()
        }, i.formsData = {}, i.formStoreData = function(e, a) {
            i.formsData[e] = a, i.ls["f7form-" + e] = JSON.stringify(a)
        }, i.formDeleteData = function(e) {
            i.formsData[e] && (i.formsData[e] = "", delete i.formsData[e]), i.ls["f7form-" + e] && (i.ls["f7form-" + e] = "", i.ls.removeItem("f7form-" + e))
        }, i.formGetData = function(e) {
            return i.ls["f7form-" + e] ? JSON.parse(i.ls["f7form-" + e]) : i.formsData[e] ? i.formsData[e] : void 0
        }, i.formToJSON = function(e) {
            if (e = s(e), 1 !== e.length) return !1;
            var a = {},
                t = ["submit", "image", "button", "file"],
                n = [];
            return e.find("input, select, textarea").each(function() {
                var r = s(this),
                    i = r.attr("name"),
                    o = r.attr("type"),
                    l = this.nodeName.toLowerCase();
                if (!(t.indexOf(o) >= 0 || n.indexOf(i) >= 0 || !i))
                    if ("select" === l && r.attr("multiple")) n.push(i), a[i] = [], e.find('select[name="' + i + '"] option').each(function() {
                        this.selected && a[i].push(this.value)
                    });
                    else switch (o) {
                        case "checkbox":
                            n.push(i), a[i] = [], e.find('input[name="' + i + '"]').each(function() {
                                this.checked && a[i].push(this.value)
                            });
                            break;
                        case "radio":
                            n.push(i), e.find('input[name="' + i + '"]').each(function() {
                                this.checked && (a[i] = this.value)
                            });
                            break;
                        default:
                            a[i] = r.val()
                    }
            }), e.trigger("formToJSON", {
                formData: a
            }), a
        }, i.formFromJSON = function(e, a) {
            if (e = s(e), 1 !== e.length) return !1;
            var t = ["submit", "image", "button", "file"],
                n = [];
            e.find("input, select, textarea").each(function() {
                var r = s(this),
                    i = r.attr("name"),
                    o = r.attr("type"),
                    l = this.nodeName.toLowerCase();
                if (a[i] && !(t.indexOf(o) >= 0 || n.indexOf(i) >= 0 || !i))
                    if ("select" === l && r.attr("multiple")) n.push(i), e.find('select[name="' + i + '"] option').each(function() {
                        this.selected = a[i].indexOf(this.value) >= 0 ? !0 : !1
                    });
                    else switch (o) {
                        case "checkbox":
                            n.push(i), e.find('input[name="' + i + '"]').each(function() {
                                this.checked = a[i].indexOf(this.value) >= 0 ? !0 : !1
                            });
                            break;
                        case "radio":
                            n.push(i), e.find('input[name="' + i + '"]').each(function() {
                                this.checked = a[i] === this.value ? !0 : !1
                            });
                            break;
                        default:
                            r.val(a[i])
                    }
            }), e.trigger("formFromJSON", {
                formData: a
            })
        }, i.initFormsStorage = function(e) {
            function a() {
                var e = s(this),
                    a = e[0].id;
                if (a) {
                    var t = i.formToJSON(e);
                    t && (i.formStoreData(a, t), e.trigger("store", {
                        data: t
                    }))
                }
            }

            function t() {
                n.off("change submit", a), e.off("pageBeforeRemove", t)
            }
            if (e = s(e), 0 !== e.length) {
                var n = e.find("form.store-data");
                0 !== n.length && (n.each(function() {
                    var e = this.getAttribute("id");
                    if (e) {
                        var a = i.formGetData(e);
                        a && i.formFromJSON(this, a)
                    }
                }), n.on("change submit", a), e.on("pageBeforeRemove", t))
            }
        }, s(document).on("submit change", "form.ajax-submit, form.ajax-submit-onchange", function(e) {
            var a = s(this);
            if ("change" !== e.type || a.hasClass("ajax-submit-onchange")) {
                "submit" === e.type && e.preventDefault();
                var t = a.attr("method") || "GET",
                    n = a.attr("enctype"),
                    r = a.attr("action");
                if (r) {
                    var o;
                    o = "POST" === t ? new FormData(a[0]) : s.serializeObject(i.formToJSON(a[0]));
                    var l = s.ajax({
                        method: t,
                        url: r,
                        contentType: n,
                        data: o,
                        beforeSend: function(e) {
                            a.trigger("beforeSubmit", {
                                data: o,
                                xhr: e
                            })
                        },
                        error: function(e) {
                            a.trigger("submitError", {
                                data: o,
                                xhr: e
                            })
                        },
                        success: function(e) {
                            a.trigger("submitted", {
                                data: e,
                                xhr: l
                            })
                        }
                    })
                }
            }
        }), i.pushStateQueue = [], i.pushStateClearQueue = function() {
            if (0 !== i.pushStateQueue.length) {
                var e, a = i.pushStateQueue.pop();
                i.params.pushStateNoAnimation === !0 && (e = !1), "back" === a.action && i.router.back(a.view, {
                    animatePages: e
                }), "loadPage" === a.action && i.router.load(a.view, {
                    url: a.stateUrl,
                    animatePages: e,
                    pushState: !1
                }), "loadContent" === a.action && i.router.load(a.view, {
                    content: a.stateContent,
                    animatePages: e,
                    pushState: !1
                }), "loadPageName" === a.action && i.router.load(a.view, {
                    pageName: a.statePageName,
                    animatePages: e,
                    pushState: !1
                })
            }
        }, i.initPushState = function() {
            function e(e) {
                if (!a) {
                    var t = i.mainView;
                    if (t) {
                        var n = e.state;
                        if (n || (n = {
                                viewIndex: i.views.indexOf(t),
                                url: t.history[0]
                            }), !(n.viewIndex < 0)) {
                            var r, o = i.views[n.viewIndex],
                                s = n && n.url || void 0,
                                l = n && n.content || void 0,
                                p = n && n.pageName || void 0;
                            i.params.pushStateNoAnimation === !0 && (r = !1), s !== o.url && (o.history.indexOf(s) >= 0 ? o.allowPageChange ? i.router.back(o, {
                                url: void 0,
                                animatePages: r,
                                pushState: !1,
                                preloadOnly: !1
                            }) : i.pushStateQueue.push({
                                action: "back",
                                view: o
                            }) : l ? o.allowPageChange ? i.router.load(o, {
                                content: l,
                                animatePages: r,
                                pushState: !1
                            }) : i.pushStateQueue.unshift({
                                action: "loadContent",
                                stateContent: l,
                                view: o
                            }) : p ? o.allowPageChange ? i.router.load(o, {
                                pageName: p,
                                animatePages: r,
                                pushState: !1
                            }) : i.pushStateQueue.unshift({
                                action: "loadPageName",
                                statePageName: p,
                                view: o
                            }) : o.allowPageChange ? i.router.load(o, {
                                url: s,
                                animatePages: r,
                                pushState: !1
                            }) : i.pushStateQueue.unshift({
                                action: "loadPage",
                                stateUrl: s,
                                view: o
                            }))
                        }
                    }
                }
            }
            var a = !0;
            s(window).on("load", function() {
                setTimeout(function() {
                    a = !1
                }, 0)
            }), s(window).on("popstate", e)
        }, i.swiper = function(e, a) {
            return new Swiper(e, a)
        }, i.initSwiper = function(e) {
            function a(e) {
                function a() {
                    e.destroy(), t.off("pageBeforeRemove", a)
                }
                t.on("pageBeforeRemove", a)
            }
            var t = s(e),
                n = t.find(".swiper-init");
            if (0 !== n.length)
                for (var r = 0; r < n.length; r++) {
                    var o, l = n.eq(r);
                    o = l.data("swiper") ? JSON.parse(l.data("swiper")) : {
                        initialSlide: parseInt(l.data("initialSlide"), 10) || void 0,
                        spaceBetween: parseInt(l.data("spaceBetween"), 10) || void 0,
                        speed: parseInt(l.data("speed"), 10) || void 0,
                        slidesPerView: l.data("slidesPerView") || void 0,
                        slidesPerColumn: parseInt(l.data("slidesPerColumn"), 10) || void 0,
                        centeredSlides: l.data("centeredSlides") && ("true" === l.data("centeredSlides") ? !0 : !1),
                        direction: l.data("direction"),
                        pagination: l.data("pagination"),
                        paginationHide: l.data("paginationHide") && ("true" === l.data("paginationHide") ? !0 : !1),
                        paginationClickable: l.data("paginationClickable") && ("true" === l.data("paginationClickable") ? !0 : !1),
                        scrollbar: l.data("scrollbar"),
                        scrollbarHide: l.data("scrollbarHide") && ("true" === l.data("scrollbarHide") ? !0 : !1),
                        loop: l.data("loop") && ("true" === l.data("loop") ? !0 : !1),
                        effect: l.data("effect") || "slide",
                        freeMode: l.data("freeMode") && ("true" === l.data("freeMode") ? !0 : !1),
                        onlyExternal: l.data("onlyExternal") && ("true" === l.data("onlyExternal") ? !0 : !1),
                        nextButton: l.data("nextButton"),
                        prevButton: l.data("prevButton"),
                        autoplay: l.data("autoplay")
                    };
                    var p = i.swiper(l[0], o);
                    a(p)
                }
        }, i.reinitSwiper = function(e) {
            var a = s(e),
                t = a.find(".swiper-init");
            if (0 !== t.length)
                for (var n = 0; n < t.length; n++) {
                    var r = t[0].swiper;
                    r && r.onResize()
                }
        };
        var m = function(e) {
            var a, t = this,
                n = {
                    photos: [],
                    initialSlide: 0,
                    spaceBetween: 20,
                    speed: 300,
                    zoom: !0,
                    maxZoom: 3,
                    minZoom: 1,
                    exposition: !0,
                    expositionHideCaptions: !1,
                    type: "standalone",
                    navbar: !0,
                    toolbar: !0,
                    theme: "light",
                    swipeToClose: !0,
                    backLinkText: "Close",
                    ofText: "of",
                    loop: !1,
                    lazyLoading: !1,
                    lazyLoadingInPrevNext: !1,
                    lazyLoadingOnTransitionStart: !1
                };
            e = e || {};
            for (var r in n) "undefined" == typeof e[r] && (e[r] = n[r]);
            t.params = e;
            var o = "dark" === t.params.theme ? "color-white" : "",
                l = t.params.navbarTemplate || '<div class="navbar"><div class="navbar-inner"><div class="left sliding"><a href="#"  style="color: #FFFFFF"   class="link ' + ("page" === t.params.type && "back") + ' close-popup photo-browser-close-link" data-popup=".photo-browser-popup"><i class="icon icon-back ' + o + '"></i><span>' + t.params.backLinkText + '</span></a></div><div class="center sliding"><span class="photo-browser-current"></span> <span class="photo-browser-of">' + t.params.ofText + '</span> <span class="photo-browser-total"></span></div><div class="right"></div></div></div>',
                p = t.params.toolbarTemplate || '<div class="toolbar tabbar"><div class="toolbar-inner"><a href="#"  style="color: #FFFFFF"   class="link photo-browser-prev"><i class="icon icon-prev ' + o + '"></i></a><a href="#"  style="color: #FFFFFF"   class="link photo-browser-next"><i class="icon icon-next ' + o + '"></i></a></div></div>',
                d = t.params.template || '<div class="photo-browser photo-browser-' + t.params.theme + '"><div class="view navbar-fixed toolbar-fixed">{{navbar}}<div data-page="photo-browser-slides" class="page no-toolbar {{noNavbar}} toolbar-fixed navbar-fixed">{{toolbar}}{{captions}}<div class="photo-browser-swiper-container swiper-container"><div class="photo-browser-swiper-wrapper swiper-wrapper">{{photos}}</div></div></div></div></div>',
                c = t.params.lazyLoading ? t.params.photoLazyTemplate || '<div class="photo-browser-slide photo-browser-slide-lazy swiper-slide"><div class="preloader' + ("dark" === t.params.theme ? " preloader-white" : "") + '"></div><span class="photo-browser-zoom-container"><img data-src="{{url}}"></span></div>' : t.params.photoTemplate || '<div class="photo-browser-slide swiper-slide"><span class="photo-browser-zoom-container"><img src="{{url}}"></span></div>',
                f = t.params.captionsTheme || t.params.theme,
                u = t.params.captionsTemplate || '<div class="photo-browser-captions photo-browser-captions-' + f + '">{{captions}}</div>',
                m = t.params.captionTemplate || '<div class="photo-browser-caption" data-caption-index="{{captionIndex}}">{{caption}}</div>',
                h = t.params.objectTemplate || '<div class="photo-browser-slide photo-browser-object-slide swiper-slide">{{html}}</div>',
                g = "",
                v = "";
            for (a = 0; a < t.params.photos.length; a++) {
                var w = t.params.photos[a],
                    b = "";
                "string" == typeof w || w instanceof String ? b = w.indexOf("<") >= 0 || w.indexOf(">") >= 0 ? h.replace(/{{html}}/g, w) : c.replace(/{{url}}/g, w) : "object" == typeof w && (w.hasOwnProperty("html") && w.html.length > 0 ? b = h.replace(/{{html}}/g, w.html) : w.hasOwnProperty("url") && w.url.length > 0 && (b = c.replace(/{{url}}/g, w.url)), w.hasOwnProperty("caption") && w.caption.length > 0 ? v += m.replace(/{{caption}}/g, w.caption).replace(/{{captionIndex}}/g, a) : b = b.replace(/{{caption}}/g, "")), g += b
            }
            var C = d.replace("{{navbar}}", t.params.navbar ? l : "").replace("{{noNavbar}}", t.params.navbar ? "" : "no-navbar").replace("{{photos}}", g).replace("{{captions}}", u.replace(/{{captions}}/g, v)).replace("{{toolbar}}", t.params.toolbar ? p : "");
            t.activeIndex = t.params.initialSlide, t.openIndex = t.activeIndex, t.opened = !1, t.open = function(e) {
                return "undefined" == typeof e && (e = t.activeIndex), e = parseInt(e, 10), t.opened && t.swiper ? void t.swiper.slideTo(e) : (t.opened = !0, t.openIndex = e, t.initialLazyLoaded = !1, "standalone" === t.params.type && s("body").append(C), "popup" === t.params.type && (t.popup = i.popup('<div class="popup photo-browser-popup">' + C + "</div>"), s(t.popup).on("closed", t.onPopupClose)), "page" === t.params.type ? (s(document).on("pageBeforeInit", t.onPageBeforeInit), s(document).on("pageBeforeRemove", t.onPageBeforeRemove), t.params.view || (t.params.view = i.mainView), void t.params.view.loadContent(C)) : (t.layout(t.openIndex), void(t.params.onOpen && t.params.onOpen(t))))
            }, t.close = function() {
                t.opened = !1, t.swiperContainer && 0 !== t.swiperContainer.length && (t.params.onClose && t.params.onClose(t), t.attachEvents(!0), "standalone" === t.params.type && t.container.removeClass("photo-browser-in").addClass("photo-browser-out").animationEnd(function() {
                    t.container.remove()
                }), t.swiper.destroy(), t.swiper = t.swiperContainer = t.swiperWrapper = t.slides = y = x = T = void 0)
            }, t.onPopupClose = function() {
                t.close(), s(t.popup).off("pageBeforeInit", t.onPopupClose)
            }, t.onPageBeforeInit = function(e) {
                "photo-browser-slides" === e.detail.page.name && t.layout(t.openIndex), s(document).off("pageBeforeInit", t.onPageBeforeInit)
            }, t.onPageBeforeRemove = function(e) {
                "photo-browser-slides" === e.detail.page.name && t.close(), s(document).off("pageBeforeRemove", t.onPageBeforeRemove)
            }, t.loadImageInSlide = function(e, a) {
                if (e && "undefined" != typeof a && 0 !== e.slides.length) {
                    var n = e.slides.eq(a);
                    if (n.hasClass("photo-browser-slide-lazy")) {
                        var r = n.find("img");
                        if (0 !== r.length) {
                            var i = new Image,
                                o = r.attr("data-src");
                            i.onload = function() {
                                r.attr("src", o), r.removeAttr("data-src"), n.removeClass("photo-browser-slide-lazy").find(".preloader").remove(), t.params.onImageLoaded && t.params.onImageLoaded(t, n[0], r[0])
                            }, i.src = o, t.params.onImageLoad && t.params.onImageLoad(t, n[0], r[0])
                        }
                    }
                }
            }, t.lazyLoading = function(e, a) {
                if (t.loadImageInSlide(e, a), t.params.lazyLoadingInPrevNext) {
                    var n = e.wrapper.find(".swiper-slide-next.photo-browser-slide-lazy");
                    n.length > 0 && t.loadImageInSlide(e, n.index());
                    var r = e.wrapper.find(".swiper-slide-prev.photo-browser-slide-lazy");
                    r.length > 0 && t.loadImageInSlide(e, r.index())
                }
            }, t.onSliderTransitionStart = function(e) {
                t.activeIndex = e.activeIndex;
                var a = e.activeIndex + 1,
                    n = e.slides.length;
                if (t.params.loop && (n -= 2, a -= e.loopedSlides, 1 > a && (a = n + a), a > n && (a -= n)), t.container.find(".photo-browser-current").text(a), t.container.find(".photo-browser-total").text(n), s(".photo-browser-prev, .photo-browser-next").removeClass("photo-browser-link-inactive"), e.isBeginning && !t.params.loop && s(".photo-browser-prev").addClass("photo-browser-link-inactive"), e.isEnd && !t.params.loop && s(".photo-browser-next").addClass("photo-browser-link-inactive"), t.captions.length > 0) {
                    t.captionsContainer.find(".photo-browser-caption-active").removeClass("photo-browser-caption-active");
                    var r = t.params.loop ? e.slides.eq(e.activeIndex).attr("data-swiper-slide-index") : t.activeIndex;
                    t.captionsContainer.find('[data-caption-index="' + r + '"]').addClass("photo-browser-caption-active")
                }
                t.params.lazyLoading && (t.params.lazyLoadingOnTransitionStart || !t.params.lazyLoadingOnTransitionStart && !t.initialLazyLoaded) && (t.initialLazyLoaded = !0, t.lazyLoading(e, t.activeIndex));
                var i = e.slides.eq(e.previousIndex).find("video");
                i.length > 0 && "pause" in i[0] && i[0].pause(), t.params.onSlideChangeStart && t.params.onSlideChangeStart(e)
            }, t.onSliderTransitionEnd = function(e) {
                t.params.lazyLoading && !t.params.lazyLoadingOnTransitionStart && t.lazyLoading(e, t.activeIndex), t.params.zoom && y && e.previousIndex !== e.activeIndex && (x.transform("translate3d(0,0,0) scale(1)"), T.transform("translate3d(0,0,0)"), y = x = T = void 0, k = S = 1), t.params.onSlideChangeEnd && t.params.onSlideChangeEnd(e)
            }, t.layout = function(e) {
                t.container = "page" === t.params.type ? s(".photo-browser-swiper-container").parents(".view") : s(".photo-browser"), "standalone" === t.params.type && (t.container.addClass("photo-browser-in"), i.sizeNavbars(t.container)), t.swiperContainer = t.container.find(".photo-browser-swiper-container"), t.swiperWrapper = t.container.find(".photo-browser-swiper-wrapper"), t.slides = t.container.find(".photo-browser-slide"), t.captionsContainer = t.container.find(".photo-browser-captions"), t.captions = t.container.find(".photo-browser-caption");
                var a = {
                    nextButton: t.params.nextButton || ".photo-browser-next",
                    prevButton: t.params.prevButton || ".photo-browser-prev",
                    indexButton: t.params.indexButton,
                    initialSlide: e,
                    spaceBetween: t.params.spaceBetween,
                    speed: t.params.speed,
                    loop: t.params.loop,
                    onTap: function(e, a) {
                        t.params.onTap && t.params.onTap(e, a)
                    },
                    onClick: function(e, a) {
                        t.params.exposition && t.toggleExposition(), t.params.onClick && t.params.onClick(e, a)
                    },
                    onDoubleTap: function(e, a) {
                        t.toggleZoom(s(a.target).parents(".photo-browser-slide")), t.params.onDoubleTap && t.params.onDoubleTap(e, a)
                    },
                    onTransitionStart: function(e) {
                        t.onSliderTransitionStart(e)
                    },
                    onTransitionEnd: function(e) {
                        t.onSliderTransitionEnd(e)
                    }
                };
                t.params.swipeToClose && "page" !== t.params.type && (a.onTouchStart = t.swipeCloseTouchStart, a.onOppositeTouchMove = t.swipeCloseTouchMove, a.onTouchEnd = t.swipeCloseTouchEnd), t.swiper = i.swiper(t.swiperContainer, a), 0 === e && t.onSliderTransitionStart(t.swiper), t.attachEvents()
            }, t.attachEvents = function(e) {
                var a = e ? "off" : "on";
                if (t.params.zoom) {
                    var n = t.params.loop ? t.swiper.slides : t.slides;
                    n[a]("gesturestart", t.onSlideGestureStart), n[a]("gesturechange", t.onSlideGestureChange), n[a]("gestureend", t.onSlideGestureEnd), n[a](i.touchEvents.start, t.onSlideTouchStart), n[a](i.touchEvents.move, t.onSlideTouchMove), n[a](i.touchEvents.end, t.onSlideTouchEnd)
                }
                t.container.find(".photo-browser-close-link")[a]("click", t.close)
            };
            t.exposed = !1, t.toggleExposition = function() {
                t.container && t.container.toggleClass("photo-browser-exposed"), t.params.expositionHideCaptions && t.captionsContainer.toggleClass("photo-browser-captions-exposed"), t.exposed = !t.exposed
            }, t.enableExposition = function() {
                t.container && t.container.addClass("photo-browser-exposed"), t.params.expositionHideCaptions && t.captionsContainer.addClass("photo-browser-captions-exposed"), t.exposed = !0
            }, t.disableExposition = function() {
                t.container && t.container.removeClass("photo-browser-exposed"), t.params.expositionHideCaptions && t.captionsContainer.removeClass("photo-browser-captions-exposed"), t.exposed = !1
            };
            var y, x, T, k = 1,
                S = 1,
                P = !1;
            t.onSlideGestureStart = function() {
                return y || (y = s(this), x = y.find("img, svg, canvas"), T = x.parent(".photo-browser-zoom-container"), 0 !== T.length) ? (x.transition(0), void(P = !0)) : void(x = void 0)
            }, t.onSlideGestureChange = function(e) {
                x && 0 !== x.length && (k = e.scale * S, k > t.params.maxZoom && (k = t.params.maxZoom - 1 + Math.pow(k - t.params.maxZoom + 1, .5)), k < t.params.minZoom && (k = t.params.minZoom + 1 - Math.pow(t.params.minZoom - k + 1, .5)), x.transform("translate3d(0,0,0) scale(" + k + ")"))
            }, t.onSlideGestureEnd = function() {
                x && 0 !== x.length && (k = Math.max(Math.min(k, t.params.maxZoom), t.params.minZoom), x.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + k + ")"), S = k, P = !1, 1 === k && (y = void 0))
            }, t.toggleZoom = function() {
                y || (y = t.swiper.slides.eq(t.swiper.activeIndex), x = y.find("img, svg, canvas"), T = x.parent(".photo-browser-zoom-container")), x && 0 !== x.length && (T.transition(300).transform("translate3d(0,0,0)"), k && 1 !== k ? (k = S = 1, x.transition(300).transform("translate3d(0,0,0) scale(1)"), y = void 0) : (k = S = t.params.maxZoom, x.transition(300).transform("translate3d(0,0,0) scale(" + k + ")")))
            };
            var M, O, I, E, D, L, N, B, A, z, H, R, V, q, F, G, W, Y = {},
                j = {};
            t.onSlideTouchStart = function(e) {
                x && 0 !== x.length && (M || ("android" === i.device.os && e.preventDefault(), M = !0, Y.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, Y.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            }, t.onSlideTouchMove = function(e) {
                if (x && 0 !== x.length && (t.swiper.allowClick = !1, M && y)) {
                    O || (A = x[0].offsetWidth, z = x[0].offsetHeight, H = s.getTranslate(T[0], "x") || 0, R = s.getTranslate(T[0], "y") || 0, T.transition(0));
                    var a = A * k,
                        n = z * k;
                    if (!(a < t.swiper.width && n < t.swiper.height)) {
                        if (D = Math.min(t.swiper.width / 2 - a / 2, 0), N = -D, L = Math.min(t.swiper.height / 2 - n / 2, 0), B = -L, j.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, j.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !O && !P && (Math.floor(D) === Math.floor(H) && j.x < Y.x || Math.floor(N) === Math.floor(H) && j.x > Y.x)) return void(M = !1);
                        e.preventDefault(), e.stopPropagation(), O = !0, I = j.x - Y.x + H, E = j.y - Y.y + R, D > I && (I = D + 1 - Math.pow(D - I + 1, .8)), I > N && (I = N - 1 + Math.pow(I - N + 1, .8)), L > E && (E = L + 1 - Math.pow(L - E + 1, .8)), E > B && (E = B - 1 + Math.pow(E - B + 1, .8)), V || (V = j.x), G || (G = j.y), q || (q = Date.now()), F = (j.x - V) / (Date.now() - q) / 2, W = (j.y - G) / (Date.now() - q) / 2, Math.abs(j.x - V) < 2 && (F = 0), Math.abs(j.y - G) < 2 && (W = 0), V = j.x, G = j.y, q = Date.now(), T.transform("translate3d(" + I + "px, " + E + "px,0)")
                    }
                }
            }, t.onSlideTouchEnd = function() {
                if (x && 0 !== x.length) {
                    if (!M || !O) return M = !1, void(O = !1);
                    M = !1, O = !1;
                    var e = 300,
                        a = 300,
                        n = F * e,
                        r = I + n,
                        i = W * a,
                        o = E + i;
                    0 !== F && (e = Math.abs((r - I) / F)), 0 !== W && (a = Math.abs((o - E) / W));
                    var s = Math.max(e, a);
                    I = r, E = o;
                    var l = A * k,
                        p = z * k;
                    D = Math.min(t.swiper.width / 2 - l / 2, 0), N = -D, L = Math.min(t.swiper.height / 2 - p / 2, 0), B = -L, I = Math.max(Math.min(I, N), D), E = Math.max(Math.min(E, B), L), T.transition(s).transform("translate3d(" + I + "px, " + E + "px,0)")
                }
            };
            var _, X, U, J, Q, K = !1,
                Z = !0,
                $ = !1;
            return t.swipeCloseTouchStart = function() {
                Z && (K = !0)
            }, t.swipeCloseTouchMove = function(e, a) {
                if (K) {
                    $ || ($ = !0, X = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, J = t.swiper.slides.eq(t.swiper.activeIndex), Q = (new Date).getTime()), a.preventDefault(), U = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, _ = X - U;
                    var n = 1 - Math.abs(_) / 300;
                    J.transform("translate3d(0," + -_ + "px,0)"), t.swiper.container.css("opacity", n).transition(0)
                }
            }, t.swipeCloseTouchEnd = function() {
                if (K = !1, !$) return void($ = !1);
                $ = !1, Z = !1;
                var e = Math.abs(_),
                    a = (new Date).getTime() - Q;
                return 300 > a && e > 20 || a >= 300 && e > 100 ? void setTimeout(function() {
                    "standalone" === t.params.type && t.close(), "popup" === t.params.type && i.closeModal(t.popup), t.params.onSwipeToClose && t.params.onSwipeToClose(t), Z = !0
                }, 0) : (0 !== e ? J.addClass("transitioning").transitionEnd(function() {
                    Z = !0, J.removeClass("transitioning")
                }) : Z = !0, t.swiper.container.css("opacity", "").transition(""), void J.transform(""))
            }, t
        };
        i.photoBrowser = function(e) {
            return new m(e)
        };
        var h = function(e) {
            function a() {
                var e = !1;
                return p.params.convertToPopover ? (!p.inline && p.params.input && (i.device.ios ? e = i.device.ipad ? !0 : !1 : s(window).width() >= 768 && (e = !0)), e) : e
            }

            function t() {
                return p.opened && p.container && p.container.length > 0 && p.container.parents(".popover").length > 0 ? !0 : !1
            }

            function n() {
                if (p.opened)
                    for (var e = 0; e < p.cols.length; e++) p.cols[e].divider || (p.cols[e].calcSize(), p.cols[e].setValue(p.cols[e].value, 0, !1))
            }

            function r(e) {
                if (e.preventDefault(), !p.opened && (p.open(), p.params.scrollToInput && !a())) {
                    var t = p.input.parents(".page-content");
                    if (0 === t.length) return;
                    var n, r = parseInt(t.css("padding-top"), 10),
                        i = parseInt(t.css("padding-bottom"), 10),
                        o = t[0].offsetHeight - r - p.container.height(),
                        s = t[0].scrollHeight - r - p.container.height(),
                        l = p.input.offset().top - r + p.input[0].offsetHeight;
                    if (l > o) {
                        var d = t.scrollTop() + l - o;
                        d + o > s && (n = d + o - s + i, o === s && (n = p.container.height()), t.css({
                            "padding-bottom": n + "px"
                        })), t.scrollTop(d, 300)
                    }
                }
            }

            function o(e) {
                t() || (p.input && p.input.length > 0 ? e.target !== p.input[0] && 0 === s(e.target).parents(".picker-modal").length && p.close() : 0 === s(e.target).parents(".picker-modal").length && p.close())
            }

            function l() {
                p.opened = !1, p.input.parents(".page-content").css({
                    "padding-bottom": ""
                }), p.params.onClose && p.params.onClose(p), p.container.find(".picker-items-col").each(function() {
                    p.destroyPickerCol(this)
                })
            }
            var p = this,
                d = {
                    updateValuesOnMomentum: !1,
                    updateValuesOnTouchmove: !0,
                    rotateEffect: !1,
                    momentumRatio: 7,
                    freeMode: !1,
                    scrollToInput: !0,
                    inputReadOnly: !0,
                    convertToPopover: !0,
                    toolbar: !0,
                    toolbarCloseText: "Done",
                    toolbarTemplate: '<div class="toolbar"><div class="toolbar-inner"><div class="left"></div><div class="right"><a href="#"  style="color: #FFFFFF"   class="link close-picker">{{closeText}}</a></div></div></div>'
                };
            e = e || {};
            for (var c in d) "undefined" == typeof e[c] && (e[c] = d[c]);
            p.params = e, p.cols = [], p.initialized = !1, p.inline = p.params.container ? !0 : !1;
            var f = i.device.ios || navigator.userAgent.toLowerCase().indexOf("safari") >= 0 && navigator.userAgent.toLowerCase().indexOf("chrome") < 0 && !i.device.android;
            return p.setValue = function(e, a) {
                for (var t = 0, n = 0; n < p.cols.length; n++) p.cols[n] && !p.cols[n].divider && (p.cols[n].setValue(e[t], a), t++)
            }, p.updateValue = function() {
                for (var e = [], a = [], t = 0; t < p.cols.length; t++) p.cols[t].divider || (e.push(p.cols[t].value), a.push(p.cols[t].displayValue));
                e.indexOf(void 0) >= 0 || (p.value = e, p.displayValue = a, p.params.onChange && p.params.onChange(p, p.value, p.displayValue), p.input && p.input.length > 0 && (s(p.input).val(p.params.formatValue ? p.params.formatValue(p, p.value, p.displayValue) : p.value.join(" ")), s(p.input).trigger("change")))
            }, p.initPickerCol = function(e, a) {
                function t() {
                    b = s.requestAnimationFrame(function() {
                        u.updateItems(void 0, void 0, 0), t()
                    })
                }

                function n(e) {
                    y || C || (e.preventDefault(), C = !0, x = T = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, k = (new Date).getTime(), L = !0, P = O = s.getTranslate(u.wrapper[0], "y"))
                }

                function r(e) {
                    if (C) {
                        e.preventDefault(), L = !1, T = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, y || (s.cancelAnimationFrame(b), y = !0, P = O = s.getTranslate(u.wrapper[0], "y"), u.wrapper.transition(0)), e.preventDefault();
                        var a = T - x;
                        O = P + a, M = void 0, v > O && (O = v - Math.pow(v - O, .8), M = "min"), O > w && (O = w + Math.pow(O - w, .8), M = "max"), u.wrapper.transform("translate3d(0," + O + "px,0)"), u.updateItems(void 0, O, 0, p.params.updateValuesOnTouchmove), E = O - I || O, D = (new Date).getTime(), I = O
                    }
                }

                function o() {
                    if (!C || !y) return void(C = y = !1);
                    C = y = !1, u.wrapper.transition(""), M && u.wrapper.transform("min" === M ? "translate3d(0," + v + "px,0)" : "translate3d(0," + w + "px,0)"), S = (new Date).getTime();
                    var e, a;
                    S - k > 300 ? a = O : (e = Math.abs(E / (S - D)), a = O + E * p.params.momentumRatio), a = Math.max(Math.min(a, w), v);
                    var n = -Math.floor((a - w) / h);
                    p.params.freeMode || (a = -n * h + w), u.wrapper.transform("translate3d(0," + parseInt(a, 10) + "px,0)"), u.updateItems(n, a, "", !0), p.params.updateValuesOnMomentum && (t(), u.wrapper.transitionEnd(function() {
                        s.cancelAnimationFrame(b)
                    })), setTimeout(function() {
                        L = !0
                    }, 100)
                }

                function l() {
                    if (L) {
                        s.cancelAnimationFrame(b);
                        var e = s(this).attr("data-picker-value");
                        u.setValue(e)
                    }
                }
                var d = s(e),
                    c = d.index(),
                    u = p.cols[c];
                if (!u.divider) {
                    u.container = d, u.wrapper = u.container.find(".picker-items-col-wrapper"), u.items = u.wrapper.find(".picker-item");
                    var m, h, g, v, w;
                    u.replaceValues = function(e, a) {
                        u.values = e, u.displayValues = a;
                        var t = p.columnHTML(u, !0);
                        u.wrapper.html(t), u.items = u.wrapper.find(".picker-item"), u.calcSize(), u.setValue(u.values[0], 0, !0)
                    }, u.calcSize = function() {
                        p.params.rotateEffect && (u.container.removeClass("picker-items-col-absolute"), u.width || u.container.css({
                            width: ""
                        }));
                        var e, a;
                        e = 0, a = u.container[0].offsetHeight, m = u.wrapper[0].offsetHeight, h = u.items[0].offsetHeight, g = h * u.items.length, v = a / 2 - g + h / 2, w = a / 2 - h / 2, u.width && (e = u.width, parseInt(e, 10) === e && (e += "px"), u.container.css({
                            width: e
                        })), p.params.rotateEffect && (u.width || (u.items.each(function() {
                            var a = s(this);
                            a.css({
                                width: "auto"
                            }), e = Math.max(e, a[0].offsetWidth), a.css({
                                width: ""
                            })
                        }), u.container.css({
                            width: e + 2 + "px"
                        })), u.container.addClass("picker-items-col-absolute"))
                    }, u.calcSize(), u.wrapper.transform("translate3d(0," + w + "px,0)").transition(0);
                    var b;
                    u.setValue = function(e, a, n) {
                        "undefined" == typeof a && (a = "");
                        var r = u.wrapper.find('.picker-item[data-picker-value="' + e + '"]').index();
                        if ("undefined" != typeof r && -1 !== r) {
                            var i = -r * h + w;
                            u.wrapper.transition(a), u.wrapper.transform("translate3d(0," + i + "px,0)"), p.params.updateValuesOnMomentum && u.activeIndex && u.activeIndex !== r && (s.cancelAnimationFrame(b), u.wrapper.transitionEnd(function() {
                                s.cancelAnimationFrame(b)
                            }), t()), u.updateItems(r, i, a, n)
                        }
                    }, u.updateItems = function(e, a, t, n) {
                        "undefined" == typeof a && (a = s.getTranslate(u.wrapper[0], "y")), "undefined" == typeof e && (e = -Math.round((a - w) / h)), 0 > e && (e = 0), e >= u.items.length && (e = u.items.length - 1);
                        var r = u.activeIndex;
                        u.activeIndex = e, u.wrapper.find(".picker-selected, .picker-after-selected, .picker-before-selected").removeClass("picker-selected picker-after-selected picker-before-selected"), u.items.transition(t); {
                            var i = u.items.eq(e).addClass("picker-selected").transform("");
                            i.prevAll().addClass("picker-before-selected"), i.nextAll().addClass("picker-after-selected")
                        }
                        if ((n || "undefined" == typeof n) && (u.value = i.attr("data-picker-value"), u.displayValue = u.displayValues ? u.displayValues[e] : u.value, r !== e && (u.onChange && u.onChange(p, u.value, u.displayValue), p.updateValue())), p.params.rotateEffect) {
                            {
                                (a - (Math.floor((a - w) / h) * h + w)) / h
                            }
                            u.items.each(function() {
                                var e = s(this),
                                    t = e.index() * h,
                                    n = w - a,
                                    r = t - n,
                                    i = r / h,
                                    o = Math.ceil(u.height / h / 2) + 1,
                                    l = -18 * i;
                                l > 180 && (l = 180), -180 > l && (l = -180), Math.abs(i) > o ? e.addClass("picker-item-far") : e.removeClass("picker-item-far"), e.transform("translate3d(0, " + (-a + w) + "px, " + (f ? -110 : 0) + "px) rotateX(" + l + "deg)")
                            })
                        }
                    }, a && u.updateItems(0, w, 0);
                    var C, y, x, T, k, S, P, M, O, I, E, D, L = !0;
                    u.container.on(i.touchEvents.start, n), u.container.on(i.touchEvents.move, r), u.container.on(i.touchEvents.end, o), u.items.on("click", l), u.container[0].f7DestroyPickerCol = function() {
                        u.container.off(i.touchEvents.start, n), u.container.off(i.touchEvents.move, r), u.container.off(i.touchEvents.end, o), u.items.off("click", l)
                    }
                }
            }, p.destroyPickerCol = function(e) {
                e = s(e), "f7DestroyPickerCol" in e[0] && e[0].f7DestroyPickerCol()
            }, s(window).on("resize", n), p.columnHTML = function(e, a) {
                var t = "",
                    n = "";
                if (e.divider) n += '<div class="picker-items-col picker-items-col-divider ' + (e.textAlign ? "picker-items-col-" + e.textAlign : "") + " " + (e.cssClass || "") + '">' + e.content + "</div>";
                else {
                    for (var r = 0; r < e.values.length; r++) t += '<div class="picker-item" data-picker-value="' + e.values[r] + '">' + (e.displayValues ? e.displayValues[r] : e.values[r]) + "</div>";
                    n += '<div class="picker-items-col ' + (e.textAlign ? "picker-items-col-" + e.textAlign : "") + " " + (e.cssClass || "") + '"><div class="picker-items-col-wrapper">' + t + "</div></div>"
                }
                return a ? t : n
            }, p.layout = function() {
                var e, a = "",
                    t = "";
                p.cols = [];
                var n = "";
                for (e = 0; e < p.params.cols.length; e++) {
                    var r = p.params.cols[e];
                    n += p.columnHTML(p.params.cols[e]), p.cols.push(r)
                }
                t = "picker-modal picker-columns " + (p.params.cssClass || "") + (p.params.rotateEffect ? " picker-3d" : ""), a = '<div class="' + t + '">' + (p.params.toolbar ? p.params.toolbarTemplate.replace(/{{closeText}}/g, p.params.toolbarCloseText) : "") + '<div class="picker-modal-inner picker-items">' + n + '<div class="picker-center-highlight"></div></div></div>', p.pickerHTML = a
            }, p.params.input && (p.input = s(p.params.input), p.params.inputReadOnly && p.input.prop("readOnly", !0), p.inline || p.input.on("click", r), p.params.inputReadOnly && p.input.on("focus mousedown", function(e) {
                e.preventDefault()
            })), p.inline || s("html").on("click", o), p.opened = !1, p.open = function() {
                var e = a();
                p.opened || (p.layout(), e ? (p.pickerHTML = '<div class="popover popover-picker-columns"><div class="popover-inner">' + p.pickerHTML + "</div></div>", p.popover = i.popover(p.pickerHTML, p.params.input, !0), p.container = s(p.popover).find(".picker-modal"), s(p.popover).on("close", function() {
                    l()
                })) : p.inline ? (p.container = s(p.pickerHTML), p.container.addClass("picker-modal-inline"), s(p.params.container).append(p.container)) : (p.container = s(i.pickerModal(p.pickerHTML)), s(p.container).on("close", function() {
                    l()
                })), p.container[0].f7Picker = p, p.container.find(".picker-items-col").each(function() {
                    var e = !0;
                    (!p.initialized && p.params.value || p.initialized && p.value) && (e = !1), p.initPickerCol(this, e)
                }), p.initialized ? p.value && p.setValue(p.value, 0) : p.params.value && p.setValue(p.params.value, 0)), p.opened = !0, p.initialized = !0, p.params.onOpen && p.params.onOpen(p)
            }, p.close = function() {
                return p.opened && !p.inline ? t() ? void i.closeModal(p.popover) : void i.closeModal(p.container) : void 0
            }, p.destroy = function() {
                p.close(), p.params.input && p.input.off("click focus", r), s("html").off("click", o), s(window).off("resize", n)
            }, p.inline && p.open(), p
        };
        i.picker = function(e) {
            return new h(e)
        };
        var g = function(e) {
            function a() {
                var e = !1;
                return p.params.convertToPopover ? (!p.inline && p.params.input && (i.device.ios ? e = i.device.ipad ? !0 : !1 : s(window).width() >= 768 && (e = !0)), e) : e
            }

            function t() {
                return p.opened && p.container && p.container.length > 0 && p.container.parents(".popover").length > 0 ? !0 : !1
            }

            function n(e) {
                e = new Date(e);
                var a = e.getFullYear(),
                    t = e.getMonth(),
                    n = t + 1,
                    r = e.getDate(),
                    i = e.getDay();
                return p.params.dateFormat.replace(/yyyy/g, a).replace(/yy/g, (a + "").substring(2)).replace(/mm/g, 10 > n ? "0" + n : n).replace(/m/g, n).replace(/MM/g, p.params.monthNames[t]).replace(/M/g, p.params.monthNamesShort[t]).replace(/dd/g, 10 > r ? "0" + r : r).replace(/d/g, r).replace(/DD/g, p.params.dayNames[i]).replace(/D/g, p.params.dayNamesShort[i])
            }

            function r(e) {
                if (e.preventDefault(), !p.opened && (p.open(), p.params.scrollToInput && !a())) {
                    var t = p.input.parents(".page-content");
                    if (0 === t.length) return;
                    var n, r = parseInt(t.css("padding-top"), 10),
                        i = parseInt(t.css("padding-bottom"), 10),
                        o = t[0].offsetHeight - r - p.container.height(),
                        s = t[0].scrollHeight - r - p.container.height(),
                        l = p.input.offset().top - r + p.input[0].offsetHeight;
                    if (l > o) {
                        var d = t.scrollTop() + l - o;
                        d + o > s && (n = d + o - s + i, o === s && (n = p.container.height()), t.css({
                            "padding-bottom": n + "px"
                        })), t.scrollTop(d, 300)
                    }
                }
            }

            function o(e) {
                t() || (p.input && p.input.length > 0 ? e.target !== p.input[0] && 0 === s(e.target).parents(".picker-modal").length && p.close() : 0 === s(e.target).parents(".picker-modal").length && p.close())
            }

            function l() {
                p.opened = !1, p.input.parents(".page-content").css({
                    "padding-bottom": ""
                }), p.params.onClose && p.params.onClose(p), p.destroyCalendarEvents()
            }
            var p = this,
                d = {
                    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    firstDay: 1,
                    weekendDays: [0, 6],
                    multiple: !1,
                    dateFormat: "yyyy-mm-dd",
                    direction: "horizontal",
                    minDate: null,
                    maxDate: null,
                    touchMove: !0,
                    animate: !0,
                    closeOnSelect: !1,
                    monthPicker: !0,
                    monthPickerTemplate: '<div class="picker-calendar-month-picker"><a href="#"  style="color: #FFFFFF"   class="link icon-only picker-calendar-prev-month"><i class="icon icon-prev"></i></a><span class="current-month-value">August</span><a href="#"  style="color: #FFFFFF"   class="link icon-only picker-calendar-next-month"><i class="icon icon-next"></i></a></div>',
                    yearPicker: !0,
                    yearPickerTemplate: '<div class="picker-calendar-year-picker"><a href="#"  style="color: #FFFFFF"   class="link icon-only picker-calendar-prev-year"><i class="icon icon-prev"></i></a><span class="current-year-value">2015</span><a href="#"  style="color: #FFFFFF"   class="link icon-only picker-calendar-next-year"><i class="icon icon-next"></i></a></div>',
                    weekHeader: !0,
                    scrollToInput: !0,
                    inputReadOnly: !0,
                    convertToPopover: !0,
                    toolbar: !0,
                    toolbarCloseText: "Done",
                    toolbarTemplate: '<div class="toolbar"><div class="toolbar-inner">{{monthPicker}}{{yearPicker}}</div></div>'
                };
            e = e || {};
            for (var c in d) "undefined" == typeof e[c] && (e[c] = d[c]);
            p.params = e, p.initialized = !1, p.inline = p.params.container ? !0 : !1, p.isH = "horizontal" === p.params.direction;
            var f = p.isH && i.rtl ? -1 : 1;
            return p.animating = !1, p.addValue = function(e) {
                if (p.params.multiple) {
                    p.value || (p.value = []);
                    for (var a, t = 0; t < p.value.length; t++) new Date(e).getTime() === new Date(p.value[t]).getTime() && (a = t);
                    "undefined" == typeof a ? p.value.push(e) : p.value.splice(a, 1), p.updateValue()
                } else p.value = [e], p.updateValue()
            }, p.setValue = function(e) {
                p.value = e, p.updateValue()
            }, p.updateValue = function() {
                p.wrapper.find(".picker-calendar-day-selected").removeClass("picker-calendar-day-selected");
                var e, a;
                for (e = 0; e < p.value.length; e++) {
                    var t = new Date(p.value[e]);
                    p.wrapper.find('.picker-calendar-day[data-date="' + t.getFullYear() + "-" + t.getMonth() + "-" + t.getDate() + '"]').addClass("picker-calendar-day-selected")
                }
                if (p.params.onChange && p.params.onChange(p, p.value), p.input && p.input.length > 0) {
                    if (p.params.formatValue) a = p.params.formatValue(p, p.value);
                    else {
                        for (a = [], e = 0; e < p.value.length; e++) a.push(n(p.value[e]));
                        a = a.join(", ")
                    }
                    s(p.input).val(a), s(p.input).trigger("change")
                }
            }, p.initCalendarEvents = function() {
                function e(e) {
                    o || r || (r = !0, l = u = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, d = u = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, m = (new Date).getTime(), C = 0, T = !0, x = void 0, g = v = p.monthsTranslate)
                }

                function a(e) {
                    if (r) {
                        if (c = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, u = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof x && (x = !!(x || Math.abs(u - d) > Math.abs(c - l))), p.isH && x) return void(r = !1);
                        if (e.preventDefault(), p.animating) return void(r = !1);
                        T = !1, o || (o = !0, w = p.wrapper[0].offsetWidth, b = p.wrapper[0].offsetHeight, p.wrapper.transition(0)), e.preventDefault(), y = p.isH ? c - l : u - d, C = y / (p.isH ? w : b), v = 100 * (p.monthsTranslate * f + C), p.wrapper.transform("translate3d(" + (p.isH ? v : 0) + "%, " + (p.isH ? 0 : v) + "%, 0)")
                    }
                }

                function t() {
                    return r && o ? (r = o = !1, h = (new Date).getTime(), 300 > h - m ? Math.abs(y) < 10 ? p.resetMonth() : y >= 10 ? i.rtl ? p.nextMonth() : p.prevMonth() : i.rtl ? p.prevMonth() : p.nextMonth() : -.5 >= C ? i.rtl ? p.prevMonth() : p.nextMonth() : C >= .5 ? i.rtl ? p.nextMonth() : p.prevMonth() : p.resetMonth(), void setTimeout(function() {
                        T = !0
                    }, 100)) : void(r = o = !1)
                }

                function n(e) {
                    if (T) {
                        var a = s(e.target).parents(".picker-calendar-day");
                        if (0 === a.length && s(e.target).hasClass("picker-calendar-day") && (a = s(e.target)), 0 !== a.length && (!a.hasClass("picker-calendar-day-selected") || p.params.multiple) && !a.hasClass("picker-calendar-day-disabled")) {
                            a.hasClass("picker-calendar-day-next") && p.nextMonth(), a.hasClass("picker-calendar-day-prev") && p.prevMonth();
                            var t = a.attr("data-year"),
                                n = a.attr("data-month"),
                                r = a.attr("data-day");
                            p.params.onDayClick && p.params.onDayClick(p, a[0], t, n, r), p.addValue(new Date(t, n, r).getTime()), p.params.closeOnSelect && p.close()
                        }
                    }
                }
                var r, o, l, d, c, u, m, h, g, v, w, b, C, y, x, T = !0;
                p.container.find(".picker-calendar-prev-month").on("click", p.prevMonth), p.container.find(".picker-calendar-next-month").on("click", p.nextMonth), p.container.find(".picker-calendar-prev-year").on("click", p.prevYear), p.container.find(".picker-calendar-next-year").on("click", p.nextYear), p.wrapper.on("click", n), p.params.touchMove && (p.wrapper.on(i.touchEvents.start, e), p.wrapper.on(i.touchEvents.move, a), p.wrapper.on(i.touchEvents.end, t)), p.container[0].f7DestroyCalendarEvents = function() {
                    p.container.find(".picker-calendar-prev-month").off("click", p.prevMonth), p.container.find(".picker-calendar-next-month").off("click", p.nextMonth), p.container.find(".picker-calendar-prev-year").off("click", p.prevYear), p.container.find(".picker-calendar-next-year").off("click", p.nextYear), p.wrapper.off("click", n), p.params.touchMove && (p.wrapper.off(i.touchEvents.start, e), p.wrapper.off(i.touchEvents.move, a), p.wrapper.off(i.touchEvents.end, t))
                }
            }, p.destroyCalendarEvents = function() {
                "f7DestroyCalendarEvents" in p.container[0] && p.container[0].f7DestroyCalendarEvents()
            }, p.daysInMonth = function(e) {
                var a = new Date(e);
                return new Date(a.getFullYear(), a.getMonth() + 1, 0).getDate()
            }, p.monthHTML = function(e, a) {
                e = new Date(e); {
                    var t = e.getFullYear(),
                        n = e.getMonth();
                    e.getDate()
                }
                "next" === a && (e = 11 === n ? new Date(t + 1, 0) : new Date(t, n + 1, 1)), "prev" === a && (e = 0 === n ? new Date(t - 1, 11) : new Date(t, n - 1, 1)), ("next" === a || "prev" === a) && (n = e.getMonth(), t = e.getFullYear());
                var r = p.daysInMonth(new Date(e.getFullYear(), e.getMonth()).getTime() - 864e6),
                    i = p.daysInMonth(e),
                    o = new Date(e.getFullYear(), e.getMonth()).getDay();
                0 === o && (o = 7);
                var s, l, d, c = [],
                    f = 6,
                    u = 7,
                    m = "",
                    h = 0 + (p.params.firstDay - 1),
                    g = (new Date).setHours(0, 0, 0, 0),
                    v = p.params.minDate ? new Date(p.params.minDate).getTime() : null,
                    w = p.params.maxDate ? new Date(p.params.maxDate).getTime() : null;
                if (p.value && p.value.length)
                    for (l = 0; l < p.value.length; l++) c.push(new Date(p.value[l]).setHours(0, 0, 0, 0));
                for (l = 1; f >= l; l++) {
                    var b = "";
                    for (d = 1; u >= d; d++) {
                        var C = d;
                        h++;
                        var y = h - o,
                            x = "";
                        0 > y ? (y = r + y + 1, x += " picker-calendar-day-prev", s = new Date(0 > n - 1 ? t - 1 : t, 0 > n - 1 ? 11 : n - 1, y).getTime()) : (y += 1, y > i ? (y -= i, x += " picker-calendar-day-next", s = new Date(n + 1 > 11 ? t + 1 : t, n + 1 > 11 ? 0 : n + 1, y).getTime()) : s = new Date(t, n, y).getTime()), s === g && (x += " picker-calendar-day-today"), c.indexOf(s) >= 0 && (x += " picker-calendar-day-selected"), p.params.weekendDays.indexOf(C - 1) >= 0 && (x += " picker-calendar-day-weekend"), (v && v > s || w && s > w) && (x += " picker-calendar-day-disabled"), s = new Date(s);
                        var T = s.getFullYear(),
                            k = s.getMonth();
                        b += '<div data-year="' + T + '" data-month="' + k + '" data-day="' + y + '" class="picker-calendar-day' + x + '" data-date="' + (T + "-" + k + "-" + y) + '"><span>' + y + "</span></div>"
                    }
                    m += '<div class="picker-calendar-row">' + b + "</div>"
                }
                return m = '<div class="picker-calendar-month" data-year="' + t + '" data-month="' + n + '">' + m + "</div>"
            }, p.animating = !1, p.updateCurrentMonthYear = function(e) {
                "undefined" == typeof e ? (p.currentMonth = parseInt(p.months.eq(1).attr("data-month"), 10), p.currentYear = parseInt(p.months.eq(1).attr("data-year"), 10)) : (p.currentMonth = parseInt(p.months.eq("next" === e ? p.months.length - 1 : 0).attr("data-month"), 10), p.currentYear = parseInt(p.months.eq("next" === e ? p.months.length - 1 : 0).attr("data-year"), 10)), p.container.find(".current-month-value").text(p.params.monthNames[p.currentMonth]), p.container.find(".current-year-value").text(p.currentYear)
            }, p.onMonthChangeStart = function(e) {
                p.updateCurrentMonthYear(e), p.months.removeClass("picker-calendar-month-current picker-calendar-month-prev picker-calendar-month-next");
                var a = "next" === e ? p.months.length - 1 : 0;
                p.months.eq(a).addClass("picker-calendar-month-current"), p.months.eq("next" === e ? a - 1 : a + 1).addClass("next" === e ? "picker-calendar-month-prev" : "picker-calendar-month-next"), p.params.onMonthYearChangeStart && p.params.onMonthYearChangeStart(p, p.currentYear, p.currentMonth)
            }, p.onMonthChangeEnd = function(e, a) {
                p.animating = !1;
                var t, n, r;
                p.wrapper.find(".picker-calendar-month:not(.picker-calendar-month-prev):not(.picker-calendar-month-current):not(.picker-calendar-month-next)").remove(), "undefined" == typeof e && (e = "next", a = !0), a ? (p.wrapper.find(".picker-calendar-month-next, .picker-calendar-month-prev").remove(), n = p.monthHTML(new Date(p.currentYear, p.currentMonth), "prev"), t = p.monthHTML(new Date(p.currentYear, p.currentMonth), "next")) : r = p.monthHTML(new Date(p.currentYear, p.currentMonth), e), ("next" === e || a) && p.wrapper.append(r || t), ("prev" === e || a) && p.wrapper.prepend(r || n), p.months = p.wrapper.find(".picker-calendar-month"), p.setMonthsTranslate(p.monthsTranslate), p.params.onMonthAdd && p.params.onMonthAdd(p, "next" === e ? p.months.eq(p.months.length - 1)[0] : p.months.eq(0)[0]), p.params.onMonthYearChangeEnd && p.params.onMonthYearChangeEnd(p, p.currentYear, p.currentMonth)
            }, p.setMonthsTranslate = function(e) {
                e = e || p.monthsTranslate || 0, "undefined" == typeof p.monthsTranslate && (p.monthsTranslate = e), p.months.removeClass("picker-calendar-month-current picker-calendar-month-prev picker-calendar-month-next");
                var a = 100 * -(e + 1) * f,
                    t = 100 * -e * f,
                    n = 100 * -(e - 1) * f;
                p.months.eq(0).transform("translate3d(" + (p.isH ? a : 0) + "%, " + (p.isH ? 0 : a) + "%, 0)").addClass("picker-calendar-month-prev"), p.months.eq(1).transform("translate3d(" + (p.isH ? t : 0) + "%, " + (p.isH ? 0 : t) + "%, 0)").addClass("picker-calendar-month-current"), p.months.eq(2).transform("translate3d(" + (p.isH ? n : 0) + "%, " + (p.isH ? 0 : n) + "%, 0)").addClass("picker-calendar-month-next")
            }, p.nextMonth = function(e) {
                ("undefined" == typeof e || "object" == typeof e) && (e = "", p.params.animate || (e = 0));
                var a = parseInt(p.months.eq(p.months.length - 1).attr("data-month"), 10),
                    t = parseInt(p.months.eq(p.months.length - 1).attr("data-year"), 10),
                    n = new Date(t, a),
                    r = n.getTime(),
                    i = p.animating ? !1 : !0;
                if (p.params.maxDate && r > new Date(p.params.maxDate).getTime()) return p.resetMonth();
                if (p.monthsTranslate--, a === p.currentMonth) {
                    var o = 100 * -p.monthsTranslate * f,
                        l = s(p.monthHTML(r, "next")).transform("translate3d(" + (p.isH ? o : 0) + "%, " + (p.isH ? 0 : o) + "%, 0)").addClass("picker-calendar-month-next");
                    p.wrapper.append(l[0]), p.months = p.wrapper.find(".picker-calendar-month"), p.params.onMonthAdd && p.params.onMonthAdd(p, p.months.eq(p.months.length - 1)[0])
                }
                p.animating = !0, p.onMonthChangeStart("next");
                var d = 100 * p.monthsTranslate * f;
                p.wrapper.transition(e).transform("translate3d(" + (p.isH ? d : 0) + "%, " + (p.isH ? 0 : d) + "%, 0)"), i && p.wrapper.transitionEnd(function() {
                    p.onMonthChangeEnd("next")
                }), p.params.animate || p.onMonthChangeEnd("next")
            }, p.prevMonth = function(e) {
                ("undefined" == typeof e || "object" == typeof e) && (e = "", p.params.animate || (e = 0));
                var a = parseInt(p.months.eq(0).attr("data-month"), 10),
                    t = parseInt(p.months.eq(0).attr("data-year"), 10),
                    n = new Date(t, a + 1, -1),
                    r = n.getTime(),
                    i = p.animating ? !1 : !0;
                if (p.params.minDate && r < new Date(p.params.minDate).getTime()) return p.resetMonth();
                if (p.monthsTranslate++, a === p.currentMonth) {
                    var o = 100 * -p.monthsTranslate * f,
                        l = s(p.monthHTML(r, "prev")).transform("translate3d(" + (p.isH ? o : 0) + "%, " + (p.isH ? 0 : o) + "%, 0)").addClass("picker-calendar-month-prev");
                    p.wrapper.prepend(l[0]), p.months = p.wrapper.find(".picker-calendar-month"), p.params.onMonthAdd && p.params.onMonthAdd(p, p.months.eq(0)[0])
                }
                p.animating = !0, p.onMonthChangeStart("prev");
                var d = 100 * p.monthsTranslate * f;
                p.wrapper.transition(e).transform("translate3d(" + (p.isH ? d : 0) + "%, " + (p.isH ? 0 : d) + "%, 0)"), i && p.wrapper.transitionEnd(function() {
                    p.onMonthChangeEnd("prev")
                }), p.params.animate || p.onMonthChangeEnd("prev")
            }, p.resetMonth = function(e) {
                "undefined" == typeof e && (e = "");
                var a = 100 * p.monthsTranslate * f;
                p.wrapper.transition(e).transform("translate3d(" + (p.isH ? a : 0) + "%, " + (p.isH ? 0 : a) + "%, 0)")
            }, p.setYearMonth = function(e, a, t) {
                "undefined" == typeof e && (e = p.currentYear), "undefined" == typeof a && (a = p.currentMonth), ("undefined" == typeof t || "object" == typeof t) && (t = "", p.params.animate || (t = 0));
                var n = new Date(e, a).getTime();
                if (p.params.maxDate && n > new Date(p.params.maxDate).getTime()) return !1;
                if (p.params.minDate && n < new Date(p.params.minDate).getTime()) return !1;
                var r, i = new Date(p.currentYear, p.currentMonth).getTime(),
                    o = p.monthHTML(new Date(e, a));
                p.monthsTranslate = p.monthsTranslate || 0;
                var s, l, d = p.monthsTranslate,
                    c = p.animating ? !1 : !0;
                n > i ? (p.monthsTranslate--, r = "next", p.animating || p.months.eq(p.months.length - 1).remove(), p.wrapper.append(o), p.months = p.wrapper.find(".picker-calendar-month"), s = 100 * -(d - 1) * f, p.months.eq(p.months.length - 1).transform("translate3d(" + (p.isH ? s : 0) + "%, " + (p.isH ? 0 : s) + "%, 0)").addClass("picker-calendar-month-next")) : (p.monthsTranslate++, r = "prev", p.animating || p.months.eq(0).remove(), p.wrapper.prepend(o), p.months = p.wrapper.find(".picker-calendar-month"), s = 100 * -(d + 1) * f, p.months.eq(0).transform("translate3d(" + (p.isH ? s : 0) + "%, " + (p.isH ? 0 : s) + "%, 0)").addClass("picker-calendar-month-prev")), p.params.onMonthAdd && p.params.onMonthAdd(p, "next" === r ? p.months.eq(p.months.length - 1)[0] : p.months.eq(0)[0]), p.animating = !0, p.onMonthChangeStart(r), l = 100 * p.monthsTranslate * f, p.wrapper.transition(t).transform("translate3d(" + (p.isH ? l : 0) + "%, " + (p.isH ? 0 : l) + "%, 0)"), c && p.wrapper.transitionEnd(function() {
                    p.onMonthChangeEnd(r, !0)
                }), p.params.animate || p.onMonthChangeEnd(r)
            }, p.nextYear = function() {
                p.setYearMonth(p.currentYear + 1)
            }, p.prevYear = function() {
                p.setYearMonth(p.currentYear - 1)
            }, p.layout = function() {
                var e, a = "",
                    t = "",
                    n = p.value && p.value.length ? p.value[0] : (new Date).setHours(0, 0, 0, 0),
                    r = p.monthHTML(n, "prev"),
                    i = p.monthHTML(n),
                    o = p.monthHTML(n, "next"),
                    s = '<div class="picker-calendar-months"><div class="picker-calendar-months-wrapper">' + (r + i + o) + "</div></div>",
                    l = "";
                if (p.params.weekHeader) {
                    for (e = 0; 7 > e; e++) {
                        var d = e + p.params.firstDay > 6 ? e - 7 + p.params.firstDay : e + p.params.firstDay,
                            c = p.params.dayNamesShort[d];
                        l += '<div class="picker-calendar-week-day ' + (p.params.weekendDays.indexOf(d) >= 0 ? "picker-calendar-week-day-weekend" : "") + '"> ' + c + "</div>"
                    }
                    l = '<div class="picker-calendar-week-days">' + l + "</div>"
                }
                t = "picker-modal picker-calendar " + (p.params.cssClass || "");
                var f = p.params.toolbar ? p.params.toolbarTemplate.replace(/{{closeText}}/g, p.params.toolbarCloseText) : "";
                p.params.toolbar && (f = p.params.toolbarTemplate.replace(/{{closeText}}/g, p.params.toolbarCloseText).replace(/{{monthPicker}}/g, p.params.monthPicker ? p.params.monthPickerTemplate : "").replace(/{{yearPicker}}/g, p.params.yearPicker ? p.params.yearPickerTemplate : "")), a = '<div class="' + t + '">' + f + '<div class="picker-modal-inner">' + l + s + "</div></div>", p.pickerHTML = a
            }, p.params.input && (p.input = s(p.params.input), p.params.inputReadOnly && p.input.prop("readOnly", !0), p.inline || p.input.on("click", r), p.params.inputReadOnly && p.input.on("focus mousedown", function(e) {
                e.preventDefault()
            })), p.inline || s("html").on("click", o), p.opened = !1, p.open = function() {
                var e = a(),
                    t = !1;
                p.opened || (p.value || p.params.value && (p.value = p.params.value, t = !0), p.layout(), e ? (p.pickerHTML = '<div class="popover popover-picker-calendar"><div class="popover-inner">' + p.pickerHTML + "</div></div>", p.popover = i.popover(p.pickerHTML, p.params.input, !0), p.container = s(p.popover).find(".picker-modal"), s(p.popover).on("close", function() {
                    l()
                })) : p.inline ? (p.container = s(p.pickerHTML), p.container.addClass("picker-modal-inline"), s(p.params.container).append(p.container)) : (p.container = s(i.pickerModal(p.pickerHTML)), s(p.container).on("close", function() {
                    l()
                })), p.container[0].f7Calendar = p, p.wrapper = p.container.find(".picker-calendar-months-wrapper"), p.months = p.wrapper.find(".picker-calendar-month"), p.updateCurrentMonthYear(), p.monthsTranslate = 0, p.setMonthsTranslate(), p.initCalendarEvents(), t && p.updateValue()), p.opened = !0, p.initialized = !0, p.params.onMonthAdd && p.months.each(function() {
                    p.params.onMonthAdd(p, this)
                }), p.params.onOpen && p.params.onOpen(p)
            }, p.close = function() {
                return p.opened && !p.inline ? t() ? void i.closeModal(p.popover) : void i.closeModal(p.container) : void 0
            }, p.destroy = function() {
                p.close(), p.params.input && p.input.off("click focus", r), s("html").off("click", o)
            }, p.inline && p.open(), p
        };
        i.calendar = function(e) {
            return new g(e)
        };
        var v;
        i.addNotification = function(e) {
            if (e) {
                "undefined" == typeof e.media && (e.media = i.params.notificationMedia), "undefined" == typeof e.title && (e.title = i.params.notificationTitle), "undefined" == typeof e.subtitle && (e.subtitle = i.params.notificationSubtitle), "undefined" == typeof e.closeIcon && (e.closeIcon = i.params.notificationCloseIcon), "undefined" == typeof e.hold && (e.hold = i.params.notificationHold), "undefined" == typeof e.closeOnClick && (e.closeOnClick = i.params.notificationCloseOnClick), v || (v = document.createElement("div"));
                var a = s(".notifications");
                0 === a.length && (s("body").append('<div class="notifications list-block media-list"><ul></ul></div>'), a = s(".notifications"));
                var t, n = a.children("ul");
                t = e.custom ? "<li>" + e.custom + "</li>" : '<li class="notification-item notification-hidden"><div class="item-content">' + (e.media ? '<div class="item-media">' + e.media + "</div>" : "") + '<div class="item-inner"><div class="item-title-row">' + (e.title ? '<div class="item-title">' + e.title + "</div>" : "") + (e.closeIcon ? '<div class="item-after"><a href="#"  style="color: #FFFFFF"   class="close-notification"><span></span></a></div>' : "") + "</div>" + (e.subtitle ? '<div class="item-subtitle">' + e.subtitle + "</div>" : "") + (e.message ? '<div class="item-text">' + e.message + "</div>" : "") + "</div></div></li>", v.innerHTML = t;
                var r = s(v).children();
                r.on("click", function(a) {
                    var t = !1;
                    s(a.target).is(".close-notification") || s(a.target).parents(".close-notification").length > 0 ? t = !0 : (e.onClick && e.onClick(a, r[0]), e.closeOnClick && (t = !0)), t && i.closeNotification(r[0])
                }), e.onClose && r.data("f7NotificationOnClose", function() {
                    e.onClose(r[0])
                }), e.additionalClass && r.addClass(e.additionalClass), e.hold && setTimeout(function() {
                    r.length > 0 && i.closeNotification(r[0])
                }, e.hold), n.prepend(r[0]), a.show();
                var o = r.outerHeight();
                r.css("marginTop", -o + "px"), r.transition(0); {
                    r[0].clientLeft
                }
                return r.transition(""), r.css("marginTop", "0px"), a.transform("translate3d(0, 0,0)"), r.removeClass("notification-hidden"), r[0]
            }
        }, i.closeNotification = function(e) {
            if (e = s(e), 0 !== e.length && !e.hasClass("notification-item-removing")) {
                var a = s(".notifications"),
                    t = e.outerHeight();
                e.css("height", t + "px").transition(0); {
                    e[0].clientLeft
                }
                e.css("height", "0px").transition("").addClass("notification-item-removing"), e.data("f7NotificationOnClose") && e.data("f7NotificationOnClose")(), 0 === a.find(".notification-item:not(.notification-item-removing)").length && a.transform(""), e.addClass("notification-hidden").transitionEnd(function() {
                    e.remove(), 0 === a.find(".notification-item").length && a.hide()
                })
            }
        }, i.initTemplate7Templates = function() {
            window.Template7 && (Template7.templates = Template7.templates || i.params.templates || {}, Template7.data = Template7.data || i.params.template7Data || {}, Template7.cache = Template7.cache || {}, i.templates = Template7.templates, i.template7Data = Template7.data, i.template7Cache = Template7.cache, i.params.precompileTemplates && s('script[type="text/template7"]').each(function() {
                var e = s(this).attr("id");
                e && (Template7.templates[e] = Template7.compile(s(this).html()))
            }))
        };
        var w = [];
        return i.initPlugins = function() {
            for (var e in i.plugins) {
                var a = i.plugins[e](i, i.params[e]);
                a && w.push(a)
            }
        }, i.pluginHook = function(e) {
            for (var a = 0; a < w.length; a++) w[a].hooks && e in w[a].hooks && w[a].hooks[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
        }, i.pluginPrevent = function(e) {
            for (var a = !1, t = 0; t < w.length; t++) w[t].prevents && e in w[t].prevents && w[t].prevents[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) && (a = !0);
            return a
        }, i.pluginProcess = function(e, a) {
            for (var t = a, n = 0; n < w.length; n++) w[n].preprocess && process in w[n].preprocess && (t = w[n].preprocess[process](a, arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]));
            return t
        }, i.init = function() {
            i.initTemplate7Templates && i.initTemplate7Templates(), i.initPlugins && i.initPlugins(), i.getDeviceInfo && i.getDeviceInfo(), i.initFastClicks && i.params.fastClicks && i.initFastClicks(), i.initClickEvents && i.initClickEvents(), s(".page:not(.cached)").each(function() {
                var e = s(this),
                    a = e.parents("." + i.params.viewClass);
                if (0 !== a.length) {
                    var t = a[0].f7View || !1,
                        n = t && t.url ? t.url : !1;
                    a && a.attr("data-page", e.attr("data-page") || void 0), i.pageInitCallback(t, {
                        pageContainer: this,
                        url: n,
                        position: "center"
                    })
                }
            }), i.initResize && i.initResize(), i.initPushState && i.params.pushState && i.initPushState(), i.initSwipeout && i.params.swipeout && i.initSwipeout(), i.initSortable && i.params.sortable && i.initSortable(), i.initSwipePanels && (i.params.swipePanel || i.params.swipePanelOnlyClose) && i.initSwipePanels(), i.params.onAppInit && i.params.onAppInit(), i.pluginHook("appInit")
        }, i.params.init && i.init(), i
    };
    var e = function() {
        var e = function(e) {
                var a = this,
                    t = 0;
                for (t = 0; t < e.length; t++) a[t] = e[t];
                return a.length = e.length, this
            },
            a = function(a, t) {
                var n = [],
                    r = 0;
                if (a && !t && a instanceof e) return a;
                if (a)
                    if ("string" == typeof a) {
                        var i, o, s = a.trim();
                        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                            var l = "div";
                            for (0 === s.indexOf("<li") && (l = "ul"), 0 === s.indexOf("<tr") && (l = "tbody"), (0 === s.indexOf("<td") || 0 === s.indexOf("<th")) && (l = "tr"), 0 === s.indexOf("<tbody") && (l = "table"), 0 === s.indexOf("<option") && (l = "select"), o = document.createElement(l), o.innerHTML = a, r = 0; r < o.childNodes.length; r++) n.push(o.childNodes[r])
                        } else
                            for (i = t || "#" !== a[0] || a.match(/[ .<>:~]/) ? (t || document).querySelectorAll(a) : [document.getElementById(a.split("#")[1])], r = 0; r < i.length; r++) i[r] && n.push(i[r])
                    } else if (a.nodeType || a === window || a === document) n.push(a);
                else if (a.length > 0 && a[0].nodeType)
                    for (r = 0; r < a.length; r++) n.push(a[r]);
                return new e(n)
            };
        e.prototype = {
                addClass: function(e) {
                    if ("undefined" == typeof e) return this;
                    for (var a = e.split(" "), t = 0; t < a.length; t++)
                        for (var n = 0; n < this.length; n++) this[n].classList.add(a[t]);
                    return this
                },
                removeClass: function(e) {
                    for (var a = e.split(" "), t = 0; t < a.length; t++)
                        for (var n = 0; n < this.length; n++) this[n].classList.remove(a[t]);
                    return this
                },
                hasClass: function(e) {
                    return this[0] ? this[0].classList.contains(e) : !1
                },
                toggleClass: function(e) {
                    for (var a = e.split(" "), t = 0; t < a.length; t++)
                        for (var n = 0; n < this.length; n++) this[n].classList.toggle(a[t]);
                    return this
                },
                attr: function(e, a) {
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (var t = 0; t < this.length; t++)
                        if (2 === arguments.length) this[t].setAttribute(e, a);
                        else
                            for (var n in e) this[t][n] = e[n], this[t].setAttribute(n, e[n]);
                    return this
                },
                removeAttr: function(e) {
                    for (var a = 0; a < this.length; a++) this[a].removeAttribute(e)
                },
                prop: function(e, a) {
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0][e] : void 0;
                    for (var t = 0; t < this.length; t++)
                        if (2 === arguments.length) this[t][e] = a;
                        else
                            for (var n in e) this[t][n] = e[n];
                    return this
                },
                data: function(e, a) {
                    if ("undefined" == typeof a) {
                        if (this[0]) {
                            var t = this[0].getAttribute("data-" + e);
                            return t ? t : this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0
                        }
                        return void 0
                    }
                    for (var n = 0; n < this.length; n++) {
                        var r = this[n];
                        r.dom7ElementDataStorage || (r.dom7ElementDataStorage = {}), r.dom7ElementDataStorage[e] = a
                    }
                    return this
                },
                val: function(e) {
                    if ("undefined" == typeof e) return this[0] ? this[0].value : void 0;
                    for (var a = 0; a < this.length; a++) this[a].value = e;
                    return this
                },
                transform: function(e) {
                    for (var a = 0; a < this.length; a++) {
                        var t = this[a].style;
                        t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
                    }
                    return this
                },
                transition: function(e) {
                    "string" != typeof e && (e += "ms");
                    for (var a = 0; a < this.length; a++) {
                        var t = this[a].style;
                        t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
                    }
                    return this
                },
                on: function(e, t, n, r) {
                    function i(e) {
                        var r = e.target;
                        if (a(r).is(t)) n.call(r, e);
                        else
                            for (var i = a(r).parents(), o = 0; o < i.length; o++) a(i[o]).is(t) && n.call(i[o], e)
                    }
                    var o, s, l = e.split(" ");
                    for (o = 0; o < this.length; o++)
                        if ("function" == typeof t || t === !1)
                            for ("function" == typeof t && (n = arguments[1], r = arguments[2] || !1), s = 0; s < l.length; s++) this[o].addEventListener(l[s], n, r);
                        else
                            for (s = 0; s < l.length; s++) this[o].dom7LiveListeners || (this[o].dom7LiveListeners = []), this[o].dom7LiveListeners.push({
                                listener: n,
                                liveListener: i
                            }), this[o].addEventListener(l[s], i, r);
                    return this
                },
                off: function(e, a, t, n) {
                    for (var r = e.split(" "), i = 0; i < r.length; i++)
                        for (var o = 0; o < this.length; o++)
                            if ("function" == typeof a || a === !1) "function" == typeof a && (t = arguments[1], n = arguments[2] || !1), this[o].removeEventListener(r[i], t, n);
                            else if (this[o].dom7LiveListeners)
                        for (var s = 0; s < this[o].dom7LiveListeners.length; s++) this[o].dom7LiveListeners[s].listener === t && this[o].removeEventListener(r[i], this[o].dom7LiveListeners[s].liveListener, n);
                    return this
                },
                once: function(e, a, t, n) {
                    function r(o) {
                        t(o), i.off(e, a, r, n)
                    }
                    var i = this;
                    "function" == typeof a && (a = !1, t = arguments[1], n = arguments[2]), i.on(e, a, r, n)
                },
                trigger: function(e, a) {
                    for (var t = 0; t < this.length; t++) {
                        var n;
                        try {
                            n = new CustomEvent(e, {
                                detail: a,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (r) {
                            n = document.createEvent("Event"), n.initEvent(e, !0, !0), n.detail = a
                        }
                        this[t].dispatchEvent(n)
                    }
                    return this
                },
                transitionEnd: function(e) {
                    function a(i) {
                        if (i.target === this)
                            for (e.call(this, i), t = 0; t < n.length; t++) r.off(n[t], a)
                    }
                    var t, n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                        r = this;
                    if (e)
                        for (t = 0; t < n.length; t++) r.on(n[t], a);
                    return this
                },
                animationEnd: function(e) {
                    function a(i) {
                        for (e(i), t = 0; t < n.length; t++) r.off(n[t], a)
                    }
                    var t, n = ["webkitAnimationEnd", "OAnimationEnd", "MSAnimationEnd", "animationend"],
                        r = this;
                    if (e)
                        for (t = 0; t < n.length; t++) r.on(n[t], a);
                    return this
                },
                width: function() {
                    return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
                },
                outerWidth: function(e) {
                    return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                },
                height: function() {
                    return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
                },
                outerHeight: function(e) {
                    return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
                },
                offset: function() {
                    if (this.length > 0) {
                        var e = this[0],
                            a = e.getBoundingClientRect(),
                            t = document.body,
                            n = e.clientTop || t.clientTop || 0,
                            r = e.clientLeft || t.clientLeft || 0,
                            i = window.pageYOffset || e.scrollTop,
                            o = window.pageXOffset || e.scrollLeft;
                        return {
                            top: a.top + i - n,
                            left: a.left + o - r
                        }
                    }
                    return null
                },
                hide: function() {
                    for (var e = 0; e < this.length; e++) this[e].style.display = "none";
                    return this
                },
                show: function() {
                    for (var e = 0; e < this.length; e++) this[e].style.display = "block";
                    return this
                },
                css: function(e, a) {
                    var t;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (t = 0; t < this.length; t++)
                                for (var n in e) this[t].style[n] = e[n];
                            return this
                        }
                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" == typeof e) {
                        for (t = 0; t < this.length; t++) this[t].style[e] = a;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    for (var a = 0; a < this.length; a++) e.call(this[a], a, this[a]);
                    return this
                },
                html: function(e) {
                    if ("undefined" == typeof e) return this[0] ? this[0].innerHTML : void 0;
                    for (var a = 0; a < this.length; a++) this[a].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if ("undefined" == typeof e) return this[0] ? this[0].textContent.trim() : null;
                    for (var a = 0; a < this.length; a++) this[a].textContent = e
                },
                is: function(t) {
                    if (!this[0]) return !1;
                    var n, r;
                    if ("string" == typeof t) {
                        var i = this[0];
                        if (i === document) return t === document;
                        if (i === window) return t === window;
                        if (i.matches) return i.matches(t);
                        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(t);
                        if (i.mozMatchesSelector) return i.mozMatchesSelector(t);
                        if (i.msMatchesSelector) return i.msMatchesSelector(t);
                        for (n = a(t), r = 0; r < n.length; r++)
                            if (n[r] === this[0]) return !0;
                        return !1
                    }
                    if (t === document) return this[0] === document;
                    if (t === window) return this[0] === window;
                    if (t.nodeType || t instanceof e) {
                        for (n = t.nodeType ? [t] : t, r = 0; r < n.length; r++)
                            if (n[r] === this[0]) return !0;
                        return !1
                    }
                    return !1
                },
                indexOf: function(e) {
                    for (var a = 0; a < this.length; a++)
                        if (this[a] === e) return a
                },
                index: function() {
                    if (this[0]) {
                        for (var e = this[0], a = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && a++;
                        return a
                    }
                    return void 0
                },
                eq: function(a) {
                    if ("undefined" == typeof a) return this;
                    var t, n = this.length;
                    return a > n - 1 ? new e([]) : 0 > a ? (t = n + a, new e(0 > t ? [] : [this[t]])) : new e([this[a]])
                },
                append: function(a) {
                    var t, n;
                    for (t = 0; t < this.length; t++)
                        if ("string" == typeof a) {
                            var r = document.createElement("div");
                            for (r.innerHTML = a; r.firstChild;) this[t].appendChild(r.firstChild)
                        } else if (a instanceof e)
                        for (n = 0; n < a.length; n++) this[t].appendChild(a[n]);
                    else this[t].appendChild(a);
                    return this
                },
                prepend: function(a) {
                    var t, n;
                    for (t = 0; t < this.length; t++)
                        if ("string" == typeof a) {
                            var r = document.createElement("div");
                            for (r.innerHTML = a, n = r.childNodes.length - 1; n >= 0; n--) this[t].insertBefore(r.childNodes[n], this[t].childNodes[0])
                        } else if (a instanceof e)
                        for (n = 0; n < a.length; n++) this[t].insertBefore(a[n], this[t].childNodes[0]);
                    else this[t].insertBefore(a, this[t].childNodes[0]);
                    return this
                },
                insertBefore: function(e) {
                    for (var t = a(e), n = 0; n < this.length; n++)
                        if (1 === t.length) t[0].parentNode.insertBefore(this[n], t[0]);
                        else if (t.length > 1)
                        for (var r = 0; r < t.length; r++) t[r].parentNode.insertBefore(this[n].cloneNode(!0), t[r])
                },
                insertAfter: function(e) {
                    for (var t = a(e), n = 0; n < this.length; n++)
                        if (1 === t.length) t[0].parentNode.insertBefore(this[n], t[0].nextSibling);
                        else if (t.length > 1)
                        for (var r = 0; r < t.length; r++) t[r].parentNode.insertBefore(this[n].cloneNode(!0), t[r].nextSibling)
                },
                next: function(t) {
                    return new e(this.length > 0 ? t ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
                },
                nextAll: function(t) {
                    var n = [],
                        r = this[0];
                    if (!r) return new e([]);
                    for (; r.nextElementSibling;) {
                        var i = r.nextElementSibling;
                        t ? a(i).is(t) && n.push(i) : n.push(i), r = i
                    }
                    return new e(n)
                },
                prev: function(t) {
                    return new e(this.length > 0 ? t ? this[0].previousElementSibling && a(this[0].previousElementSibling).is(t) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
                },
                prevAll: function(t) {
                    var n = [],
                        r = this[0];
                    if (!r) return new e([]);
                    for (; r.previousElementSibling;) {
                        var i = r.previousElementSibling;
                        t ? a(i).is(t) && n.push(i) : n.push(i), r = i
                    }
                    return new e(n)
                },
                parent: function(e) {
                    for (var t = [], n = 0; n < this.length; n++) e ? a(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode);
                    return a(a.unique(t))
                },
                parents: function(e) {
                    for (var t = [], n = 0; n < this.length; n++)
                        for (var r = this[n].parentNode; r;) e ? a(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
                    return a(a.unique(t))
                },
                find: function(a) {
                    for (var t = [], n = 0; n < this.length; n++)
                        for (var r = this[n].querySelectorAll(a), i = 0; i < r.length; i++) t.push(r[i]);
                    return new e(t)
                },
                children: function(t) {
                    for (var n = [], r = 0; r < this.length; r++)
                        for (var i = this[r].childNodes, o = 0; o < i.length; o++) t ? 1 === i[o].nodeType && a(i[o]).is(t) && n.push(i[o]) : 1 === i[o].nodeType && n.push(i[o]);
                    return new e(a.unique(n))
                },
                remove: function() {
                    for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                },
                detach: function() {
                    return this.remove()
                },
                add: function() {
                    var e, t, n = this;
                    for (e = 0; e < arguments.length; e++) {
                        var r = a(arguments[e]);
                        for (t = 0; t < r.length; t++) n[n.length] = r[t], n.length++
                    }
                    return n
                }
            },
            function() {
                function t(t) {
                    e.prototype[t] = function(e) {
                        var n;
                        if ("undefined" == typeof e) {
                            for (n = 0; n < this.length; n++) r.indexOf(t) < 0 && (t in this[n] ? this[n][t]() : a(this[n]).trigger(t));
                            return this
                        }
                        return this.on(t, e)
                    }
                }
                for (var n = "click blur focus focusin focusout keyup keydown keypress submit change mousedown mousemove mouseup mouseenter mouseleave mouseout mouseover touchstart touchend touchmove resize scroll".split(" "), r = "resize scroll".split(" "), i = 0; i < n.length; i++) t(n[i])
            }();
        var t = {};
        a.ajaxSetup = function(e) {
            e.type && (e.method = e.type);
            for (var a in e) t[a] = e[a]
        };
        var n = 0;
        return a.ajax = function(e) {
                function r(n, r, i) {
                    var o = arguments;
                    n && a(document).trigger(n, r), i && (i in t && t[i](o[3], o[4], o[5], o[6]), e[i] && e[i](o[3], o[4], o[5], o[6]))
                }
                var i = {
                        method: "GET",
                        data: !1,
                        async: !0,
                        cache: !0,
                        user: "",
                        password: "",
                        headers: {},
                        xhrFields: {},
                        statusCode: {},
                        processData: !0,
                        dataType: "text",
                        contentType: "application/x-www-form-urlencoded",
                        timeout: 0
                    },
                    o = ["beforeSend", "error", "complete", "success", "statusCode"];
                e.type && (e.method = e.type);
                for (var s in t) o.indexOf(s) < 0 && (i[s] = t[s]);
                for (var l in i) l in e || (e[l] = i[l]);
                e.url || (e.url = window.location.toString());
                var p = e.method.toUpperCase();
                if (("GET" === p || "HEAD" === p) && e.data) {
                    var d;
                    d = "string" == typeof e.data ? e.data.indexOf("?") >= 0 ? e.data.split("?")[1] : e.data : a.serializeObject(e.data), e.url += e.url.indexOf("?") >= 0 ? "&" + d : "?" + d
                }
                if ("json" === e.dataType && e.url.indexOf("callback=") >= 0) {
                    var c, f, u = "f7jsonp_" + Date.now() + n++,
                        m = e.url.split("callback=");
                    if (m[1].indexOf("&") >= 0) {
                        var h = m[1].split("&").filter(function(e) {
                            return e.indexOf("=") > 0
                        }).join("&");
                        c = m[0] + "callback=" + u + (h.length > 0 ? "&" + h : "")
                    } else c = m[0] + "callback=" + u;
                    var g = document.createElement("script");
                    return g.type = "text/javascript", g.onerror = function() {
                        clearTimeout(f), r(void 0, void 0, "error", null, "scripterror")
                    }, g.src = c, window[u] = function(e) {
                        clearTimeout(f), r(void 0, void 0, "success", e), g.parentNode.removeChild(g), g = null, delete window[u]
                    }, document.querySelector("head").appendChild(g), void(e.timeout > 0 && (f = setTimeout(function() {
                        g.parentNode.removeChild(g), g = null, r(void 0, void 0, "error", null, "timeout")
                    }, e.timeout)))
                }("GET" === p || "HEAD" === p) && e.cache === !1 && (e.url += "_nocache=" + Date.now());
                var v = new XMLHttpRequest;
                v.requestUrl = e.url, v.open(p, e.url, e.async, e.user, e.password);
                var w = null;
                if (("POST" === p || "PUT" === p) && e.data)
                    if (e.processData) {
                        var b = [ArrayBuffer, Blob, Document, FormData];
                        if (b.indexOf(e.data.constructor) >= 0) w = e.data;
                        else {
                            var C = "---------------------------" + Date.now().toString(16);
                            "multipart/form-data" === e.contentType ? v.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + C) : v.setRequestHeader("Content-Type", e.contentType), w = "";
                            var y = a.serializeObject(e.data);
                            if ("multipart/form-data" === e.contentType) {
                                C = "---------------------------" + Date.now().toString(16), y = y.split("&");
                                for (var x = [], T = 0; T < y.length; T++) x.push('Content-Disposition: form-data; name="' + y[T].split("=")[0] + '"\r\n\r\n' + y[T].split("=")[1] + "\r\n");
                                w = "--" + C + "\r\n" + x.join("--" + C + "\r\n") + "--" + C + "--\r\n"
                            } else w = "application/x-www-form-urlencoded" === e.contentType ? y : y.replace(/&/g, "\r\n")
                        }
                    } else w = e.data;
                if (e.headers)
                    for (var k in e.headers) v.setRequestHeader(k, e.headers[k]);
                if ("undefined" == typeof e.crossDomain && (e.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(e.url) && RegExp.$2 !== window.location.host), e.crossDomain || v.setRequestHeader("X-Requested-With", "XMLHttpRequest"), e.xhrFields)
                    for (var S in e.xhrFields) v[S] = e.xhrFields[S];
                var P;
                return v.onload = function() {
                    if (P && clearTimeout(P), 200 === v.status || 0 === v.status) {
                        var a;
                        if ("json" === e.dataType) try {
                            a = JSON.parse(v.responseText), r("ajaxSuccess", {
                                xhr: v
                            }, "success", a, v.status, v)
                        } catch (n) {
                            r("ajaxError", {
                                xhr: v,
                                parseerror: !0
                            }, "error", v, "parseerror")
                        } else r("ajaxSuccess", {
                            xhr: v
                        }, "success", v.responseText, v.status, v)
                    } else r("ajaxError", {
                        xhr: v
                    }, "error", v, v.status);
                    e.statusCode && (t.statusCode && t.statusCode[v.status] && t.statusCode[v.status](v), e.statusCode[v.status] && e.statusCode[v.status](v)), r("ajaxComplete", {
                        xhr: v
                    }, "complete", v, v.status)
                }, v.onerror = function() {
                    P && clearTimeout(P), r("ajaxError", {
                        xhr: v
                    }, "error", v, v.status)
                }, r("ajaxStart", {
                    xhr: v
                }, "start", v), r(void 0, void 0, "beforeSend", v), v.send(w), e.timeout > 0 && (P = setTimeout(function() {
                    v.abort(), r("ajaxError", {
                        xhr: v,
                        timeout: !0
                    }, "error", v, "timeout"), r("complete", {
                        xhr: v,
                        timeout: !0
                    }, "complete", v, "timeout")
                }, e.timeout)), v
            },
            function() {
                function e(e) {
                    a[e] = function(t, n, r) {
                        return a.ajax({
                            url: t,
                            method: "post" === e ? "POST" : "GET",
                            data: "function" == typeof n ? void 0 : n,
                            success: "function" == typeof n ? n : r,
                            dataType: "getJSON" === e ? "json" : void 0
                        })
                    }
                }
                for (var t = "get post getJSON".split(" "), n = 0; n < t.length; n++) e(t[n])
            }(), a.parseUrlQuery = function(e) {
                var a, t, n, r = {};
                if (!(e.indexOf("?") >= 0)) return r;
                for (e = e.split("?")[1], t = e.split("&"), a = 0; a < t.length; a++) n = t[a].split("="), r[n[0]] = n[1];
                return r
            }, a.isArray = function(e) {
                return "[object Array]" === Object.prototype.toString.apply(e) ? !0 : !1
            }, a.unique = function(e) {
                for (var a = [], t = 0; t < e.length; t++) - 1 === a.indexOf(e[t]) && a.push(e[t]);
                return a
            }, a.trim = function(e) {
                return e.trim()
            }, a.serializeObject = function(e) {
                if ("string" == typeof e) return e;
                var t = [],
                    n = "&";
                for (var r in e)
                    if (a.isArray(e[r])) {
                        for (var i = [], o = 0; o < e[r].length; o++) i.push(r + "=" + e[r][o]);
                        t.push(i.join(n))
                    } else t.push(r + "=" + e[r]);
                return t.join(n)
            }, a.getTranslate = function(e, a) {
                var t, n, r, i;
                return "undefined" == typeof a && (a = "x"), r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? i = new WebKitCSSMatrix("none" === r.webkitTransform ? "" : r.webkitTransform) : (i = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = i.toString().split(",")), "x" === a && (n = window.WebKitCSSMatrix ? i.m41 : parseFloat(16 === t.length ? t[12] : t[4])), "y" === a && (n = window.WebKitCSSMatrix ? i.m42 : parseFloat(16 === t.length ? t[13] : t[5])), n || 0
            }, a.requestAnimationFrame = function(e) {
                return window.requestAnimationFrame ? window.requestAnimationFrame(e) : window.webkitRequestAnimationFrame ? window.webkitRequestAnimationFrame(e) : window.mozRequestAnimationFrame ? window.mozRequestAnimationFrame(e) : window.setTimeout(e, 1e3 / 60)
            }, a.cancelAnimationFrame = function(e) {
                return window.cancelAnimationFrame ? window.cancelAnimationFrame(e) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(e) : window.mozCancelAnimationFrame ? window.mozCancelAnimationFrame(e) : window.clearTimeout(e)
            }, a.supportTouch = !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch), a.fn = e.prototype, a.fn.scrollTo = function(e, t, n, r) {
                return this.each(function() {
                    function i(e) {
                        void 0 === e && (e = (new Date).getTime()), null === v && (v = e);
                        var t, l = Math.max(Math.min((e - v) / n, 1), 0),
                            p = "linear" === r ? l : .5 - Math.cos(l * Math.PI) / 2;
                        h && (f = o + p * (d - o)), g && (u = s + p * (c - s)), h && d > o && f >= d && (m.scrollTop = d, t = !0), h && o > d && d >= f && (m.scrollTop = d, t = !0), g && c > s && u >= c && (m.scrollLeft = c, t = !0), g && s > c && c >= u && (m.scrollLeft = c, t = !0), t || (h && (m.scrollTop = f), g && (m.scrollLeft = u), a.requestAnimationFrame(i))
                    }
                    var o, s, l, p, d, c, f, u, m = this,
                        h = t > 0 || 0 === t,
                        g = e > 0 || 0 === e;
                    if ("undefined" == typeof r && (r = "swing"), h && (o = m.scrollTop, n || (m.scrollTop = t)), g && (s = m.scrollLeft, n || (m.scrollLeft = e)), n) {
                        h && (l = m.scrollHeight - m.offsetHeight, d = Math.max(Math.min(t, l), 0)), g && (p = m.scrollWidth - m.offsetWidth, c = Math.max(Math.min(e, p), 0));
                        var v = null;
                        h && d === o && (h = !1), g && c === s && (g = !1), a.requestAnimationFrame(i)
                    }
                })
            }, a.fn.scrollTop = function(e, a, t) {
                var n = this;
                return "undefined" == typeof e ? n.length > 0 ? n[0].scrollTop : null : n.scrollTo(void 0, e, a, t)
            }, a.fn.scrollLeft = function(e, a, t) {
                var n = this;
                return "undefined" == typeof e ? n.length > 0 ? n[0].scrollLeft : null : n.scrollTo(e, void 0, a, t)
            }, a
    }();
    Framework7.$ = e;
    window.Dom7 = e, Framework7.prototype.support = function() {
        var e = {
            touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
        };
        return e
    }(), Framework7.prototype.device = function() {
        var a = {},
            t = navigator.userAgent,
            n = e,
            r = t.match(/(Android);?[\s\/]+([\d.]+)?/),
            i = t.match(/(iPad).*OS\s([\d_]+)/),
            o = t.match(/(iPod)(.*OS\s([\d_]+))?/),
            s = !i && t.match(/(iPhone\sOS)\s([\d_]+)/);
        if (a.ios = a.android = a.iphone = a.ipad = !1, r && (a.os = "android", a.osVersion = r[2], a.android = !0), (i || s || o) && (a.os = "ios", a.ios = !0), s && !o && (a.osVersion = s[2].replace(/_/g, "."), a.iphone = !0), i && (a.osVersion = i[2].replace(/_/g, "."), a.ipad = !0), o && (a.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, a.iphone = !0), a.ios && a.osVersion && t.indexOf("Version/") >= 0 && "10" === a.osVersion.split(".")[0] && (a.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]), a.webView = (s || i || o) && t.match(/.*AppleWebKit(?!.*Safari)/i), a.os && "ios" === a.os) {
            var l = a.osVersion.split(".");
            a.minimalUi = !a.webView && (o || s) && (1 * l[0] === 7 ? 1 * l[1] >= 1 : 1 * l[0] > 7) && n('meta[name="viewport"]').length > 0 && n('meta[name="viewport"]').attr("content").indexOf("minimal-ui") >= 0
        }
        var p = n(window).width(),
            d = n(window).height();
        a.statusBar = !1, a.statusBar = a.webView && p * d === screen.width * screen.height ? !0 : !1;
        var c = [];
        if (a.pixelRatio = window.devicePixelRatio || 1, c.push("pixel-ratio-" + Math.floor(a.pixelRatio)), a.pixelRatio >= 2 && c.push("retina"), a.os && (c.push(a.os, a.os + "-" + a.osVersion.split(".")[0], a.os + "-" + a.osVersion.replace(/\./g, "-")), "ios" === a.os))
            for (var f = parseInt(a.osVersion.split(".")[0], 10), u = f - 1; u >= 6; u--) c.push("ios-gt-" + u);
        return a.statusBar ? c.push("with-statusbar-overlay") : n("html").removeClass("with-statusbar-overlay"), c.length > 0 && n("html").addClass(c.join(" ")), a
    }(), Framework7.prototype.plugins = {}, window.Template7 = function() {
        function e(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        }

        function a(e) {
            return "function" == typeof e
        }

        function t(e) {
            var a, t, n, r = e.replace(/[{}#}]/g, "").split(" "),
                i = [];
            for (t = 0; t < r.length; t++) {
                var o = r[t];
                if (0 === t) i.push(o);
                else if (0 === o.indexOf('"'))
                    if (2 === o.match(/"/g).length) i.push(o);
                    else {
                        for (a = 0, n = t + 1; n < r.length; n++)
                            if (o += " " + r[n], r[n].indexOf('"') >= 0) {
                                a = n, i.push(o);
                                break
                            }
                        a && (t = a)
                    } else if (o.indexOf("=") > 0) {
                    var s = o.split("="),
                        l = s[0],
                        p = s[1];
                    if (2 !== p.match(/"/g).length) {
                        for (a = 0, n = t + 1; n < r.length; n++)
                            if (p += " " + r[n], r[n].indexOf('"') >= 0) {
                                a = n;
                                break
                            }
                        a && (t = a)
                    }
                    var d = [l, p.replace(/"/g, "")];
                    i.push(d)
                } else i.push(o)
            }
            return i
        }

        function n(a) {
            var n, r, i = [];
            if (!a) return [];
            var o = a.split(/({{[^{^}]*}})/);
            for (n = 0; n < o.length; n++) {
                var s = o[n];
                if ("" !== s)
                    if (s.indexOf("{{") < 0) i.push({
                        type: "plain",
                        content: s
                    });
                    else {
                        if (s.indexOf("{/") >= 0) continue;
                        if (s.indexOf("{#") < 0 && s.indexOf(" ") < 0 && s.indexOf("else") < 0) {
                            i.push({
                                type: "variable",
                                contextName: s.replace(/[{}]/g, "")
                            });
                            continue
                        }
                        var l = t(s),
                            p = l[0],
                            d = [],
                            c = {};
                        for (r = 1; r < l.length; r++) {
                            var f = l[r];
                            e(f) ? c[f[0]] = "false" === f[1] ? !1 : f[1] : d.push(f)
                        }
                        if (s.indexOf("{#") >= 0) {
                            var u, m = "",
                                h = "",
                                g = 0,
                                v = !1,
                                w = !1,
                                b = 0;
                            for (r = n + 1; r < o.length; r++)
                                if (o[r].indexOf("{{#") >= 0 && b++, o[r].indexOf("{{/") >= 0 && b--, o[r].indexOf("{{#" + p) >= 0) m += o[r], w && (h += o[r]), g++;
                                else if (o[r].indexOf("{{/" + p) >= 0) {
                                if (!(g > 0)) {
                                    u = r, v = !0;
                                    break
                                }
                                g--, m += o[r], w && (h += o[r])
                            } else o[r].indexOf("else") >= 0 && 0 === b ? w = !0 : (w || (m += o[r]), w && (h += o[r]));
                            v && (u && (n = u), i.push({
                                type: "helper",
                                helperName: p,
                                contextName: d,
                                content: m,
                                inverseContent: h,
                                hash: c
                            }))
                        } else s.indexOf(" ") > 0 && i.push({
                            type: "helper",
                            helperName: p,
                            contextName: d,
                            hash: c
                        })
                    }
            }
            return i
        }
        var r = function(e) {
            function a(e, a) {
                return e.content ? o(e.content, a) : function() {
                    return ""
                }
            }

            function t(e, a) {
                return e.inverseContent ? o(e.inverseContent, a) : function() {
                    return ""
                }
            }

            function r(e, a) {
                var t;
                if (e.indexOf("@global") >= 0) t = "(Template7.global && Template7.global." + e.split("@global.")[1] + ")";
                else if (e.indexOf("@") >= 0) t = "(data && data." + e.replace("@", "") + ")";
                else if (e.indexOf(".") > 0) t = 0 === e.indexOf("this") ? e.replace("this", a) : a + "." + e;
                else if (0 === e.indexOf("../")) {
                    var n = e.split("../").length - 1,
                        r = e.split("../")[e.split("../").length - 1],
                        i = a.split("_")[1] - n;
                    t = "ctx_" + (i >= 1 ? i : 1) + "." + r
                } else t = "this" === e ? a : a + "." + e;
                return t
            }

            function i(e, a) {
                for (var t = [], n = 0; n < e.length; n++) t.push(0 === e[n].indexOf('"') ? e[n] : r(e[n], a));
                return t.join(", ")
            }

            function o(e, o) {
                if (o = o || 1, e = e || s.template, "string" != typeof e) throw new Error("Template7: Template must be a string");
                var l = n(e);
                if (0 === l.length) return function() {
                    return ""
                };
                var p = "ctx_" + o,
                    d = "(function (" + p + ", data) {\n";
                1 === o && (d += "function isArray(arr){return Object.prototype.toString.apply(arr) === '[object Array]';}\n", d += "function isFunction(func){return (typeof func === 'function');}\n", d += 'function c(val, ctx) {if (typeof val !== "undefined") {if (isFunction(val)) {return val.call(ctx);} else return val;} else return "";}\n'), d += "var r = '';\n";
                var c;
                for (c = 0; c < l.length; c++) {
                    var f = l[c];
                    if ("plain" !== f.type) {
                        var u, m;
                        if ("variable" === f.type && (u = r(f.contextName, p), d += "r += c(" + u + ", " + p + ");"), "helper" === f.type)
                            if (f.helperName in s.helpers) m = i(f.contextName, p), d += "r += (Template7.helpers." + f.helperName + ").call(" + p + ", " + (m && m + ",") + "{hash:" + JSON.stringify(f.hash) + ", data: data || {}, fn: " + a(f, o + 1) + ", inverse: " + t(f, o + 1) + "});";
                            else {
                                if (f.contextName.length > 0) throw new Error('Template7: Missing helper: "' + f.helperName + '"');
                                u = r(f.helperName, p), d += "if (" + u + ") {", d += "if (isArray(" + u + ")) {", d += "r += (Template7.helpers.each).call(" + p + ", " + u + ", {hash:" + JSON.stringify(f.hash) + ", data: data || {}, fn: " + a(f, o + 1) + ", inverse: " + t(f, o + 1) + "});", d += "}else {", d += "r += (Template7.helpers.with).call(" + p + ", " + u + ", {hash:" + JSON.stringify(f.hash) + ", data: data || {}, fn: " + a(f, o + 1) + ", inverse: " + t(f, o + 1) + "});", d += "}}"
                            }
                    } else d += "r +='" + f.content.replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/'/g, "\\'") + "';"
                }
                return d += "\nreturn r;})", eval.call(window, d)
            }
            var s = this;
            s.template = e, s.compile = function(e) {
                return s.compiled || (s.compiled = o(e)), s.compiled
            }
        };
        r.prototype = {
            options: {},
            helpers: {
                "if": function(e, t) {
                    return a(e) && (e = e.call(this)), e ? t.fn(this, t.data) : t.inverse(this, t.data)
                },
                unless: function(e, t) {
                    return a(e) && (e = e.call(this)), e ? t.inverse(this, t.data) : t.fn(this, t.data)
                },
                each: function(t, n) {
                    var r = "",
                        i = 0;
                    if (a(t) && (t = t.call(this)), e(t)) {
                        for (n.hash.reverse && (t = t.reverse()), i = 0; i < t.length; i++) r += n.fn(t[i], {
                            first: 0 === i,
                            last: i === t.length - 1,
                            index: i
                        });
                        n.hash.reverse && (t = t.reverse())
                    } else
                        for (var o in t) i++, r += n.fn(t[o], {
                            key: o
                        });
                    return i > 0 ? r : n.inverse(this)
                },
                "with": function(e, t) {
                    return a(e) && (e = e.call(this)), t.fn(e)
                },
                join: function(e, t) {
                    return a(e) && (e = e.call(this)), e.join(t.hash.delimiter || t.hash.delimeter)
                }
            }
        };
        var i = function(e, a) {
            if (2 === arguments.length) {
                var t = new r(e),
                    n = t.compile()(a);
                return t = null, n
            }
            return new r(e)
        };
        return i.registerHelper = function(e, a) {
            r.prototype.helpers[e] = a
        }, i.unregisterHelper = function(e) {
            r.prototype.helpers[e] = void 0, delete r.prototype.helpers[e]
        }, i.compile = function(e, a) {
            var t = new r(e, a);
            return t.compile()
        }, i.options = r.prototype.options, i.helpers = r.prototype.helpers, i
    }(), window.Swiper = function(a, t) {
        function n() {
            return "horizontal" === c.params.direction
        }

        function r(e) {
            var a, t, n = function() {
                "undefined" != typeof c && null !== c && (void 0 !== c.imagesLoaded && c.imagesLoaded++, c.imagesLoaded === c.imagesToLoad.length && (c.update(), c.params.onImagesReady && c.params.onImagesReady(c)))
            };
            e.complete ? n() : (t = e.currentSrc || e.getAttribute("src"), t ? (a = new Image, a.onload = n, a.onerror = n, a.src = t) : n())
        }

        function i() {
            c.autoplayTimeoutId = setTimeout(function() {
                c.params.loop ? (c.fixLoop(), c._slideNext()) : c.isEnd ? t.autoplayStopOnLast ? c.stopAutoplay() : c._slideTo(0) : c._slideNext()
            }, c.params.autoplay)
        }

        function o(e, a) {
            var t = f(e.target);
            if (!t.is(a))
                if ("string" == typeof a) t = t.parents(a);
                else if (a.nodeType) {
                var n;
                return t.parents().each(function(e, t) {
                    t === a && (n = a)
                }), n ? a : void 0
            }
            return 0 === t.length ? void 0 : t[0]
        }

        function s(e, a) {
            a = a || {};
            var t = window.MutationObserver || window.WebkitMutationObserver,
                n = new t(function(e) {
                    e.forEach(function() {
                        c.onResize()
                    })
                });
            n.observe(e, {
                attributes: "undefined" == typeof a.attributes ? !0 : a.attributes,
                childList: "undefined" == typeof a.childList ? !0 : a.childList,
                characterData: "undefined" == typeof a.characterData ? !0 : a.characterData
            }), c.observers.push(n)
        }
        var l = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            effect: "slide",
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            },
            cube: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            },
            scrollbar: null,
            scrollbarHide: !0,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelForceToAxis: !1,
            hashnav: !1,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            pagination: null,
            paginationClickable: !1,
            paginationHide: !1,
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            clicksStopPropagation: !0,
            releaseFormElements: !0,
            slideToClickedSlide: !1,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationHiddenClass: "swiper-pagination-hidden",
            observer: !1,
            observeParents: !1
        };
        t = t || {};
        for (var p in l)
            if ("undefined" == typeof t[p]) t[p] = l[p];
            else if ("object" == typeof t[p])
            for (var d in l[p]) "undefined" == typeof t[p][d] && (t[p][d] = l[p][d]);
        var c = this;
        c.params = t;
        var f;
        if (f = "undefined" == typeof e ? window.Dom7 || window.Zepto || window.jQuery : e, f && (c.container = f(a), 0 !== c.container.length)) {
            if (c.container.length > 1) return void c.container.each(function() {
                new Swiper(this, t)
            });
            c.container[0].swiper = c, c.container.data("swiper", c), c.container.addClass("swiper-container-" + c.params.direction), c.params.freeMode && c.container.addClass("swiper-container-free-mode"), ["cube", "coverflow"].indexOf(c.params.effect) >= 0 && (c.support.transforms3d ? (c.params.watchSlidesProgress = !0, c.container.addClass("swiper-container-3d")) : c.params.effect = "slide"), "slide" !== c.params.effect && c.container.addClass("swiper-container-" + c.params.effect), "cube" === c.params.effect && (c.params.resistanceRatio = 0, c.params.slidesPerView = 1, c.params.slidesPerColumn = 1, c.params.slidesPerGroup = 1, c.params.centeredSlides = !1, c.params.spaceBetween = 0), "fade" === c.params.effect && (c.params.watchSlidesProgress = !0, c.params.spaceBetween = 0), c.params.grabCursor && c.support.touch && (c.params.grabCursor = !1), c.wrapper = c.container.children("." + c.params.wrapperClass), c.params.pagination && (c.paginationContainer = f(c.params.pagination), c.params.paginationClickable && c.paginationContainer.addClass("swiper-pagination-clickable")), c.rtl = n() && ("rtl" === c.container[0].dir.toLowerCase() || "rtl" === c.container.css("direction")), c.translate = 0, c.progress = 0, c.velocity = 0, c.lockSwipeToNext = function() {
                c.params.allowSwipeToNext = !1
            }, c.lockSwipeToPrev = function() {
                c.params.allowSwipeToPrev = !1
            }, c.lockSwipes = function() {
                c.params.allowSwipeToNext = c.params.allowSwipeToPrev = !1
            }, c.unlockSwipeToNext = function() {
                c.params.allowSwipeToNext = !0
            }, c.unlockSwipeToPrev = function() {
                c.params.allowSwipeToPrev = !0
            }, c.unlockSwipes = function() {
                c.params.allowSwipeToNext = c.params.allowSwipeToPrev = !0
            }, c.params.slidesPerColumn > 1 && c.container.addClass("swiper-container-multirow"), c.params.grabCursor && (c.container[0].style.cursor = "move", c.container[0].style.cursor = "-webkit-grab", c.container[0].style.cursor = "-moz-grab", c.container[0].style.cursor = "grab"), c.imagesToLoad = [], c.imagesLoaded = 0, c.preloadImages = function() {
                c.imagesToLoad = c.container.find("img");
                for (var e = 0; e < c.imagesToLoad.length; e++) r(c.imagesToLoad[e])
            }, c.autoplayTimeoutId = void 0, c.autoplaying = !1, c.autoplayPaused = !1, c.startAutoplay = function() {
                return "undefined" != typeof c.autoplayTimeoutId ? !1 : void(c.params.autoplay && (c.autoplaying || (c.autoplaying = !0, c.params.onAutoplayStart && c.params.onAutoplayStart(c), i())))
            }, c.stopAutoplay = function() {
                c.autoplayTimeoutId && (c.autoplayTimeoutId && clearTimeout(c.autoplayTimeoutId), c.autoplaying = !1, c.autoplayTimeoutId = void 0, c.params.onAutoplayStop && c.params.onAutoplayStop(c))
            }, c.pauseAutoplay = function(e) {
                c.autoplayPaused || (c.autoplayTimeoutId && clearTimeout(c.autoplayTimeoutId), c.autoplayPaused = !0, 0 === e ? (c.autoplayPaused = !1, i()) : c.wrapper.transitionEnd(function() {
                    c.autoplayPaused = !1, i()
                }))
            }, c.updateContainerSize = function() {
                c.width = c.container[0].clientWidth, c.height = c.container[0].clientHeight, c.size = n() ? c.width : c.height
            }, c.updateSlidesSize = function() {
                c.slides = c.wrapper.children("." + c.params.slideClass), c.snapGrid = [], c.slidesGrid = [], c.slidesSizesGrid = [];
                var e, a = c.params.spaceBetween,
                    t = 0,
                    r = 0,
                    i = 0;
                "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * c.size), c.virtualWidth = -a, c.slides.css(c.rtl ? {
                    marginLeft: "",
                    marginTop: ""
                } : {
                    marginRight: "",
                    marginBottom: ""
                });
                var o;
                c.params.slidesPerColumn > 1 && (o = Math.floor(c.slides.length / c.params.slidesPerColumn) === c.slides.length / c.params.slidesPerColumn ? c.slides.length : Math.ceil(c.slides.length / c.params.slidesPerColumn) * c.params.slidesPerColumn);
                var s;
                for (e = 0; e < c.slides.length; e++) {
                    s = 0;
                    var l = c.slides.eq(e);
                    if (c.params.slidesPerColumn > 1) {
                        var p, d, f, u, m = c.params.slidesPerColumn;
                        "column" === c.params.slidesPerColumnFill ? (d = Math.floor(e / m), f = e - d * m, p = d + f * o / m, l.css({
                            "-webkit-box-ordinal-group": p,
                            "-moz-box-ordinal-group": p,
                            "-ms-flex-order": p,
                            "-webkit-order": p,
                            order: p
                        })) : (u = o / m, f = Math.floor(e / u), d = e - f * u), l.css({
                            "margin-top": 0 !== f && c.params.spaceBetween && c.params.spaceBetween + "px"
                        }).attr("data-swiper-column", d).attr("data-swiper-row", f)
                    }
                    "none" !== l.css("display") && ("auto" === c.params.slidesPerView ? s = n() ? l.outerWidth(!0) : l.outerHeight(!0) : (s = (c.size - (c.params.slidesPerView - 1) * a) / c.params.slidesPerView, n() ? c.slides[e].style.width = s + "px" : c.slides[e].style.height = s + "px"), c.slides[e].swiperSlideSize = s, c.slidesSizesGrid.push(s), c.params.centeredSlides ? (t = t + s / 2 + r / 2 + a, 0 === e && (t = t - c.size / 2 - a), Math.abs(t) < .001 && (t = 0), i % c.params.slidesPerGroup === 0 && c.snapGrid.push(t), c.slidesGrid.push(t)) : (i % c.params.slidesPerGroup === 0 && c.snapGrid.push(t), c.slidesGrid.push(t), t = t + s + a), c.virtualWidth += s + a, r = s, i++)
                }
                c.virtualWidth = Math.max(c.virtualWidth, c.size);
                var h;
                if (c.params.slidesPerColumn > 1 && (c.virtualWidth = (s + c.params.spaceBetween) * o, c.virtualWidth = Math.ceil(c.virtualWidth / c.params.slidesPerColumn) - c.params.spaceBetween, c.wrapper.css({
                        width: c.virtualWidth + c.params.spaceBetween + "px"
                    }), c.params.centeredSlides)) {
                    for (h = [], e = 0; e < c.snapGrid.length; e++) c.snapGrid[e] < c.virtualWidth + c.snapGrid[0] && h.push(c.snapGrid[e]);
                    c.snapGrid = h
                }
                if (!c.params.centeredSlides) {
                    for (h = [], e = 0; e < c.snapGrid.length; e++) c.snapGrid[e] <= c.virtualWidth - c.size && h.push(c.snapGrid[e]);
                    c.snapGrid = h, Math.floor(c.virtualWidth - c.size) > Math.floor(c.snapGrid[c.snapGrid.length - 1]) && c.snapGrid.push(c.virtualWidth - c.size)
                }
                0 === c.snapGrid.length && (c.snapGrid = [0]), 0 !== c.params.spaceBetween && c.slides.css(n() ? c.rtl ? {
                    marginLeft: a + "px"
                } : {
                    marginRight: a + "px"
                } : {
                    marginBottom: a + "px"
                }), c.params.watchSlidesProgress && c.updateSlidesOffset()
            }, c.updateSlidesOffset = function() {
                for (var e = 0; e < c.slides.length; e++) c.slides[e].swiperSlideOffset = n() ? c.slides[e].offsetLeft : c.slides[e].offsetTop
            }, c.update = function() {
                c.updateContainerSize(), c.updateSlidesSize(), c.updateProgress(), c.updatePagination(), c.updateClasses()
            }, c.minTranslate = function() {
                return -c.snapGrid[0]
            }, c.maxTranslate = function() {
                return -c.snapGrid[c.snapGrid.length - 1]
            }, c.updateSlidesProgress = function(e) {
                if ("undefined" == typeof e && (e = c.translate || 0), 0 !== c.slides.length) {
                    "undefined" == typeof c.slides[0].swiperSlideOffset && c.updateSlidesOffset(); {
                        var a = c.params.centeredSlides ? -e + c.size / 2 : -e;
                        c.container[0].getBoundingClientRect(), n() ? "left" : "top", n() ? "right" : "bottom"
                    }
                    c.slides.removeClass(c.params.slideVisibleClass);
                    for (var t = 0; t < c.slides.length; t++) {
                        var r = c.slides[t],
                            i = c.params.centeredSlides === !0 ? r.swiperSlideSize / 2 : 0,
                            o = (a - r.swiperSlideOffset - i) / (r.swiperSlideSize + c.params.spaceBetween);
                        if (c.params.watchVisibility) {
                            var s = -(a - r.swiperSlideOffset - i),
                                l = s + c.slidesSizesGrid[t],
                                p = s >= 0 && s < c.size || l > 0 && l <= c.size || 0 >= s && l >= c.size;
                            p && c.slides.eq(t).addClass(c.params.slideVisibleClass)
                        }
                        r.progress = o
                    }
                }
            }, c.updateProgress = function(e) {
                "undefined" == typeof e && (e = c.translate || 0), c.progress = (e - c.minTranslate()) / (c.maxTranslate() - c.minTranslate()), c.isBeginning = c.isEnd = !1, c.progress <= 0 && (c.isBeginning = !0, c.params.onReachBeginning && c.params.onReachBeginning(c)), c.progress >= 1 && (c.isEnd = !0, c.params.onReachEnd && c.params.onReachEnd(c)), c.params.watchSlidesProgress && c.updateSlidesProgress(e), c.params.onProgress && c.params.onProgress(c, c.progress)
            }, c.updateActiveIndex = function() {
                var e, a, t, n = c.rtl ? c.translate : -c.translate;
                for (a = 0; a < c.slidesGrid.length; a++) "undefined" != typeof c.slidesGrid[a + 1] ? n >= c.slidesGrid[a] && n < c.slidesGrid[a + 1] - (c.slidesGrid[a + 1] - c.slidesGrid[a]) / 2 ? e = a : n >= c.slidesGrid[a] && n < c.slidesGrid[a + 1] && (e = a + 1) : n >= c.slidesGrid[a] && (e = a);
                (0 > e || "undefined" == typeof e) && (e = 0), t = Math.floor(e / c.params.slidesPerGroup), t >= c.snapGrid.length && (t = c.snapGrid.length - 1), e !== c.activeIndex && (c.snapIndex = t, c.previousIndex = c.activeIndex, c.activeIndex = e, c.updateClasses())
            }, c.updateClasses = function() {
                c.slides.removeClass(c.params.slideActiveClass + " " + c.params.slideNextClass + " " + c.params.slidePrevClass);
                var e = c.slides.eq(c.activeIndex);
                if (e.addClass(c.params.slideActiveClass), e.next("." + c.params.slideClass).addClass(c.params.slideNextClass), e.prev("." + c.params.slideClass).addClass(c.params.slidePrevClass), c.bullets && c.bullets.length > 0) {
                    c.bullets.removeClass(c.params.bulletActiveClass);
                    var a;
                    c.params.loop ? (a = c.activeIndex - c.loopedSlides, a > c.slides.length - 1 - 2 * c.loopedSlides && (a -= c.slides.length - 2 * c.loopedSlides)) : a = "undefined" != typeof c.snapIndex ? c.snapIndex : c.activeIndex || 0, c.bullets.eq(a).addClass(c.params.bulletActiveClass)
                }
                c.params.loop || (c.params.prevButton && (c.isBeginning ? f(c.params.prevButton).addClass(c.params.buttonDisabledClass) : f(c.params.prevButton).removeClass(c.params.buttonDisabledClass)), c.params.nextButton && (c.isEnd ? f(c.params.nextButton).addClass(c.params.buttonDisabledClass) : f(c.params.nextButton).removeClass(c.params.buttonDisabledClass)))
            }, c.updatePagination = function() {
                if (c.params.pagination && c.paginationContainer && c.paginationContainer.length > 0) {
                    for (var e = "", a = c.params.loop ? c.slides.length - 2 * c.loopedSlides : c.snapGrid.length, t = 0; a > t; t++) e += '<span class="' + c.params.bulletClass + '"></span>';
                    c.paginationContainer.html(e), c.bullets = c.paginationContainer.find("." + c.params.bulletClass)
                }
            }, c.onResize = function() {
                c.updateContainerSize(), c.updateSlidesSize(), c.updateProgress(), c.updateClasses(), "auto" === c.params.slidesPerView && c.updatePagination(), c.isEnd ? c.slideTo(c.slides.length - 1, 0, !1) : c.slideTo(c.activeIndex, 0, !1), c.params.scrollbar && c.scrollbar && c.scrollbar.init()
            };
            var u = ["mousedown", "mousemove", "mouseup"];
            window.navigator.pointerEnabled ? u = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (u = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), c.touchEvents = {
                start: c.support.touch || !c.params.simulateTouch ? "touchstart" : u[0],
                move: c.support.touch || !c.params.simulateTouch ? "touchmove" : u[1],
                end: c.support.touch || !c.params.simulateTouch ? "touchend" : u[2]
            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === c.params.touchEventsTarget ? c.container : c.wrapper).addClass("swiper-wp8-" + c.params.direction), c.events = function(e) {
                var a = e ? "off" : "on",
                    t = "container" === c.params.touchEventsTarget ? c.container : c.wrapper,
                    n = c.support.touch ? t : f(document),
                    r = c.params.nested ? !0 : !1;
                t[a](c.touchEvents.start, c.onTouchStart, !1), n[a](c.touchEvents.move, c.onTouchMove, r), n[a](c.touchEvents.end, c.onTouchEnd, !1), f(window)[a]("resize", c.onResize), c.params.nextButton && f(c.params.nextButton)[a]("click", c.onClickNext), c.params.prevButton && f(c.params.prevButton)[a]("click", c.onClickPrev), c.params.pagination && c.params.paginationClickable && f(c.paginationContainer)[a]("click", "." + c.params.bulletClass, c.onClickIndex), (c.params.preventClicks || c.params.clicksStopPropagation) && t[a]("click", "a", c.preventClicks, !0)
            }, c.attachEvents = function() {
                c.events()
            }, c.detachEvents = function() {
                c.events(!0)
            }, c.allowClick = !0, c.preventClicks = function(e) {
                c.allowClick || (c.params.preventClicks && e.preventDefault(), c.params.clicksStopPropagation && (e.stopPropagation(), e.stopImmediatePropagation()))
            }, c.onClickNext = function(e) {
                e.preventDefault(), c.slideNext()
            }, c.onClickPrev = function(e) {
                e.preventDefault(), c.slidePrev()
            }, c.onClickIndex = function(e) {
                e.preventDefault();
                var a = f(this).index() * c.params.slidesPerGroup;
                c.params.loop && (a += c.loopedSlides), c.slideTo(a)
            }, c.updateClickedSlide = function(e) {
                var a = o(e, "." + c.params.slideClass);
                if (a && (c.clickedSlide = a, c.clickedIndex = f(a).index()), c.params.slideToClickedSlide && void 0 !== c.clickedIndex && c.clickedIndex !== c.activeIndex) {
                    var t, n = c.clickedIndex;
                    if (c.params.loop)
                        if (t = f(c.clickedSlide).attr("data-swiper-slide-index"), n > c.slides.length - c.params.slidesPerView) c.fixLoop(), n = c.wrapper.children("." + c.params.slideClass + '[data-swiper-slide-index="' + t + '"]').eq(0).index(), setTimeout(function() {
                            c.slideTo(n)
                        }, 0);
                        else if (n < c.params.slidesPerView - 1) {
                        c.fixLoop();
                        var r = c.wrapper.children("." + c.params.slideClass + '[data-swiper-slide-index="' + t + '"]');
                        n = r.eq(r.length - 1).index(), setTimeout(function() {
                            c.slideTo(n)
                        }, 0)
                    } else c.slideTo(n);
                    else c.slideTo(n)
                }
            };
            var m, h, g, v, w, b, C, y = {},
                x = {};
            c.animating = !1;
            var T, k, S = Date.now(),
                P = [],
                M = "input, select, textarea, button";
            return c.onTouchStart = function(e) {
                if (e.originalEvent && (e = e.originalEvent), !("mousedown" === e.type && "which" in e && 3 === e.which || (e.originalEvent && (e = e.originalEvent), c.params.noSwiping && o(e, "." + c.params.noSwipingClass) || c.params.swipeHandler && !o(e, c.params.swipeHandler)))) {
                    if (m = !0, h = !1, v = void 0, y.x = x.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, y.y = x.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY, g = Date.now(), c.allowClick = !0, c.updateContainerSize(), c.swipeDirection = void 0, c.params.threshold > 0 && (C = !1), "mousedown" === e.type) {
                        var a = !0;
                        f(e.target).is(M) && (a = !1), document.activeElement && f(document.activeElement).is(M) && document.activeElement.blur()
                    }
                    c.params.onTouchStart && c.params.onTouchStart(c, e)
                }
            }, c.onTouchMove = function(e) {
                if (e.originalEvent && (e = e.originalEvent), !e.preventedByNestedSwiper) {
                    if (c.params.onlyExternal) return h = !0, void(c.allowClick = !1);
                    if (c.params.onTouchMove && c.params.onTouchMove(c, e), c.allowClick = !1, m && !(e.targetTouches && e.targetTouches.length > 1)) {
                        x.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, x.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY;
                        var a = 180 * Math.atan2(Math.abs(x.y - y.y), Math.abs(x.x - y.x)) / Math.PI;
                        if ("undefined" == typeof v && (v = n() ? a > c.params.touchAngle : 90 - a > c.params.touchAngle), v) return void(m = !1);
                        c.params.onSliderMove && c.params.onSliderMove(c, e), e.preventDefault(), c.params.touchMoveStopPropagation && !c.params.nested && e.stopPropagation(), h || (t.loop && c.fixLoop(), b = "cube" === c.params.effect ? c.translate || 0 : c.getWrapperTranslate(), c.setWrapperTransition(0), c.animating && c.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), c.params.autoplay && c.autoplaying && (c.params.autoplayDisableOnInteraction ? c.stopAutoplay() : c.pauseAutoplay()), k = !1, c.params.grabCursor && (c.container[0].style.cursor = "move", c.container[0].style.cursor = "-webkit-grabbing", c.container[0].style.cursor = "-moz-grabbin", c.container[0].style.cursor = "grabbing")), h = !0;
                        var r = n() ? x.x - y.x : x.y - y.y;
                        r *= c.params.touchRatio, c.rtl && (r = -r), c.swipeDirection = r > 0 ? "prev" : "next", w = r + b;
                        var i = !0;
                        if (r > 0 && w > c.minTranslate() ? (i = !1, c.params.resistance && (w = c.minTranslate() - 1 + Math.pow(-c.minTranslate() + b + r, c.params.resistanceRatio))) : 0 > r && w < c.maxTranslate() && (i = !1, c.params.resistance && (w = c.maxTranslate() + 1 - Math.pow(c.maxTranslate() - b - r, c.params.resistanceRatio))), i && (e.preventedByNestedSwiper = !0), !c.params.allowSwipeToNext && "next" === c.swipeDirection && b > w && (w = b), !c.params.allowSwipeToPrev && "prev" === c.swipeDirection && w > b && (w = b), c.params.followFinger) {
                            if (c.params.threshold > 0) {
                                if (!(Math.abs(r) > c.params.threshold || C)) return void(w = b);
                                if (!C) return C = !0, y.x = x.x, y.y = x.y, void(w = b)
                            }(c.params.freeMode || c.params.watchSlidesProgress) && c.updateActiveIndex(), c.params.freeMode && (0 === P.length && P.push({
                                position: y[n() ? "x" : "y"],
                                time: g
                            }), P.push({
                                position: x[n() ? "x" : "y"],
                                time: (new Date).getTime()
                            })), c.updateProgress(w), c.setWrapperTranslate(w)
                        }
                    }
                }
            }, c.onTouchEnd = function(e) {
                if (e.originalEvent && (e = e.originalEvent), m) {
                    c.params.onTouchEnd && c.params.onTouchEnd(c, e), c.params.grabCursor && h && m && (c.container[0].style.cursor = "move", c.container[0].style.cursor = "-webkit-grab", c.container[0].style.cursor = "-moz-grab", c.container[0].style.cursor = "grab");
                    var a = Date.now(),
                        t = a - g;
                    c.allowClick && (c.updateClickedSlide(e), c.params.onTap && c.params.onTap(c, e), 300 > t && a - S > 300 && (T && clearTimeout(T), T = setTimeout(function() {
                        c && (c.params.paginationHide && c.paginationContainer.length > 0 && !f(e.target).hasClass(c.params.bulletClass) && c.paginationContainer.toggleClass(c.params.paginationHiddenClass), c.params.onClick && c.params.onClick(c, e))
                    }, 300)), 300 > t && 300 > a - S && (T && clearTimeout(T), c.params.onDoubleTap && c.params.onDoubleTap(c, e))), S = Date.now(), setTimeout(function() {
                        c && c.allowClick && (c.allowClick = !0)
                    }, 0);
                    var r = n() ? x.x - y.x : x.y - y.y;
                    if (!m || !h || !c.swipeDirection || 0 === r || w === b) return void(m = h = !1);
                    m = h = !1;
                    var i;
                    if (i = c.params.followFinger ? c.rtl ? c.translate : -c.translate : -w, c.params.freeMode) {
                        if (i < -c.minTranslate()) return void c.slideTo(c.activeIndex);
                        if (i > -c.maxTranslate()) return void c.slideTo(c.slides.length - 1);
                        if (c.params.freeModeMomentum) {
                            if (P.length > 1) {
                                var o = P.pop(),
                                    s = P.pop(),
                                    l = o.position - s.position,
                                    p = o.time - s.time;
                                c.velocity = l / p, c.velocity = c.velocity / 2, Math.abs(c.velocity) < .02 && (c.velocity = 0), (p > 150 || t > 300) && (c.velocity = 0)
                            } else c.velocity = 0;
                            P.length = 0;
                            var d, u = 1e3 * c.params.freeModeMomentumRatio,
                                v = c.velocity * u,
                                C = c.translate + v,
                                M = !1,
                                O = 20 * Math.abs(c.velocity) * c.params.freeModeMomentumBounceRatio;
                            C < c.maxTranslate() && (c.params.freeModeMomentumBounce ? (C + c.maxTranslate() < -O && (C = c.maxTranslate() - O), d = c.maxTranslate(), M = !0, k = !0) : C = c.maxTranslate()), C > c.minTranslate() && (c.params.freeModeMomentumBounce ? (C - c.minTranslate() > O && (C = c.minTranslate() + O), d = c.minTranslate(), M = !0, k = !0) : C = c.minTranslate()), 0 !== c.velocity && (u = Math.abs((C - c.translate) / c.velocity)), c.params.freeModeMomentumBounce && M ? (c.updateProgress(d), c.setWrapperTranslate(C), c.setWrapperTransition(u), c.onTransitionStart(), c.animating = !0, c.wrapper.transitionEnd(function() {
                                k && (c.params.onMomentumBounce && c.params.onMomentumBounce(c), c.setWrapperTranslate(d), c.setWrapperTransition(c.params.speed), c.wrapper.transitionEnd(function() {
                                    c.onTransitionEnd()
                                }))
                            })) : c.velocity ? (c.updateProgress(C), c.setWrapperTranslate(C), c.setWrapperTransition(u), c.onTransitionStart(), c.animating || (c.animating = !0, c.wrapper.transitionEnd(function() {
                                c.onTransitionEnd()
                            }))) : c.updateProgress(C), c.updateActiveIndex()
                        }
                        return void((!c.params.freeModeMomentum || t >= c.params.longSwipesMs) && (c.updateProgress(), c.updateActiveIndex()))
                    }
                    var I, E = 0,
                        D = c.slidesSizesGrid[0];
                    for (I = 0; I < c.slidesGrid.length; I += c.params.slidesPerGroup) "undefined" != typeof c.slidesGrid[I + c.params.slidesPerGroup] ? i >= c.slidesGrid[I] && i < c.slidesGrid[I + c.params.slidesPerGroup] && (E = I, D = c.slidesGrid[I + c.params.slidesPerGroup] - c.slidesGrid[I]) : i >= c.slidesGrid[I] && (E = I, D = c.slidesGrid[c.slidesGrid.length - 1] - c.slidesGrid[c.slidesGrid.length - 2]);
                    var L = (i - c.slidesGrid[E]) / D;
                    if (t > c.params.longSwipesMs) {
                        if (!c.params.longSwipes) return void c.slideTo(c.activeIndex);
                        "next" === c.swipeDirection && c.slideTo(L >= c.params.longSwipesRatio ? E + c.params.slidesPerGroup : E), "prev" === c.swipeDirection && c.slideTo(L > 1 - c.params.longSwipesRatio ? E + c.params.slidesPerGroup : E)
                    } else {
                        if (!c.params.shortSwipes) return void c.slideTo(c.activeIndex);
                        "next" === c.swipeDirection && c.slideTo(E + c.params.slidesPerGroup), "prev" === c.swipeDirection && c.slideTo(E)
                    }
                }
            }, c._slideTo = function(e, a) {
                return c.slideTo(e, a, !0, !0)
            }, c.slideTo = function(e, a, t, r) {
                "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = 0), 0 > e && (e = 0), c.snapIndex = Math.floor(e / c.params.slidesPerGroup), c.snapIndex >= c.snapGrid.length && (c.snapIndex = c.snapGrid.length - 1);
                var i = -c.snapGrid[c.snapIndex];
                c.params.autoplay && c.autoplaying && (r || !c.params.autoplayDisableOnInteraction ? c.pauseAutoplay(a) : c.stopAutoplay()), c.updateProgress(i);
                for (var o = 0; o < c.slidesGrid.length; o++) - i >= c.slidesGrid[o] && (e = o);
                if ("undefined" == typeof a && (a = c.params.speed), c.previousIndex = c.activeIndex || 0, c.activeIndex = e, i === c.translate) return c.updateClasses(), !1;
                t && c.onTransitionStart();
                n() ? i : 0, n() ? 0 : i;
                0 === a ? (c.setWrapperTransition(0), c.setWrapperTranslate(i), t && c.onTransitionEnd()) : (c.setWrapperTransition(a), c.setWrapperTranslate(i), c.animating || (c.animating = !0, c.wrapper.transitionEnd(function() {
                    t && c.onTransitionEnd()
                }))), c.updateClasses()
            }, c.onTransitionStart = function() {
                c.params.onTransitionStart && c.params.onTransitionStart(c), c.params.onSlideChangeStart && c.activeIndex !== c.previousIndex && c.params.onSlideChangeStart(c)
            }, c.onTransitionEnd = function() {
                c.animating = !1, c.setWrapperTransition(0), c.params.onTransitionEnd && c.params.onTransitionEnd(c), c.params.onSlideChangeEnd && c.activeIndex !== c.previousIndex && c.params.onSlideChangeEnd(c)
            }, c.slideNext = function(e, a, t) {
                return c.params.loop ? c.animating ? !1 : (c.fixLoop(), void setTimeout(function() {
                    return c.slideTo(c.activeIndex + 1, a, e, t)
                }, 0)) : c.slideTo(c.activeIndex + c.params.slidesPerGroup, a, e, t)
            }, c._slideNext = function(e) {
                return c.slideNext(!0, e, !0)
            }, c.slidePrev = function(e, a, t) {
                return c.params.loop ? c.animating ? !1 : (c.fixLoop(), void setTimeout(function() {
                    return c.slideTo(c.activeIndex - 1, a, e, t)
                }, 0)) : c.slideTo(c.activeIndex - 1, a, e, t)
            }, c._slidePrev = function(e) {
                return c.slidePrev(!0, e, !0)
            }, c.slideReset = function(e, a) {
                return c.slideTo(c.activeIndex, a, e)
            }, c.setWrapperTransition = function(e, a) {
                c.wrapper.transition(e), c.params.onSetTransition && c.params.onSetTransition(c, e), "slide" !== c.params.effect && c.effects[c.params.effect] && c.effects[c.params.effect].setTransition(e), c.params.scrollbar && c.scrollbar && c.scrollbar.setTransition(e), c.params.control && c.controller && c.controller.setTransition(e, a)
            }, c.setWrapperTranslate = function(e, a, t) {
                var r = 0,
                    i = 0,
                    o = 0;
                n() ? r = c.rtl ? -e : e : i = e, c.wrapper.transform(c.support.transforms3d ? "translate3d(" + r + "px, " + i + "px, " + o + "px)" : "translate(" + r + "px, " + i + "px)"), c.translate = n() ? r : i, a && c.updateActiveIndex(), "slide" !== c.params.effect && c.effects[c.params.effect] && c.effects[c.params.effect].setTranslate(c.translate), c.params.scrollbar && c.scrollbar && c.scrollbar.setTranslate(c.translate), c.params.control && c.controller && c.controller.setTranslate(c.translate, t), c.params.hashnav && c.hashnav && c.hashnav.setHash(), c.params.onSetTranslate && c.params.onSetTranslate(c, c.translate)
            }, c.getTranslate = function(e, a) {
                var t, n, r, i;
                return "undefined" == typeof a && (a = "x"), r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? i = new WebKitCSSMatrix("none" === r.webkitTransform ? "" : r.webkitTransform) : (i = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = i.toString().split(",")), "x" === a && (n = window.WebKitCSSMatrix ? i.m41 : parseFloat(16 === t.length ? t[12] : t[4])), "y" === a && (n = window.WebKitCSSMatrix ? i.m42 : parseFloat(16 === t.length ? t[13] : t[5])), c.rtl && n && (n = -n), n || 0
            }, c.getWrapperTranslate = function(e) {
                return "undefined" == typeof e && (e = n() ? "x" : "y"), c.getTranslate(c.wrapper[0], e)
            }, c.observers = [], c.initObservers = function() {
                if (c.params.observeParents)
                    for (var e = c.container.parents(), a = 0; a < e.length; a++) s(e[a]);
                s(c.container[0], {
                    childList: !1
                }), s(c.wrapper[0], {
                    attributes: !1
                })
            }, c.disconnectObservers = function() {
                for (var e = 0; e < c.observers.length; e++) c.observers[e].disconnect();
                c.observers = []
            }, c.createLoop = function() {
                c.wrapper.children("." + c.params.slideClass + "." + c.params.slideDuplicateClass).remove();
                var e = c.wrapper.children("." + c.params.slideClass);
                c.loopedSlides = parseInt(c.params.loopedSlides || c.params.slidesPerView, 10), c.loopedSlides = c.loopedSlides + c.params.loopAdditionalSlides, c.loopedSlides > e.length && (c.loopedSlides = e.length);
                var a, t = [],
                    n = [];
                for (e.each(function(a, r) {
                        var i = f(this);
                        a < c.loopedSlides && n.push(r), a < e.length && a >= e.length - c.loopedSlides && t.push(r), i.attr("data-swiper-slide-index", a)
                    }), a = 0; a < n.length; a++) c.wrapper.append(f(n[a].cloneNode(!0)).addClass(c.params.slideDuplicateClass));
                for (a = t.length - 1; a >= 0; a--) c.wrapper.prepend(f(t[a].cloneNode(!0)).addClass(c.params.slideDuplicateClass))
            }, c.deleteLoop = function() {
                c.wrapper.children("." + c.params.slideClass + "." + c.params.slideDuplicateClass).remove()
            }, c.fixLoop = function() {
                var e;
                c.activeIndex < c.loopedSlides ? (e = c.slides.length - 3 * c.loopedSlides + c.activeIndex, e += c.loopedSlides, c.slideTo(e, 0, !1, !0)) : ("auto" === c.params.slidesPerView && c.activeIndex >= 2 * c.loopedSlides || c.activeIndex > c.slides.length - 2 * c.params.slidesPerView) && (e = -c.slides.length + c.activeIndex + c.loopedSlides, e += c.loopedSlides, c.slideTo(e, 0, !1, !0))
            }, c.appendSlide = function(e) {
                if (c.params.loop && c.deleteLoop(), "object" == typeof e && e.length)
                    for (var a = 0; a < e.length; a++) e[a] && c.wrapper.append(e[a]);
                else c.wrapper.append(e);
                c.params.loop && c.createLoop(), c.params.observer && c.support.observer || c.update()
            }, c.prependSlide = function(e) {
                c.params.loop && c.deleteLoop();
                var a = c.activeIndex + 1;
                if ("object" == typeof e && e.length) {
                    for (var t = 0; t < e.length; t++) e[t] && c.wrapper.prepend(e[t]);
                    a = c.activeIndex + e.length
                } else c.wrapper.prepend(e);
                c.params.loop && c.createLoop(), c.params.observer && c.support.observer || c.update(), c.slideTo(a, 0, !1)
            }, c.effects = {
                fade: {
                    setTranslate: function() {
                        for (var e = 0; e < c.slides.length; e++) {
                            var a = c.slides.eq(e),
                                t = a[0].swiperSlideOffset,
                                r = -t - c.translate,
                                i = 0;
                            n() || (i = r, r = 0), a.css({
                                opacity: 1 + Math.min(Math.max(a[0].progress, -1), 0)
                            }).transform("translate3d(" + r + "px, " + i + "px, 0px)")
                        }
                    },
                    setTransition: function(e) {
                        c.slides.transition(e)
                    }
                },
                cube: {
                    setTranslate: function() {
                        var e, a = 0;
                        c.params.cube.shadow && (n() ? (e = c.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = f('<div class="swiper-cube-shadow"></div>'), c.wrapper.append(e)), e.css({
                            height: c.width + "px"
                        })) : (e = c.container.find(".swiper-cube-shadow"), 0 === e.length && (e = f('<div class="swiper-cube-shadow"></div>'), c.container.append(e))));
                        for (var t = 0; t < c.slides.length; t++) {
                            var r = c.slides.eq(t),
                                i = 90 * t,
                                o = Math.max(Math.min(r[0].progress, 1), -1),
                                s = 0,
                                l = 0,
                                p = 0,
                                d = Math.floor(i / 360);
                            t % 4 === 0 ? (s = 4 * -d * c.size, p = 0) : (t - 1) % 4 === 0 ? (s = 0, p = 4 * -d * c.size) : (t - 2) % 4 === 0 ? (s = c.size + 4 * d * c.size, p = c.size) : (t - 3) % 4 === 0 && (s = -c.size, p = 3 * c.size + 4 * c.size * d), n() || (l = s, s = 0);
                            var u = "rotateX(" + (n() ? 0 : -i) + "deg) rotateY(" + (n() ? i : 0) + "deg) translate3d(" + s + "px, " + l + "px, " + p + "px)";
                            if (1 >= o && o > -1 && (a = 90 * t + 90 * o), r.transform(u), c.params.cube.slideShadows) {
                                var m = r.find(n() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
                                    h = r.find(n() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                                0 === m.length && (m = f('<div class="swiper-slide-shadow-' + (n() ? "left" : "top") + '"></div>'), r.append(m)), 0 === h.length && (h = f('<div class="swiper-slide-shadow-' + (n() ? "right" : "bottom") + '"></div>'), r.append(h)); {
                                    r[0].progress
                                }
                                m.length && (m[0].style.opacity = -r[0].progress), h.length && (h[0].style.opacity = r[0].progress)
                            }
                        }
                        if (c.wrapper.css({
                                "-webkit-transform-origin": "50% 50% -" + c.size / 2 + "px",
                                "-moz-transform-origin": "50% 50% -" + c.size / 2 + "px",
                                "-ms-transform-origin": "50% 50% -" + c.size / 2 + "px",
                                "transform-origin": "50% 50% -" + c.size / 2 + "px"
                            }), c.params.cube.shadow)
                            if (n()) e.transform("translate3d(0px, " + (c.width / 2 + c.params.cube.shadowOffset) + "px, " + -c.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + c.params.cube.shadowScale + ")");
                            else {
                                var g = Math.abs(a) - 90 * Math.floor(Math.abs(a) / 90),
                                    v = 1.5 - (Math.sin(2 * g * Math.PI / 360) / 2 + Math.cos(2 * g * Math.PI / 360) / 2),
                                    w = c.params.cube.shadowScale,
                                    b = c.params.cube.shadowScale / v,
                                    C = c.params.cube.shadowOffset;
                                e.transform("scale3d(" + w + ", 1, " + b + ") translate3d(0px, " + (c.height / 2 + C) + "px, " + -c.height / 2 / b + "px) rotateX(-90deg)")
                            }
                        var y = c.isSafari || c.isUiWebView ? -c.size / 2 : 0;
                        c.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (n() ? 0 : a) + "deg) rotateY(" + (n() ? -a : 0) + "deg)")
                    },
                    setTransition: function(e) {
                        c.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), c.params.cube.shadow && !n() && c.container.find(".swiper-cube-shadow").transition(e)
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var e = c.translate, a = n() ? -e + c.width / 2 : -e + c.height / 2, t = n() ? c.params.coverflow.rotate : -c.params.coverflow.rotate, r = c.params.coverflow.depth, i = 0, o = c.slides.length; o > i; i++) {
                            var s = c.slides.eq(i),
                                l = c.slidesSizesGrid[i],
                                p = s[0].swiperSlideOffset,
                                d = (a - p - l / 2) / l * c.params.coverflow.modifier,
                                u = n() ? t * d : 0,
                                m = n() ? 0 : t * d,
                                h = -r * Math.abs(d),
                                g = n() ? 0 : c.params.coverflow.stretch * d,
                                v = n() ? c.params.coverflow.stretch * d : 0;
                            Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(h) < .001 && (h = 0), Math.abs(u) < .001 && (u = 0), Math.abs(m) < .001 && (m = 0);
                            var w = "translate3d(" + v + "px," + g + "px," + h + "px)  rotateX(" + m + "deg) rotateY(" + u + "deg)";
                            if (s.transform(w), s[0].style.zIndex = -Math.abs(Math.round(d)) + 1, c.params.coverflow.slideShadows) {
                                var b = s.find(n() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
                                    C = s.find(n() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                                0 === b.length && (b = f('<div class="swiper-slide-shadow-' + (n() ? "left" : "top") + '"></div>'), s.append(b)), 0 === C.length && (C = f('<div class="swiper-slide-shadow-' + (n() ? "right" : "bottom") + '"></div>'), s.append(C)), b.length && (b[0].style.opacity = d > 0 ? d : 0), C.length && (C[0].style.opacity = -d > 0 ? -d : 0)
                            }
                        }
                        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
                            var y = c.wrapper.style;
                            y.perspectiveOrigin = a + "px 50%"
                        }
                    },
                    setTransition: function(e) {
                        c.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                    }
                }
            }, c.scrollbar = {
                init: function() {
                    if (c.params.scrollbar) {
                        var e = c.scrollbar;
                        e.track = f(c.params.scrollbar), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = f('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = n() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = c.size / c.virtualWidth, e.moveDivider = e.divider * (e.trackSize / c.size), e.dragSize = e.trackSize * e.divider, n() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.track[0].style.display = e.divider >= 1 ? "none" : "", c.params.scrollbarHide && (e.track[0].style.opacity = 0)
                    }
                },
                setTranslate: function() {
                    if (c.params.scrollbar) {
                        var e, a = c.scrollbar,
                            t = (c.translate || 0, a.dragSize);
                        e = (a.trackSize - a.dragSize) * c.progress, c.rtl && n() ? (e = -e, e > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : 0 > e ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e), n() ? (a.drag.transform("translate3d(" + e + "px, 0, 0)"), a.drag[0].style.width = t + "px") : (a.drag.transform("translate3d(0px, " + e + "px, 0)"), a.drag[0].style.height = t + "px"), c.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function() {
                            a.track[0].style.opacity = 0, a.track.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(e) {
                    c.params.scrollbar && c.scrollbar.drag.transition(e)
                }
            }, c.controller = {
                setTranslate: function(e, a) {
                    var t, n, r = c.params.control;
                    if (c.isArray(r))
                        for (var i = 0; i < r.length; i++) r[i] !== a && r[i] instanceof Swiper && (e = r[i].rtl && "horizontal" === r[i].params.direction ? -c.translate : c.translate, t = (r[i].maxTranslate() - r[i].minTranslate()) / (c.maxTranslate() - c.minTranslate()), n = (e - c.minTranslate()) * t + r[i].minTranslate(), c.params.controlInverse && (n = r[i].maxTranslate() - n), r[i].updateProgress(n), r[i].setWrapperTranslate(n, !1, c), r[i].updateActiveIndex());
                    else r instanceof Swiper && a !== r && (e = r.rtl && "horizontal" === r.params.direction ? -c.translate : c.translate, t = (r.maxTranslate() - r.minTranslate()) / (c.maxTranslate() - c.minTranslate()), n = (e - c.minTranslate()) * t + r.minTranslate(), c.params.controlInverse && (n = r.maxTranslate() - n), r.updateProgress(n), r.setWrapperTranslate(n, !1, c), r.updateActiveIndex())
                },
                setTransition: function(e, a) {
                    var t = c.params.control;
                    if (c.isArray(t))
                        for (var n = 0; n < t.length; n++) t[n] !== a && t[n] instanceof Swiper && t[n].setWrapperTransition(e, c);
                    else t instanceof Swiper && a !== t && t.setWrapperTransition(e, c)
                }
            }, c.init = function() {
                c.params.loop && c.createLoop(), c.updateContainerSize(), c.updateSlidesSize(), c.updatePagination(), c.params.scrollbar && c.scrollbar && c.scrollbar.init(), "slide" !== c.params.effect && c.effects[c.params.effect] && (c.params.loop || c.updateProgress(), c.effects[c.params.effect].setTranslate()), c.params.loop ? c.slideTo(c.params.initialSlide + c.loopedSlides, 0, !1) : c.slideTo(c.params.initialSlide, 0, !1), c.attachEvents(), c.params.observer && c.support.observer && c.initObservers(), c.params.updateOnImagesReady && c.preloadImages(), c.params.autoplay && c.startAutoplay(), c.params.keyboardControl && c.enableKeyboardControl && c.enableKeyboardControl(), c.params.mousewheelControl && c.enableMousewheelControl && c.enableMousewheelControl(), c.params.hashnav && c.hashnav && c.hashnav.init()
            }, c.destroy = function(e) {
                c.detachEvents(), c.disconnectObservers(), c.params.keyboardControl && c.disableKeyboard && c.disableKeyboard(), c.params.mousewheelControl && c.disableMousewheel && c.disableMousewheel(), c.params.onDestroy && c.params.onDestroy(), e !== !1 && (c = null)
            }, c.init(), c
        }
    }, Swiper.prototype = {
        isSafari: function() {
            var e = navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function() {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                var e = document.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
            }(),
            flexbox: function() {
                for (var e = document.createElement("div").style, a = "WebkitBox msFlexbox MsFlexbox WebkitFlex MozBox fles".split(" "), t = 0; t < a.length; t++)
                    if (a[t] in e) return !0
            }(),
            observer: function() {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            }()
        }
    }
}();
//# sourceMappingURL=framework7.min.js.map