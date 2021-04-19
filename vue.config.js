/**
 * @type {import('@vue/cli-service').ProjectOptions}
 * @see https://cli.vuejs.org/config/
 */
module.exports = {
  // Directory (relative to outputDir) to nest generated
  // static assets (js, css, img, fonts) under.
  assetsDir: "assets",

  // Setting this to false can speed up production builds
  // if you don't need source maps for production.
  productionSourceMap: false,

  // Set to true to enable Subresource Integrity (SRI).
  // If you are hosting your built files on a CDN, it
  // is a good idea to enable this for additional security.
  integrity: false,

  // Whether to use the build of Vue core that includes
  // the runtime compiler. Setting it to true will allow
  // you to use the template option in Vue components,
  // but will incur around an extra 10kb payload for
  // your app.
  runtimeCompiler: true
};
