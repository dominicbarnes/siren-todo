
'use strict';

exports.active = function (self) {
  let rel = [ 'section' ]
  if (self) rel.push('self')

  return {
    rel: rel,
    href: '/?filter=active',
    title: 'Active'
  };
};

exports.completed = function (self) {
  let rel = [ 'section' ]
  if (self) rel.push('self')

  return {
    rel: rel,
    href: '/?filter=completed',
    title: 'Completed'
  };
};

exports.all = function (self) {
  let rel = [ 'collection' ]
  if (self) rel.push('self')

  return {
    rel: rel,
    href: '/',
    title: 'All'
  };
};
