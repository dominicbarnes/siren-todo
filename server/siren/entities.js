
'use strict';

const actions = require('./actions');

exports.todo = function (todo) {
  return {
    rel: 'item',
    properties: todo,
    actions: [
      todo.completed ? actions.uncomplete(todo) : actions.complete(todo),
      actions.edit(todo)
    ]
  }
};
