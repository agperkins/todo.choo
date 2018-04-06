var html = require('choo/html')
var css = require('sheetify')
var wrapper = require('../components/wrapper')

var TITLE = 'todo.choo - main'

module.exports = wrapper(view)

css`
  .xbox {
    margin-left: .5em;
  }
  .checkbox {
    margin-right: .5em;
  }
  input[type='checkbox']:checked + label {
    text-decoration: line-through;
  }
  .pointer {
    cursor: pointer;
  }
  li:hover {
    text-decoration: line-through;
  }
  .inline {
    display: inline;
  }
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

function view(state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  var items = state.todoItems

  return html`
    <body class="avenir bg-washed-red lh-copy">
      <main aria-labelledby="todos-label" class="pa3 cf center">
        <h1 id="todos-label">What do you need to do?</h1>
          <input onchange=${todoAdd} type="text" id="myInput" class=inputbox placeholder="Add it here!..." />
          <p>
            ${todoInfo()}
              ${items.map(function(todo, index) {
                return html`
                <div>
                  <input type="checkbox" class="pointer inline checkbox" /> <label for="checkbox">${
                    todo.name
                  }</label>                
                  <div class="inline xbox pointer" onclick=${function() {
                    return todoDelete(index)
                  }}>✘</div>
                </div>
                `
              })}
          </p>
      </main>
    </body>
`

  function todoInfo() {
    if (state.todoItems.length === 0) {
      return html`
        <p>Your todo list is empty. Add what you need to do in the field above, press enter, and presto! it will add to your list.</p>
      `
    }
  }

  function todoAdd(e) {
    emit('todo:Add', {
      name: e.target.value,
    })
  }

  function todoDelete(index) {
    emit('todo:delete', index)
    console.log('Deleted index of ' + index)
  }
}
