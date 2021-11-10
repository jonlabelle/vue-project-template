const { defineConfig } = require("@vue/cli-service");

//const path = require("path");

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 * @see https://next.cli.vuejs.org/config/
 */
module.exports = defineConfig({
  //
  // By default babel-loader ignores all files inside node_modules. You can
  // enable this option to avoid unexpected untranspiled code from third-party
  // dependencies.
  //
  // Transpiling all the dependencies could slow down the build process, though.
  // If build performance is a concern, you can explicitly transpile only some
  // of the dependenciesby passing an array of package names or name patterns
  // to this option.
  //
  // Default: false
  transpileDependencies: true,

  //
  // A directory (relative to outputDir) to nest generated static assets
  // (js, css, img, fonts) under.
  //
  // Tip: `assetsDir` is ignored when overwriting the filename or
  // chunkFilename from the generated assets.
  //
  // Default: ''
  assetsDir: "assets",

  //
  // Setting this to false can speed up production builds
  // if you don't need source maps for production.
  //
  // Default: true
  productionSourceMap: false,

  //
  // Set to true to enable Subresource Integrity (opens new window) (SRI) on
  // <link rel="stylesheet"> and <script> tags in generated HTML. If you are
  // hosting your built files on a CDN, it is a good idea to enable this for
  // additional security.
  //
  // Note that this only affects tags injected by html-webpack-plugin - tags
  // directly added in the source template (public/index.html) are not
  // affected.
  //
  // Also, when SRI is enabled, preload resource hints are disabled due to a
  // bug in Chrome (opens new window) which causes the resources to be
  // downloaded twice.
  //
  // Default: false
  integrity: false,

  //
  // Whether to use the build of Vue core that includes the runtime compiler.
  // Setting it to true will allow you to use the template option in
  // Vue components, but will incur around an extra 10kb payload for your app.
  //
  // Default: false
  runtimeCompiler: false,

  css: {
    //
    // Whether to enable source maps for CSS.
    // Setting this to true may affect build performance.
    // Default: false
    sourceMap: false

    //
    // Passing options to pre-processor loaders
    // https://next.cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
    //loaderOptions: {
    //  // Pass options to sass-loader
    //  // @/ is an alias to src/
    //  // so this assumes you have a file named `src/variables.sass`
    //  // Note: this option is named as "prependData" in sass-loader v8
    //  sass: {
    //    additionalData: `@import "~@/variables.sass"`
    //  },
    //
    //  // By default the `sass` option will apply to both syntaxes
    //  // because `scss` syntax is also processed by sass-loader underlyingly
    //  // but when configuring the `prependData` option
    //  // `scss` syntax requires a semicolon at the end of a statement, while `sass` syntax requires none
    //  // in that case, we can target the `scss` syntax separately using the `scss` option
    //  scss: {
    //    additionalData: `@import "~@/variables.scss";`
    //  }
    //}
  }
});
