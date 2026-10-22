const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const records = require('../src/components/Archive/records.json')

module.exports = function addPrerender(webpackConfig) {
  webpackConfig.plugins.push(
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, '../dist'),
      routes: ['/', '/physics', '/lab', '/media', '/press', '/press-kit'].concat(records.map(item => '/lab/' + item.slug)),
      renderer: new Renderer({
        renderAfterDocumentEvent: 'render-event',
        maxConcurrentRoutes: 2
      })
    })
  )
  return webpackConfig
} 