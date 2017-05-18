'use strict';

import jsonp from 'jsonp';
import resultStore from '../stores/resultStore';
import wikipedia from '../utils/wikipedia';

const search = (query) => {
  const requested = new Date();

  return wikipedia.search(query).then((data) => {
    if ( resultStore.isOutdated(requested) ){
      return
    } else {
      data.shift();
      var results = []
      var titles = data[0];
      var descriptions = data[1]
      var links = data[2]

      for(var i = 0; i < titles.length; i++){
        results.push({
          title: titles[i],
          description: descriptions[i],
          link: links[i]
        })
      }

      resultStore.setState({updated: new Date(), results: results});
    }
  });
};

export default { search };
