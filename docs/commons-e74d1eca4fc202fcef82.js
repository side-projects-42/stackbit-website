(self.webpackChunkstackbit_docs = self.webpackChunkstackbit_docs || []).push([
  [351],
  {
    9923: function (t) {
      t.exports = function (t) {
        if ("function" != typeof t)
          throw TypeError(String(t) + " is not a function");
        return t;
      };
    },
    1237: function (t, n, r) {
      var e = r(2933);
      t.exports = function (t) {
        if (!e(t)) throw TypeError(String(t) + " is not an object");
        return t;
      };
    },
    3999: function (t, n, r) {
      var e = r(8314),
        o = r(4942),
        i = r(7580),
        u = function (t) {
          return function (n, r, u) {
            var c,
              f = e(n),
              a = o(f.length),
              s = i(u, a);
            if (t && r != r) {
              for (; a > s; ) if ((c = f[s++]) != c) return !0;
            } else
              for (; a > s; s++)
                if ((t || s in f) && f[s] === r) return t || s || 0;
            return !t && -1;
          };
        };
      t.exports = { includes: u(!0), indexOf: u(!1) };
    },
    9035: function (t) {
      var n = {}.toString;
      t.exports = function (t) {
        return n.call(t).slice(8, -1);
      };
    },
    3826: function (t, n, r) {
      var e = r(1267),
        o = r(5107),
        i = r(8601),
        u = r(2125);
      t.exports = function (t, n) {
        for (var r = o(n), c = u.f, f = i.f, a = 0; a < r.length; a++) {
          var s = r[a];
          e(t, s) || c(t, s, f(n, s));
        }
      };
    },
    2921: function (t, n, r) {
      var e = r(4691),
        o = r(2125),
        i = r(1771);
      t.exports = e
        ? function (t, n, r) {
            return o.f(t, n, i(1, r));
          }
        : function (t, n, r) {
            return (t[n] = r), t;
          };
    },
    1771: function (t) {
      t.exports = function (t, n) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: n,
        };
      };
    },
    4691: function (t, n, r) {
      var e = r(3235);
      t.exports = !e(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      });
    },
    2035: function (t, n, r) {
      var e = r(4075),
        o = r(2933),
        i = e.document,
        u = o(i) && o(i.createElement);
      t.exports = function (t) {
        return u ? i.createElement(t) : {};
      };
    },
    1391: function (t, n, r) {
      var e = r(3409);
      t.exports = e("navigator", "userAgent") || "";
    },
    1080: function (t, n, r) {
      var e,
        o,
        i = r(4075),
        u = r(1391),
        c = i.process,
        f = i.Deno,
        a = (c && c.versions) || (f && f.version),
        s = a && a.v8;
      s
        ? (o = (e = s.split("."))[0] < 4 ? 1 : e[0] + e[1])
        : u &&
          (!(e = u.match(/Edge\/(\d+)/)) || e[1] >= 74) &&
          (e = u.match(/Chrome\/(\d+)/)) &&
          (o = e[1]),
        (t.exports = o && +o);
    },
    9526: function (t) {
      t.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ];
    },
    8845: function (t, n, r) {
      var e = r(4075),
        o = r(8601).f,
        i = r(2921),
        u = r(4089),
        c = r(8878),
        f = r(3826),
        a = r(5243);
      t.exports = function (t, n) {
        var r,
          s,
          p,
          l,
          v,
          y = t.target,
          h = t.global,
          b = t.stat;
        if ((r = h ? e : b ? e[y] || c(y, {}) : (e[y] || {}).prototype))
          for (s in n) {
            if (
              ((l = n[s]),
              (p = t.noTargetGet ? (v = o(r, s)) && v.value : r[s]),
              !a(h ? s : y + (b ? "." : "#") + s, t.forced) && void 0 !== p)
            ) {
              if (typeof l == typeof p) continue;
              f(l, p);
            }
            (t.sham || (p && p.sham)) && i(l, "sham", !0), u(r, s, l, t);
          }
      };
    },
    3235: function (t) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (n) {
          return !0;
        }
      };
    },
    3409: function (t, n, r) {
      var e = r(4075),
        o = function (t) {
          return "function" == typeof t ? t : void 0;
        };
      t.exports = function (t, n) {
        return arguments.length < 2 ? o(e[t]) : e[t] && e[t][n];
      };
    },
    4075: function (t, n, r) {
      var e = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports =
        e("object" == typeof globalThis && globalThis) ||
        e("object" == typeof window && window) ||
        e("object" == typeof self && self) ||
        e("object" == typeof r.g && r.g) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    },
    1267: function (t, n, r) {
      var e = r(8415),
        o = {}.hasOwnProperty;
      t.exports =
        Object.hasOwn ||
        function (t, n) {
          return o.call(e(t), n);
        };
    },
    1985: function (t) {
      t.exports = {};
    },
    5659: function (t, n, r) {
      var e = r(4691),
        o = r(3235),
        i = r(2035);
      t.exports =
        !e &&
        !o(function () {
          return (
            7 !=
            Object.defineProperty(i("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    8266: function (t, n, r) {
      var e = r(3235),
        o = r(9035),
        i = "".split;
      t.exports = e(function () {
        return !Object("z").propertyIsEnumerable(0);
      })
        ? function (t) {
            return "String" == o(t) ? i.call(t, "") : Object(t);
          }
        : Object;
    },
    2152: function (t, n, r) {
      var e = r(1284),
        o = Function.toString;
      "function" != typeof e.inspectSource &&
        (e.inspectSource = function (t) {
          return o.call(t);
        }),
        (t.exports = e.inspectSource);
    },
    278: function (t, n, r) {
      var e,
        o,
        i,
        u = r(5727),
        c = r(4075),
        f = r(2933),
        a = r(2921),
        s = r(1267),
        p = r(1284),
        l = r(5746),
        v = r(1985),
        y = "Object already initialized",
        h = c.WeakMap;
      if (u || p.state) {
        var b = p.state || (p.state = new h()),
          g = b.get,
          x = b.has,
          m = b.set;
        (e = function (t, n) {
          if (x.call(b, t)) throw new TypeError(y);
          return (n.facade = t), m.call(b, t, n), n;
        }),
          (o = function (t) {
            return g.call(b, t) || {};
          }),
          (i = function (t) {
            return x.call(b, t);
          });
      } else {
        var d = l("state");
        (v[d] = !0),
          (e = function (t, n) {
            if (s(t, d)) throw new TypeError(y);
            return (n.facade = t), a(t, d, n), n;
          }),
          (o = function (t) {
            return s(t, d) ? t[d] : {};
          }),
          (i = function (t) {
            return s(t, d);
          });
      }
      t.exports = {
        set: e,
        get: o,
        has: i,
        enforce: function (t) {
          return i(t) ? o(t) : e(t, {});
        },
        getterFor: function (t) {
          return function (n) {
            var r;
            if (!f(n) || (r = o(n)).type !== t)
              throw TypeError("Incompatible receiver, " + t + " required");
            return r;
          };
        },
      };
    },
    5243: function (t, n, r) {
      var e = r(3235),
        o = /#|\.prototype\./,
        i = function (t, n) {
          var r = c[u(t)];
          return r == a || (r != f && ("function" == typeof n ? e(n) : !!n));
        },
        u = (i.normalize = function (t) {
          return String(t).replace(o, ".").toLowerCase();
        }),
        c = (i.data = {}),
        f = (i.NATIVE = "N"),
        a = (i.POLYFILL = "P");
      t.exports = i;
    },
    2933: function (t) {
      t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t;
      };
    },
    9953: function (t) {
      t.exports = !1;
    },
    5970: function (t, n, r) {
      var e = r(3409),
        o = r(221);
      t.exports = o
        ? function (t) {
            return "symbol" == typeof t;
          }
        : function (t) {
            var n = e("Symbol");
            return "function" == typeof n && Object(t) instanceof n;
          };
    },
    4713: function (t, n, r) {
      var e = r(4075);
      t.exports = e.Promise;
    },
    1782: function (t, n, r) {
      var e = r(1080),
        o = r(3235);
      t.exports =
        !!Object.getOwnPropertySymbols &&
        !o(function () {
          var t = Symbol();
          return (
            !String(t) ||
            !(Object(t) instanceof Symbol) ||
            (!Symbol.sham && e && e < 41)
          );
        });
    },
    5727: function (t, n, r) {
      var e = r(4075),
        o = r(2152),
        i = e.WeakMap;
      t.exports = "function" == typeof i && /native code/.test(o(i));
    },
    7373: function (t, n, r) {
      "use strict";
      var e = r(9923),
        o = function (t) {
          var n, r;
          (this.promise = new t(function (t, e) {
            if (void 0 !== n || void 0 !== r)
              throw TypeError("Bad Promise constructor");
            (n = t), (r = e);
          })),
            (this.resolve = e(n)),
            (this.reject = e(r));
        };
      t.exports.f = function (t) {
        return new o(t);
      };
    },
    2125: function (t, n, r) {
      var e = r(4691),
        o = r(5659),
        i = r(1237),
        u = r(5740),
        c = Object.defineProperty;
      n.f = e
        ? c
        : function (t, n, r) {
            if ((i(t), (n = u(n)), i(r), o))
              try {
                return c(t, n, r);
              } catch (e) {}
            if ("get" in r || "set" in r)
              throw TypeError("Accessors not supported");
            return "value" in r && (t[n] = r.value), t;
          };
    },
    8601: function (t, n, r) {
      var e = r(4691),
        o = r(6209),
        i = r(1771),
        u = r(8314),
        c = r(5740),
        f = r(1267),
        a = r(5659),
        s = Object.getOwnPropertyDescriptor;
      n.f = e
        ? s
        : function (t, n) {
            if (((t = u(t)), (n = c(n)), a))
              try {
                return s(t, n);
              } catch (r) {}
            if (f(t, n)) return i(!o.f.call(t, n), t[n]);
          };
    },
    6483: function (t, n, r) {
      var e = r(5129),
        o = r(9526).concat("length", "prototype");
      n.f =
        Object.getOwnPropertyNames ||
        function (t) {
          return e(t, o);
        };
    },
    9140: function (t, n) {
      n.f = Object.getOwnPropertySymbols;
    },
    5129: function (t, n, r) {
      var e = r(1267),
        o = r(8314),
        i = r(3999).indexOf,
        u = r(1985);
      t.exports = function (t, n) {
        var r,
          c = o(t),
          f = 0,
          a = [];
        for (r in c) !e(u, r) && e(c, r) && a.push(r);
        for (; n.length > f; ) e(c, (r = n[f++])) && (~i(a, r) || a.push(r));
        return a;
      };
    },
    6209: function (t, n) {
      "use strict";
      var r = {}.propertyIsEnumerable,
        e = Object.getOwnPropertyDescriptor,
        o = e && !r.call({ 1: 2 }, 1);
      n.f = o
        ? function (t) {
            var n = e(this, t);
            return !!n && n.enumerable;
          }
        : r;
    },
    2835: function (t, n, r) {
      var e = r(2933);
      t.exports = function (t, n) {
        var r, o;
        if (
          "string" === n &&
          "function" == typeof (r = t.toString) &&
          !e((o = r.call(t)))
        )
          return o;
        if ("function" == typeof (r = t.valueOf) && !e((o = r.call(t))))
          return o;
        if (
          "string" !== n &&
          "function" == typeof (r = t.toString) &&
          !e((o = r.call(t)))
        )
          return o;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    5107: function (t, n, r) {
      var e = r(3409),
        o = r(6483),
        i = r(9140),
        u = r(1237);
      t.exports =
        e("Reflect", "ownKeys") ||
        function (t) {
          var n = o.f(u(t)),
            r = i.f;
          return r ? n.concat(r(t)) : n;
        };
    },
    4265: function (t, n, r) {
      var e = r(1237),
        o = r(2933),
        i = r(7373);
      t.exports = function (t, n) {
        if ((e(t), o(n) && n.constructor === t)) return n;
        var r = i.f(t);
        return (0, r.resolve)(n), r.promise;
      };
    },
    4089: function (t, n, r) {
      var e = r(4075),
        o = r(2921),
        i = r(1267),
        u = r(8878),
        c = r(2152),
        f = r(278),
        a = f.get,
        s = f.enforce,
        p = String(String).split("String");
      (t.exports = function (t, n, r, c) {
        var f,
          a = !!c && !!c.unsafe,
          l = !!c && !!c.enumerable,
          v = !!c && !!c.noTargetGet;
        "function" == typeof r &&
          ("string" != typeof n || i(r, "name") || o(r, "name", n),
          (f = s(r)).source ||
            (f.source = p.join("string" == typeof n ? n : ""))),
          t !== e
            ? (a ? !v && t[n] && (l = !0) : delete t[n],
              l ? (t[n] = r) : o(t, n, r))
            : l
            ? (t[n] = r)
            : u(n, r);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && a(this).source) || c(this);
      });
    },
    6660: function (t) {
      t.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t;
      };
    },
    8878: function (t, n, r) {
      var e = r(4075);
      t.exports = function (t, n) {
        try {
          Object.defineProperty(e, t, {
            value: n,
            configurable: !0,
            writable: !0,
          });
        } catch (r) {
          e[t] = n;
        }
        return n;
      };
    },
    5746: function (t, n, r) {
      var e = r(9709),
        o = r(6819),
        i = e("keys");
      t.exports = function (t) {
        return i[t] || (i[t] = o(t));
      };
    },
    1284: function (t, n, r) {
      var e = r(4075),
        o = r(8878),
        i = "__core-js_shared__",
        u = e[i] || o(i, {});
      t.exports = u;
    },
    9709: function (t, n, r) {
      var e = r(9953),
        o = r(1284);
      (t.exports = function (t, n) {
        return o[t] || (o[t] = void 0 !== n ? n : {});
      })("versions", []).push({
        version: "3.16.0",
        mode: e ? "pure" : "global",
        copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
      });
    },
    2038: function (t, n, r) {
      var e = r(1237),
        o = r(9923),
        i = r(1487)("species");
      t.exports = function (t, n) {
        var r,
          u = e(t).constructor;
        return void 0 === u || null == (r = e(u)[i]) ? n : o(r);
      };
    },
    7580: function (t, n, r) {
      var e = r(1697),
        o = Math.max,
        i = Math.min;
      t.exports = function (t, n) {
        var r = e(t);
        return r < 0 ? o(r + n, 0) : i(r, n);
      };
    },
    8314: function (t, n, r) {
      var e = r(8266),
        o = r(6660);
      t.exports = function (t) {
        return e(o(t));
      };
    },
    1697: function (t) {
      var n = Math.ceil,
        r = Math.floor;
      t.exports = function (t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
      };
    },
    4942: function (t, n, r) {
      var e = r(1697),
        o = Math.min;
      t.exports = function (t) {
        return t > 0 ? o(e(t), 9007199254740991) : 0;
      };
    },
    8415: function (t, n, r) {
      var e = r(6660);
      t.exports = function (t) {
        return Object(e(t));
      };
    },
    6943: function (t, n, r) {
      var e = r(2933),
        o = r(5970),
        i = r(2835),
        u = r(1487)("toPrimitive");
      t.exports = function (t, n) {
        if (!e(t) || o(t)) return t;
        var r,
          c = t[u];
        if (void 0 !== c) {
          if (
            (void 0 === n && (n = "default"), (r = c.call(t, n)), !e(r) || o(r))
          )
            return r;
          throw TypeError("Can't convert object to primitive value");
        }
        return void 0 === n && (n = "number"), i(t, n);
      };
    },
    5740: function (t, n, r) {
      var e = r(6943),
        o = r(5970);
      t.exports = function (t) {
        var n = e(t, "string");
        return o(n) ? n : String(n);
      };
    },
    6819: function (t) {
      var n = 0,
        r = Math.random();
      t.exports = function (t) {
        return (
          "Symbol(" +
          String(void 0 === t ? "" : t) +
          ")_" +
          (++n + r).toString(36)
        );
      };
    },
    221: function (t, n, r) {
      var e = r(1782);
      t.exports = e && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    1487: function (t, n, r) {
      var e = r(4075),
        o = r(9709),
        i = r(1267),
        u = r(6819),
        c = r(1782),
        f = r(221),
        a = o("wks"),
        s = e.Symbol,
        p = f ? s : (s && s.withoutSetter) || u;
      t.exports = function (t) {
        return (
          (i(a, t) && (c || "string" == typeof a[t])) ||
            (c && i(s, t) ? (a[t] = s[t]) : (a[t] = p("Symbol." + t))),
          a[t]
        );
      };
    },
    7420: function (t, n, r) {
      "use strict";
      var e = r(8845),
        o = r(9953),
        i = r(4713),
        u = r(3235),
        c = r(3409),
        f = r(2038),
        a = r(4265),
        s = r(4089);
      if (
        (e(
          {
            target: "Promise",
            proto: !0,
            real: !0,
            forced:
              !!i &&
              u(function () {
                i.prototype.finally.call(
                  { then: function () {} },
                  function () {}
                );
              }),
          },
          {
            finally: function (t) {
              var n = f(this, c("Promise")),
                r = "function" == typeof t;
              return this.then(
                r
                  ? function (r) {
                      return a(n, t()).then(function () {
                        return r;
                      });
                    }
                  : t,
                r
                  ? function (r) {
                      return a(n, t()).then(function () {
                        throw r;
                      });
                    }
                  : t
              );
            },
          }
        ),
        !o && "function" == typeof i)
      ) {
        var p = c("Promise").prototype.finally;
        i.prototype.finally !== p &&
          s(i.prototype, "finally", p, { unsafe: !0 });
      }
    },
  },
]);
//# sourceMappingURL=commons-e74d1eca4fc202fcef82.js.map
