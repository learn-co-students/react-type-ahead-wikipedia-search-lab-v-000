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
    };

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.removeListener = resultStore.addListener((state) => this.setState({results: state.results}))
  }

  componentWillUnmount() {
    this.removeListener()
  }

  handleChange(ev) {
    this.setState({
      query: ev.target.value
    })
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextState.query.length > 2) {
      actions.search(nextState.query)
    }
  }

  render() {
    return (//
      <div className="autocomplete">
        <h2>Autocomplete</h2>
        <SearchField onChange={this.handleChange} value={this.state.query} />
        <SearchResults results={this.state.results}/>
      </div>
    );
  }
}

export default Autocomplete;
