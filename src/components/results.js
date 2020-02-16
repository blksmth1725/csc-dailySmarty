import React, { Component } from "react";

import Logo from "./logo";
import SearchBar from "./search-bar";

class Results extends Component {
  handleSearchbarSubmit(query) {
    console.log(query);
  }

  render() {
    return (
      <div>
        <Logo size={55} />
        <SearchBar onSubmit={query => this.handleSearchbarSubmit(query)} />
      </div>
    );
  }
}

export default Results;
