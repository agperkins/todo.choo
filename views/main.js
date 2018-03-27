var html = require('choo/html')
var css = require('sheetify')

var TITLE = 'todo.choo - main'

module.exports = view

css`
  .avenir { 
    font-family: 'avenir next', avenir, sans-serif;
  }
  .bg-light-red { 
    background-color: var(--light-red); 
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
    <body class="code lh-copy">
      <main class="pa3 cf center">
         <section class="fl mw6 w-50-m w-third-l pa3">
        <div id="myDIV" class="header">
        <h1 style="font-family:avenir;" class="f-headline lh-solid">1.</h1>
          <p>${state.todoItems}</p>
          <p style="font-family:avenir;">
            todo
          </p>
          <input onchange=${todoAdd} type="text" id="myInput" style="font-family:avenir" placeholder="Whatcha gotta do?...">

        </div>
        <p><code><pre>${console.log(state.todoItems)}</pre></code></p>
      
          <br>
        </section>

        <section class="fl mw6 w-third-l pa3 sectionWidth">
        <h2 style="font-family:avenir;" class="f-headline lh-solid">2.</h2>
          <p style="font-family:avenir;"> Number of clicks stored: ${state.totalClicks}</p>
          <p>${state.talkOfTheTown}</p>

          <div class="buttonWrap" style="font-family:avenir;">
            <button style="font-family:avenir;"
              onclick=${handleSubtract}>
              down
            </button>

            <button style="font-family:avenir;"
              onclick=${handleReset}>
              reset
            </button>
            <button style="font-family:avenir;"
              onclick=${handleClick}>
              up
            </button>

            <button style="font-family:avenir;"
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
