// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-creative-thread-foundation-js": preferDefault(require("/Users/juanjorge/Developer/creative-thread-foundation/src/templates/creative-thread-foundation.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/juanjorge/Developer/creative-thread-foundation/src/pages/404.js")),
  "component---src-pages-index-old-js": preferDefault(require("/Users/juanjorge/Developer/creative-thread-foundation/src/pages/index.old.js"))
}

exports.json = {
  "layout-index.json": require("/Users/juanjorge/Developer/creative-thread-foundation/.cache/json/layout-index.json"),
  "index.json": require("/Users/juanjorge/Developer/creative-thread-foundation/.cache/json/index.json"),
  "layout-index.json": require("/Users/juanjorge/Developer/creative-thread-foundation/.cache/json/layout-index.json"),
  "404.json": require("/Users/juanjorge/Developer/creative-thread-foundation/.cache/json/404.json"),
  "layout-index.json": require("/Users/juanjorge/Developer/creative-thread-foundation/.cache/json/layout-index.json"),
  "index-old.json": require("/Users/juanjorge/Developer/creative-thread-foundation/.cache/json/index-old.json"),
  "layout-index.json": require("/Users/juanjorge/Developer/creative-thread-foundation/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/juanjorge/Developer/creative-thread-foundation/.cache/json/404-html.json")
}

exports.layouts = {
  "component---src-layouts-index-js": preferDefault(require("/Users/juanjorge/Developer/creative-thread-foundation/.cache/layouts/index.js"))
}