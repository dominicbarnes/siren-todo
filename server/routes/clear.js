
'use strict';

exports.post = function* () {
  this.session.todos = this.session.todos.filter(todo => !todo.completed);

  this.status = 301;
  this.redirect('/');
};
