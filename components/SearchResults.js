'use strict'

import React from 'react';

const SearchResults = ({ results }) => (
  <ul className="search-results">
    {results.map((result, index) =>
      <li key={index}>
        <a href={result.link}>{result.title}</a><br/>
        <p>{result.description}</p>
      </li>
    )}
  </ul>
);

export default SearchResults;
