var html = require('choo/html')

var TITLE = 'todo.choo - main'

module.exports = view

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
          <span onclick="newElement()" class="addBtn">Add</span>
        </div>

        <ul id="myUL">
        <li>Run/li>
        <li>Code</li>
        <li>Walk dogs</li>
      </ul>
          <br>
        </section>

        <section class="fl mw6 w-50-m w-third-l pa3">
          <h2>3.</h2>

          <p>
           !Que puede hacer todo!
          </p>

          
          <br>
        </section>

        <section class="fl mw6 w-50-m w-third-l pa3">
          <h2>4.</h2>
          <p>Number of clicks stored: ${state.totalClicks}</p>

          <button class="dim ph3 ba bw1 pv2 b--black pointer bg-white"
            onclick=${handleClick}>
            Emit a click event
          </button>

          <br><br>
        </section>

        <section class="fl mw6 w-50-m w-third-l pa3">
        </section>

        <section class="fl mw6 w-50-m w-third-l pa3">
        </section>
      </main>
    </body>
  `

  function handleClick () {
    emit('clicks:add', 1)
  }
}
