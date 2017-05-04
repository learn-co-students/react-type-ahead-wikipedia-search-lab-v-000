'use strict';

import Store from './Store';
//
class ResultStore extends Store {
  constructor(init = { results: [], updated: new Date() }) {
    super(init)
  }

  isOutdated(updated) {
    return this.getState().updated > updated;
  }
}

const resultStore = new ResultStore();

export default resultStore;
