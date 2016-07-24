
'use strict';

const boolify = require('to-boolean');

exports.patch = function* () {
  const { body } = this.request;
  const { todo } = this.state;

  if ('completed' in body) todo.completed = boolify(body.completed);
  if ('title' in body) todo.title = body.title;

  this.status = 301;
  this.redirect('/');
};
