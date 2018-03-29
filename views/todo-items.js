var html = require('choo/html')

module.exports = view

function view (todo) {
  return html`
        <li>${todo.name}</li>
    `
}
