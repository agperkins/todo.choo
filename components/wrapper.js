var navigation = require('../components/navigation')
var html = require('choo/html')

var title = 'Alexandra'

module.exports = wrapper

function wrapper (view) {
  return function (state, emit) {
    if (state.title !== title) emit(state.events.DOMTITLECHANGE, title)
    state.page = state.page || { }
    return html`
      <body class="avenir lhcopy">
        ${navigation()}
        ${view(state, emit)}
      </body>
    `
  }
}
