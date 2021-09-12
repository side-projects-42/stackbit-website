(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    i38J: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, "default", function () {
          return m;
        });
      var o = e("9Hrx"),
        r = e("3WF5"),
        a = e.n(r),
        i = e("mwIZ"),
        c = e.n(i),
        p = e("q1tI"),
        s = e.n(p),
        u = e("Kvkj"),
        f = e("eoav"),
        m = (function (n) {
          function t() {
            return n.apply(this, arguments) || this;
          }
          Object(o.a)(t, n);
          var e = t.prototype;
          return (
            (e.componentDidMount = function () {
              Object(f.a)("New Homepage - Page Visited", { nonInteraction: 1 });
            }),
            (e.render = function () {
              var n = this,
                t = c()(this.props, "pageContext"),
                e = c()(t, "frontmatter.sections");
              return s.a.createElement(
                u.a,
                { page: t },
                a()(e, function (t, e) {
                  var o = u.c[c()(t, "component")];
                  return o
                    ? s.a.createElement(o, {
                        key: e,
                        section: t,
                        site: n.props.pageContext.site,
                      })
                    : null;
                })
              );
            }),
            t
          );
        })(s.a.Component);
    },
  },
]);
//# sourceMappingURL=component---src-templates-home-js-229e5f2a0489c68bf037.js.map
