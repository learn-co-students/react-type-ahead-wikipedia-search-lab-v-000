'use strict';

import jsonp from 'jsonp';
import resultStore from '../stores/resultStore';
import wikipedia from '../utils/wikipedia';

const search = (query) => {
  const requested = new Date();
  return wikipedia.search(query).then((data) => {
    if (resultStore.isOutdated(requested)) {
      return;  
    }
    var results = formatData(data);   
    resultStore.setState({
      updated: requested,
      results: results, 
    })
  });
};

function formatData(data) { 
  var dataResults = data.splice(1); 
  var numResults = dataResults[0].length;  
  var results = []; 
  for (var i = 0; i < numResults; i++) {
    var result = {
      "title": dataResults[0][i], 
      "description": dataResults[1][i], 
      "link": dataResults[2][i], 
    }
    results.push(result);  
  } 
  return results; 
}
export default { search };
