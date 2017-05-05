'use strict'

const React = require('react');

const SearchResults = ({ results }) => (
  <ul className="search-results">
    { results.map(({ link, title, description }, index) => (
        <li key={index}>
          <a href={link}>{title}</a>
          <p>{description}</p>
        </li>
      ))
    }
  </ul>
);

module.exports = SearchResults;
