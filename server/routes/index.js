
'use strict';

const uuid = require('uuid');
const { actions, entities, links } = require('../siren');

exports.get = function* () {
  const { filter } = this.query;
  const { todos } = this.session;

  this.siren({
    title: title(filter),
    entities: [
      Array.isArray(todos) ? filterTodos(todos, filter).map(entities.todo) : null
    ],
    links: [
      filter ? links.all() : null,
      filter !== 'active' ? links.active() : null,
      filter !== 'completed' ? links.completed() : null
    ],
    actions: [
      actions.add(),
      hasCompleted(todos) ? actions.clear() : null
    ]
  });
};

exports.post = function* () {
  const { body } = this.request;

  const item = {
    id: uuid.v4(),
    title: body.title,
    completed: false
  };

  if (!this.session.todos) this.session.todos = [];
  this.session.todos.push(item);

  this.status = 303;
  this.redirect('/');
};

function hasCompleted(todos) {
  if (!todos) return false;
  return todos.some(todo => !!todo.completed);
}

function title(filter) {
  if (filter === 'active') return 'Your Active TODOs';
  if (filter === 'completed') return 'Your Completed TODOs';
  return 'Your TODOs';
}

function filterTodos(list, filter) {
  if (!filter) return list;

  return list.filter(function (todo) {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
  });
}
