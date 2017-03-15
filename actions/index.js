'use strict';

const jsonp = require('jsonp');
const resultStore = require('../stores/resultStore');
const wikipedia = require('../utils/wikipedia');

function formatSearchResults(results) {
  var formattedResults = []

  for (var i = 0; i < results[1].length; i++) {
    var result = {}
    result.title = results[1][i]
    result.description = results[2][i]
    result.link = results[3][i]
    formattedResults.push(result)
  }
  return formattedResults;
}

const search = (query) => {
  const requested = new Date();
  return wikipedia.search(query).then((data) => {
    if (resultStore.isOutdated(requested)) {
      return;
    }
    const formattedResults = formatSearchResults(data)
    resultStore.setState({
      results: formattedResults,
      updated: new Date()
    })
  });
};

module.exports = { search };
