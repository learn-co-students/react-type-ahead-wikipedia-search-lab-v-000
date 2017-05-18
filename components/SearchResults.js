'use strict'

import React from 'react';

const SearchResults = props => (
  <ul className="search-results" >
    {
      props.results.map((result, index) => (
        <li key={result.index}>
          <a href={result.link}>{result.title}</a>
          <p>{result.description}</p>
        </li>
      ))
    }
  </ul>
);

export default SearchResults;


