window.onGatsbyRouteUpdate = function () {
  // Responsive video embeds
  var videoEmbeds = ['iframe[src*="youtube.com"]', 'iframe[src*="vimeo.com"]'];
  reframe(videoEmbeds.join(","));

  // Syntax Highlighter
  Prism.highlightAll();
};
