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
      query: '',
      results: resultStore.getState().results
    };

    this.queryChangeHandler = this.queryChangeHandler.bind(this)
  }

  queryChangeHandler(ev){
    const query = ev.target.value;
    this.setState({query: query})
    if ( query.length > 2 ){
      actions.search(query);
    }
  }

  componentDidMount(){
    this.removeListener = resultStore.addListener(({results: results}) => {
      this.setState({results: results})
    })
  }

  componentWillUnmount(){
    this.removeListener();
  }
  render() {
    const { query, results } = this.state;
    return (
      <div className="autocomplete">
        <h2>Autocomplete</h2>
        <SearchField value={query} onChange={this.queryChangeHandler}/>
        <SearchResults results={results}  />
      </div>
    );
  }
}

export default Autocomplete;