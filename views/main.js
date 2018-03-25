var html = require('choo/html')
var css = require('sheetify')

var TITLE = 'todo.choo - main'

module.exports = view

css`
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
          <h2>1.</h2>
          <p>
            Working on a todo list. 
          </p>

          <br>
        </section>

         <section class="fl mw6 w-50-m w-third-l pa3">
        <div id="myDIV" class="header">
          <h2>2.</h2>

          <p>
            TODO
          </p>
          <input type="text" id="myInput" placeholder="Title...">
          <button onclick="newElement()" class="addBtn">Add</button>
        </div>

        <ul id="myUL">
        <li>Run/li>
        <li>Code</li>
        <li>Figure out how to make "add" a BUTTON THAT ADDS STUFF</li>
        <li>Walk dogs</li>
      </ul>
          <br>
        </section>

        <section class="fl mw6 w-third-l pa3 sectionWidth">
          <h2>4.</h2>
          <p>Number of clicks stored: ${state.totalClicks}</p>
          <p>${state.talkOfTheTown}</p>

          <div class="buttonWrap">
            <button
              onclick=${handleSubtract}>
              down
            </button>

            <button
              onclick=${handleReset}>
              reset
            </button>

            <button
              onclick=${handleClick}>
              up
            </button>
            <button
              onclick=${talk}>
              Sentence of the day
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
}
