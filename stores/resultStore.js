'use strict';

import Store from './Store';

class ResultStore extends Store {

  isOutdated(date){
    return this.getState().updated > date;
  }

}

const resultStore = new ResultStore({
  results: [],
  updated: null,
});

export default resultStore;
