// Used by @fullhuman/postcss-purgecss
// https://purgecss.com/configuration.html

const IN_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    IN_PRODUCTION &&
      require('@fullhuman/postcss-purgecss')({
        content: [`./public/**/*.html`, `./src/**/*.vue`],
        defaultExtractor(content) {
          const contentWithoutStyleBlocks = content.replace(
            /<style[^]+?<\/style>/gi,
            ''
          )
          return (
            contentWithoutStyleBlocks.match(
              /[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g
            ) || []
          )
        },
        keyframes: true, // remove unused animation keyframes
        variables: true, // remove unused CSS variables
        safelist: {
          // Array that can take a string or a regex
          standard: [
            /-(leave|enter|appear)(|-(to|from|active))$/,
            /^(?!(|.*?:)cursor-move).+-move$/,
            /^router-link(|-exact)-active$/,
            /data-v-.*/,
          ],
          // Safelist whole selectors if any part of that selector matches aregular expression
          greedy: [
            /alert/, // bootstrap alert styles
          ],
        },
      }),
  ],
}
