'use strict'

import React from 'react';

class SearchResults extends React.Component {
  render() {
    return (
      <ul className="search-results">
        {this.props.results.map(({ title, link, description }, index) =>
          <li key={index}>
            <a href={link}>{title}</a>
            <p>{description}</p>
          </li>
        )}
      </ul>
    );
  }
}

export default SearchResults;
