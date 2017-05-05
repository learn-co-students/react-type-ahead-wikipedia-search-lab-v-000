'use strict';

const Store = require('./Store');

class ResultStore extends Store {
  isOutdated(updated) {
    return this.getState().updated > updated;
  }
}

const resultStore = new ResultStore({
  results: [],
  updated: new Date()
});

module.exports = resultStore;
