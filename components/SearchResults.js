'use strict'

const React = require('react');

// const SearchResults = ({ results }) => (
//   <ul className="search-results">
//     {
//
//       results.map(({ title, description, link }, i) => (
//         <li key={i}>
//           <a href={link}>{title}</a>
//           <p>{description}</p>
//         </li>
//       ))
//     }
//   </ul>
// );

class SearchResults extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
  const {results} = this.props;
  return (
    <ul className="search-results">
      {
        results.map(({ title, description, link }, i) => (
          <li key={i}>
            <a href={link}>{title}</a>
            <p>{description}</p>
          </li>
        ))
      }
    </ul>
    )
  }
}

module.exports = SearchResults;
