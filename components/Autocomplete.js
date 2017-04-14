'use strict'

import React from 'react';
import actions from '../actions';
import resultStore from '../stores/resultStore';

import SearchField from './SearchField';
import SearchResults from './SearchResults';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: resultStore.getState().results,
      query: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const query = e.target.value;
    this.setState({ query });

    if (query.length > 2) {
      actions.search(query);
    }
  }

  componentDidMount() {
    this.removeListener = resultStore.addListener(({ results }) => {
      this.setState({results});
    })
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <div className='autocomplete'>
        <h2>Autocomplete</h2>
        <SearchField value={this.state.query}
                     onChange={this.handleChange} />
        <SearchResults results={this.state.results} />
      </div>
    );
  }
}

export default Autocomplete;
