import React, { Component } from "react";

import Logo from "./logo";
import SearchBar from "./search-bar";
import RecentPosts from "./recent-posts";

export default class Home extends Component {
  handleSearchbarSubmit = function(query) {
    console.log("trying to handle query", query);
    this.props.history.push("/results");
  };

  render() {
    return (
      <div className="app">
        <div className="container">
          <Logo />
          <SearchBar onSubmit={query => this.handleSearchbarSubmit(query)} />
          <RecentPosts />
        </div>
      </div>
    );
  }
}
