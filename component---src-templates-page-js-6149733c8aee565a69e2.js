(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    "9IIH": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var a = n("9Hrx"),
        i = n("mwIZ"),
        r = n.n(i),
        s = n("q1tI"),
        c = n.n(s),
        o = n("7Qib"),
        l =
          (n("iBsI"),
          (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (
              Object(a.a)(t, e),
              (t.prototype.render = function () {
                var e = r()(this.props, "title"),
                  t = r()(this.props, "subtitle");
                return c.a.createElement(
                  "div",
                  { className: "section-hero" },
                  c.a.createElement(
                    "h1",
                    { className: "section-hero-title" },
                    e
                  ),
                  c.a.createElement(
                    "div",
                    { className: "section-hero-subtitle" },
                    Object(o.f)(t)
                  )
                );
              }),
              t
            );
          })(c.a.Component));
    },
    BGUL: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var a = n("9Hrx"),
        i = n("q1tI"),
        r = n.n(i),
        s = n("7Qib"),
        c =
          (n("xoQH"),
          (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (
              Object(a.a)(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.children,
                  n = e.isFirst,
                  a = e.isLast,
                  i = e.orientation,
                  c = void 0 === i ? "left" : i,
                  o = e.theme,
                  l = Object(s.b)(
                    "stackable-section",
                    !n && "stackable-section-effect-top",
                    !a && "stackable-section-effect-bottom",
                    "stackable-section-orientation-" + c,
                    o && "stackable-section-theme-" + o
                  );
                return r.a.createElement(
                  "section",
                  { className: l },
                  r.a.createElement(
                    "div",
                    { className: "stackable-section-inner" },
                    r.a.createElement(
                      "div",
                      { className: "stackable-section-content inner" },
                      t
                    )
                  )
                );
              }),
              t
            );
          })(r.a.Component));
    },
    iBsI: function (e, t, n) {},
    sweJ: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return p;
        });
      var a = n("9Hrx"),
        i = n("mwIZ"),
        r = n.n(i),
        s = n("q1tI"),
        c = n.n(s),
        o = n("Kvkj"),
        l = n("7Qib"),
        u = n("BGUL"),
        m = n("9IIH"),
        p = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            Object(a.a)(t, e),
            (t.prototype.render = function () {
              var e = r()(this.props, "pageContext"),
                t = r()(e, "frontmatter"),
                n = r()(t, "title"),
                a = r()(t, "subtitle"),
                i = r()(e, "html");
              return c.a.createElement(
                o.b,
                { page: e },
                c.a.createElement(
                  "article",
                  { className: "post page" },
                  c.a.createElement(
                    u.a,
                    { isFirst: !0, orientation: "right", theme: "none" },
                    c.a.createElement(m.a, { title: n, subtitle: a })
                  ),
                  c.a.createElement(
                    "div",
                    { className: "outer" },
                    c.a.createElement(
                      "div",
                      { className: "inner-sm" },
                      c.a.createElement(
                        "div",
                        { className: "post-content" },
                        Object(l.e)(i)
                      )
                    )
                  )
                )
              );
            }),
            t
          );
        })(c.a.Component);
    },
    xoQH: function (e, t, n) {},
  },
]);
//# sourceMappingURL=component---src-templates-page-js-6149733c8aee565a69e2.js.map
