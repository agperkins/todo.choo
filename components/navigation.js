var html = require('choo/html')

module.exports = navigation

function navigation () {
  return html`
      <nav class="pa3">
        <a class="navlink" href="/">Main</a> |
        <a class="navlink" href="/clicky">Clicky</a>
        </nav>
    `
}
