'use strict';

const Store = require('./Store');

class ResultStore extends Store {

  isOutdated(update) {
    return this.getState().updated > update;
  }
}

module.exports = new ResultStore({
  results: [],
  updated: new Date()
});
