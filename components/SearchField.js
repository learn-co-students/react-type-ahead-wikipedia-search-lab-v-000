'use strict'

import React from 'react';

const SearchField = props => (
  <input value={props.value} className="search-field" onChange={props.onChange} />
);

export default SearchField;
