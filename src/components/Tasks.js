import React, { Component } from "react";

export default class Tasks extends Component {
  render() {
    let { text, onClick, completed } = this.props;
    return (
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? "line-through" : "none"
        }}
      >
        {text}
      </li>
    );
  }
}
