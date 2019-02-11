import React, { Component } from "react";

export default class Tasks extends Component {
  render() {
    let { text } = this.props;
    return <li>{text}</li>;
  }
}
