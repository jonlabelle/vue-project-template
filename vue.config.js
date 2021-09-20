//const path = require("path");

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 * @see https://next.cli.vuejs.org/config/
 */
module.exports = {
  // By default babel-loader ignores all files inside node_modules. You can
  // enable this option to avoid unexpected untranspiled code from third-party
  // dependencies.
  //
  // Transpiling all the dependencies could slow down the build process, though.
  // If build performance is a concern, you can explicitly transpile only some
  // of the dependenciesby passing an array of package names or name patterns to
  // this option.
  transpileDependencies: true,

  // A directory (relative to outputDir) to nest generated static assets
  // (js, css, img, fonts) under.
  assetsDir: "assets",

  // Setting this to false can speed up production builds
  // if you don't need source maps for production.
  // productionSourceMap: false,

  // Set to true to enable Subresource Integrity (SRI).
  // If you are hosting your built files on a CDN, it
  // is a good idea to enable this for additional security.
  //integrity: false,

  // Whether to use the build of Vue core that includes
  // the runtime compiler. Setting it to true will allow
  // you to use the template option in Vue components,
  // but will incur around an extra 10kb payload for
  // your app.
  // runtimeCompiler: true

  //pluginOptions: {
  //  "style-resources-loader": {
  //    preProcessor: "scss",
  //    patterns: [path.resolve(__dirname, "./scss/main.scss")],
  //  },
  //},

  //css: {
  // Don't require css modules to have filename ending
  // with '.module.(css|less|sass|scss|styl)'.
  //requireModuleExtension: false
  //}
};
