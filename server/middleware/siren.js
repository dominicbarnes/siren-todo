
'use strict';

const siren = require('siren-writer');

module.exports = function* (next) {
  const write = siren(this.origin);

  this.siren = function(options) {
    this.body = write(options);
    this.type = 'application/vnd.siren+json';
  };

  yield* next;
};
