var html = require('choo/html')
var wrapper = require('../components/wrapper')

module.exports = wrapper(clicky)

var TITLE = 'Clicky'

function clicky (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <body>
      <main class="sans-serif pa3">
        <h1>Clicky</h1>
        <p>Click around to see my progress</p>
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
