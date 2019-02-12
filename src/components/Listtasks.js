import React, { Component } from "react";
import Task from "./Tasks";
import { connect } from "react-redux";

import { toggleTodoAction } from "../actions";

class Listtasks extends Component {
  render() {
    let { tasks, toggleTodo } = this.props;
    return (
      <ul>
        {tasks.map(task => {
          return (
            <Task key={task.id} {...task} onClick={() => toggleTodo(task.id)} />
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(toggleTodoAction(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listtasks);
