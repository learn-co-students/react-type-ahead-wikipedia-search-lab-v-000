'use strict';

import jsonp from 'jsonp';
import resultStore from '../stores/resultStore';
import wikipedia from '../utils/wikipedia';

const search = (query) => {
  const requested = new Date();

  return wikipedia.search(query).then((data) => {
    if(!resultStore.isOutdated(requested)) {
      data.shift();

      let results = [];
      for(let i = 0; i < data[0].length; i++) {
        results.push({
          title: data[0][i],
          description: data[1][i],
          link: data[2][i]
        });
      };

      resultStore.setState({
        results: results,
        updated: new Date()
      });
    }
  });
};

export default { search };
