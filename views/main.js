var html = require('choo/html')
var css = require('sheetify')
var todoItems = require('./todo-items')

var TITLE = 'todo.choo - main'

module.exports = view

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
      <h1>Classy, elegant todo list</h1>
      <section class="pa3 fl mw6 w-50-m w-third-l pa3">
        <h2 class="f-headline lh-solid">Todo</h2>
          <input onchange=${todoAdd} type="text" id="myInput" class=inputbox placeholder="Whatcha gotta do?...">
            <p>
              <ul>
                ${items.map(function (todo) {
    return todoItems(todo)
  })}
              </ul>
            </p>
        </section>

        <section class="fl mw6 w-third-l pa3 sectionWidth">
        <h2 class="f-headline lh-solid">Clicky</h2>
          <p> Number of clicks stored: ${state.totalClicks}</p>
          <p>${state.talkOfTheTown}</p>

          <div class="buttonWrap">
            <button class="button"
              onclick=${handleSubtract}>
              down
            </button>

            <button class="button"
              onclick=${handleReset}>
              reset
            </button>

            <button class="button"
              onclick=${handleClick}>
              up
            </button>

            <button class="button"
              onclick=${talk}>
              sentence of the day
            </button>
          </div>

        </section>
        <section class="fl mw6 w-50-m w-third-l pa3">
        </section>

        <section class="fl mw6 w-50-m w-third-l pa3">
        <h2 class="f-headline lh-solid">Clicky 2</h2>
        <p> :) :) :) </p>
        </section>
      </main>
    </body>
  `
  function handleReset () {
    emit('clicks:reset')
  }
  function handleClick () {
    emit('clicks:add', 1)
  }
  function handleSubtract () {
    emit('clicks:subtract', 1)
  }
  function talk () {
    emit('mouth:talk', 'This is different')
  }
  function todoAdd (e) {
    emit('todo:Add', {name: e.target.value})
  }
}
