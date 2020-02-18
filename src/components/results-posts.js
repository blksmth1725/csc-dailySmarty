import React, { Component } from "react";
import { connect } from "react-redux";

class ResultsPosts extends Component {
  render() {
    return (
      <div className="results-posts">
        <div className="results-post-wrapper">
          <div className="results-posts-posts">RESULTS GO HERE</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(ResultsPosts);
