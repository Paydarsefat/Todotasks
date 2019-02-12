import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class Addtodo extends Component {
  constructor(props) {
    super(props);
    this.state = { inputeText: "" };

    this.handleInpute = this.handleInpute.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInpute = event => {
    this.setState({
      inputeText: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    //Add task to redux
    this.props.dispatch(addTodo(this.state.inputeText));
    alert("A Task was submitted: " + this.state.inputeText);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.inputeText}
          onChange={this.handleInpute}
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}
export default connect()(Addtodo);
