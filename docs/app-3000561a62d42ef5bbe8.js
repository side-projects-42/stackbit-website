(self.webpackChunkstackbit_docs = self.webpackChunkstackbit_docs || []).push([
  [143],
  {
    1506: function (t) {
      (t.exports = function (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    7154: function (t) {
      function e() {
        return (
          (t.exports = e =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0),
          e.apply(this, arguments)
        );
      }
      (t.exports = e),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    5354: function (t, e, n) {
      var r = n(9489);
      (t.exports = function (t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          r(t, e);
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    5318: function (t) {
      (t.exports = function (t) {
        return t && t.__esModule ? t : { default: t };
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    7316: function (t) {
      (t.exports = function (t, e) {
        if (null == t) return {};
        var n,
          r,
          o = {},
          a = Object.keys(t);
        for (r = 0; r < a.length; r++)
          (n = a[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    9489: function (t) {
      function e(n, r) {
        return (
          (t.exports = e =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0),
          e(n, r)
        );
      }
      (t.exports = e),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    2393: function (t, e) {
      "use strict";
      var n =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          },
        r = function (t) {
          var e = t.location,
            n = e.search,
            r = e.hash,
            o = e.href,
            a = e.origin,
            u = e.protocol,
            s = e.host,
            c = e.hostname,
            l = e.port,
            p = t.location.pathname;
          !p && o && i && (p = new URL(o).pathname);
          return {
            pathname: encodeURI(decodeURI(p)),
            search: n,
            hash: r,
            href: o,
            origin: a,
            protocol: u,
            host: s,
            hostname: c,
            port: l,
            state: t.history.state,
            key: (t.history.state && t.history.state.key) || "initial",
          };
        },
        o = function (t, e) {
          var o = [],
            a = r(t),
            i = !1,
            u = function () {};
          return {
            get location() {
              return a;
            },
            get transitioning() {
              return i;
            },
            _onTransitionComplete: function () {
              (i = !1), u();
            },
            listen: function (e) {
              o.push(e);
              var n = function () {
                (a = r(t)), e({ location: a, action: "POP" });
              };
              return (
                t.addEventListener("popstate", n),
                function () {
                  t.removeEventListener("popstate", n),
                    (o = o.filter(function (t) {
                      return t !== e;
                    }));
                }
              );
            },
            navigate: function (e) {
              var s =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                c = s.state,
                l = s.replace,
                p = void 0 !== l && l;
              if ("number" == typeof e) t.history.go(e);
              else {
                c = n({}, c, { key: Date.now() + "" });
                try {
                  i || p
                    ? t.history.replaceState(c, null, e)
                    : t.history.pushState(c, null, e);
                } catch (h) {
                  t.location[p ? "replace" : "assign"](e);
                }
              }
              (a = r(t)), (i = !0);
              var f = new Promise(function (t) {
                return (u = t);
              });
              return (
                o.forEach(function (t) {
                  return t({ location: a, action: "PUSH" });
                }),
                f
              );
            },
          };
        },
        a = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "/",
            e = t.indexOf("?"),
            n = {
              pathname: e > -1 ? t.substr(0, e) : t,
              search: e > -1 ? t.substr(e) : "",
            },
            r = 0,
            o = [n],
            a = [null];
          return {
            get location() {
              return o[r];
            },
            addEventListener: function (t, e) {},
            removeEventListener: function (t, e) {},
            history: {
              get entries() {
                return o;
              },
              get index() {
                return r;
              },
              get state() {
                return a[r];
              },
              pushState: function (t, e, n) {
                var i = n.split("?"),
                  u = i[0],
                  s = i[1],
                  c = void 0 === s ? "" : s;
                r++,
                  o.push({ pathname: u, search: c.length ? "?" + c : c }),
                  a.push(t);
              },
              replaceState: function (t, e, n) {
                var i = n.split("?"),
                  u = i[0],
                  s = i[1],
                  c = void 0 === s ? "" : s;
                (o[r] = { pathname: u, search: c }), (a[r] = t);
              },
              go: function (t) {
                var e = r + t;
                e < 0 || e > a.length - 1 || (r = e);
              },
            },
          };
        },
        i = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        u = o(i ? window : a()),
        s = u.navigate;
      e.V5 = u;
    },
    2098: function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.shallowCompare =
          e.validateRedirect =
          e.insertParams =
          e.resolve =
          e.match =
          e.pick =
          e.startsWith =
            void 0);
      var r,
        o = n(1143),
        a = (r = o) && r.__esModule ? r : { default: r };
      var i = function (t, e) {
          return t.substr(0, e.length) === e;
        },
        u = function (t, e) {
          for (
            var n = void 0,
              r = void 0,
              o = e.split("?")[0],
              i = h(o),
              u = "" === i[0],
              c = f(t),
              p = 0,
              d = c.length;
            p < d;
            p++
          ) {
            var m = !1,
              g = c[p].route;
            if (g.default) r = { route: g, params: {}, uri: e };
            else {
              for (
                var w = h(g.path),
                  y = {},
                  b = Math.max(i.length, w.length),
                  P = 0;
                P < b;
                P++
              ) {
                var E = w[P],
                  S = i[P];
                if (l(E)) {
                  y[E.slice(1) || "*"] = i
                    .slice(P)
                    .map(decodeURIComponent)
                    .join("/");
                  break;
                }
                if (void 0 === S) {
                  m = !0;
                  break;
                }
                var C = s.exec(E);
                if (C && !u) {
                  -1 === v.indexOf(C[1]) || (0, a.default)(!1);
                  var _ = decodeURIComponent(S);
                  y[C[1]] = _;
                } else if (E !== S) {
                  m = !0;
                  break;
                }
              }
              if (!m) {
                n = { route: g, params: y, uri: "/" + i.slice(0, P).join("/") };
                break;
              }
            }
          }
          return n || r || null;
        },
        s = /^:(.+)/,
        c = function (t) {
          return s.test(t);
        },
        l = function (t) {
          return t && "*" === t[0];
        },
        p = function (t, e) {
          return {
            route: t,
            score: t.default
              ? 0
              : h(t.path).reduce(function (t, e) {
                  return (
                    (t += 4),
                    !(function (t) {
                      return "" === t;
                    })(e)
                      ? c(e)
                        ? (t += 2)
                        : l(e)
                        ? (t -= 5)
                        : (t += 3)
                      : (t += 1),
                    t
                  );
                }, 0),
            index: e,
          };
        },
        f = function (t) {
          return t.map(p).sort(function (t, e) {
            return t.score < e.score
              ? 1
              : t.score > e.score
              ? -1
              : t.index - e.index;
          });
        },
        h = function (t) {
          return t.replace(/(^\/+|\/+$)/g, "").split("/");
        },
        d = function (t) {
          for (
            var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          return (
            t +
            ((n = n.filter(function (t) {
              return t && t.length > 0;
            })) && n.length > 0
              ? "?" + n.join("&")
              : "")
          );
        },
        v = ["uri", "path"];
      (e.startsWith = i),
        (e.pick = u),
        (e.match = function (t, e) {
          return u([{ path: t }], e);
        }),
        (e.resolve = function (t, e) {
          if (i(t, "/")) return t;
          var n = t.split("?"),
            r = n[0],
            o = n[1],
            a = e.split("?")[0],
            u = h(r),
            s = h(a);
          if ("" === u[0]) return d(a, o);
          if (!i(u[0], ".")) {
            var c = s.concat(u).join("/");
            return d(("/" === a ? "" : "/") + c, o);
          }
          for (var l = s.concat(u), p = [], f = 0, v = l.length; f < v; f++) {
            var m = l[f];
            ".." === m ? p.pop() : "." !== m && p.push(m);
          }
          return d("/" + p.join("/"), o);
        }),
        (e.insertParams = function (t, e) {
          var n = t.split("?"),
            r = n[0],
            o = n[1],
            a = void 0 === o ? "" : o,
            i =
              "/" +
              h(r)
                .map(function (t) {
                  var n = s.exec(t);
                  return n ? e[n[1]] : t;
                })
                .join("/"),
            u = e.location,
            c = (u = void 0 === u ? {} : u).search,
            l = (void 0 === c ? "" : c).split("?")[1] || "";
          return (i = d(i, a, l));
        }),
        (e.validateRedirect = function (t, e) {
          var n = function (t) {
            return c(t);
          };
          return (
            h(t).filter(n).sort().join("/") === h(e).filter(n).sort().join("/")
          );
        }),
        (e.shallowCompare = function (t, e) {
          var n = Object.keys(t);
          return (
            n.length === Object.keys(e).length &&
            n.every(function (n) {
              return e.hasOwnProperty(n) && t[n] === e[n];
            })
          );
        });
    },
    4564: function (t) {
      "use strict";
      var e = /[|\\{}()[\]^$+*?.]/g;
      t.exports = function (t) {
        if ("string" != typeof t) throw new TypeError("Expected a string");
        return t.replace(e, "\\$&");
      };
    },
    6494: function (t) {
      "use strict";
      t.exports = Object.assign;
    },
    8037: function (t, e, n) {
      "use strict";
      var r = n(5318);
      (e.dq = v),
        (e.mc = function (t) {
          return v(t, m());
        }),
        (e.c4 = e.ZP = void 0);
      var o = r(n(7316)),
        a = r(n(1506)),
        i = r(n(5354)),
        u = r(n(7154)),
        s = r(n(5697)),
        c = r(n(7294)),
        l = n(9499),
        p = n(2098),
        f = n(1752);
      e.cP = f.parsePath;
      var h = [
          "to",
          "getProps",
          "onClick",
          "onMouseEnter",
          "activeClassName",
          "activeStyle",
          "innerRef",
          "partiallyActive",
          "state",
          "replace",
          "_location",
        ],
        d = function (t) {
          return null == t ? void 0 : t.startsWith("/");
        };
      function v(t, e) {
        var n, r;
        if ((void 0 === e && (e = g()), !w(t))) return t;
        if (t.startsWith("./") || t.startsWith("../")) return t;
        var o =
          null !== (n = null !== (r = e) && void 0 !== r ? r : m()) &&
          void 0 !== n
            ? n
            : "/";
        return (
          "" +
          (null != o && o.endsWith("/") ? o.slice(0, -1) : o) +
          (t.startsWith("/") ? t : "/" + t)
        );
      }
      var m = function () {
          return "/docs";
        },
        g = function () {
          return "/docs";
        },
        w = function (t) {
          return (
            t &&
            !t.startsWith("http://") &&
            !t.startsWith("https://") &&
            !t.startsWith("//")
          );
        };
      var y = function (t, e) {
          return "number" == typeof t
            ? t
            : w(t)
            ? d(t)
              ? v(t)
              : (function (t, e) {
                  return d(t) ? t : (0, p.resolve)(t, e);
                })(t, e)
            : t;
        },
        b = {
          activeClassName: s.default.string,
          activeStyle: s.default.object,
          partiallyActive: s.default.bool,
        };
      function P(t) {
        return c.default.createElement(l.Location, null, function (e) {
          var n = e.location;
          return c.default.createElement(
            E,
            (0, u.default)({}, t, { _location: n })
          );
        });
      }
      var E = (function (t) {
        function e(e) {
          var n;
          (n = t.call(this, e) || this).defaultGetProps = function (t) {
            var e = t.isPartiallyCurrent,
              r = t.isCurrent;
            return (n.props.partiallyActive ? e : r)
              ? {
                  className: [n.props.className, n.props.activeClassName]
                    .filter(Boolean)
                    .join(" "),
                  style: (0, u.default)({}, n.props.style, n.props.activeStyle),
                }
              : null;
          };
          var r = !1;
          return (
            "undefined" != typeof window &&
              window.IntersectionObserver &&
              (r = !0),
            (n.state = { IOSupported: r }),
            (n.handleRef = n.handleRef.bind((0, a.default)(n))),
            n
          );
        }
        (0, i.default)(e, t);
        var n = e.prototype;
        return (
          (n._prefetch = function () {
            var t = window.location.pathname;
            this.props._location &&
              this.props._location.pathname &&
              (t = this.props._location.pathname);
            var e = y(this.props.to, t),
              n = (0, f.parsePath)(e).pathname;
            t !== n && ___loader.enqueue(n);
          }),
          (n.componentDidUpdate = function (t, e) {
            this.props.to === t.to ||
              this.state.IOSupported ||
              this._prefetch();
          }),
          (n.componentDidMount = function () {
            this.state.IOSupported || this._prefetch();
          }),
          (n.componentWillUnmount = function () {
            if (this.io) {
              var t = this.io,
                e = t.instance,
                n = t.el;
              e.unobserve(n), e.disconnect();
            }
          }),
          (n.handleRef = function (t) {
            var e,
              n,
              r,
              o = this;
            this.props.innerRef && this.props.innerRef.hasOwnProperty("current")
              ? (this.props.innerRef.current = t)
              : this.props.innerRef && this.props.innerRef(t),
              this.state.IOSupported &&
                t &&
                (this.io =
                  ((e = t),
                  (n = function () {
                    o._prefetch();
                  }),
                  (r = new window.IntersectionObserver(function (t) {
                    t.forEach(function (t) {
                      e === t.target &&
                        (t.isIntersecting || t.intersectionRatio > 0) &&
                        (r.unobserve(e), r.disconnect(), n());
                    });
                  })).observe(e),
                  { instance: r, el: e }));
          }),
          (n.render = function () {
            var t = this,
              e = this.props,
              n = e.to,
              r = e.getProps,
              a = void 0 === r ? this.defaultGetProps : r,
              i = e.onClick,
              s = e.onMouseEnter,
              p =
                (e.activeClassName,
                e.activeStyle,
                e.innerRef,
                e.partiallyActive,
                e.state),
              d = e.replace,
              v = e._location,
              m = (0, o.default)(e, h);
            var g = y(n, v.pathname);
            return w(g)
              ? c.default.createElement(
                  l.Link,
                  (0, u.default)(
                    {
                      to: g,
                      state: p,
                      getProps: a,
                      innerRef: this.handleRef,
                      onMouseEnter: function (t) {
                        s && s(t),
                          ___loader.hovering((0, f.parsePath)(g).pathname);
                      },
                      onClick: function (e) {
                        if (
                          (i && i(e),
                          !(
                            0 !== e.button ||
                            t.props.target ||
                            e.defaultPrevented ||
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          ))
                        ) {
                          e.preventDefault();
                          var n = d,
                            r = encodeURI(g) === v.pathname;
                          "boolean" != typeof d && r && (n = !0),
                            window.___navigate(g, { state: p, replace: n });
                        }
                        return !0;
                      },
                    },
                    m
                  )
                )
              : c.default.createElement("a", (0, u.default)({ href: g }, m));
          }),
          e
        );
      })(c.default.Component);
      E.propTypes = (0, u.default)({}, b, {
        onClick: s.default.func,
        to: s.default.string.isRequired,
        replace: s.default.bool,
        state: s.default.object,
      });
      var S = c.default.forwardRef(function (t, e) {
        return c.default.createElement(P, (0, u.default)({ innerRef: e }, t));
      });
      e.ZP = S;
      e.c4 = function (t, e) {
        window.___navigate(y(t, window.location.pathname), e);
      };
    },
    1752: function (t, e) {
      "use strict";
      (e.__esModule = !0),
        (e.parsePath = function (t) {
          var e = t || "/",
            n = "",
            r = "",
            o = e.indexOf("#");
          -1 !== o && ((r = e.substr(o)), (e = e.substr(0, o)));
          var a = e.indexOf("?");
          -1 !== a && ((n = e.substr(a)), (e = e.substr(0, a)));
          return {
            pathname: e,
            search: "?" === n ? "" : n,
            hash: "#" === r ? "" : r,
          };
        });
    },
    9679: function (t, e, n) {
      "use strict";
      e.p2 = e.$C = void 0;
      var r = n(1432);
      e.$C = r.ScrollHandler;
      var o = n(4855);
      e.p2 = o.useScrollRestoration;
    },
    1432: function (t, e, n) {
      "use strict";
      var r = n(5318);
      (e.__esModule = !0), (e.ScrollHandler = e.ScrollContext = void 0);
      var o = r(n(1506)),
        a = r(n(5354)),
        i = (function (t, e) {
          if (!e && t && t.__esModule) return t;
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return { default: t };
          var n = c(e);
          if (n && n.has(t)) return n.get(t);
          var r = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in t)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(t, a)) {
              var i = o ? Object.getOwnPropertyDescriptor(t, a) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(r, a, i)
                : (r[a] = t[a]);
            }
          (r.default = t), n && n.set(t, r);
          return r;
        })(n(7294)),
        u = r(n(5697)),
        s = n(1142);
      function c(t) {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap(),
          n = new WeakMap();
        return (c = function (t) {
          return t ? n : e;
        })(t);
      }
      var l = i.createContext(new s.SessionStorage());
      (e.ScrollContext = l), (l.displayName = "GatsbyScrollContext");
      var p = (function (t) {
        function e() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            ((e = t.call.apply(t, [this].concat(r)) || this)._stateStorage =
              new s.SessionStorage()),
            (e._isTicking = !1),
            (e._latestKnownScrollY = 0),
            (e.scrollListener = function () {
              (e._latestKnownScrollY = window.scrollY),
                e._isTicking ||
                  ((e._isTicking = !0),
                  requestAnimationFrame(e._saveScroll.bind((0, o.default)(e))));
            }),
            (e.windowScroll = function (t, n) {
              e.shouldUpdateScroll(n, e.props) && window.scrollTo(0, t);
            }),
            (e.scrollToHash = function (t, n) {
              var r = document.getElementById(t.substring(1));
              r && e.shouldUpdateScroll(n, e.props) && r.scrollIntoView();
            }),
            (e.shouldUpdateScroll = function (t, n) {
              var r = e.props.shouldUpdateScroll;
              return !r || r.call((0, o.default)(e), t, n);
            }),
            e
          );
        }
        (0, a.default)(e, t);
        var n = e.prototype;
        return (
          (n._saveScroll = function () {
            var t = this.props.location.key || null;
            t &&
              this._stateStorage.save(
                this.props.location,
                t,
                this._latestKnownScrollY
              ),
              (this._isTicking = !1);
          }),
          (n.componentDidMount = function () {
            var t;
            window.addEventListener("scroll", this.scrollListener);
            var e = this.props.location,
              n = e.key,
              r = e.hash;
            n && (t = this._stateStorage.read(this.props.location, n)),
              t
                ? this.windowScroll(t, void 0)
                : r && this.scrollToHash(decodeURI(r), void 0);
          }),
          (n.componentWillUnmount = function () {
            window.removeEventListener("scroll", this.scrollListener);
          }),
          (n.componentDidUpdate = function (t) {
            var e,
              n = this.props.location,
              r = n.hash,
              o = n.key;
            o && (e = this._stateStorage.read(this.props.location, o)),
              r ? this.scrollToHash(decodeURI(r), t) : this.windowScroll(e, t);
          }),
          (n.render = function () {
            return i.createElement(
              l.Provider,
              { value: this._stateStorage },
              this.props.children
            );
          }),
          e
        );
      })(i.Component);
      (e.ScrollHandler = p),
        (p.propTypes = {
          shouldUpdateScroll: u.default.func,
          children: u.default.element.isRequired,
          location: u.default.object.isRequired,
        });
    },
    1142: function (t, e) {
      "use strict";
      (e.__esModule = !0), (e.SessionStorage = void 0);
      var n = "___GATSBY_REACT_ROUTER_SCROLL",
        r = (function () {
          function t() {}
          var e = t.prototype;
          return (
            (e.read = function (t, e) {
              var r = this.getStateKey(t, e);
              try {
                var o = window.sessionStorage.getItem(r);
                return o ? JSON.parse(o) : 0;
              } catch (a) {
                return window && window[n] && window[n][r] ? window[n][r] : 0;
              }
            }),
            (e.save = function (t, e, r) {
              var o = this.getStateKey(t, e),
                a = JSON.stringify(r);
              try {
                window.sessionStorage.setItem(o, a);
              } catch (i) {
                (window && window[n]) || (window[n] = {}),
                  (window[n][o] = JSON.parse(a));
              }
            }),
            (e.getStateKey = function (t, e) {
              var n = "@@scroll|" + t.pathname;
              return null == e ? n : n + "|" + e;
            }),
            t
          );
        })();
      e.SessionStorage = r;
    },
    4855: function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.useScrollRestoration = function (t) {
          var e = (0, a.useLocation)(),
            n = (0, o.useContext)(r.ScrollContext),
            i = (0, o.useRef)(null);
          return (
            (0, o.useLayoutEffect)(
              function () {
                if (i.current) {
                  var r = n.read(e, t);
                  i.current.scrollTo(0, r || 0);
                }
              },
              [e.key]
            ),
            {
              ref: i,
              onScroll: function () {
                i.current && n.save(e, t, i.current.scrollTop);
              },
            }
          );
        });
      var r = n(1432),
        o = n(7294),
        a = n(9499);
    },
    4999: function (t, e, n) {
      e.components = {
        "component---src-templates-docs-js": function () {
          return Promise.all([n.e(532), n.e(662), n.e(740)]).then(
            n.bind(n, 3677)
          );
        },
      };
    },
    5182: function (t, e, n) {
      t.exports = [
        { plugin: n(4365), options: { plugins: [] } },
        {
          plugin: n(3207),
          options: {
            plugins: [],
            maxWidth: 700,
            linkImagesToOriginal: !0,
            showCaptions: !1,
            markdownCaptions: !1,
            sizeByPixelDensity: !1,
            backgroundColor: "white",
            quality: 50,
            withWebp: !1,
            tracedSVG: !1,
            loading: "lazy",
            disableBgImageOnAlpha: !1,
            disableBgImage: !1,
          },
        },
        {
          plugin: n(5854),
          options: {
            plugins: [],
            trackingId: "UA-122379868-2",
            head: !1,
            anonymize: !1,
            respectDNT: !1,
            exclude: [],
            pageTransitionDelay: 0,
            enableWebVitalsTracking: !1,
          },
        },
        {
          plugin: n(2786),
          options: {
            plugins: [],
            prodKey: "x9OuLbWwPvT0ewad7vvt4Wy1S7bq9vLt",
            devKey: "HW788rUbGFVg1Tlkm9O6oKw7lSG7bwmR",
          },
        },
        { plugin: n(9037), options: { plugins: [] } },
      ];
    },
    7343: function (t, e, n) {
      var r = n(5182),
        o = n(6380).jN,
        a = o.getResourceURLsForPathname,
        i = o.loadPage,
        u = o.loadPageSync;
      (e.h = function (t, e, n, o) {
        void 0 === e && (e = {});
        var s = r.map(function (n) {
          if (n.plugin[t]) {
            (e.getResourceURLsForPathname = a),
              (e.loadPage = i),
              (e.loadPageSync = u);
            var r = n.plugin[t](e, n.options);
            return r && o && (e = o({ args: e, result: r, plugin: n })), r;
          }
        });
        return (s = s.filter(function (t) {
          return void 0 !== t;
        })).length > 0
          ? s
          : n
          ? [n]
          : [];
      }),
        (e.I = function (t, e, n) {
          return r.reduce(function (n, r) {
            return r.plugin[t]
              ? n.then(function () {
                  return r.plugin[t](e, r.options);
                })
              : n;
          }, Promise.resolve());
        });
    },
    8110: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return r;
        },
      });
      var r = (function (t) {
        return (
          (t = t || Object.create(null)),
          {
            on: function (e, n) {
              (t[e] || (t[e] = [])).push(n);
            },
            off: function (e, n) {
              t[e] && t[e].splice(t[e].indexOf(n) >>> 0, 1);
            },
            emit: function (e, n) {
              (t[e] || []).slice().map(function (t) {
                t(n);
              }),
                (t["*"] || []).slice().map(function (t) {
                  t(e, n);
                });
            },
          }
        );
      })();
    },
    2257: function (t, e, n) {
      "use strict";
      n.d(e, {
        UD: function () {
          return f;
        },
        Cj: function () {
          return d;
        },
        GA: function () {
          return h;
        },
        DS: function () {
          return p;
        },
      });
      var r = n(2098),
        o = n(1578),
        a = function (t) {
          return void 0 === t
            ? t
            : "/" === t
            ? "/"
            : "/" === t.charAt(t.length - 1)
            ? t.slice(0, -1)
            : t;
        },
        i = n(2695),
        u = new Map(),
        s = [],
        c = function (t) {
          var e = decodeURIComponent(t);
          return (0, o.Z)(e, decodeURIComponent("/docs"))
            .split("#")[0]
            .split("?")[0];
        };
      function l(t) {
        return t.startsWith("/") ||
          t.startsWith("https://") ||
          t.startsWith("http://")
          ? t
          : new URL(
              t,
              window.location.href +
                (window.location.href.endsWith("/") ? "" : "/")
            ).pathname;
      }
      var p = function (t) {
          s = t;
        },
        f = function (t) {
          var e = v(t),
            n = s.map(function (t) {
              var e = t.path;
              return { path: t.matchPath, originalPath: e };
            }),
            o = (0, r.pick)(n, e);
          return o ? a(o.route.originalPath) : null;
        },
        h = function (t) {
          var e = v(t),
            n = s.map(function (t) {
              var e = t.path;
              return { path: t.matchPath, originalPath: e };
            }),
            o = (0, r.pick)(n, e);
          return o ? o.params : {};
        },
        d = function t(e) {
          var n = c(l(e));
          if (u.has(n)) return u.get(n);
          var r = (0, i.J)(e);
          if (r) return t(r.toPath);
          var o = f(n);
          return o || (o = v(e)), u.set(n, o), o;
        },
        v = function (t) {
          var e = c(l(t));
          return "/index.html" === e && (e = "/"), (e = a(e));
        };
    },
    5444: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          Link: function () {
            return o.ZP;
          },
          withAssetPrefix: function () {
            return o.mc;
          },
          withPrefix: function () {
            return o.dq;
          },
          graphql: function () {
            return h;
          },
          parsePath: function () {
            return o.cP;
          },
          navigate: function () {
            return o.c4;
          },
          useScrollRestoration: function () {
            return a.p2;
          },
          StaticQueryContext: function () {
            return c;
          },
          StaticQuery: function () {
            return p;
          },
          PageRenderer: function () {
            return u.a;
          },
          useStaticQuery: function () {
            return f;
          },
          prefetchPathname: function () {
            return s;
          },
        });
      var r = n(7294),
        o = n(8037),
        a = n(9679),
        i = n(861),
        u = n.n(i),
        s = n(6380).ZP.enqueue,
        c = r.createContext({});
      function l(t) {
        var e = t.staticQueryData,
          n = t.data,
          o = t.query,
          a = t.render,
          i = n ? n.data : e[o] && e[o].data;
        return r.createElement(
          r.Fragment,
          null,
          i && a(i),
          !i && r.createElement("div", null, "Loading (StaticQuery)")
        );
      }
      var p = function (t) {
          var e = t.data,
            n = t.query,
            o = t.render,
            a = t.children;
          return r.createElement(c.Consumer, null, function (t) {
            return r.createElement(l, {
              data: e,
              query: n,
              render: o || a,
              staticQueryData: t,
            });
          });
        },
        f = function (t) {
          var e;
          r.useContext;
          var n = r.useContext(c);
          if (isNaN(Number(t)))
            throw new Error(
              "useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`" +
                t +
                "`);\n"
            );
          if (null !== (e = n[t]) && void 0 !== e && e.data) return n[t].data;
          throw new Error(
            "The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues"
          );
        };
      function h() {
        throw new Error(
          "It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby."
        );
      }
    },
    6380: function (t, e, n) {
      "use strict";
      n.d(e, {
        uQ: function () {
          return p;
        },
        kL: function () {
          return y;
        },
        ZP: function () {
          return E;
        },
        hs: function () {
          return S;
        },
        jN: function () {
          return P;
        },
        N1: function () {
          return b;
        },
      });
      var r = n(7600);
      function o(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function a(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return o(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return o(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? o(t, e)
                  : void 0
              );
            }
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var i = (function (t) {
          if ("undefined" == typeof document) return !1;
          var e = document.createElement("link");
          try {
            if (e.relList && "function" == typeof e.relList.supports)
              return e.relList.supports(t);
          } catch (n) {
            return !1;
          }
          return !1;
        })("prefetch")
          ? function (t, e) {
              return new Promise(function (n, r) {
                if ("undefined" != typeof document) {
                  var o = document.createElement("link");
                  o.setAttribute("rel", "prefetch"),
                    o.setAttribute("href", t),
                    Object.keys(e).forEach(function (t) {
                      o.setAttribute(t, e[t]);
                    }),
                    (o.onload = n),
                    (o.onerror = r),
                    (
                      document.getElementsByTagName("head")[0] ||
                      document.getElementsByName("script")[0].parentNode
                    ).appendChild(o);
                } else r();
              });
            }
          : function (t) {
              return new Promise(function (e, n) {
                var r = new XMLHttpRequest();
                r.open("GET", t, !0),
                  (r.onload = function () {
                    200 === r.status ? e() : n();
                  }),
                  r.send(null);
              });
            },
        u = {},
        s = function (t, e) {
          return new Promise(function (n) {
            u[t]
              ? n()
              : i(t, e)
                  .then(function () {
                    n(), (u[t] = !0);
                  })
                  .catch(function () {});
          });
        },
        c = n(8110),
        l = n(2257),
        p = { Error: "error", Success: "success" },
        f = function (t) {
          return (t && t.default) || t;
        },
        h = function (t) {
          var e;
          return (
            "/docs/page-data/" +
            ("/" === t
              ? "index"
              : (e = "/" === (e = t)[0] ? e.slice(1) : e).endsWith("/")
              ? e.slice(0, -1)
              : e) +
            "/page-data.json"
          );
        };
      function d(t, e) {
        return (
          void 0 === e && (e = "GET"),
          new Promise(function (n, r) {
            var o = new XMLHttpRequest();
            o.open(e, t, !0),
              (o.onreadystatechange = function () {
                4 == o.readyState && n(o);
              }),
              o.send(null);
          })
        );
      }
      var v,
        m = function (t, e) {
          void 0 === e && (e = null);
          var n = {
            componentChunkName: t.componentChunkName,
            path: t.path,
            webpackCompilationHash: t.webpackCompilationHash,
            matchPath: t.matchPath,
            staticQueryHashes: t.staticQueryHashes,
          };
          return { component: e, json: t.result, page: n };
        },
        g = (function () {
          function t(t, e) {
            (this.inFlightNetworkRequests = new Map()),
              (this.pageDb = new Map()),
              (this.inFlightDb = new Map()),
              (this.staticQueryDb = {}),
              (this.pageDataDb = new Map()),
              (this.prefetchTriggered = new Set()),
              (this.prefetchCompleted = new Set()),
              (this.loadComponent = t),
              (0, l.DS)(e);
          }
          var e = t.prototype;
          return (
            (e.memoizedGet = function (t) {
              var e = this,
                n = this.inFlightNetworkRequests.get(t);
              return (
                n ||
                  ((n = d(t, "GET")), this.inFlightNetworkRequests.set(t, n)),
                n
                  .then(function (n) {
                    return e.inFlightNetworkRequests.delete(t), n;
                  })
                  .catch(function (n) {
                    throw (e.inFlightNetworkRequests.delete(t), n);
                  })
              );
            }),
            (e.setApiRunner = function (t) {
              (this.apiRunner = t),
                (this.prefetchDisabled = t("disableCorePrefetching").some(
                  function (t) {
                    return t;
                  }
                ));
            }),
            (e.fetchPageDataJson = function (t) {
              var e = this,
                n = t.pagePath,
                r = t.retries,
                o = void 0 === r ? 0 : r,
                a = h(n);
              return this.memoizedGet(a).then(function (r) {
                var a = r.status,
                  i = r.responseText;
                if (200 === a)
                  try {
                    var u = JSON.parse(i);
                    if (void 0 === u.path)
                      throw new Error("not a valid pageData response");
                    return Object.assign(t, { status: p.Success, payload: u });
                  } catch (s) {}
                return 404 === a || 200 === a
                  ? "/404.html" === n
                    ? Object.assign(t, { status: p.Error })
                    : e.fetchPageDataJson(
                        Object.assign(t, {
                          pagePath: "/404.html",
                          notFound: !0,
                        })
                      )
                  : 500 === a
                  ? Object.assign(t, { status: p.Error })
                  : o < 3
                  ? e.fetchPageDataJson(Object.assign(t, { retries: o + 1 }))
                  : Object.assign(t, { status: p.Error });
              });
            }),
            (e.loadPageDataJson = function (t) {
              var e = this,
                n = (0, l.Cj)(t);
              if (this.pageDataDb.has(n)) {
                var r = this.pageDataDb.get(n);
                return Promise.resolve(r);
              }
              return this.fetchPageDataJson({ pagePath: n }).then(function (t) {
                return e.pageDataDb.set(n, t), t;
              });
            }),
            (e.findMatchPath = function (t) {
              return (0, l.UD)(t);
            }),
            (e.loadPage = function (t) {
              var e = this,
                n = (0, l.Cj)(t);
              if (this.pageDb.has(n)) {
                var r = this.pageDb.get(n);
                return r.error
                  ? { error: r.error, status: r.status }
                  : Promise.resolve(r.payload);
              }
              if (this.inFlightDb.has(n)) return this.inFlightDb.get(n);
              var o = Promise.all([
                this.loadAppData(),
                this.loadPageDataJson(n),
              ]).then(function (t) {
                var r = t[1];
                if (r.status === p.Error) return { status: p.Error };
                var o = r.payload,
                  a = o,
                  i = a.componentChunkName,
                  u = a.staticQueryHashes,
                  s = void 0 === u ? [] : u,
                  l = {},
                  f = e.loadComponent(i).then(function (e) {
                    var n;
                    return (
                      (l.createdAt = new Date()),
                      !e || e instanceof Error
                        ? ((l.status = p.Error), (l.error = e))
                        : ((l.status = p.Success),
                          !0 === r.notFound && (l.notFound = !0),
                          (o = Object.assign(o, {
                            webpackCompilationHash: t[0]
                              ? t[0].webpackCompilationHash
                              : "",
                          })),
                          (n = m(o, e))),
                      n
                    );
                  }),
                  h = Promise.all(
                    s.map(function (t) {
                      if (e.staticQueryDb[t]) {
                        var n = e.staticQueryDb[t];
                        return { staticQueryHash: t, jsonPayload: n };
                      }
                      return e
                        .memoizedGet("/docs/page-data/sq/d/" + t + ".json")
                        .then(function (e) {
                          var n = JSON.parse(e.responseText);
                          return { staticQueryHash: t, jsonPayload: n };
                        })
                        .catch(function () {
                          throw new Error(
                            "We couldn't load \"/docs/page-data/sq/d/" +
                              t +
                              '.json"'
                          );
                        });
                    })
                  ).then(function (t) {
                    var n = {};
                    return (
                      t.forEach(function (t) {
                        var r = t.staticQueryHash,
                          o = t.jsonPayload;
                        (n[r] = o), (e.staticQueryDb[r] = o);
                      }),
                      n
                    );
                  });
                return Promise.all([f, h])
                  .then(function (t) {
                    var r,
                      o = t[0],
                      a = t[1];
                    return (
                      o &&
                        ((r = Object.assign({}, o, { staticQueryResults: a })),
                        (l.payload = r),
                        c.Z.emit("onPostLoadPageResources", {
                          page: r,
                          pageResources: r,
                        })),
                      e.pageDb.set(n, l),
                      l.error ? { error: l.error, status: l.status } : r
                    );
                  })
                  .catch(function (t) {
                    return { error: t, status: p.Error };
                  });
              });
              return (
                o
                  .then(function () {
                    e.inFlightDb.delete(n);
                  })
                  .catch(function (t) {
                    throw (e.inFlightDb.delete(n), t);
                  }),
                this.inFlightDb.set(n, o),
                o
              );
            }),
            (e.loadPageSync = function (t, e) {
              void 0 === e && (e = {});
              var n = (0, l.Cj)(t);
              if (this.pageDb.has(n)) {
                var r,
                  o = this.pageDb.get(n);
                if (o.payload) return o.payload;
                if (null !== (r = e) && void 0 !== r && r.withErrorDetails)
                  return { error: o.error, status: o.status };
              }
            }),
            (e.shouldPrefetch = function (t) {
              return (
                !!(function () {
                  if (
                    "connection" in navigator &&
                    void 0 !== navigator.connection
                  ) {
                    if (
                      (navigator.connection.effectiveType || "").includes("2g")
                    )
                      return !1;
                    if (navigator.connection.saveData) return !1;
                  }
                  return !0;
                })() && !this.pageDb.has(t)
              );
            }),
            (e.prefetch = function (t) {
              var e = this;
              if (!this.shouldPrefetch(t)) return !1;
              if (
                (this.prefetchTriggered.has(t) ||
                  (this.apiRunner("onPrefetchPathname", { pathname: t }),
                  this.prefetchTriggered.add(t)),
                this.prefetchDisabled)
              )
                return !1;
              var n = (0, l.Cj)(t);
              return (
                this.doPrefetch(n).then(function () {
                  e.prefetchCompleted.has(t) ||
                    (e.apiRunner("onPostPrefetchPathname", { pathname: t }),
                    e.prefetchCompleted.add(t));
                }),
                !0
              );
            }),
            (e.doPrefetch = function (t) {
              var e = this,
                n = h(t);
              return s(n, { crossOrigin: "anonymous", as: "fetch" }).then(
                function () {
                  return e.loadPageDataJson(t);
                }
              );
            }),
            (e.hovering = function (t) {
              this.loadPage(t);
            }),
            (e.getResourceURLsForPathname = function (t) {
              var e = (0, l.Cj)(t),
                n = this.pageDataDb.get(e);
              if (n) {
                var r = m(n.payload);
                return [].concat(a(w(r.page.componentChunkName)), [h(e)]);
              }
              return null;
            }),
            (e.isPageNotFound = function (t) {
              var e = (0, l.Cj)(t),
                n = this.pageDb.get(e);
              return !n || n.notFound;
            }),
            (e.loadAppData = function (t) {
              var e = this;
              return (
                void 0 === t && (t = 0),
                this.memoizedGet("/docs/page-data/app-data.json").then(
                  function (n) {
                    var r,
                      o = n.status,
                      a = n.responseText;
                    if (200 !== o && t < 3) return e.loadAppData(t + 1);
                    if (200 === o)
                      try {
                        var i = JSON.parse(a);
                        if (void 0 === i.webpackCompilationHash)
                          throw new Error("not a valid app-data response");
                        r = i;
                      } catch (u) {}
                    return r;
                  }
                )
              );
            }),
            t
          );
        })(),
        w = function (t) {
          return (window.___chunkMapping[t] || []).map(function (t) {
            return "/docs" + t;
          });
        },
        y = (function (t) {
          function e(e, n) {
            return (
              t.call(
                this,
                function (t) {
                  if (!e.components[t])
                    throw new Error(
                      "We couldn't find the correct component chunk with the name " +
                        t
                    );
                  return e.components[t]()
                    .then(f)
                    .catch(function (t) {
                      return t;
                    });
                },
                n
              ) || this
            );
          }
          (0, r.Z)(e, t);
          var n = e.prototype;
          return (
            (n.doPrefetch = function (e) {
              return t.prototype.doPrefetch.call(this, e).then(function (t) {
                if (t.status !== p.Success) return Promise.resolve();
                var e = t.payload,
                  n = e.componentChunkName,
                  r = w(n);
                return Promise.all(r.map(s)).then(function () {
                  return e;
                });
              });
            }),
            (n.loadPageDataJson = function (e) {
              return t.prototype.loadPageDataJson
                .call(this, e)
                .then(function (t) {
                  return t.notFound
                    ? d(e, "HEAD").then(function (e) {
                        return 200 === e.status ? { status: p.Error } : t;
                      })
                    : t;
                });
            }),
            e
          );
        })(g),
        b = function (t) {
          v = t;
        },
        P = {
          enqueue: function (t) {
            return v.prefetch(t);
          },
          getResourceURLsForPathname: function (t) {
            return v.getResourceURLsForPathname(t);
          },
          loadPage: function (t) {
            return v.loadPage(t);
          },
          loadPageSync: function (t, e) {
            return void 0 === e && (e = {}), v.loadPageSync(t, e);
          },
          prefetch: function (t) {
            return v.prefetch(t);
          },
          isPageNotFound: function (t) {
            return v.isPageNotFound(t);
          },
          hovering: function (t) {
            return v.hovering(t);
          },
          loadAppData: function () {
            return v.loadAppData();
          },
        },
        E = P;
      function S() {
        return v ? v.staticQueryDb : {};
      }
    },
    804: function (t, e, n) {
      "use strict";
      var r = n(7600),
        o = n(7294),
        a = n(7343),
        i = n(2257),
        u = (function (t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          return (
            (0, r.Z)(e, t),
            (e.prototype.render = function () {
              var t = Object.assign({}, this.props, {
                  params: Object.assign(
                    {},
                    (0, i.GA)(this.props.location.pathname),
                    this.props.pageResources.json.pageContext.__params
                  ),
                }),
                e = (0, o.createElement)(
                  this.props.pageResources.component,
                  Object.assign({}, t, {
                    key: this.props.path || this.props.pageResources.page.path,
                  })
                );
              return (0, a.h)(
                "wrapPageElement",
                { element: e, props: t },
                e,
                function (e) {
                  return { element: e.result, props: t };
                }
              ).pop();
            }),
            e
          );
        })(o.Component);
      e.Z = u;
    },
    8053: function (t, e, n) {
      "use strict";
      var r = n(7600),
        o = n(7343),
        a = n(7294),
        i = n(3935),
        u = n(9499),
        s = n(9679),
        c = n(5444),
        l = n(6380),
        p = n(2695),
        f = n(8110),
        h = {
          id: "gatsby-announcer",
          style: {
            position: "absolute",
            top: 0,
            width: 1,
            height: 1,
            padding: 0,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            border: 0,
          },
          "aria-live": "assertive",
          "aria-atomic": "true",
        },
        d = n(2393),
        v = n(8037);
      function m(t) {
        var e = (0, p.J)(t),
          n = window.location,
          r = n.hash,
          o = n.search;
        return null != e && (window.___replace(e.toPath + o + r), !0);
      }
      var g = function (t, e) {
          m(t.pathname) ||
            (0, o.h)("onPreRouteUpdate", { location: t, prevLocation: e });
        },
        w = function (t, e) {
          m(t.pathname) ||
            (0, o.h)("onRouteUpdate", { location: t, prevLocation: e });
        },
        y = function (t, e) {
          if ((void 0 === e && (e = {}), "number" != typeof t)) {
            var n = (0, v.cP)(t),
              r = n.pathname,
              a = n.search,
              i = n.hash,
              s = (0, p.J)(r);
            if ((s && (t = s.toPath + a + i), window.___swUpdated))
              window.location = r + a + i;
            else {
              var c = setTimeout(function () {
                f.Z.emit("onDelayedLoadPageResources", { pathname: r }),
                  (0, o.h)("onRouteUpdateDelayed", {
                    location: window.location,
                  });
              }, 1e3);
              l.ZP.loadPage(r).then(function (n) {
                if (!n || n.status === l.uQ.Error)
                  return (
                    window.history.replaceState({}, "", location.href),
                    (window.location = r),
                    void clearTimeout(c)
                  );
                n &&
                  n.page.webpackCompilationHash !==
                    window.___webpackCompilationHash &&
                  ("serviceWorker" in navigator &&
                    null !== navigator.serviceWorker.controller &&
                    "activated" === navigator.serviceWorker.controller.state &&
                    navigator.serviceWorker.controller.postMessage({
                      gatsbyApi: "clearPathResources",
                    }),
                  (window.location = r)),
                  (0, u.navigate)(t, e),
                  clearTimeout(c);
              });
            }
          } else d.V5.navigate(t);
        };
      function b(t, e) {
        var n = this,
          r = e.location,
          a = r.pathname,
          i = r.hash,
          u = (0, o.h)("shouldUpdateScroll", {
            prevRouterProps: t,
            pathname: a,
            routerProps: { location: r },
            getSavedScrollPosition: function (t) {
              return [0, n._stateStorage.read(t, t.key)];
            },
          });
        if (u.length > 0) return u[u.length - 1];
        if (t && t.location.pathname === a)
          return i ? decodeURI(i.slice(1)) : [0, 0];
        return !0;
      }
      var P = (function (t) {
          function e(e) {
            var n;
            return (
              ((n = t.call(this, e) || this).announcementRef = a.createRef()), n
            );
          }
          (0, r.Z)(e, t);
          var n = e.prototype;
          return (
            (n.componentDidUpdate = function (t, e) {
              var n = this;
              requestAnimationFrame(function () {
                var t = "new page at " + n.props.location.pathname;
                document.title && (t = document.title);
                var e = document.querySelectorAll("#gatsby-focus-wrapper h1");
                e && e.length && (t = e[0].textContent);
                var r = "Navigated to " + t;
                n.announcementRef.current &&
                  n.announcementRef.current.innerText !== r &&
                  (n.announcementRef.current.innerText = r);
              });
            }),
            (n.render = function () {
              return a.createElement(
                "div",
                Object.assign({}, h, { ref: this.announcementRef })
              );
            }),
            e
          );
        })(a.Component),
        E = function (t, e) {
          var n, r;
          return (
            t.href !== e.href ||
            (null == t || null === (n = t.state) || void 0 === n
              ? void 0
              : n.key) !==
              (null == e || null === (r = e.state) || void 0 === r
                ? void 0
                : r.key)
          );
        },
        S = (function (t) {
          function e(e) {
            var n;
            return (n = t.call(this, e) || this), g(e.location, null), n;
          }
          (0, r.Z)(e, t);
          var n = e.prototype;
          return (
            (n.componentDidMount = function () {
              w(this.props.location, null);
            }),
            (n.shouldComponentUpdate = function (t) {
              return (
                !!E(t.location, this.props.location) &&
                (g(this.props.location, t.location), !0)
              );
            }),
            (n.componentDidUpdate = function (t) {
              E(t.location, this.props.location) &&
                w(this.props.location, t.location);
            }),
            (n.render = function () {
              return a.createElement(
                a.Fragment,
                null,
                this.props.children,
                a.createElement(P, { location: location })
              );
            }),
            e
          );
        })(a.Component),
        C = n(804),
        _ = n(4999);
      function R(t, e) {
        for (var n in t) if (!(n in e)) return !0;
        for (var r in e) if (t[r] !== e[r]) return !0;
        return !1;
      }
      var k = (function (t) {
          function e(e) {
            var n;
            n = t.call(this) || this;
            var r = e.location,
              o = e.pageResources;
            return (
              (n.state = {
                location: Object.assign({}, r),
                pageResources:
                  o || l.ZP.loadPageSync(r.pathname, { withErrorDetails: !0 }),
              }),
              n
            );
          }
          (0, r.Z)(e, t),
            (e.getDerivedStateFromProps = function (t, e) {
              var n = t.location;
              return e.location.href !== n.href
                ? {
                    pageResources: l.ZP.loadPageSync(n.pathname, {
                      withErrorDetails: !0,
                    }),
                    location: Object.assign({}, n),
                  }
                : { location: Object.assign({}, n) };
            });
          var n = e.prototype;
          return (
            (n.loadResources = function (t) {
              var e = this;
              l.ZP.loadPage(t).then(function (n) {
                n && n.status !== l.uQ.Error
                  ? e.setState({
                      location: Object.assign({}, window.location),
                      pageResources: n,
                    })
                  : (window.history.replaceState({}, "", location.href),
                    (window.location = t));
              });
            }),
            (n.shouldComponentUpdate = function (t, e) {
              return e.pageResources
                ? this.state.pageResources !== e.pageResources ||
                    this.state.pageResources.component !==
                      e.pageResources.component ||
                    this.state.pageResources.json !== e.pageResources.json ||
                    !(
                      this.state.location.key === e.location.key ||
                      !e.pageResources.page ||
                      (!e.pageResources.page.matchPath &&
                        !e.pageResources.page.path)
                    ) ||
                    (function (t, e, n) {
                      return R(t.props, e) || R(t.state, n);
                    })(this, t, e)
                : (this.loadResources(t.location.pathname), !1);
            }),
            (n.render = function () {
              return this.props.children(this.state);
            }),
            e
          );
        })(a.Component),
        x = n(1578),
        O = new l.kL(_, []);
      (0, l.N1)(O),
        O.setApiRunner(o.h),
        (window.asyncRequires = _),
        (window.___emitter = f.Z),
        (window.___loader = l.jN),
        d.V5.listen(function (t) {
          t.location.action = t.action;
        }),
        (window.___push = function (t) {
          return y(t, { replace: !1 });
        }),
        (window.___replace = function (t) {
          return y(t, { replace: !0 });
        }),
        (window.___navigate = function (t, e) {
          return y(t, e);
        }),
        m(window.location.pathname),
        (0, o.I)("onClientEntry").then(function () {
          (0, o.h)("registerServiceWorker").filter(Boolean).length > 0 &&
            n(154);
          var t = function (t) {
              return a.createElement(
                u.BaseContext.Provider,
                { value: { baseuri: "/", basepath: "/" } },
                a.createElement(C.Z, t)
              );
            },
            e = a.createContext({}),
            p = (function (t) {
              function n() {
                return t.apply(this, arguments) || this;
              }
              return (
                (0, r.Z)(n, t),
                (n.prototype.render = function () {
                  var t = this.props.children;
                  return a.createElement(u.Location, null, function (n) {
                    var r = n.location;
                    return a.createElement(k, { location: r }, function (n) {
                      var r = n.pageResources,
                        o = n.location,
                        i = (0, l.hs)();
                      return a.createElement(
                        c.StaticQueryContext.Provider,
                        { value: i },
                        a.createElement(
                          e.Provider,
                          { value: { pageResources: r, location: o } },
                          t
                        )
                      );
                    });
                  });
                }),
                n
              );
            })(a.Component),
            f = (function (n) {
              function o() {
                return n.apply(this, arguments) || this;
              }
              return (
                (0, r.Z)(o, n),
                (o.prototype.render = function () {
                  var n = this;
                  return a.createElement(e.Consumer, null, function (e) {
                    var r = e.pageResources,
                      o = e.location;
                    return a.createElement(
                      S,
                      { location: o },
                      a.createElement(
                        s.$C,
                        { location: o, shouldUpdateScroll: b },
                        a.createElement(
                          u.Router,
                          {
                            basepath: "/docs",
                            location: o,
                            id: "gatsby-focus-wrapper",
                          },
                          a.createElement(
                            t,
                            Object.assign(
                              {
                                path:
                                  "/404.html" === r.page.path
                                    ? (0, x.Z)(o.pathname, "/docs")
                                    : encodeURI(
                                        r.page.matchPath || r.page.path
                                      ),
                              },
                              n.props,
                              { location: o, pageResources: r },
                              r.json
                            )
                          )
                        )
                      )
                    );
                  });
                }),
                o
              );
            })(a.Component),
            h = window,
            d = h.pagePath,
            v = h.location;
          d &&
            "/docs" + d !== v.pathname &&
            !(
              O.findMatchPath((0, x.Z)(v.pathname, "/docs")) ||
              "/404.html" === d ||
              d.match(/^\/404\/?$/) ||
              d.match(/^\/offline-plugin-app-shell-fallback\/?$/)
            ) &&
            (0, u.navigate)("/docs" + d + v.search + v.hash, { replace: !0 }),
            l.jN.loadPage(v.pathname).then(function (t) {
              if (!t || t.status === l.uQ.Error) {
                var e =
                  "page resources for " +
                  v.pathname +
                  " not found. Not rendering React";
                if (t && t.error) throw (console.error(e), t.error);
                throw new Error(e);
              }
              window.___webpackCompilationHash = t.page.webpackCompilationHash;
              var n = (0, o.h)(
                  "wrapRootElement",
                  { element: a.createElement(f, null) },
                  a.createElement(f, null),
                  function (t) {
                    return { element: t.result };
                  }
                ).pop(),
                r = function () {
                  var t = a.useRef(!1);
                  return (
                    a.useEffect(function () {
                      t.current ||
                        ((t.current = !0),
                        performance.mark("onInitialClientRender"),
                        (0, o.h)("onInitialClientRender"));
                    }, []),
                    a.createElement(p, null, n)
                  );
                },
                u = (0, o.h)(
                  "replaceHydrateFunction",
                  void 0,
                  i.hydrateRoot ? i.hydrateRoot : i.hydrate
                )[0];
              function s() {
                var t =
                  "undefined" != typeof window
                    ? document.getElementById("___gatsby")
                    : null;
                u === i.hydrateRoot
                  ? u(t, a.createElement(r, null))
                  : u(a.createElement(r, null), t);
              }
              var c = document;
              if (
                "complete" === c.readyState ||
                ("loading" !== c.readyState && !c.documentElement.doScroll)
              )
                setTimeout(function () {
                  s();
                }, 0);
              else {
                var h = function t() {
                  c.removeEventListener("DOMContentLoaded", t, !1),
                    window.removeEventListener("load", t, !1),
                    s();
                };
                c.addEventListener("DOMContentLoaded", h, !1),
                  window.addEventListener("load", h, !1);
              }
            });
        });
    },
    6947: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(7294),
        o = n(6380),
        a = n(804);
      e.default = function (t) {
        var e = t.location,
          n = o.ZP.loadPageSync(e.pathname);
        return n
          ? r.createElement(
              a.Z,
              Object.assign({ location: e, pageResources: n }, n.json)
            )
          : null;
      };
    },
    861: function (t, e, n) {
      var r;
      t.exports = ((r = n(6947)) && r.default) || r;
    },
    3639: function (t, e) {
      e.O = function (t) {
        return t;
      };
    },
    2695: function (t, e, n) {
      "use strict";
      n.d(e, {
        J: function () {
          return a;
        },
      });
      var r = new Map(),
        o = new Map();
      function a(t) {
        var e = r.get(t);
        return e || (e = o.get(t.toLowerCase())), e;
      }
      [].forEach(function (t) {
        t.ignoreCase ? o.set(t.fromPath, t) : r.set(t.fromPath, t);
      });
    },
    154: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(7343);
      "https:" !== window.location.protocol &&
      "localhost" !== window.location.hostname
        ? console.error(
            "Service workers can only be used over HTTPS, or on localhost for development"
          )
        : "serviceWorker" in navigator &&
          navigator.serviceWorker
            .register("/docs/sw.js")
            .then(function (t) {
              t.addEventListener("updatefound", function () {
                (0, r.h)("onServiceWorkerUpdateFound", { serviceWorker: t });
                var e = t.installing;
                console.log("installingWorker", e),
                  e.addEventListener("statechange", function () {
                    switch (e.state) {
                      case "installed":
                        navigator.serviceWorker.controller
                          ? ((window.___swUpdated = !0),
                            (0, r.h)("onServiceWorkerUpdateReady", {
                              serviceWorker: t,
                            }),
                            window.___failedResources &&
                              (console.log(
                                "resources failed, SW updated - reloading"
                              ),
                              window.location.reload()))
                          : (console.log("Content is now available offline!"),
                            (0, r.h)("onServiceWorkerInstalled", {
                              serviceWorker: t,
                            }));
                        break;
                      case "redundant":
                        console.error(
                          "The installing service worker became redundant."
                        ),
                          (0, r.h)("onServiceWorkerRedundant", {
                            serviceWorker: t,
                          });
                        break;
                      case "activated":
                        (0, r.h)("onServiceWorkerActive", { serviceWorker: t });
                    }
                  });
              });
            })
            .catch(function (t) {
              console.error("Error during service worker registration:", t);
            });
    },
    1578: function (t, e, n) {
      "use strict";
      function r(t, e) {
        return (
          void 0 === e && (e = ""),
          e
            ? t === e
              ? "/"
              : t.startsWith(e + "/")
              ? t.slice(e.length)
              : t
            : t
        );
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    9037: function () {},
    9564: function (t, e, n) {
      "use strict";
      var r = n(5318);
      (e.__esModule = !0),
        (e.default = function (t, e, n) {
          var r = v(n, e);
          return (
            t.addEventListener("click", r),
            function () {
              return t.removeEventListener("click", r);
            }
          );
        }),
        (e.routeThroughBrowserOrApp =
          e.hashShouldBeFollowed =
          e.pathIsNotHandledByApp =
          e.urlsAreOnSameOrigin =
          e.authorIsForcingNavigation =
          e.anchorsTargetIsEquivalentToSelf =
          e.findClosestAnchor =
          e.navigationWasHandledElsewhere =
          e.slashedPathname =
          e.userIsForcingNavigation =
            void 0);
      var o = r(n(4564)),
        a = n(5444),
        i = function (t) {
          return (
            0 !== t.button || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey
          );
        };
      e.userIsForcingNavigation = i;
      var u = function (t) {
        return "/" === t[0] ? t : "/" + t;
      };
      e.slashedPathname = u;
      var s = function (t) {
        return t.defaultPrevented;
      };
      e.navigationWasHandledElsewhere = s;
      var c = function (t) {
        for (; t.parentNode; t = t.parentNode)
          if ("a" === t.nodeName.toLowerCase()) return t;
        return null;
      };
      e.findClosestAnchor = c;
      var l = function (t) {
        return (
          !1 === t.hasAttribute("target") ||
          null == t.target ||
          ["_self", ""].includes(t.target) ||
          ("_parent" === t.target &&
            (!t.ownerDocument.defaultView.parent ||
              t.ownerDocument.defaultView.parent ===
                t.ownerDocument.defaultView)) ||
          ("_top" === t.target &&
            (!t.ownerDocument.defaultView.top ||
              t.ownerDocument.defaultView.top === t.ownerDocument.defaultView))
        );
      };
      e.anchorsTargetIsEquivalentToSelf = l;
      var p = function (t) {
        return !0 === t.hasAttribute("download") || !1 === l(t);
      };
      e.authorIsForcingNavigation = p;
      var f = function (t, e) {
        return t.protocol === e.protocol && t.host === e.host;
      };
      e.urlsAreOnSameOrigin = f;
      var h = function (t, e) {
        return (
          !1 === e.test(u(t.pathname)) ||
          -1 !== t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)
        );
      };
      e.pathIsNotHandledByApp = h;
      var d = function (t, e) {
        return (
          "" !== e.hash && ("" === e.pathname || e.pathname === t.pathname)
        );
      };
      e.hashShouldBeFollowed = d;
      var v = function (t, e) {
        return function (n) {
          if (window.___failedResources) return !0;
          if (i(n)) return !0;
          if (s(n)) return !0;
          var r = c(n.target);
          if (null == r) return !0;
          if (p(r)) return !0;
          var l = document.createElement("a");
          "" !== r.href && (l.href = r.href),
            "SVGAnimatedString" in window &&
              r.href instanceof SVGAnimatedString &&
              (l.href = r.href.animVal);
          var v = document.createElement("a");
          if (((v.href = window.location.href), !1 === f(v, l))) return !0;
          var m = new RegExp("^" + (0, o.default)((0, a.withPrefix)("/")));
          if (h(l, m)) return !0;
          if (d(v, l)) return !0;
          if (e.excludePattern && new RegExp(e.excludePattern).test(l.pathname))
            return !0;
          n.preventDefault();
          var g = u(l.pathname).replace(m, "/");
          return t("" + g + l.search + l.hash), !1;
        };
      };
      e.routeThroughBrowserOrApp = v;
    },
    4365: function (t, e, n) {
      "use strict";
      var r = n(5318),
        o = n(5444),
        a = r(n(9564));
      e.onClientEntry = function (t, e) {
        void 0 === e && (e = {}),
          (0, a.default)(window, e, function (t) {
            (0, o.navigate)(t);
          });
      };
    },
    5854: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          onRouteUpdate: function () {
            return i;
          },
          onInitialClientRender: function () {
            return u;
          },
        });
      var r = new Set();
      function o(t, e) {
        var n = null;
        return function () {
          n && clearTimeout(n);
          for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
            o[a] = arguments[a];
          n = setTimeout.apply(void 0, [t, e].concat(o));
        };
      }
      function a() {
        function t(t) {
          var e, n, o, a;
          r.has(t.name) ||
            (r.add(t.name),
            (n = (e = t).name),
            (o = e.value),
            (a = e.id),
            window.ga("send", "event", {
              eventCategory: "Web Vitals",
              eventAction: n,
              eventLabel: a,
              eventValue: Math.round("CLS" === n ? 1e3 * o : o),
              nonInteraction: !0,
              transport: "beacon",
            }));
        }
        return n
          .e(589)
          .then(n.bind(n, 1589))
          .then(function (e) {
            var n = e.getLCP,
              r = e.getFID,
              a = e.getCLS,
              i = o(t, 3e3),
              u = t,
              s = o(t, 3e3);
            a(i, !0), r(u, !0), n(s, !0);
          });
      }
      var i = function (t, e) {
        var n = t.location;
        void 0 === e && (e = {});
        var r = window.ga;
        if ("function" != typeof r) return null;
        if (
          n &&
          void 0 !== window.excludeGAPaths &&
          window.excludeGAPaths.some(function (t) {
            return t.test(n.pathname);
          })
        )
          return null;
        var o = Math.max(32, e.pageTransitionDelay || 0);
        return (
          setTimeout(function () {
            var t = n ? n.pathname + n.search + n.hash : void 0;
            r("set", "page", t), r("send", "pageview");
          }, o),
          null
        );
      };
      function u(t, e) {
        "function" == typeof ga && e.enableWebVitalsTracking && a();
      }
    },
    2862: function (t, e) {
      "use strict";
      (e.DEFAULT_OPTIONS = {
        maxWidth: 650,
        wrapperStyle: "",
        backgroundColor: "white",
        linkImagesToOriginal: !0,
        showCaptions: !1,
        markdownCaptions: !1,
        withWebp: !1,
        withAvif: !1,
        tracedSVG: !1,
        loading: "lazy",
        disableBgImageOnAlpha: !1,
        disableBgImage: !1,
      }),
        (e.EMPTY_ALT = "GATSBY_EMPTY_ALT"),
        (e.imageClass = "gatsby-resp-image-image"),
        (e.imageWrapperClass = "gatsby-resp-image-wrapper"),
        (e.imageBackgroundClass = "gatsby-resp-image-background-image");
    },
    3207: function (t, e, n) {
      "use strict";
      var r = n(2862),
        o = r.DEFAULT_OPTIONS,
        a = r.imageClass,
        i = r.imageBackgroundClass,
        u = r.imageWrapperClass;
      e.onRouteUpdate = function (t, e) {
        for (
          var n = Object.assign({}, o, e),
            r = document.querySelectorAll("." + u),
            s = function (t) {
              var e = r[t],
                o = e.querySelector("." + i),
                u = e.querySelector("." + a),
                s = function () {
                  (o.style.transition = "opacity 0.5s 0.5s"),
                    (u.style.transition = "opacity 0.5s"),
                    c();
                },
                c = function t() {
                  (o.style.opacity = 0),
                    (u.style.opacity = 1),
                    (u.style.color = "inherit"),
                    (u.style.boxShadow =
                      "inset 0px 0px 0px 400px " + n.backgroundColor),
                    u.removeEventListener("load", s),
                    u.removeEventListener("error", t);
                };
              (u.style.opacity = 0),
                u.addEventListener("load", s),
                u.addEventListener("error", c),
                u.complete && c();
            },
            c = 0;
          c < r.length;
          c++
        )
          s(c);
      };
    },
    2786: function (t, e, n) {
      n(7420),
        (e.onClientEntry = function () {
          window.analytics.ready(function () {
            window.AnalyticsInit.ready(function () {
              window.AnalyticsInit.init().finally(function () {
                window.analytics.page(document.title);
              });
            });
          });
        }),
        (e.onRouteUpdate = function (t) {
          t.location;
          t.prevLocation &&
            window.analytics &&
            "function" == typeof window.analytics.page &&
            window.analytics.ready(function () {
              window.AnalyticsInit.ready(function () {
                window.analytics.page();
              });
            });
        });
    },
    9499: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          BaseContext: function () {
            return M;
          },
          Link: function () {
            return K;
          },
          Location: function () {
            return A;
          },
          LocationProvider: function () {
            return U;
          },
          Match: function () {
            return X;
          },
          Redirect: function () {
            return Y;
          },
          Router: function () {
            return W;
          },
          ServerLocation: function () {
            return I;
          },
          createHistory: function () {
            return E;
          },
          createMemorySource: function () {
            return S;
          },
          globalHistory: function () {
            return _;
          },
          isRedirect: function () {
            return J;
          },
          matchPath: function () {
            return c;
          },
          navigate: function () {
            return R;
          },
          redirectTo: function () {
            return $;
          },
          useLocation: function () {
            return tt;
          },
          useMatch: function () {
            return rt;
          },
          useNavigate: function () {
            return et;
          },
          useParams: function () {
            return nt;
          },
        });
      var r = n(7294),
        o = n(1143),
        a = n.n(o),
        i = n(3639),
        u = function (t, e) {
          return t.substr(0, e.length) === e;
        },
        s = function (t, e) {
          for (
            var n = void 0,
              r = void 0,
              o = e.split("?")[0],
              i = g(o),
              u = "" === i[0],
              s = m(t),
              c = 0,
              l = s.length;
            c < l;
            c++
          ) {
            var p = !1,
              h = s[c].route;
            if (h.default) r = { route: h, params: {}, uri: e };
            else {
              for (
                var v = g(h.path),
                  w = {},
                  b = Math.max(i.length, v.length),
                  P = 0;
                P < b;
                P++
              ) {
                var E = v[P],
                  S = i[P];
                if (d(E)) {
                  w[E.slice(1) || "*"] = i
                    .slice(P)
                    .map(decodeURIComponent)
                    .join("/");
                  break;
                }
                if (void 0 === S) {
                  p = !0;
                  break;
                }
                var C = f.exec(E);
                if (C && !u) {
                  -1 === y.indexOf(C[1]) || a()(!1);
                  var _ = decodeURIComponent(S);
                  w[C[1]] = _;
                } else if (E !== S) {
                  p = !0;
                  break;
                }
              }
              if (!p) {
                n = { route: h, params: w, uri: "/" + i.slice(0, P).join("/") };
                break;
              }
            }
          }
          return n || r || null;
        },
        c = function (t, e) {
          return s([{ path: t }], e);
        },
        l = function (t, e) {
          if (u(t, "/")) return t;
          var n = t.split("?"),
            r = n[0],
            o = n[1],
            a = e.split("?")[0],
            i = g(r),
            s = g(a);
          if ("" === i[0]) return w(a, o);
          if (!u(i[0], ".")) {
            var c = s.concat(i).join("/");
            return w(("/" === a ? "" : "/") + c, o);
          }
          for (var l = s.concat(i), p = [], f = 0, h = l.length; f < h; f++) {
            var d = l[f];
            ".." === d ? p.pop() : "." !== d && p.push(d);
          }
          return w("/" + p.join("/"), o);
        },
        p = function (t, e) {
          var n = t.split("?"),
            r = n[0],
            o = n[1],
            a = void 0 === o ? "" : o,
            i =
              "/" +
              g(r)
                .map(function (t) {
                  var n = f.exec(t);
                  return n ? e[n[1]] : t;
                })
                .join("/"),
            u = e.location,
            s = (u = void 0 === u ? {} : u).search,
            c = (void 0 === s ? "" : s).split("?")[1] || "";
          return (i = w(i, a, c));
        },
        f = /^:(.+)/,
        h = function (t) {
          return f.test(t);
        },
        d = function (t) {
          return t && "*" === t[0];
        },
        v = function (t, e) {
          return {
            route: t,
            score: t.default
              ? 0
              : g(t.path).reduce(function (t, e) {
                  return (
                    (t += 4),
                    !(function (t) {
                      return "" === t;
                    })(e)
                      ? h(e)
                        ? (t += 2)
                        : d(e)
                        ? (t -= 5)
                        : (t += 3)
                      : (t += 1),
                    t
                  );
                }, 0),
            index: e,
          };
        },
        m = function (t) {
          return t.map(v).sort(function (t, e) {
            return t.score < e.score
              ? 1
              : t.score > e.score
              ? -1
              : t.index - e.index;
          });
        },
        g = function (t) {
          return t.replace(/(^\/+|\/+$)/g, "").split("/");
        },
        w = function (t) {
          for (
            var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          return (
            t +
            ((n = n.filter(function (t) {
              return t && t.length > 0;
            })) && n.length > 0
              ? "?" + n.join("&")
              : "")
          );
        },
        y = ["uri", "path"],
        b =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          },
        P = function (t) {
          var e = t.location,
            n = e.search,
            r = e.hash,
            o = e.href,
            a = e.origin,
            i = e.protocol,
            u = e.host,
            s = e.hostname,
            c = e.port,
            l = t.location.pathname;
          !l && o && C && (l = new URL(o).pathname);
          return {
            pathname: encodeURI(decodeURI(l)),
            search: n,
            hash: r,
            href: o,
            origin: a,
            protocol: i,
            host: u,
            hostname: s,
            port: c,
            state: t.history.state,
            key: (t.history.state && t.history.state.key) || "initial",
          };
        },
        E = function (t, e) {
          var n = [],
            r = P(t),
            o = !1,
            a = function () {};
          return {
            get location() {
              return r;
            },
            get transitioning() {
              return o;
            },
            _onTransitionComplete: function () {
              (o = !1), a();
            },
            listen: function (e) {
              n.push(e);
              var o = function () {
                (r = P(t)), e({ location: r, action: "POP" });
              };
              return (
                t.addEventListener("popstate", o),
                function () {
                  t.removeEventListener("popstate", o),
                    (n = n.filter(function (t) {
                      return t !== e;
                    }));
                }
              );
            },
            navigate: function (e) {
              var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                u = i.state,
                s = i.replace,
                c = void 0 !== s && s;
              if ("number" == typeof e) t.history.go(e);
              else {
                u = b({}, u, { key: Date.now() + "" });
                try {
                  o || c
                    ? t.history.replaceState(u, null, e)
                    : t.history.pushState(u, null, e);
                } catch (p) {
                  t.location[c ? "replace" : "assign"](e);
                }
              }
              (r = P(t)), (o = !0);
              var l = new Promise(function (t) {
                return (a = t);
              });
              return (
                n.forEach(function (t) {
                  return t({ location: r, action: "PUSH" });
                }),
                l
              );
            },
          };
        },
        S = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "/",
            e = t.indexOf("?"),
            n = {
              pathname: e > -1 ? t.substr(0, e) : t,
              search: e > -1 ? t.substr(e) : "",
            },
            r = 0,
            o = [n],
            a = [null];
          return {
            get location() {
              return o[r];
            },
            addEventListener: function (t, e) {},
            removeEventListener: function (t, e) {},
            history: {
              get entries() {
                return o;
              },
              get index() {
                return r;
              },
              get state() {
                return a[r];
              },
              pushState: function (t, e, n) {
                var i = n.split("?"),
                  u = i[0],
                  s = i[1],
                  c = void 0 === s ? "" : s;
                r++,
                  o.push({ pathname: u, search: c.length ? "?" + c : c }),
                  a.push(t);
              },
              replaceState: function (t, e, n) {
                var i = n.split("?"),
                  u = i[0],
                  s = i[1],
                  c = void 0 === s ? "" : s;
                (o[r] = { pathname: u, search: c }), (a[r] = t);
              },
              go: function (t) {
                var e = r + t;
                e < 0 || e > a.length - 1 || (r = e);
              },
            },
          };
        },
        C = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        _ = E(C ? window : S()),
        R = _.navigate,
        k =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          };
      function x(t, e) {
        var n = {};
        for (var r in t)
          e.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
        return n;
      }
      function O(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function j(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      function D(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      var L = function (t, e) {
          var n = (0, r.createContext)(e);
          return (n.displayName = t), n;
        },
        T = L("Location"),
        A = function (t) {
          var e = t.children;
          return r.createElement(T.Consumer, null, function (t) {
            return t ? e(t) : r.createElement(U, null, e);
          });
        },
        U = (function (t) {
          function e() {
            var n, r;
            O(this, e);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (n = r = j(this, t.call.apply(t, [this].concat(a)))),
              (r.state = { context: r.getContext(), refs: { unlisten: null } }),
              j(r, n)
            );
          }
          return (
            D(e, t),
            (e.prototype.getContext = function () {
              var t = this.props.history;
              return { navigate: t.navigate, location: t.location };
            }),
            (e.prototype.componentDidCatch = function (t, e) {
              if (!J(t)) throw t;
              (0, this.props.history.navigate)(t.uri, { replace: !0 });
            }),
            (e.prototype.componentDidUpdate = function (t, e) {
              e.context.location !== this.state.context.location &&
                this.props.history._onTransitionComplete();
            }),
            (e.prototype.componentDidMount = function () {
              var t = this,
                e = this.state.refs,
                n = this.props.history;
              n._onTransitionComplete(),
                (e.unlisten = n.listen(function () {
                  Promise.resolve().then(function () {
                    requestAnimationFrame(function () {
                      t.unmounted ||
                        t.setState(function () {
                          return { context: t.getContext() };
                        });
                    });
                  });
                }));
            }),
            (e.prototype.componentWillUnmount = function () {
              var t = this.state.refs;
              (this.unmounted = !0), t.unlisten();
            }),
            (e.prototype.render = function () {
              var t = this.state.context,
                e = this.props.children;
              return r.createElement(
                T.Provider,
                { value: t },
                "function" == typeof e ? e(t) : e || null
              );
            }),
            e
          );
        })(r.Component);
      U.defaultProps = { history: _ };
      var I = function (t) {
          var e = t.url,
            n = t.children,
            o = e.indexOf("?"),
            a = void 0,
            i = "";
          return (
            o > -1 ? ((a = e.substring(0, o)), (i = e.substring(o))) : (a = e),
            r.createElement(
              T.Provider,
              {
                value: {
                  location: { pathname: a, search: i, hash: "" },
                  navigate: function () {
                    throw new Error("You can't call navigate on the server.");
                  },
                },
              },
              n
            )
          );
        },
        M = L("Base", { baseuri: "/", basepath: "/", navigate: _.navigate }),
        W = function (t) {
          return r.createElement(M.Consumer, null, function (e) {
            return r.createElement(A, null, function (n) {
              return r.createElement(N, k({}, e, n, t));
            });
          });
        },
        N = (function (t) {
          function e() {
            return O(this, e), j(this, t.apply(this, arguments));
          }
          return (
            D(e, t),
            (e.prototype.render = function () {
              var t = this.props,
                e = t.location,
                n = t.navigate,
                o = t.basepath,
                a = t.primary,
                i = t.children,
                u = (t.baseuri, t.component),
                c = void 0 === u ? "div" : u,
                p = x(t, [
                  "location",
                  "navigate",
                  "basepath",
                  "primary",
                  "children",
                  "baseuri",
                  "component",
                ]),
                f = r.Children.toArray(i).reduce(function (t, e) {
                  var n = at(o)(e);
                  return t.concat(n);
                }, []),
                h = e.pathname,
                d = s(f, h);
              if (d) {
                var v = d.params,
                  m = d.uri,
                  g = d.route,
                  w = d.route.value;
                o = g.default ? o : g.path.replace(/\*$/, "");
                var y = k({}, v, {
                    uri: m,
                    location: e,
                    navigate: function (t, e) {
                      return n(l(t, m), e);
                    },
                  }),
                  b = r.cloneElement(
                    w,
                    y,
                    w.props.children
                      ? r.createElement(
                          W,
                          { location: e, primary: a },
                          w.props.children
                        )
                      : void 0
                  ),
                  P = a ? q : c,
                  E = a ? k({ uri: m, location: e, component: c }, p) : p;
                return r.createElement(
                  M.Provider,
                  { value: { baseuri: m, basepath: o, navigate: y.navigate } },
                  r.createElement(P, E, b)
                );
              }
              return null;
            }),
            e
          );
        })(r.PureComponent);
      N.defaultProps = { primary: !0 };
      var F = L("Focus"),
        q = function (t) {
          var e = t.uri,
            n = t.location,
            o = t.component,
            a = x(t, ["uri", "location", "component"]);
          return r.createElement(F.Consumer, null, function (t) {
            return r.createElement(
              G,
              k({}, a, { component: o, requestFocus: t, uri: e, location: n })
            );
          });
        },
        H = !0,
        Z = 0,
        G = (function (t) {
          function e() {
            var n, r;
            O(this, e);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (n = r = j(this, t.call.apply(t, [this].concat(a)))),
              (r.state = {}),
              (r.requestFocus = function (t) {
                !r.state.shouldFocus && t && t.focus();
              }),
              j(r, n)
            );
          }
          return (
            D(e, t),
            (e.getDerivedStateFromProps = function (t, e) {
              if (null == e.uri) return k({ shouldFocus: !0 }, t);
              var n = t.uri !== e.uri,
                r =
                  e.location.pathname !== t.location.pathname &&
                  t.location.pathname === t.uri;
              return k({ shouldFocus: n || r }, t);
            }),
            (e.prototype.componentDidMount = function () {
              Z++, this.focus();
            }),
            (e.prototype.componentWillUnmount = function () {
              0 === --Z && (H = !0);
            }),
            (e.prototype.componentDidUpdate = function (t, e) {
              t.location !== this.props.location &&
                this.state.shouldFocus &&
                this.focus();
            }),
            (e.prototype.focus = function () {
              var t = this.props.requestFocus;
              t
                ? t(this.node)
                : H
                ? (H = !1)
                : this.node &&
                  (this.node.contains(document.activeElement) ||
                    this.node.focus());
            }),
            (e.prototype.render = function () {
              var t = this,
                e = this.props,
                n = (e.children, e.style),
                o = (e.requestFocus, e.component),
                a = void 0 === o ? "div" : o,
                i =
                  (e.uri,
                  e.location,
                  x(e, [
                    "children",
                    "style",
                    "requestFocus",
                    "component",
                    "uri",
                    "location",
                  ]));
              return r.createElement(
                a,
                k(
                  {
                    style: k({ outline: "none" }, n),
                    tabIndex: "-1",
                    ref: function (e) {
                      return (t.node = e);
                    },
                  },
                  i
                ),
                r.createElement(
                  F.Provider,
                  { value: this.requestFocus },
                  this.props.children
                )
              );
            }),
            e
          );
        })(r.Component);
      (0, i.O)(G);
      var Q = function () {},
        B = r.forwardRef;
      void 0 === B &&
        (B = function (t) {
          return t;
        });
      var K = B(function (t, e) {
        var n = t.innerRef,
          o = x(t, ["innerRef"]);
        return r.createElement(M.Consumer, null, function (t) {
          t.basepath;
          var a = t.baseuri;
          return r.createElement(A, null, function (t) {
            var i = t.location,
              s = t.navigate,
              c = o.to,
              p = o.state,
              f = o.replace,
              h = o.getProps,
              d = void 0 === h ? Q : h,
              v = x(o, ["to", "state", "replace", "getProps"]),
              m = l(c, a),
              g = encodeURI(m),
              w = i.pathname === g,
              y = u(i.pathname, g);
            return r.createElement(
              "a",
              k(
                { ref: e || n, "aria-current": w ? "page" : void 0 },
                v,
                d({
                  isCurrent: w,
                  isPartiallyCurrent: y,
                  href: m,
                  location: i,
                }),
                {
                  href: m,
                  onClick: function (t) {
                    if ((v.onClick && v.onClick(t), it(t))) {
                      t.preventDefault();
                      var e = f;
                      if ("boolean" != typeof f && w) {
                        var n = k({}, i.state),
                          r = (n.key, x(n, ["key"]));
                        (o = k({}, p)),
                          (a = r),
                          (e =
                            (u = Object.keys(o)).length ===
                              Object.keys(a).length &&
                            u.every(function (t) {
                              return a.hasOwnProperty(t) && o[t] === a[t];
                            }));
                      }
                      s(m, { state: p, replace: e });
                    }
                    var o, a, u;
                  },
                }
              )
            );
          });
        });
      });
      function V(t) {
        this.uri = t;
      }
      K.displayName = "Link";
      var J = function (t) {
          return t instanceof V;
        },
        $ = function (t) {
          throw new V(t);
        },
        z = (function (t) {
          function e() {
            return O(this, e), j(this, t.apply(this, arguments));
          }
          return (
            D(e, t),
            (e.prototype.componentDidMount = function () {
              var t = this.props,
                e = t.navigate,
                n = t.to,
                r = (t.from, t.replace),
                o = void 0 === r || r,
                a = t.state,
                i = (t.noThrow, t.baseuri),
                u = x(t, [
                  "navigate",
                  "to",
                  "from",
                  "replace",
                  "state",
                  "noThrow",
                  "baseuri",
                ]);
              Promise.resolve().then(function () {
                var t = l(n, i);
                e(p(t, u), { replace: o, state: a });
              });
            }),
            (e.prototype.render = function () {
              var t = this.props,
                e = (t.navigate, t.to),
                n = (t.from, t.replace, t.state, t.noThrow),
                r = t.baseuri,
                o = x(t, [
                  "navigate",
                  "to",
                  "from",
                  "replace",
                  "state",
                  "noThrow",
                  "baseuri",
                ]),
                a = l(e, r);
              return n || $(p(a, o)), null;
            }),
            e
          );
        })(r.Component),
        Y = function (t) {
          return r.createElement(M.Consumer, null, function (e) {
            var n = e.baseuri;
            return r.createElement(A, null, function (e) {
              return r.createElement(z, k({}, e, { baseuri: n }, t));
            });
          });
        },
        X = function (t) {
          var e = t.path,
            n = t.children;
          return r.createElement(M.Consumer, null, function (t) {
            var o = t.baseuri;
            return r.createElement(A, null, function (t) {
              var r = t.navigate,
                a = t.location,
                i = l(e, o),
                u = c(i, a.pathname);
              return n({
                navigate: r,
                location: a,
                match: u ? k({}, u.params, { uri: u.uri, path: e }) : null,
              });
            });
          });
        },
        tt = function () {
          var t = (0, r.useContext)(T);
          if (!t)
            throw new Error(
              "useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          return t.location;
        },
        et = function () {
          var t = (0, r.useContext)(M);
          if (!t)
            throw new Error(
              "useNavigate hook was used but a BaseContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          return t.navigate;
        },
        nt = function () {
          var t = (0, r.useContext)(M);
          if (!t)
            throw new Error(
              "useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          var e = tt(),
            n = c(t.basepath, e.pathname);
          return n ? n.params : null;
        },
        rt = function (t) {
          if (!t)
            throw new Error(
              "useMatch(path: string) requires an argument of a string to match against"
            );
          var e = (0, r.useContext)(M);
          if (!e)
            throw new Error(
              "useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          var n = tt(),
            o = l(t, e.baseuri),
            a = c(o, n.pathname);
          return a ? k({}, a.params, { uri: a.uri, path: t }) : null;
        },
        ot = function (t) {
          return t.replace(/(^\/+|\/+$)/g, "");
        },
        at = function t(e) {
          return function (n) {
            if (!n) return null;
            if (n.type === r.Fragment && n.props.children)
              return r.Children.map(n.props.children, t(e));
            var o, i, u;
            if (
              (n.props.path || n.props.default || n.type === Y || a()(!1),
              n.type !== Y || (n.props.from && n.props.to) || a()(!1),
              n.type === Y &&
                ((o = n.props.from),
                (i = n.props.to),
                (u = function (t) {
                  return h(t);
                }),
                g(o).filter(u).sort().join("/") !==
                  g(i).filter(u).sort().join("/")) &&
                a()(!1),
              n.props.default)
            )
              return { value: n, default: !0 };
            var s = n.type === Y ? n.props.from : n.props.path,
              c = "/" === s ? e : ot(e) + "/" + ot(s);
            return {
              value: n,
              default: n.props.default,
              path: n.props.children ? ot(c) + "/*" : c,
            };
          };
        },
        it = function (t) {
          return (
            !t.defaultPrevented &&
            0 === t.button &&
            !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
          );
        };
    },
    1143: function (t) {
      "use strict";
      t.exports = function (t, e, n, r, o, a, i, u) {
        if (!t) {
          var s;
          if (void 0 === e)
            s = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var c = [n, r, o, a, i, u],
              l = 0;
            (s = new Error(
              e.replace(/%s/g, function () {
                return c[l++];
              })
            )).name = "Invariant Violation";
          }
          throw ((s.framesToPop = 1), s);
        }
      };
    },
    7600: function (t, e, n) {
      "use strict";
      function r(t, e) {
        return (r =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function o(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          r(t, e);
      }
      n.d(e, {
        Z: function () {
          return o;
        },
      });
    },
  },
  function (t) {
    t.O(0, [774, 351], function () {
      return (e = 8053), t((t.s = e));
      var e;
    });
    t.O();
  },
]);
//# sourceMappingURL=app-3000561a62d42ef5bbe8.js.map
