var html = require('choo/html')
var css = require('sheetify')

var TITLE = 'todo.choo - main'

module.exports = view

css`
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

  return html`
    <body class="avenir bg-washed-red lh-copy">
      <main class="pa3 cf center">
         <section class="fl mw6 w-50-m w-third-l pa3">
        <div>
        <h1 class="f-headline lh-solid">1.</h1>
          <p>${state.todoItems}</p>
          <p>
            todo
          </p>
          <input onchange=${todoAdd} type="text" id="myInput" placeholder="Whatcha gotta do?...">

        </div>
        <p><code><pre>${console.log(state.todoItems)}</pre></code></p>
      
          <br>
        </section>

        <section class="fl mw6 w-third-l pa3 sectionWidth">
        <h2 class="f-headline lh-solid">2.</h2>
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

          <br><br>
        </section>

        <section class="fl mw6 w-50-m w-third-l pa3">
        </section>

        <section class="fl mw6 w-50-m w-third-l pa3">
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
    emit('todo:Add', e.target.value)
  }
}
