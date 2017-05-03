'use strict';

import jsonp from 'jsonp';
import resultStore from '../stores/resultStore';
import wikipedia from '../utils/wikipedia';

const search = (query) => {
  const requested = new Date();

  return wikipedia.search(query).then((data) => {
    // TODO

    if (resultStore.isOutdated(requested)){
      return null;
    }
    const [query, titles, descriptions, links] = data;

    const results = titles.map((title, i )=> ({
      title,
      link: links[i],
      description: descriptions[i]
    }))

    resultStore.setState({
      results,
      updated: requested
    })
  });
};

export default { search };
