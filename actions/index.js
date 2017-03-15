'use strict';

const jsonp = require('jsonp');
const resultStore = require('../stores/resultStore');
const wikipedia = require('../utils/wikipedia');

const search = (query) => {
  const requested = new Date();

  return wikipedia.search(query).then((data) => {
    // TODO
    if (resultStore.isOutdated(requested)) {
      return null;
    }

    const [query, titles, descriptions, links] = data;
    const updatedResults = titles.map((title1, index) => ({
      title: title1,
      description: descriptions[index],
      link: links[index]
    }))

    resultStore.setState({
      results: updatedResults,
      updated: new Date(),
     });

  });
};

module.exports = { search };
