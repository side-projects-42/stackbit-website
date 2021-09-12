(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    "1iNE": function (t, e, n) {
      var r = n("A90E"),
        o = n("QqLw"),
        i = n("MMmD"),
        a = n("4qC0"),
        c = n("Z1HP");
      t.exports = function (t) {
        if (null == t) return 0;
        if (i(t)) return a(t) ? c(t) : t.length;
        var e = o(t);
        return "[object Map]" == e || "[object Set]" == e
          ? t.size
          : r(t).length;
      };
    },
    "4qC0": function (t, e, n) {
      var r = n("NykK"),
        o = n("Z0cm"),
        i = n("ExA7");
      t.exports = function (t) {
        return (
          "string" == typeof t || (!o(t) && i(t) && "[object String]" == r(t))
        );
      };
    },
    "9IIH": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return u;
      });
      var r = n("9Hrx"),
        o = n("mwIZ"),
        i = n.n(o),
        a = n("q1tI"),
        c = n.n(a),
        s = n("7Qib"),
        u =
          (n("iBsI"),
          (function (t) {
            function e() {
              return t.apply(this, arguments) || this;
            }
            return (
              Object(r.a)(e, t),
              (e.prototype.render = function () {
                var t = i()(this.props, "title"),
                  e = i()(this.props, "subtitle");
                return c.a.createElement(
                  "div",
                  { className: "section-hero" },
                  c.a.createElement(
                    "h1",
                    { className: "section-hero-title" },
                    t
                  ),
                  c.a.createElement(
                    "div",
                    { className: "section-hero-subtitle" },
                    Object(s.f)(e)
                  )
                );
              }),
              e
            );
          })(c.a.Component));
    },
    BGUL: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      });
      var r = n("9Hrx"),
        o = n("q1tI"),
        i = n.n(o),
        a = n("7Qib"),
        c =
          (n("xoQH"),
          (function (t) {
            function e() {
              return t.apply(this, arguments) || this;
            }
            return (
              Object(r.a)(e, t),
              (e.prototype.render = function () {
                var t = this.props,
                  e = t.children,
                  n = t.isFirst,
                  r = t.isLast,
                  o = t.orientation,
                  c = void 0 === o ? "left" : o,
                  s = t.theme,
                  u = Object(a.b)(
                    "stackable-section",
                    !n && "stackable-section-effect-top",
                    !r && "stackable-section-effect-bottom",
                    "stackable-section-orientation-" + c,
                    s && "stackable-section-theme-" + s
                  );
                return i.a.createElement(
                  "section",
                  { className: u },
                  i.a.createElement(
                    "div",
                    { className: "stackable-section-inner" },
                    i.a.createElement(
                      "div",
                      { className: "stackable-section-content inner" },
                      e
                    )
                  )
                );
              }),
              e
            );
          })(i.a.Component));
    },
    Z1HP: function (t, e, n) {
      var r = n("ycre"),
        o = n("quyA"),
        i = n("q4HE");
      t.exports = function (t) {
        return o(t) ? i(t) : r(t);
      };
    },
    iBsI: function (t, e, n) {},
    q4HE: function (t, e) {
      var n = "[\\ud800-\\udfff]",
        r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        o = "\\ud83c[\\udffb-\\udfff]",
        i = "[^\\ud800-\\udfff]",
        a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        c = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        s = "(?:" + r + "|" + o + ")" + "?",
        u =
          "[\\ufe0e\\ufe0f]?" +
          s +
          ("(?:\\u200d(?:" +
            [i, a, c].join("|") +
            ")[\\ufe0e\\ufe0f]?" +
            s +
            ")*"),
        f = "(?:" + [i + r + "?", r, a, c, n].join("|") + ")",
        l = RegExp(o + "(?=" + o + ")|" + f + u, "g");
      t.exports = function (t) {
        for (var e = (l.lastIndex = 0); l.test(t); ) ++e;
        return e;
      };
    },
    tesP: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function () {
          return m;
        });
      var r = n("9Hrx"),
        o = n("3WF5"),
        i = n.n(o),
        a = n("1iNE"),
        c = n.n(a),
        s = n("mwIZ"),
        u = n.n(s),
        f = n("q1tI"),
        l = n.n(f),
        p = n("Kvkj"),
        d = n("9IIH"),
        b = n("BGUL"),
        m = (function (t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          return (
            Object(r.a)(e, t),
            (e.prototype.render = function () {
              var t = this,
                e = u()(this.props, "pageContext"),
                n = u()(e, "frontmatter"),
                r = u()(n, "title"),
                o = u()(n, "subtitle"),
                a = u()(n, "sections"),
                s = c()(a),
                f = u()(n, "show_header", !0);
              return l.a.createElement(
                p.b,
                { page: e },
                f &&
                  l.a.createElement(
                    b.a,
                    { isFirst: !0, orientation: "right", theme: "none" },
                    l.a.createElement(d.a, { title: r, subtitle: o })
                  ),
                i()(a, function (e, n) {
                  var r,
                    o = n + 1,
                    i = n === s - 1,
                    a = u()(t.props, [
                      "pageContext",
                      "frontmatter",
                      "sections",
                      o,
                    ]),
                    c = a ? u()(a, "bg_color") : "none",
                    f = p.c[u()(e, "component")];
                  return (
                    (r =
                      "light" === e.bg_color
                        ? "light"
                        : "dark" === e.bg_color
                        ? "dark"
                        : "none"),
                    l.a.createElement(
                      b.a,
                      {
                        key: n,
                        orientation: o % 2 == 0 ? "right" : "left",
                        theme: r,
                      },
                      l.a.createElement(f, {
                        section: Object.assign({}, e, { theme: r }),
                        site: t.props.pageContext.site,
                        last: i,
                        next_bg: c,
                      })
                    )
                  );
                })
              );
            }),
            e
          );
        })(l.a.Component);
    },
    xoQH: function (t, e, n) {},
    ycre: function (t, e, n) {
      var r = n("711d")("length");
      t.exports = r;
    },
  },
]);
//# sourceMappingURL=component---src-templates-custom-js-f635f044ba2aa8aef3d0.js.map
