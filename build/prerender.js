const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = function addPrerender(webpackConfig) {
  webpackConfig.plugins.push(
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, '../dist'),
      routes: ['/', '/physics', '/lab'],
      renderer: new Renderer({
        renderAfterDocumentEvent: 'render-event'
      })
    })
  )
  return webpackConfig
} 