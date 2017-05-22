'use strict'

import React from 'react';

class SearchField extends React.Component {
  render() {
    return (
      <input className="search-field"
        value={this.props.value}
        onChange={this.props.onChange} />
    );
  }
}

export default SearchField;
