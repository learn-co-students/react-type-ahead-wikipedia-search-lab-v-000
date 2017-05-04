'use strict';

import jsonp from 'jsonp';
import resultStore from '../stores/resultStore';
import wikipedia from '../utils/wikipedia';

const search = (query) => {
  const requested = new Date();

  return wikipedia.search(query).then((data) => {
    if(resultStore.isOutdated(requested)) return;
    const results = data[1].map((_, index) =>
      ({
        title: data[1][index],
        description: data[2][index],
        link: data[3][index]
      })
    )
    resultStore.setState({results, updated: requested})
  });
};

export default { search };
