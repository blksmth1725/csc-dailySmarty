import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../actions";

class RecentPosts extends Component {
  componentDidMount() {
    this.props.fetchRecentPosts();
  }

  render() {
    return (
      <div className="recent-posts">
        <div className="recent-posts-wrapper">
          <div className="recent-posts-heading">Recent Posts</div>
          <ul className="recent-posts-posts">
            <li>Post 0</li>
            <li>Post 1</li>
            <li>Post 2</li>
            <li>Post 3</li>
            <li>Post 4</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(RecentPosts);
