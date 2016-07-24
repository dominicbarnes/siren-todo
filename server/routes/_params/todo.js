
'use strict';

module.exports = function* (id, next) {
  this.assert(this.session.todos, 404);

  const todo = this.session.todos.find(todo => todo.id === id);
  this.assert(todo, 404);

  this.state.todo = todo;
  yield* next;
};
