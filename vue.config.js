const { defineConfig } = require('@vue/cli-service')

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 * @see https://next.cli.vuejs.org/config/
 */
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: 'assets',

  // productionSourceMap: false,
  // css: { sourceMap: false, },
})
