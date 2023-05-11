const { JSDOM } = require('jsdom')
const { XMLHttpRequest } = require('xmlhttprequest')
const fs = require('fs')

const { window } = new JSDOM('<div id="root"></div>', {
  url: 'http://localhost:3000',
})

global.window = window
global.document = window.document
global.history = window.history
global.XMLHttpRequest = XMLHttpRequest

require.extensions['.pcss'] = function () {
  module.exports = () => ({})
}
