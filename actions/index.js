'use strict';

import jsonp from 'jsonp';
import resultStore from '../stores/resultStore';
import wikipedia from '../utils/wikipedia';

const search = (query) => {
  const requested = new Date();

  return wikipedia.search(query).then((data) => {
    if (resultStore.isOutdated(requested)) {
      return
    }

    const results = data.slice()
    results.splice(0, 1)

    const updatedResults = []
    results[0].forEach((result, i) => {
      updatedResults.push({})
    })

    results.forEach((result, i) => {
      result.forEach((elem, ii) => {
        if (i === 0) {
          updatedResults[ii].title = elem
        } else if (i === 1) {
          updatedResults[ii].description = elem
        } else if (i === 2) {
          updatedResults[ii].link = elem
        }
      })
    })

    resultStore.setState({
      results: updatedResults,
      updated: requested
    })
  })
};

export default { search };
