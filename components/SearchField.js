'use strict'

const React = require('react');

const SearchField = ({
  value,
  onChange

}) => (
  <input className='search-field' value={value} onChange={onChange} />
);

module.exports = SearchField;
