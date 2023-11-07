import React, { Component } from "react";

export default class Default extends Component {
  render() {
    /* The line `console.log(this.props);` is logging the value of the `props` object to the console.
    This can be helpful for debugging and understanding the data that is being passed to the
    component. */

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
