'use strict';

import Store from './Store';

class ResultStore extends Store {
  isOutdated(requested){
    return this.getState().updated > requested;
  }
}

const resultStore = new ResultStore({updated: null, results: null});

export default resultStore;
