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
    this.listener = this.listener.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  listener(state){
    this.setState(state);
  }

  componentDidMount(){
    this.removeListener = resultStore.addListener(this.listener);
    this.setState(resultStore.getState());
  }

  componentWillUnmount(){
    this.removeListener();
  }

  onChange(ev){
    var newQuery = ev.target.value;
    this.setState({
      query: newQuery
    });
    if (newQuery.length > 2){
      actions.search(newQuery);
    }
  }

  render() {
    return (
      <div className="autocomplete">
        <h2>Autocomplete</h2>
        <SearchField value={this.state.query} onChange={this.onChange} />
        {this.state.results ? <SearchResults results={this.state.results}/> : ''}
      </div>
    );
  }
}

export default Autocomplete;
