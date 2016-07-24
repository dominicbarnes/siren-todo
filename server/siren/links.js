
'use strict';

exports.active = function () {
  return {
    rel: 'section',
    href: '/?filter=active',
    title: 'Active TODOs'
  };
};

exports.completed = function () {
  return {
    rel: 'section',
    href: '/?filter=completed',
    title: 'Completed TODOs'
  };
};

exports.all = function () {
  return {
    rel: 'collection',
    href: '/',
    title: 'All TODOs'
  };
};
