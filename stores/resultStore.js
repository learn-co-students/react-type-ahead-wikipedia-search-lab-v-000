'use strict';

const Store = require('./Store');

class ResultStore extends Store {

  isOutdated(date) {
    return date <= this.state.updated;
  }

  
}

module.exports = new ResultStore({
  results: [],
  updated: new Date()
});
