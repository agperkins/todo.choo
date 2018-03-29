module.exports = store

function store (state, emitter) {
  state.totalClicks = 0
  state.talkOfTheTown = ''
  state.todoItems = []

  emitter.on('DOMContentLoaded', function () {
    emitter.on('clicks:reset', function () {
      state.totalClicks = 0
      emitter.emit(state.events.RENDER)
    })
    emitter.on('clicks:add', function (count) {
      state.totalClicks += count
      emitter.emit(state.events.RENDER)
    })
    emitter.on('clicks:subtract', function (count) {
      state.totalClicks -= count
      emitter.emit(state.events.RENDER)
    })
    emitter.on('mouth:talk', function (text) {
      state.talkOfTheTown = text
      emitter.emit(state.events.RENDER)
    })
    emitter.on('todo:Add', function (text) {
      state.todoItems.push(text)
      emitter.emit(state.events.RENDER)
    })
    emitter.on('todo:delete', function (text) {
      state.todoItems.pop()
      emitter.emit(state.events.RENDER)
    })
  })
}
