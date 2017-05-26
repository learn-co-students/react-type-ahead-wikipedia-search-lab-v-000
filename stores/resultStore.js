'use strict';

import Store from './Store';

class ResultStore extends Store {
  isOutdated (update) {
    return this.getState().updated > update
  }
}

const resultStore = new ResultStore({
  results: [],
  updated: new Date()
});

export default resultStore;
