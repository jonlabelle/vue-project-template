const { defineConfig } = require("@vue/cli-service");

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 * @see https://next.cli.vuejs.org/config/
 */
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: "assets",
  productionSourceMap: false,

  /**
   * @type {import('@vue/cli-service').ProjectOptions.css}
   */
  css: {
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
