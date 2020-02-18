import React, { Component } from "react";

import Logo from "./logo";
import SearchBar from "./search-bar";
import ResultsPosts from "./results-posts";
import * as actions from "../actions";
import { connect } from "react-redux";

class Results extends Component {
  handleSearchbarSubmit(query) {
    this.props.fetchPostsWithQuery(query);
  }

  render() {
    return (
      <div>
        <Logo size={55} />
        <SearchBar onSubmit={query => this.handleSearchbarSubmit(query)} />
        <ResultsPosts />
      </div>
    );
  }
}

export default connect(null, actions)(Results);
