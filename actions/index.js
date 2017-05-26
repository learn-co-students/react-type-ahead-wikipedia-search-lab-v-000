'use strict';

import jsonp from 'jsonp';
import resultStore from '../stores/resultStore';
import wikipedia from '../utils/wikipedia';

const search = (query) => {
  const requested = new Date();

  return wikipedia.search(query).then((data) => {
    if (!resultStore.isOutdated(requested)) {
      var dataResults = [];
      data[1].forEach(function(item, index){
      	dataResults.push({title: item, description: data[2][index], link: data[3][index]})
      })
      resultStore.setState({
        updated: new Date(),
        results: dataResults
      })
    }
  }).catch(()=>{
    return "outddated response"
  });
};

export default { search };
