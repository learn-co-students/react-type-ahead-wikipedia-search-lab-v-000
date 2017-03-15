'use strict';

const Store = require('./Store');

class ResultStore extends Store {

  isOutdated(date) {
    return date < this.getState().updated
  }
}

module.exports = new ResultStore({
  results: [],
  updated: Date.now()
});
