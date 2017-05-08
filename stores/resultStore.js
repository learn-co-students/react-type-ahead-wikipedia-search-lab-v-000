'use strict';

import Store from './Store';

class ResultStore extends Store {
  constructor(initialState = {results: [], updated: null}) {
    super();   
    this.state = initialState;   
    this.isOutdated = this.isOutdated.bind(this); 
  }
  isOutdated(date){
    console.log("updated " + this.state.updated); 
    return (date < this.state.updated);  
  }
}

const resultStore = new ResultStore();

export default resultStore;
