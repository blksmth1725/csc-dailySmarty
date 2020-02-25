import React, { Component } from 'react'

import Logo from './logo'
import SearchBar from './search-bar'
import ResultsPosts from './results-posts'
import * as actions from '../actions'
import { connect } from 'react-redux'

class Results extends Component {
  handleSearchbarSubmit(query) {
    this.props.fetchPostsWithQuery(query)
  }

  render() {
    return (
      <div className="results">
        <Logo size={55} />
        <SearchBar
          page="results"
          onSubmit={query => this.handleSearchbarSubmit(query)}
        />
        <ResultsPosts />
      </div>
    )
  }
}

export default connect(null, actions)(Results)
