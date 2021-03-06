var html = require('choo/html')

var TITLE = 'todo.choo - route not found'

module.exports = view

function view(state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <body class="sans-serif pa3">
      <h1>No Route for you!</h1>
      <a class="pt2" href="/">Back to main.</a>
    </body>
  `
}
