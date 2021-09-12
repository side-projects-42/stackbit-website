(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    "1LK5": function (e, t) {
      e.exports = function (e, t) {
        var n = e.length;
        for (e.sort(t); n--; ) e[n] = e[n].value;
        return e;
      };
    },
    "9IIH": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var r = n("9Hrx"),
        a = n("mwIZ"),
        i = n.n(a),
        c = n("q1tI"),
        o = n.n(c),
        s = n("7Qib"),
        l =
          (n("iBsI"),
          (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (
              Object(r.a)(t, e),
              (t.prototype.render = function () {
                var e = i()(this.props, "title"),
                  t = i()(this.props, "subtitle");
                return o.a.createElement(
                  "div",
                  { className: "section-hero" },
                  o.a.createElement(
                    "h1",
                    { className: "section-hero-title" },
                    e
                  ),
                  o.a.createElement(
                    "div",
                    { className: "section-hero-subtitle" },
                    Object(s.f)(t)
                  )
                );
              }),
              t
            );
          })(o.a.Component));
    },
    BGUL: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var r = n("9Hrx"),
        a = n("q1tI"),
        i = n.n(a),
        c = n("7Qib"),
        o =
          (n("xoQH"),
          (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (
              Object(r.a)(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.children,
                  n = e.isFirst,
                  r = e.isLast,
                  a = e.orientation,
                  o = void 0 === a ? "left" : a,
                  s = e.theme,
                  l = Object(c.b)(
                    "stackable-section",
                    !n && "stackable-section-effect-top",
                    !r && "stackable-section-effect-bottom",
                    "stackable-section-orientation-" + o,
                    s && "stackable-section-theme-" + s
                  );
                return i.a.createElement(
                  "section",
                  { className: l },
                  i.a.createElement(
                    "div",
                    { className: "stackable-section-inner" },
                    i.a.createElement(
                      "div",
                      { className: "stackable-section-content inner" },
                      t
                    )
                  )
                );
              }),
              t
            );
          })(i.a.Component));
    },
    IWTy: function (e, t, n) {
      var r = n("yue5");
      e.exports = function (e, t, n) {
        for (
          var a = -1,
            i = e.criteria,
            c = t.criteria,
            o = i.length,
            s = n.length;
          ++a < o;

        ) {
          var l = r(i[a], c[a]);
          if (l) return a >= s ? l : l * ("desc" == n[a] ? -1 : 1);
        }
        return e.index - t.index;
      };
    },
    "X/X3": function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return g;
        });
      var r = n("9Hrx"),
        a = n("3WF5"),
        i = n.n(a),
        c = n("k4Da"),
        o = n.n(c),
        s = n("k8Y/"),
        l = n.n(s),
        u = n("mwIZ"),
        m = n.n(u),
        f = n("q1tI"),
        d = n.n(f),
        p = n("O+Ac"),
        h = n.n(p),
        v = n("Kvkj"),
        b = n("7Qib"),
        E = n("BGUL"),
        x = n("9IIH"),
        g = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            Object(r.a)(t, e),
            (t.prototype.render = function () {
              var e = m()(this.props, "pageContext"),
                t = m()(e, "frontmatter"),
                n = m()(t, "title"),
                r = l()(
                  Object(b.d)(this.props.pageContext.pages, "/"),
                  "frontmatter.title"
                ),
                a = l()(
                  Object(b.d)(this.props.pageContext.pages, "/alternative-to"),
                  "frontmatter.title"
                ),
                c = l()(
                  o()(
                    Object(b.d)(this.props.pageContext.pages, "/blog"),
                    function (e) {
                      return "index.md" !== m()(e, "base");
                    }
                  ),
                  "frontmatter.date",
                  "desc"
                );
              return d.a.createElement(
                v.b,
                { page: e },
                d.a.createElement(
                  E.a,
                  { isFirst: !0, orientation: "right", theme: "none" },
                  d.a.createElement(x.a, { title: n })
                ),
                d.a.createElement(
                  "div",
                  { className: "site-index-list outer" },
                  d.a.createElement(
                    "div",
                    { className: "inner-md" },
                    d.a.createElement(
                      "div",
                      { className: "columns" },
                      d.a.createElement(
                        "div",
                        null,
                        d.a.createElement(
                          "h2",
                          { className: "site-index-title" },
                          "Pages"
                        ),
                        i()(r, function (e, t) {
                          if (!m()(e, "frontmatter.hide_from_site_index"))
                            return d.a.createElement(
                              "article",
                              { key: t, className: "site-index-item" },
                              d.a.createElement(
                                "h3",
                                null,
                                d.a.createElement(
                                  b.a,
                                  { to: Object(b.g)(m()(e, "url")) },
                                  m()(e, "frontmatter.title")
                                )
                              )
                            );
                        }),
                        i()(a, function (e, t) {
                          return d.a.createElement(
                            "article",
                            { key: t, className: "site-index-item" },
                            d.a.createElement(
                              "h3",
                              null,
                              d.a.createElement(
                                b.a,
                                { to: Object(b.g)(m()(e, "url")) },
                                m()(e, "frontmatter.title")
                              )
                            )
                          );
                        })
                      ),
                      d.a.createElement(
                        "div",
                        null,
                        d.a.createElement(
                          "h2",
                          { className: "site-index-title" },
                          "Blog Posts"
                        ),
                        i()(c, function (e, t) {
                          return d.a.createElement(
                            "article",
                            { key: t, className: "site-index-item" },
                            d.a.createElement(
                              "h3",
                              null,
                              d.a.createElement(
                                b.a,
                                { to: Object(b.g)(m()(e, "url")) },
                                m()(e, "frontmatter.title")
                              )
                            ),
                            d.a.createElement(
                              "time",
                              {
                                className: "published",
                                dateTime: h()(
                                  m()(e, "frontmatter.date")
                                ).strftime("%Y-%m-%d %H:%M"),
                              },
                              h()(m()(e, "frontmatter.date")).strftime(
                                "%B %d, %Y"
                              )
                            )
                          );
                        })
                      )
                    )
                  )
                )
              );
            }),
            t
          );
        })(d.a.Component);
    },
    alwl: function (e, t, n) {
      var r = n("eUgh"),
        a = n("ZWtO"),
        i = n("ut/Y"),
        c = n("l9OW"),
        o = n("1LK5"),
        s = n("sEf8"),
        l = n("IWTy"),
        u = n("zZ0H"),
        m = n("Z0cm");
      e.exports = function (e, t, n) {
        t = t.length
          ? r(t, function (e) {
              return m(e)
                ? function (t) {
                    return a(t, 1 === e.length ? e[0] : e);
                  }
                : e;
            })
          : [u];
        var f = -1;
        t = r(t, s(i));
        var d = c(e, function (e, n, a) {
          return {
            criteria: r(t, function (t) {
              return t(e);
            }),
            index: ++f,
            value: e,
          };
        });
        return o(d, function (e, t) {
          return l(e, t, n);
        });
      };
    },
    iBsI: function (e, t, n) {},
    "k8Y/": function (e, t, n) {
      var r = n("alwl"),
        a = n("Z0cm");
      e.exports = function (e, t, n, i) {
        return null == e
          ? []
          : (a(t) || (t = null == t ? [] : [t]),
            a((n = i ? void 0 : n)) || (n = null == n ? [] : [n]),
            r(e, t, n));
      };
    },
    xoQH: function (e, t, n) {},
    yue5: function (e, t, n) {
      var r = n("/9aa");
      e.exports = function (e, t) {
        if (e !== t) {
          var n = void 0 !== e,
            a = null === e,
            i = e == e,
            c = r(e),
            o = void 0 !== t,
            s = null === t,
            l = t == t,
            u = r(t);
          if (
            (!s && !u && !c && e > t) ||
            (c && o && l && !s && !u) ||
            (a && o && l) ||
            (!n && l) ||
            !i
          )
            return 1;
          if (
            (!a && !c && !u && e < t) ||
            (u && n && i && !a && !c) ||
            (s && n && i) ||
            (!o && i) ||
            !l
          )
            return -1;
        }
        return 0;
      };
    },
  },
]);
//# sourceMappingURL=component---src-templates-site-index-js-08456c4f121f2f229e82.js.map
