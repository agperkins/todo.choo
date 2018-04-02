var html = require('choo/html')
var css = require('sheetify')
var wrapper = require('../components/wrapper')

var TITLE = 'todo.choo - main'

module.exports = wrapper(view)

css`
  .inputbox {
    border-radius: 20px;
    height: 44px;
  }
  body {
    font-size: 1.2em;
    word-wrap: break-word;
  }
  .button {
    border: 1px solid black;
    background: none;
    margin: 5px;
    padding: 10px 15px;
    border-radius: 20px;
  }
  .buttonWrap {
    float: left;
  }
  .sectionWidth {
    width: 500px;
  }
`

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  var items = state.todoItems

  return html`
    <body class="avenir bg-washed-red lh-copy">
    <main class="pa3 cf center">
      <h1>What do you need to do?</h1>
          <input onchange=${todoAdd} type="text" id="myInput" class=inputbox placeholder="Add it here!...">
            <p>
              <ul>
                ${items.map(function (todo, index) {
    return html`
                  <li onclick=${todoDelete}>${todo.name} - ${index}</li>
                  `
  })}
              </ul>
            </p>
      </main>
    </body>
`
  function todoAdd (e) {
    emit('todo:Add', {name: e.target.value})
  }
  function todoDelete (e) {
    emit('todo:delete', {name: e.target.value})
  }
}
