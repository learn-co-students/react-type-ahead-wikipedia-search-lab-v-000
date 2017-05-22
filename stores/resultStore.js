'use strict';

import Store from './Store';

class ResultStore extends Store {
  isOutdated(date) {
    return this.state.updated > date;
  }
}

const resultStore = new ResultStore({results: []});

export default resultStore;
