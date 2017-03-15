'use strict'

const React = require('react');
const actions = require('../actions');
const resultStore = require('../stores/resultStore');

const SearchField = require('./SearchField');
const SearchResults = require('./SearchResults');

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: resultStore.getState().results
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.removeListener = resultStore.addListener(({ results }) => {
      this.setState({ results });
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  handleChange(event) {
    const newQuery = event.target.value;
    this.setState({ query: newQuery });
    if (newQuery.length > 2) {
      actions.search(newQuery)
    }
    //update query state
  }

  render() {
    return (
      <div className="autocomplete">
        <h2>Autocomplete</h2>
        <SearchField
          value={this.state.query}
          onChange={this.handleChange}
        />
        <SearchResults
          results={this.state.results}
        />
      </div>
    );
  }
}

module.exports = Autocomplete;
