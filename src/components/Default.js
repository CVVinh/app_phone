import React, { Component } from "react";

export default class Default extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title">
            <h1>Error</h1>
            <h1 className="display-3">404</h1>
            <h2>Page not found</h2>
            <h3>
              The request URL{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              was not found!
            </h3>
          </div>
        </div>
      </div> /* let params = queryString.parse(this.props.location.search) */
    );
  }
}
