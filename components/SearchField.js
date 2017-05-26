'use strict'

import React from 'react';

const SearchField = props => (
  // <input className='search-field' value={props.value} onChange={props.onChange}/>

  // A cleaner way to write the above code:
  <input className='search-field' {...props}/>
);

export default SearchField;
