
'use strict';

exports.add = function () {
  return {
    name: 'add-item',
    title: 'Add Item',
    method: 'POST',
    href: '/',
    fields: [
      { name: 'item', type: 'text' }
    ]
  }
};

exports.edit = function (todo) {
  return {
    name: 'edit',
    title: 'Edit TODO',
    method: 'PATCH',
    href: `/${todo.id}`,
    fields: [
      { name: 'title', type: 'text', value: todo.title }
    ]
  }
};

exports.complete = function (todo) {
  return {
    name: 'complete',
    title: 'Complete TODO',
    method: 'PATCH',
    href: `/${todo.id}`,
    fields: [
      { name: 'completed', type: 'hidden', value: true }
    ]
  }
};

exports.uncomplete = function (todo) {
  return {
    name: 'uncomplete',
    title: 'Uncomplete TODO',
    method: 'PATCH',
    href: `/${todo.id}`,
    fields: [
      { name: 'completed', type: 'hidden', value: false }
    ]
  }
};

exports.clear = function () {
  return {
    name: 'clear-completed',
    title: 'Clear Completed TODOs',
    method: 'POST',
    href: '/'
  }
};
