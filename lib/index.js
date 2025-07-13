var Re = Object.defineProperty;
var He = (i, t, e) => t in i ? Re(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var y = (i, t, e) => (He(i, typeof t != "symbol" ? t + "" : t, e), e);
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function he(i, t) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(i);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(i, o).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function W(i) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? he(Object(e), !0).forEach(function(n) {
      Xe(i, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : he(Object(e)).forEach(function(n) {
      Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return i;
}
function Pt(i) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Pt = function(t) {
    return typeof t;
  } : Pt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pt(i);
}
function Xe(i, t, e) {
  return t in i ? Object.defineProperty(i, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[t] = e, i;
}
function U() {
  return U = Object.assign || function(i) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
    }
    return i;
  }, U.apply(this, arguments);
}
function Ye(i, t) {
  if (i == null)
    return {};
  var e = {}, n = Object.keys(i), o, r;
  for (r = 0; r < n.length; r++)
    o = n[r], !(t.indexOf(o) >= 0) && (e[o] = i[o]);
  return e;
}
function Ge(i, t) {
  if (i == null)
    return {};
  var e = Ye(i, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    for (o = 0; o < r.length; o++)
      n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(i, n) && (e[n] = i[n]);
  }
  return e;
}
var ze = "1.15.2";
function q(i) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(i);
}
var Z = q(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), It = q(/Edge/i), fe = q(/firefox/i), Dt = q(/safari/i) && !q(/chrome/i) && !q(/android/i), ye = q(/iP(ad|od|hone)/i), De = q(/chrome/i) && q(/android/i), _e = {
  capture: !1,
  passive: !1
};
function E(i, t, e) {
  i.addEventListener(t, e, !Z && _e);
}
function b(i, t, e) {
  i.removeEventListener(t, e, !Z && _e);
}
function Yt(i, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), i)
      try {
        if (i.matches)
          return i.matches(t);
        if (i.msMatchesSelector)
          return i.msMatchesSelector(t);
        if (i.webkitMatchesSelector)
          return i.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function je(i) {
  return i.host && i !== document && i.host.nodeType ? i.host : i.parentNode;
}
function G(i, t, e, n) {
  if (i) {
    e = e || document;
    do {
      if (t != null && (t[0] === ">" ? i.parentNode === e && Yt(i, t) : Yt(i, t)) || n && i === e)
        return i;
      if (i === e)
        break;
    } while (i = je(i));
  }
  return null;
}
var me = /\s+/g;
function B(i, t, e) {
  if (i && t)
    if (i.classList)
      i.classList[e ? "add" : "remove"](t);
    else {
      var n = (" " + i.className + " ").replace(me, " ").replace(" " + t + " ", " ");
      i.className = (n + (e ? " " + t : "")).replace(me, " ");
    }
}
function m(i, t, e) {
  var n = i && i.style;
  if (n) {
    if (e === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? e = document.defaultView.getComputedStyle(i, "") : i.currentStyle && (e = i.currentStyle), t === void 0 ? e : e[t];
    !(t in n) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), n[t] = e + (typeof e == "string" ? "" : "px");
  }
}
function ht(i, t) {
  var e = "";
  if (typeof i == "string")
    e = i;
  else
    do {
      var n = m(i, "transform");
      n && n !== "none" && (e = n + " " + e);
    } while (!t && (i = i.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(e);
}
function Ce(i, t, e) {
  if (i) {
    var n = i.getElementsByTagName(t), o = 0, r = n.length;
    if (e)
      for (; o < r; o++)
        e(n[o], o);
    return n;
  }
  return [];
}
function j() {
  var i = document.scrollingElement;
  return i || document.documentElement;
}
function I(i, t, e, n, o) {
  if (!(!i.getBoundingClientRect && i !== window)) {
    var r, a, l, s, u, h, d;
    if (i !== window && i.parentNode && i !== j() ? (r = i.getBoundingClientRect(), a = r.top, l = r.left, s = r.bottom, u = r.right, h = r.height, d = r.width) : (a = 0, l = 0, s = window.innerHeight, u = window.innerWidth, h = window.innerHeight, d = window.innerWidth), (t || e) && i !== window && (o = o || i.parentNode, !Z))
      do
        if (o && o.getBoundingClientRect && (m(o, "transform") !== "none" || e && m(o, "position") !== "static")) {
          var g = o.getBoundingClientRect();
          a -= g.top + parseInt(m(o, "border-top-width")), l -= g.left + parseInt(m(o, "border-left-width")), s = a + r.height, u = l + r.width;
          break;
        }
      while (o = o.parentNode);
    if (n && i !== window) {
      var D = ht(o || i), v = D && D.a, w = D && D.d;
      D && (a /= w, l /= v, d /= v, h /= w, s = a + h, u = l + d);
    }
    return {
      top: a,
      left: l,
      bottom: s,
      right: u,
      width: d,
      height: h
    };
  }
}
function pe(i, t, e) {
  for (var n = et(i, !0), o = I(i)[t]; n; ) {
    var r = I(n)[e], a = void 0;
    if (e === "top" || e === "left" ? a = o >= r : a = o <= r, !a)
      return n;
    if (n === j())
      break;
    n = et(n, !1);
  }
  return !1;
}
function ft(i, t, e, n) {
  for (var o = 0, r = 0, a = i.children; r < a.length; ) {
    if (a[r].style.display !== "none" && a[r] !== f.ghost && (n || a[r] !== f.dragged) && G(a[r], e.draggable, i, !1)) {
      if (o === t)
        return a[r];
      o++;
    }
    r++;
  }
  return null;
}
function se(i, t) {
  for (var e = i.lastElementChild; e && (e === f.ghost || m(e, "display") === "none" || t && !Yt(e, t)); )
    e = e.previousElementSibling;
  return e || null;
}
function R(i, t) {
  var e = 0;
  if (!i || !i.parentNode)
    return -1;
  for (; i = i.previousElementSibling; )
    i.nodeName.toUpperCase() !== "TEMPLATE" && i !== f.clone && (!t || Yt(i, t)) && e++;
  return e;
}
function ge(i) {
  var t = 0, e = 0, n = j();
  if (i)
    do {
      var o = ht(i), r = o.a, a = o.d;
      t += i.scrollLeft * r, e += i.scrollTop * a;
    } while (i !== n && (i = i.parentNode));
  return [t, e];
}
function We(i, t) {
  for (var e in i)
    if (i.hasOwnProperty(e)) {
      for (var n in t)
        if (t.hasOwnProperty(n) && t[n] === i[e][n])
          return Number(e);
    }
  return -1;
}
function et(i, t) {
  if (!i || !i.getBoundingClientRect)
    return j();
  var e = i, n = !1;
  do
    if (e.clientWidth < e.scrollWidth || e.clientHeight < e.scrollHeight) {
      var o = m(e);
      if (e.clientWidth < e.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || e.clientHeight < e.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!e.getBoundingClientRect || e === document.body)
          return j();
        if (n || t)
          return e;
        n = !0;
      }
    }
  while (e = e.parentNode);
  return j();
}
function Ve(i, t) {
  if (i && t)
    for (var e in t)
      t.hasOwnProperty(e) && (i[e] = t[e]);
  return i;
}
function qt(i, t) {
  return Math.round(i.top) === Math.round(t.top) && Math.round(i.left) === Math.round(t.left) && Math.round(i.height) === Math.round(t.height) && Math.round(i.width) === Math.round(t.width);
}
var _t;
function Se(i, t) {
  return function() {
    if (!_t) {
      var e = arguments, n = this;
      e.length === 1 ? i.call(n, e[0]) : i.apply(n, e), _t = setTimeout(function() {
        _t = void 0;
      }, t);
    }
  };
}
function $e() {
  clearTimeout(_t), _t = void 0;
}
function Te(i, t, e) {
  i.scrollLeft += t, i.scrollTop += e;
}
function Ie(i) {
  var t = window.Polymer, e = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(i).cloneNode(!0) : e ? e(i).clone(!0)[0] : i.cloneNode(!0);
}
function Oe(i, t, e) {
  var n = {};
  return Array.from(i.children).forEach(function(o) {
    var r, a, l, s;
    if (!(!G(o, t.draggable, i, !1) || o.animated || o === e)) {
      var u = I(o);
      n.left = Math.min((r = n.left) !== null && r !== void 0 ? r : 1 / 0, u.left), n.top = Math.min((a = n.top) !== null && a !== void 0 ? a : 1 / 0, u.top), n.right = Math.max((l = n.right) !== null && l !== void 0 ? l : -1 / 0, u.right), n.bottom = Math.max((s = n.bottom) !== null && s !== void 0 ? s : -1 / 0, u.bottom);
    }
  }), n.width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n;
}
var F = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function qe() {
  var i = [], t;
  return {
    captureAnimationState: function() {
      if (i = [], !!this.options.animation) {
        var n = [].slice.call(this.el.children);
        n.forEach(function(o) {
          if (!(m(o, "display") === "none" || o === f.ghost)) {
            i.push({
              target: o,
              rect: I(o)
            });
            var r = W({}, i[i.length - 1].rect);
            if (o.thisAnimationDuration) {
              var a = ht(o, !0);
              a && (r.top -= a.f, r.left -= a.e);
            }
            o.fromRect = r;
          }
        });
      }
    },
    addAnimationState: function(n) {
      i.push(n);
    },
    removeAnimationState: function(n) {
      i.splice(We(i, {
        target: n
      }), 1);
    },
    animateAll: function(n) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof n == "function" && n();
        return;
      }
      var r = !1, a = 0;
      i.forEach(function(l) {
        var s = 0, u = l.target, h = u.fromRect, d = I(u), g = u.prevFromRect, D = u.prevToRect, v = l.rect, w = ht(u, !0);
        w && (d.top -= w.f, d.left -= w.e), u.toRect = d, u.thisAnimationDuration && qt(g, d) && !qt(h, d) && // Make sure animatingRect is on line between toRect & fromRect
        (v.top - d.top) / (v.left - d.left) === (h.top - d.top) / (h.left - d.left) && (s = Ze(v, g, D, o.options)), qt(d, h) || (u.prevFromRect = h, u.prevToRect = d, s || (s = o.options.animation), o.animate(u, v, d, s)), s && (r = !0, a = Math.max(a, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, s), u.thisAnimationDuration = s);
      }), clearTimeout(t), r ? t = setTimeout(function() {
        typeof n == "function" && n();
      }, a) : typeof n == "function" && n(), i = [];
    },
    animate: function(n, o, r, a) {
      if (a) {
        m(n, "transition", ""), m(n, "transform", "");
        var l = ht(this.el), s = l && l.a, u = l && l.d, h = (o.left - r.left) / (s || 1), d = (o.top - r.top) / (u || 1);
        n.animatingX = !!h, n.animatingY = !!d, m(n, "transform", "translate3d(" + h + "px," + d + "px,0)"), this.forRepaintDummy = Ue(n), m(n, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), m(n, "transform", "translate3d(0,0,0)"), typeof n.animated == "number" && clearTimeout(n.animated), n.animated = setTimeout(function() {
          m(n, "transition", ""), m(n, "transform", ""), n.animated = !1, n.animatingX = !1, n.animatingY = !1;
        }, a);
      }
    }
  };
}
function Ue(i) {
  return i.offsetWidth;
}
function Ze(i, t, e, n) {
  return Math.sqrt(Math.pow(t.top - i.top, 2) + Math.pow(t.left - i.left, 2)) / Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) * n.animation;
}
var st = [], Ut = {
  initializeByDefault: !0
}, Ot = {
  mount: function(t) {
    for (var e in Ut)
      Ut.hasOwnProperty(e) && !(e in t) && (t[e] = Ut[e]);
    st.forEach(function(n) {
      if (n.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), st.push(t);
  },
  pluginEvent: function(t, e, n) {
    var o = this;
    this.eventCanceled = !1, n.cancel = function() {
      o.eventCanceled = !0;
    };
    var r = t + "Global";
    st.forEach(function(a) {
      e[a.pluginName] && (e[a.pluginName][r] && e[a.pluginName][r](W({
        sortable: e
      }, n)), e.options[a.pluginName] && e[a.pluginName][t] && e[a.pluginName][t](W({
        sortable: e
      }, n)));
    });
  },
  initializePlugins: function(t, e, n, o) {
    st.forEach(function(l) {
      var s = l.pluginName;
      if (!(!t.options[s] && !l.initializeByDefault)) {
        var u = new l(t, e, t.options);
        u.sortable = t, u.options = t.options, t[s] = u, U(n, u.defaults);
      }
    });
    for (var r in t.options)
      if (t.options.hasOwnProperty(r)) {
        var a = this.modifyOption(t, r, t.options[r]);
        typeof a < "u" && (t.options[r] = a);
      }
  },
  getEventProperties: function(t, e) {
    var n = {};
    return st.forEach(function(o) {
      typeof o.eventProperties == "function" && U(n, o.eventProperties.call(e[o.pluginName], t));
    }), n;
  },
  modifyOption: function(t, e, n) {
    var o;
    return st.forEach(function(r) {
      t[r.pluginName] && r.optionListeners && typeof r.optionListeners[e] == "function" && (o = r.optionListeners[e].call(t[r.pluginName], n));
    }), o;
  }
};
function Je(i) {
  var t = i.sortable, e = i.rootEl, n = i.name, o = i.targetEl, r = i.cloneEl, a = i.toEl, l = i.fromEl, s = i.oldIndex, u = i.newIndex, h = i.oldDraggableIndex, d = i.newDraggableIndex, g = i.originalEvent, D = i.putSortable, v = i.extraEventProperties;
  if (t = t || e && e[F], !!t) {
    var w, H = t.options, V = "on" + n.charAt(0).toUpperCase() + n.substr(1);
    window.CustomEvent && !Z && !It ? w = new CustomEvent(n, {
      bubbles: !0,
      cancelable: !0
    }) : (w = document.createEvent("Event"), w.initEvent(n, !0, !0)), w.to = a || e, w.from = l || e, w.item = o || e, w.clone = r, w.oldIndex = s, w.newIndex = u, w.oldDraggableIndex = h, w.newDraggableIndex = d, w.originalEvent = g, w.pullMode = D ? D.lastPutMode : void 0;
    var L = W(W({}, v), Ot.getEventProperties(n, t));
    for (var X in L)
      w[X] = L[X];
    e && e.dispatchEvent(w), H[V] && H[V].call(t, w);
  }
}
var Ke = ["evt"], N = function(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = n.evt, r = Ge(n, Ke);
  Ot.pluginEvent.bind(f)(t, e, W({
    dragEl: c,
    parentEl: S,
    ghostEl: p,
    rootEl: _,
    nextEl: lt,
    lastDownEl: Bt,
    cloneEl: C,
    cloneHidden: tt,
    dragStarted: Et,
    putSortable: O,
    activeSortable: f.active,
    originalEvent: o,
    oldIndex: dt,
    oldDraggableIndex: Ct,
    newIndex: M,
    newDraggableIndex: Q,
    hideGhostForTarget: Ne,
    unhideGhostForTarget: ke,
    cloneNowHidden: function() {
      tt = !0;
    },
    cloneNowShown: function() {
      tt = !1;
    },
    dispatchSortableEvent: function(l) {
      A({
        sortable: e,
        name: l,
        originalEvent: o
      });
    }
  }, r));
};
function A(i) {
  Je(W({
    putSortable: O,
    cloneEl: C,
    targetEl: c,
    rootEl: _,
    oldIndex: dt,
    oldDraggableIndex: Ct,
    newIndex: M,
    newDraggableIndex: Q
  }, i));
}
var c, S, p, _, lt, Bt, C, tt, dt, M, Ct, Q, Lt, O, ct = !1, Gt = !1, zt = [], rt, Y, Zt, Jt, ve, be, Et, ut, St, Tt = !1, At = !1, Mt, x, Kt = [], ie = !1, jt = [], $t = typeof document < "u", Nt = ye, Ee = It || Z ? "cssFloat" : "float", Qe = $t && !De && !ye && "draggable" in document.createElement("div"), xe = function() {
  if ($t) {
    if (Z)
      return !1;
    var i = document.createElement("x");
    return i.style.cssText = "pointer-events:auto", i.style.pointerEvents === "auto";
  }
}(), Le = function(t, e) {
  var n = m(t), o = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), r = ft(t, 0, e), a = ft(t, 1, e), l = r && m(r), s = a && m(a), u = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + I(r).width, h = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + I(a).width;
  if (n.display === "flex")
    return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (n.display === "grid")
    return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && l.float && l.float !== "none") {
    var d = l.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === d) ? "vertical" : "horizontal";
  }
  return r && (l.display === "block" || l.display === "flex" || l.display === "table" || l.display === "grid" || u >= o && n[Ee] === "none" || a && n[Ee] === "none" && u + h > o) ? "vertical" : "horizontal";
}, tn = function(t, e, n) {
  var o = n ? t.left : t.top, r = n ? t.right : t.bottom, a = n ? t.width : t.height, l = n ? e.left : e.top, s = n ? e.right : e.bottom, u = n ? e.width : e.height;
  return o === l || r === s || o + a / 2 === l + u / 2;
}, en = function(t, e) {
  var n;
  return zt.some(function(o) {
    var r = o[F].options.emptyInsertThreshold;
    if (!(!r || se(o))) {
      var a = I(o), l = t >= a.left - r && t <= a.right + r, s = e >= a.top - r && e <= a.bottom + r;
      if (l && s)
        return n = o;
    }
  }), n;
}, Ae = function(t) {
  function e(r, a) {
    return function(l, s, u, h) {
      var d = l.options.group.name && s.options.group.name && l.options.group.name === s.options.group.name;
      if (r == null && (a || d))
        return !0;
      if (r == null || r === !1)
        return !1;
      if (a && r === "clone")
        return r;
      if (typeof r == "function")
        return e(r(l, s, u, h), a)(l, s, u, h);
      var g = (a ? l : s).options.group.name;
      return r === !0 || typeof r == "string" && r === g || r.join && r.indexOf(g) > -1;
    };
  }
  var n = {}, o = t.group;
  (!o || Pt(o) != "object") && (o = {
    name: o
  }), n.name = o.name, n.checkPull = e(o.pull, !0), n.checkPut = e(o.put), n.revertClone = o.revertClone, t.group = n;
}, Ne = function() {
  !xe && p && m(p, "display", "none");
}, ke = function() {
  !xe && p && m(p, "display", "");
};
$t && !De && document.addEventListener("click", function(i) {
  if (Gt)
    return i.preventDefault(), i.stopPropagation && i.stopPropagation(), i.stopImmediatePropagation && i.stopImmediatePropagation(), Gt = !1, !1;
}, !0);
var at = function(t) {
  if (c) {
    t = t.touches ? t.touches[0] : t;
    var e = en(t.clientX, t.clientY);
    if (e) {
      var n = {};
      for (var o in t)
        t.hasOwnProperty(o) && (n[o] = t[o]);
      n.target = n.rootEl = e, n.preventDefault = void 0, n.stopPropagation = void 0, e[F]._onDragOver(n);
    }
  }
}, nn = function(t) {
  c && c.parentNode[F]._isOutsideThisEl(t.target);
};
function f(i, t) {
  if (!(i && i.nodeType && i.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(i));
  this.el = i, this.options = t = U({}, t), i[F] = this;
  var e = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(i.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Le(i, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(a, l) {
      a.setData("Text", l.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: f.supportPointer !== !1 && "PointerEvent" in window && !Dt,
    emptyInsertThreshold: 5
  };
  Ot.initializePlugins(this, i, e);
  for (var n in e)
    !(n in t) && (t[n] = e[n]);
  Ae(t);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : Qe, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? E(i, "pointerdown", this._onTapStart) : (E(i, "mousedown", this._onTapStart), E(i, "touchstart", this._onTapStart)), this.nativeDraggable && (E(i, "dragover", this), E(i, "dragenter", this)), zt.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), U(this, qe());
}
f.prototype = /** @lends Sortable.prototype */
{
  constructor: f,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (ut = null);
  },
  _getDirection: function(t, e) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, e, c) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var e = this, n = this.el, o = this.options, r = o.preventOnFilter, a = t.type, l = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (l || t).target, u = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, h = o.filter;
      if (dn(n), !c && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || o.disabled) && !u.isContentEditable && !(!this.nativeDraggable && Dt && s && s.tagName.toUpperCase() === "SELECT") && (s = G(s, o.draggable, n, !1), !(s && s.animated) && Bt !== s)) {
        if (dt = R(s), Ct = R(s, o.draggable), typeof h == "function") {
          if (h.call(this, t, s, this)) {
            A({
              sortable: e,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: n,
              fromEl: n
            }), N("filter", e, {
              evt: t
            }), r && t.cancelable && t.preventDefault();
            return;
          }
        } else if (h && (h = h.split(",").some(function(d) {
          if (d = G(u, d.trim(), n, !1), d)
            return A({
              sortable: e,
              rootEl: d,
              name: "filter",
              targetEl: s,
              fromEl: n,
              toEl: n
            }), N("filter", e, {
              evt: t
            }), !0;
        }), h)) {
          r && t.cancelable && t.preventDefault();
          return;
        }
        o.handle && !G(u, o.handle, n, !1) || this._prepareDragStart(t, l, s);
      }
    }
  },
  _prepareDragStart: function(t, e, n) {
    var o = this, r = o.el, a = o.options, l = r.ownerDocument, s;
    if (n && !c && n.parentNode === r) {
      var u = I(n);
      if (_ = r, c = n, S = c.parentNode, lt = c.nextSibling, Bt = n, Lt = a.group, f.dragged = c, rt = {
        target: c,
        clientX: (e || t).clientX,
        clientY: (e || t).clientY
      }, ve = rt.clientX - u.left, be = rt.clientY - u.top, this._lastX = (e || t).clientX, this._lastY = (e || t).clientY, c.style["will-change"] = "all", s = function() {
        if (N("delayEnded", o, {
          evt: t
        }), f.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !fe && o.nativeDraggable && (c.draggable = !0), o._triggerDragStart(t, e), A({
          sortable: o,
          name: "choose",
          originalEvent: t
        }), B(c, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(h) {
        Ce(c, h.trim(), Qt);
      }), E(l, "dragover", at), E(l, "mousemove", at), E(l, "touchmove", at), E(l, "mouseup", o._onDrop), E(l, "touchend", o._onDrop), E(l, "touchcancel", o._onDrop), fe && this.nativeDraggable && (this.options.touchStartThreshold = 4, c.draggable = !0), N("delayStart", this, {
        evt: t
      }), a.delay && (!a.delayOnTouchOnly || e) && (!this.nativeDraggable || !(It || Z))) {
        if (f.eventCanceled) {
          this._onDrop();
          return;
        }
        E(l, "mouseup", o._disableDelayedDrag), E(l, "touchend", o._disableDelayedDrag), E(l, "touchcancel", o._disableDelayedDrag), E(l, "mousemove", o._delayedDragTouchMoveHandler), E(l, "touchmove", o._delayedDragTouchMoveHandler), a.supportPointer && E(l, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(s, a.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var e = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(e.clientX - this._lastX), Math.abs(e.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    c && Qt(c), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    b(t, "mouseup", this._disableDelayedDrag), b(t, "touchend", this._disableDelayedDrag), b(t, "touchcancel", this._disableDelayedDrag), b(t, "mousemove", this._delayedDragTouchMoveHandler), b(t, "touchmove", this._delayedDragTouchMoveHandler), b(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, e) {
    e = e || t.pointerType == "touch" && t, !this.nativeDraggable || e ? this.options.supportPointer ? E(document, "pointermove", this._onTouchMove) : e ? E(document, "touchmove", this._onTouchMove) : E(document, "mousemove", this._onTouchMove) : (E(c, "dragend", this), E(_, "dragstart", this._onDragStart));
    try {
      document.selection ? Ft(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, e) {
    if (ct = !1, _ && c) {
      N("dragStarted", this, {
        evt: e
      }), this.nativeDraggable && E(document, "dragover", nn);
      var n = this.options;
      !t && B(c, n.dragClass, !1), B(c, n.ghostClass, !0), f.active = this, t && this._appendGhost(), A({
        sortable: this,
        name: "start",
        originalEvent: e
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Y) {
      this._lastX = Y.clientX, this._lastY = Y.clientY, Ne();
      for (var t = document.elementFromPoint(Y.clientX, Y.clientY), e = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(Y.clientX, Y.clientY), t !== e); )
        e = t;
      if (c.parentNode[F]._isOutsideThisEl(t), e)
        do {
          if (e[F]) {
            var n = void 0;
            if (n = e[F]._onDragOver({
              clientX: Y.clientX,
              clientY: Y.clientY,
              target: t,
              rootEl: e
            }), n && !this.options.dragoverBubble)
              break;
          }
          t = e;
        } while (e = e.parentNode);
      ke();
    }
  },
  _onTouchMove: function(t) {
    if (rt) {
      var e = this.options, n = e.fallbackTolerance, o = e.fallbackOffset, r = t.touches ? t.touches[0] : t, a = p && ht(p, !0), l = p && a && a.a, s = p && a && a.d, u = Nt && x && ge(x), h = (r.clientX - rt.clientX + o.x) / (l || 1) + (u ? u[0] - Kt[0] : 0) / (l || 1), d = (r.clientY - rt.clientY + o.y) / (s || 1) + (u ? u[1] - Kt[1] : 0) / (s || 1);
      if (!f.active && !ct) {
        if (n && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < n)
          return;
        this._onDragStart(t, !0);
      }
      if (p) {
        a ? (a.e += h - (Zt || 0), a.f += d - (Jt || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: h,
          f: d
        };
        var g = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        m(p, "webkitTransform", g), m(p, "mozTransform", g), m(p, "msTransform", g), m(p, "transform", g), Zt = h, Jt = d, Y = r;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!p) {
      var t = this.options.fallbackOnBody ? document.body : _, e = I(c, !0, Nt, !0, t), n = this.options;
      if (Nt) {
        for (x = t; m(x, "position") === "static" && m(x, "transform") === "none" && x !== document; )
          x = x.parentNode;
        x !== document.body && x !== document.documentElement ? (x === document && (x = j()), e.top += x.scrollTop, e.left += x.scrollLeft) : x = j(), Kt = ge(x);
      }
      p = c.cloneNode(!0), B(p, n.ghostClass, !1), B(p, n.fallbackClass, !0), B(p, n.dragClass, !0), m(p, "transition", ""), m(p, "transform", ""), m(p, "box-sizing", "border-box"), m(p, "margin", 0), m(p, "top", e.top), m(p, "left", e.left), m(p, "width", e.width), m(p, "height", e.height), m(p, "opacity", "0.8"), m(p, "position", Nt ? "absolute" : "fixed"), m(p, "zIndex", "100000"), m(p, "pointerEvents", "none"), f.ghost = p, t.appendChild(p), m(p, "transform-origin", ve / parseInt(p.style.width) * 100 + "% " + be / parseInt(p.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, e) {
    var n = this, o = t.dataTransfer, r = n.options;
    if (N("dragStart", this, {
      evt: t
    }), f.eventCanceled) {
      this._onDrop();
      return;
    }
    N("setupClone", this), f.eventCanceled || (C = Ie(c), C.removeAttribute("id"), C.draggable = !1, C.style["will-change"] = "", this._hideClone(), B(C, this.options.chosenClass, !1), f.clone = C), n.cloneId = Ft(function() {
      N("clone", n), !f.eventCanceled && (n.options.removeCloneOnHide || _.insertBefore(C, c), n._hideClone(), A({
        sortable: n,
        name: "clone"
      }));
    }), !e && B(c, r.dragClass, !0), e ? (Gt = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (b(document, "mouseup", n._onDrop), b(document, "touchend", n._onDrop), b(document, "touchcancel", n._onDrop), o && (o.effectAllowed = "move", r.setData && r.setData.call(n, o, c)), E(document, "drop", n), m(c, "transform", "translateZ(0)")), ct = !0, n._dragStartId = Ft(n._dragStarted.bind(n, e, t)), E(document, "selectstart", n), Et = !0, Dt && m(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var e = this.el, n = t.target, o, r, a, l = this.options, s = l.group, u = f.active, h = Lt === s, d = l.sort, g = O || u, D, v = this, w = !1;
    if (ie)
      return;
    function H(bt, Me) {
      N(bt, v, W({
        evt: t,
        isOwner: h,
        axis: D ? "vertical" : "horizontal",
        revert: a,
        dragRect: o,
        targetRect: r,
        canSort: d,
        fromSortable: g,
        target: n,
        completed: L,
        onMove: function(de, Fe) {
          return kt(_, e, c, o, de, I(de), t, Fe);
        },
        changed: X
      }, Me));
    }
    function V() {
      H("dragOverAnimationCapture"), v.captureAnimationState(), v !== g && g.captureAnimationState();
    }
    function L(bt) {
      return H("dragOverCompleted", {
        insertion: bt
      }), bt && (h ? u._hideClone() : u._showClone(v), v !== g && (B(c, O ? O.options.ghostClass : u.options.ghostClass, !1), B(c, l.ghostClass, !0)), O !== v && v !== f.active ? O = v : v === f.active && O && (O = null), g === v && (v._ignoreWhileAnimating = n), v.animateAll(function() {
        H("dragOverAnimationComplete"), v._ignoreWhileAnimating = null;
      }), v !== g && (g.animateAll(), g._ignoreWhileAnimating = null)), (n === c && !c.animated || n === e && !n.animated) && (ut = null), !l.dragoverBubble && !t.rootEl && n !== document && (c.parentNode[F]._isOutsideThisEl(t.target), !bt && at(t)), !l.dragoverBubble && t.stopPropagation && t.stopPropagation(), w = !0;
    }
    function X() {
      M = R(c), Q = R(c, l.draggable), A({
        sortable: v,
        name: "change",
        toEl: e,
        newIndex: M,
        newDraggableIndex: Q,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), n = G(n, l.draggable, e, !0), H("dragOver"), f.eventCanceled)
      return w;
    if (c.contains(t.target) || n.animated && n.animatingX && n.animatingY || v._ignoreWhileAnimating === n)
      return L(!1);
    if (Gt = !1, u && !l.disabled && (h ? d || (a = S !== _) : O === this || (this.lastPutMode = Lt.checkPull(this, u, c, t)) && s.checkPut(this, u, c, t))) {
      if (D = this._getDirection(t, n) === "vertical", o = I(c), H("dragOverValid"), f.eventCanceled)
        return w;
      if (a)
        return S = _, V(), this._hideClone(), H("revert"), f.eventCanceled || (lt ? _.insertBefore(c, lt) : _.appendChild(c)), L(!0);
      var k = se(e, l.draggable);
      if (!k || ln(t, D, this) && !k.animated) {
        if (k === c)
          return L(!1);
        if (k && e === t.target && (n = k), n && (r = I(n)), kt(_, e, c, o, n, r, t, !!n) !== !1)
          return V(), k && k.nextSibling ? e.insertBefore(c, k.nextSibling) : e.appendChild(c), S = e, X(), L(!0);
      } else if (k && an(t, D, this)) {
        var nt = ft(e, 0, l, !0);
        if (nt === c)
          return L(!1);
        if (n = nt, r = I(n), kt(_, e, c, o, n, r, t, !1) !== !1)
          return V(), e.insertBefore(c, nt), S = e, X(), L(!0);
      } else if (n.parentNode === e) {
        r = I(n);
        var z = 0, it, mt = c.parentNode !== e, P = !tn(c.animated && c.toRect || o, n.animated && n.toRect || r, D), pt = D ? "top" : "left", J = pe(n, "top", "top") || pe(c, "top", "top"), gt = J ? J.scrollTop : void 0;
        ut !== n && (it = r[pt], Tt = !1, At = !P && l.invertSwap || mt), z = sn(t, n, r, D, P ? 1 : l.swapThreshold, l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold, At, ut === n);
        var $;
        if (z !== 0) {
          var ot = R(c);
          do
            ot -= z, $ = S.children[ot];
          while ($ && (m($, "display") === "none" || $ === p));
        }
        if (z === 0 || $ === n)
          return L(!1);
        ut = n, St = z;
        var vt = n.nextElementSibling, K = !1;
        K = z === 1;
        var xt = kt(_, e, c, o, n, r, t, K);
        if (xt !== !1)
          return (xt === 1 || xt === -1) && (K = xt === 1), ie = !0, setTimeout(rn, 30), V(), K && !vt ? e.appendChild(c) : n.parentNode.insertBefore(c, K ? vt : n), J && Te(J, 0, gt - J.scrollTop), S = c.parentNode, it !== void 0 && !At && (Mt = Math.abs(it - I(n)[pt])), X(), L(!0);
      }
      if (e.contains(c))
        return L(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    b(document, "mousemove", this._onTouchMove), b(document, "touchmove", this._onTouchMove), b(document, "pointermove", this._onTouchMove), b(document, "dragover", at), b(document, "mousemove", at), b(document, "touchmove", at);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    b(t, "mouseup", this._onDrop), b(t, "touchend", this._onDrop), b(t, "pointerup", this._onDrop), b(t, "touchcancel", this._onDrop), b(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var e = this.el, n = this.options;
    if (M = R(c), Q = R(c, n.draggable), N("drop", this, {
      evt: t
    }), S = c && c.parentNode, M = R(c), Q = R(c, n.draggable), f.eventCanceled) {
      this._nulling();
      return;
    }
    ct = !1, At = !1, Tt = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), oe(this.cloneId), oe(this._dragStartId), this.nativeDraggable && (b(document, "drop", this), b(e, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Dt && m(document.body, "user-select", ""), m(c, "transform", ""), t && (Et && (t.cancelable && t.preventDefault(), !n.dropBubble && t.stopPropagation()), p && p.parentNode && p.parentNode.removeChild(p), (_ === S || O && O.lastPutMode !== "clone") && C && C.parentNode && C.parentNode.removeChild(C), c && (this.nativeDraggable && b(c, "dragend", this), Qt(c), c.style["will-change"] = "", Et && !ct && B(c, O ? O.options.ghostClass : this.options.ghostClass, !1), B(c, this.options.chosenClass, !1), A({
      sortable: this,
      name: "unchoose",
      toEl: S,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), _ !== S ? (M >= 0 && (A({
      rootEl: S,
      name: "add",
      toEl: S,
      fromEl: _,
      originalEvent: t
    }), A({
      sortable: this,
      name: "remove",
      toEl: S,
      originalEvent: t
    }), A({
      rootEl: S,
      name: "sort",
      toEl: S,
      fromEl: _,
      originalEvent: t
    }), A({
      sortable: this,
      name: "sort",
      toEl: S,
      originalEvent: t
    })), O && O.save()) : M !== dt && M >= 0 && (A({
      sortable: this,
      name: "update",
      toEl: S,
      originalEvent: t
    }), A({
      sortable: this,
      name: "sort",
      toEl: S,
      originalEvent: t
    })), f.active && ((M == null || M === -1) && (M = dt, Q = Ct), A({
      sortable: this,
      name: "end",
      toEl: S,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    N("nulling", this), _ = c = S = p = lt = C = Bt = tt = rt = Y = Et = M = Q = dt = Ct = ut = St = O = Lt = f.dragged = f.ghost = f.clone = f.active = null, jt.forEach(function(t) {
      t.checked = !0;
    }), jt.length = Zt = Jt = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        c && (this._onDragOver(t), on(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var t = [], e, n = this.el.children, o = 0, r = n.length, a = this.options; o < r; o++)
      e = n[o], G(e, a.draggable, this.el, !1) && t.push(e.getAttribute(a.dataIdAttr) || cn(e));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, e) {
    var n = {}, o = this.el;
    this.toArray().forEach(function(r, a) {
      var l = o.children[a];
      G(l, this.options.draggable, o, !1) && (n[r] = l);
    }, this), e && this.captureAnimationState(), t.forEach(function(r) {
      n[r] && (o.removeChild(n[r]), o.appendChild(n[r]));
    }), e && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(t, e) {
    return G(t, e || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, e) {
    var n = this.options;
    if (e === void 0)
      return n[t];
    var o = Ot.modifyOption(this, t, e);
    typeof o < "u" ? n[t] = o : n[t] = e, t === "group" && Ae(n);
  },
  /**
   * Destroy
   */
  destroy: function() {
    N("destroy", this);
    var t = this.el;
    t[F] = null, b(t, "mousedown", this._onTapStart), b(t, "touchstart", this._onTapStart), b(t, "pointerdown", this._onTapStart), this.nativeDraggable && (b(t, "dragover", this), b(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(e) {
      e.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), zt.splice(zt.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!tt) {
      if (N("hideClone", this), f.eventCanceled)
        return;
      m(C, "display", "none"), this.options.removeCloneOnHide && C.parentNode && C.parentNode.removeChild(C), tt = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (tt) {
      if (N("showClone", this), f.eventCanceled)
        return;
      c.parentNode == _ && !this.options.group.revertClone ? _.insertBefore(C, c) : lt ? _.insertBefore(C, lt) : _.appendChild(C), this.options.group.revertClone && this.animate(c, C), m(C, "display", ""), tt = !1;
    }
  }
};
function on(i) {
  i.dataTransfer && (i.dataTransfer.dropEffect = "move"), i.cancelable && i.preventDefault();
}
function kt(i, t, e, n, o, r, a, l) {
  var s, u = i[F], h = u.options.onMove, d;
  return window.CustomEvent && !Z && !It ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = i, s.dragged = e, s.draggedRect = n, s.related = o || t, s.relatedRect = r || I(t), s.willInsertAfter = l, s.originalEvent = a, i.dispatchEvent(s), h && (d = h.call(u, s, a)), d;
}
function Qt(i) {
  i.draggable = !1;
}
function rn() {
  ie = !1;
}
function an(i, t, e) {
  var n = I(ft(e.el, 0, e.options, !0)), o = Oe(e.el, e.options, p), r = 10;
  return t ? i.clientX < o.left - r || i.clientY < n.top && i.clientX < n.right : i.clientY < o.top - r || i.clientY < n.bottom && i.clientX < n.left;
}
function ln(i, t, e) {
  var n = I(se(e.el, e.options.draggable)), o = Oe(e.el, e.options, p), r = 10;
  return t ? i.clientX > o.right + r || i.clientY > n.bottom && i.clientX > n.left : i.clientY > o.bottom + r || i.clientX > n.right && i.clientY > n.top;
}
function sn(i, t, e, n, o, r, a, l) {
  var s = n ? i.clientY : i.clientX, u = n ? e.height : e.width, h = n ? e.top : e.left, d = n ? e.bottom : e.right, g = !1;
  if (!a) {
    if (l && Mt < u * o) {
      if (!Tt && (St === 1 ? s > h + u * r / 2 : s < d - u * r / 2) && (Tt = !0), Tt)
        g = !0;
      else if (St === 1 ? s < h + Mt : s > d - Mt)
        return -St;
    } else if (s > h + u * (1 - o) / 2 && s < d - u * (1 - o) / 2)
      return un(t);
  }
  return g = g || a, g && (s < h + u * r / 2 || s > d - u * r / 2) ? s > h + u / 2 ? 1 : -1 : 0;
}
function un(i) {
  return R(c) < R(i) ? 1 : -1;
}
function cn(i) {
  for (var t = i.tagName + i.className + i.src + i.href + i.textContent, e = t.length, n = 0; e--; )
    n += t.charCodeAt(e);
  return n.toString(36);
}
function dn(i) {
  jt.length = 0;
  for (var t = i.getElementsByTagName("input"), e = t.length; e--; ) {
    var n = t[e];
    n.checked && jt.push(n);
  }
}
function Ft(i) {
  return setTimeout(i, 0);
}
function oe(i) {
  return clearTimeout(i);
}
$t && E(document, "touchmove", function(i) {
  (f.active || ct) && i.cancelable && i.preventDefault();
});
f.utils = {
  on: E,
  off: b,
  css: m,
  find: Ce,
  is: function(t, e) {
    return !!G(t, e, t, !1);
  },
  extend: Ve,
  throttle: Se,
  closest: G,
  toggleClass: B,
  clone: Ie,
  index: R,
  nextTick: Ft,
  cancelNextTick: oe,
  detectDirection: Le,
  getChild: ft
};
f.get = function(i) {
  return i[F];
};
f.mount = function() {
  for (var i = arguments.length, t = new Array(i), e = 0; e < i; e++)
    t[e] = arguments[e];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(n) {
    if (!n.prototype || !n.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));
    n.utils && (f.utils = W(W({}, f.utils), n.utils)), Ot.mount(n);
  });
};
f.create = function(i, t) {
  return new f(i, t);
};
f.version = ze;
var T = [], wt, re, ae = !1, te, ee, Wt, yt;
function hn() {
  function i() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return i.prototype = {
    dragStarted: function(e) {
      var n = e.originalEvent;
      this.sortable.nativeDraggable ? E(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? E(document, "pointermove", this._handleFallbackAutoScroll) : n.touches ? E(document, "touchmove", this._handleFallbackAutoScroll) : E(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(e) {
      var n = e.originalEvent;
      !this.options.dragOverBubble && !n.rootEl && this._handleAutoScroll(n);
    },
    drop: function() {
      this.sortable.nativeDraggable ? b(document, "dragover", this._handleAutoScroll) : (b(document, "pointermove", this._handleFallbackAutoScroll), b(document, "touchmove", this._handleFallbackAutoScroll), b(document, "mousemove", this._handleFallbackAutoScroll)), we(), Rt(), $e();
    },
    nulling: function() {
      Wt = re = wt = ae = yt = te = ee = null, T.length = 0;
    },
    _handleFallbackAutoScroll: function(e) {
      this._handleAutoScroll(e, !0);
    },
    _handleAutoScroll: function(e, n) {
      var o = this, r = (e.touches ? e.touches[0] : e).clientX, a = (e.touches ? e.touches[0] : e).clientY, l = document.elementFromPoint(r, a);
      if (Wt = e, n || this.options.forceAutoScrollFallback || It || Z || Dt) {
        ne(e, this.options, l, n);
        var s = et(l, !0);
        ae && (!yt || r !== te || a !== ee) && (yt && we(), yt = setInterval(function() {
          var u = et(document.elementFromPoint(r, a), !0);
          u !== s && (s = u, Rt()), ne(e, o.options, u, n);
        }, 10), te = r, ee = a);
      } else {
        if (!this.options.bubbleScroll || et(l, !0) === j()) {
          Rt();
          return;
        }
        ne(e, this.options, et(l, !1), !1);
      }
    }
  }, U(i, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Rt() {
  T.forEach(function(i) {
    clearInterval(i.pid);
  }), T = [];
}
function we() {
  clearInterval(yt);
}
var ne = Se(function(i, t, e, n) {
  if (t.scroll) {
    var o = (i.touches ? i.touches[0] : i).clientX, r = (i.touches ? i.touches[0] : i).clientY, a = t.scrollSensitivity, l = t.scrollSpeed, s = j(), u = !1, h;
    re !== e && (re = e, Rt(), wt = t.scroll, h = t.scrollFn, wt === !0 && (wt = et(e, !0)));
    var d = 0, g = wt;
    do {
      var D = g, v = I(D), w = v.top, H = v.bottom, V = v.left, L = v.right, X = v.width, k = v.height, nt = void 0, z = void 0, it = D.scrollWidth, mt = D.scrollHeight, P = m(D), pt = D.scrollLeft, J = D.scrollTop;
      D === s ? (nt = X < it && (P.overflowX === "auto" || P.overflowX === "scroll" || P.overflowX === "visible"), z = k < mt && (P.overflowY === "auto" || P.overflowY === "scroll" || P.overflowY === "visible")) : (nt = X < it && (P.overflowX === "auto" || P.overflowX === "scroll"), z = k < mt && (P.overflowY === "auto" || P.overflowY === "scroll"));
      var gt = nt && (Math.abs(L - o) <= a && pt + X < it) - (Math.abs(V - o) <= a && !!pt), $ = z && (Math.abs(H - r) <= a && J + k < mt) - (Math.abs(w - r) <= a && !!J);
      if (!T[d])
        for (var ot = 0; ot <= d; ot++)
          T[ot] || (T[ot] = {});
      (T[d].vx != gt || T[d].vy != $ || T[d].el !== D) && (T[d].el = D, T[d].vx = gt, T[d].vy = $, clearInterval(T[d].pid), (gt != 0 || $ != 0) && (u = !0, T[d].pid = setInterval((function() {
        n && this.layer === 0 && f.active._onTouchMove(Wt);
        var vt = T[this.layer].vy ? T[this.layer].vy * l : 0, K = T[this.layer].vx ? T[this.layer].vx * l : 0;
        typeof h == "function" && h.call(f.dragged.parentNode[F], K, vt, i, Wt, T[this.layer].el) !== "continue" || Te(T[this.layer].el, K, vt);
      }).bind({
        layer: d
      }), 24))), d++;
    } while (t.bubbleScroll && g !== s && (g = et(g, !1)));
    ae = u;
  }
}, 30), Pe = function(t) {
  var e = t.originalEvent, n = t.putSortable, o = t.dragEl, r = t.activeSortable, a = t.dispatchSortableEvent, l = t.hideGhostForTarget, s = t.unhideGhostForTarget;
  if (e) {
    var u = n || r;
    l();
    var h = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e, d = document.elementFromPoint(h.clientX, h.clientY);
    s(), u && !u.el.contains(d) && (a("spill"), this.onSpill({
      dragEl: o,
      putSortable: n
    }));
  }
};
function ue() {
}
ue.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var e = t.oldDraggableIndex;
    this.startIndex = e;
  },
  onSpill: function(t) {
    var e = t.dragEl, n = t.putSortable;
    this.sortable.captureAnimationState(), n && n.captureAnimationState();
    var o = ft(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(e, o) : this.sortable.el.appendChild(e), this.sortable.animateAll(), n && n.animateAll();
  },
  drop: Pe
};
U(ue, {
  pluginName: "revertOnSpill"
});
function ce() {
}
ce.prototype = {
  onSpill: function(t) {
    var e = t.dragEl, n = t.putSortable, o = n || this.sortable;
    o.captureAnimationState(), e.parentNode && e.parentNode.removeChild(e), o.animateAll();
  },
  drop: Pe
};
U(ce, {
  pluginName: "removeOnSpill"
});
f.mount(new hn());
f.mount(ce, ue);
class fn {
  constructor() {
    y(this, "eventTarget", new EventTarget());
  }
  on(t, e) {
    this.eventTarget.addEventListener(t, (n) => {
      e(n.detail);
    });
  }
  emit(t, e) {
    const n = new CustomEvent(t, {
      detail: e
    });
    this.eventTarget.dispatchEvent(n);
  }
}
const mn = '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-grabber"><path d="M10 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5-9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>', pn = '<svg width="12" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>', gn = '<svg width="12" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>', vn = '<svg width="12" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>', bn = {
  maxLevel: -1
};
class En {
  constructor(t) {
    y(this, "button", document.createElement("button"));
    this.button.innerHTML = t, this.button.classList.add("btn", "btn-dark");
  }
  onClick(t) {
    this.button.addEventListener("click", t);
  }
  getElement() {
    return this.button;
  }
  getParemtElement() {
    return this.button.closest(".list-group-item");
  }
}
class wn {
  constructor(t) {
    y(this, "button", document.createElement("button"));
    this.button.innerHTML = t, this.button.classList.add("btn", "btn-danger");
  }
  onClick(t) {
    this.button.addEventListener("click", t);
  }
  getElement() {
    return this.button;
  }
  getParemtElement() {
    return this.button.closest(".list-group-item");
  }
}
class yn {
  constructor(t) {
    y(this, "button", document.createElement("button"));
    this.button.innerHTML = t, this.button.classList.add("btn", "btn-secondary");
  }
  onClick(t) {
    this.button.addEventListener("click", t);
  }
  getElement() {
    return this.button;
  }
  getParemtElement() {
    return this.button.closest(".list-group-item");
  }
}
class Dn {
  constructor(t) {
    y(this, "item");
    y(this, "container", document.createElement("div"));
    y(this, "eventEmitter", new fn());
    y(this, "buttons", {
      link: new yn(vn),
      edit: new En(pn),
      delete: new wn(gn)
    });
    this.item = t, this.setEvents();
  }
  setEvents() {
    this.buttons.delete.onClick(() => {
      this.eventEmitter.emit("clickDelete", { item: this.item });
    }), this.buttons.edit.onClick(() => {
      this.eventEmitter.emit("clickEdit", { item: this.item });
    }), this.buttons.link.onClick(() => {
      this.eventEmitter.emit("clickLink", { item: this.item });
    });
  }
  onClickDelete(t) {
    this.eventEmitter.on("clickDelete", t);
  }
  onClickEdit(t) {
    this.eventEmitter.on("clickEdit", t);
  }
  onClickLink(t) {
    this.eventEmitter.on("clickLink", t);
  }
  mount() {
    this.container.classList.add("btn-group", "btn-group-sm"), this.container.append(this.buttons.link.getElement()), this.container.append(this.buttons.edit.getElement()), this.container.append(this.buttons.delete.getElement());
  }
  getElement() {
    return this.container;
  }
}
class Be {
  constructor() {
    y(this, "items", []);
  }
  insertAt(t, e) {
    this.items.splice(e, 0, t);
  }
  add(t, e = -1) {
    let n = Math.trunc(e);
    if (n >= 0 && n < this.items.length) {
      this.insertAt(t, n);
      return;
    }
    this.items.push(t);
  }
  getItems() {
    return this.items;
  }
  empty() {
    this.items = [];
  }
  getLength() {
    return this.items.length;
  }
}
function _n(i) {
  let t = { text: "", href: "", icon: "", tooltip: "" };
  for (let e in i)
    typeof i[e] == "string" && (t[e] = i[e]);
  return t;
}
function Cn(i) {
  let t = { text: "", href: "", icon: "", tooltip: "" };
  for (let e in i)
    typeof i[e] == "string" && (t[e] = i[e]);
  return t;
}
function Ht(i, t) {
  for (let e in t)
    i.dataset[e] = t[e];
}
function Xt(i, t = -1) {
  i.ariaLevel = `${t}`;
  let e = i.children;
  for (let n = 0; n < e.length; n++) {
    let o = t;
    e[n].matches(".list-group-item") && (o = o + 1), Xt(e[n], o);
  }
}
function le(i, t) {
  let e = i.querySelectorAll(".list-group-item"), n = t;
  for (let o = 0; o < e.length; o++) {
    let r = le(e[o], t + 1);
    n = Math.max(n, r);
  }
  return n;
}
class Vt {
  constructor(t) {
    y(this, "element", document.createElement("div"));
    y(this, "dataset");
    y(this, "collection");
    y(this, "options", { sortableClassname: "nested-sortable" });
    y(this, "listenerEditButton", () => {
    });
    y(this, "listenerDeleteButton", () => {
    });
    y(this, "listenerLinkButton", () => {
    });
    y(this, "buttonGroup");
    this.collection = new Be(), this.buttonGroup = new Dn(this), this.element.classList.add("list-group-item"), this.dataset = _n(t);
  }
  setOptions(t) {
    this.options = t;
  }
  setDataset(t) {
    this.dataset = t;
  }
  getDataset() {
    return this.dataset;
  }
  setListenerLinkButton(t) {
    this.listenerLinkButton = t;
  }
  setListenerEditButton(t) {
    this.listenerEditButton = t;
  }
  setListenerDeleteButton(t) {
    this.listenerDeleteButton = t;
  }
  add(t) {
    this.collection.add(t);
  }
  remove() {
    this.getElement().remove();
  }
  updateUI(t) {
    let e = this.element.querySelector(".item-text"), n = this.element.querySelector("i");
    e != null && (e.innerHTML = t.text), n != null && (n.className = t.icon);
  }
  addArray(t) {
    t.forEach((e) => {
      let n = new Vt(e);
      n.setOptions(this.options), n.setListenerLinkButton(this.listenerLinkButton), n.setListenerDeleteButton(this.listenerDeleteButton), n.setListenerEditButton(this.listenerEditButton), n.buttonGroup.onClickLink(this.listenerLinkButton), n.buttonGroup.onClickDelete(this.listenerDeleteButton), n.buttonGroup.onClickEdit(this.listenerEditButton), Ht(n.getElement(), n.getDataset()), e.children != null && e.children.length > 0 && n.addArray(e.children), this.add(n);
    });
  }
  createHandler() {
    let t = document.createElement("span");
    return t.style.mixBlendMode = "difference", t.style.filter = "invert(1) grayscale(1)", t.className = "jme-handle", t.innerHTML = mn, t;
  }
  mount() {
    let t = document.createElement("div"), e = document.createElement("span"), n = document.createElement("i");
    n.className = this.dataset.icon;
    let o = this.createHandler(), r = document.createElement("span");
    r.className = "item-text", r.style.paddingLeft = "5px", r.innerHTML = this.dataset.text;
    let a = document.createElement("div");
    t.className = "d-flex w-100 justify-content-between align-items-center", e.append(o), e.append(n), e.append(r), a.classList.add("list-group", this.options.sortableClassname), t.append(e), this.buttonGroup.mount(), t.append(this.buttonGroup.getElement()), this.element.append(t), this.collection.getItems().forEach((l) => {
      l.mount(), a.appendChild(l.getElement());
    }), this.element.append(a);
  }
  getElement() {
    return this.element;
  }
}
class Sn {
  constructor(t) {
    y(this, "element");
    y(this, "id");
    y(this, "collection");
    y(this, "options", { sortableClassname: "nested-sortable" });
    const e = document.getElementById(t);
    if (e == null)
      throw Error(`Error: Element with id="${t}" does not exists.`);
    this.id = t, this.element = e, this.collection = new Be();
  }
  setOptions(t) {
    this.options = t;
  }
  add(t, e = -1) {
    this.collection.add(t, e);
  }
  empty() {
    this.collection.empty();
    let t = this.element;
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  }
  mount() {
    this.element.classList.add("list-group", this.options.sortableClassname), this.collection.getItems().forEach((t) => {
      t.setOptions(this.options), t.mount(), this.element.append(t.getElement());
    });
  }
  getElement() {
    return this.element;
  }
}
class On {
  constructor(t, e = bn) {
    y(this, "menuContainer");
    y(this, "currentItem", null);
    y(this, "listenerDeleteButton");
    y(this, "listenerEditButton");
    y(this, "listenerDragEnd");
    y(this, "sortableClassname", "");
    y(this, "options");
    this.menuContainer = new Sn(t), this.sortableClassname = `${t}-nested-sortable`, this.options = e, this.menuContainer.setOptions({ sortableClassname: this.sortableClassname }), this.listenerDeleteButton = () => {
    }, this.listenerEditButton = () => {
    }, this.listenerDragEnd = () => {
    };
  }
  add(t) {
    let e = new Vt(t);
    e.setOptions({ sortableClassname: this.sortableClassname }), e.setListenerEditButton(this.listenerEditButton), e.buttonGroup.onClickEdit(this.listenerEditButton), e.setListenerDeleteButton(this.listenerDeleteButton), e.buttonGroup.onClickDelete(this.listenerDeleteButton), Ht(e.getElement(), t), e.getElement().ariaLevel = "0", this.menuContainer.add(e), e.mount(), this.makeItemSortable(e), this.menuContainer.getElement().append(e.getElement());
  }
  edit(t) {
    this.currentItem = t;
  }
  update(t) {
    this.currentItem != null && (this.currentItem.setDataset(t), Ht(this.currentItem.getElement(), t), this.currentItem.updateUI(t), this.currentItem = null);
  }
  setArray(t) {
    t.forEach((e) => {
      let n = new Vt(e);
      n.setOptions({ sortableClassname: this.sortableClassname }), n.setListenerDeleteButton(this.listenerDeleteButton), n.setListenerEditButton(this.listenerEditButton), n.buttonGroup.onClickDelete(this.listenerDeleteButton), n.buttonGroup.onClickEdit(this.listenerEditButton), Ht(n.getElement(), n.getDataset()), Array.isArray(e.children) && e.children.length > 0 && n.addArray(e.children), this.menuContainer.add(n);
    });
  }
  getString() {
    let t = this.htmlToJson(this.menuContainer.getElement());
    return JSON.stringify(t);
  }
  htmlToJson(t) {
    let e = t.children, n = [];
    for (var o = 0; o < e.length; o++) {
      let r = e.item(o), a = Cn(r.dataset), l = r.lastElementChild;
      if (a.children = [], l.childElementCount > 0) {
        let s = this.htmlToJson(l);
        a.children = s;
      }
      n.push(a);
    }
    return n;
  }
  onClickEdit(t) {
    this.listenerEditButton = t;
  }
  onClickDelete(t) {
    this.listenerDeleteButton = t;
  }
  onDragEnd(t) {
    this.listenerDragEnd = t;
  }
  empty() {
    this.menuContainer.empty();
  }
  mount() {
    this.menuContainer.mount(), this.makeItSortable(), Xt(this.menuContainer.getElement());
  }
  makeItSortable() {
    for (var t = [].slice.call(document.querySelectorAll("." + this.sortableClassname)), e = 0; e < t.length; e++)
      new f(t[e], {
        handle: ".jme-handle",
        ghostClass: "ghost",
        group: {
          name: "nested",
          pull: (n, o, r) => {
            if (this.options.maxLevel < 0)
              return !0;
            let a = parseInt(n.el.ariaLevel);
            return le(r, 0) + a < this.options.maxLevel;
          }
        },
        onEnd: (n) => {
          Xt(this.menuContainer.getElement()), this.listenerDragEnd(n);
        },
        animation: 150,
        fallbackOnBody: !0,
        swapThreshold: 0.65
      });
  }
  makeItemSortable(t) {
    let e = t.getElement().querySelector("." + this.sortableClassname);
    e != null && new f(e, {
      handle: ".jme-handle",
      ghostClass: "ghost",
      group: {
        name: "nested",
        pull: (n, o, r) => {
          if (this.options.maxLevel < 0)
            return !0;
          let a = parseInt(n.el.ariaLevel);
          return le(r, 0) + a < this.options.maxLevel;
        }
      },
      onEnd: (n) => {
        Xt(this.menuContainer.getElement());
      },
      animation: 150,
      fallbackOnBody: !0,
      swapThreshold: 0.65
    });
  }
}
export {
  On as MenuEditor
};
