'use strict'

const React = require('react');

const SearchResults = ({ results }) => (
  <ul className="search-results">
    {
      results.map(results => <li></li>)
    }
  </ul>
);

module.exports = SearchResults;
