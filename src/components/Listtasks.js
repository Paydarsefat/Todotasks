import React, { Component } from "react";
import Task from "./Tasks";
import { connect } from "react-redux";

class Listtasks extends Component {
  render() {
    let { tasks } = this.props;
    return (
      <ul>
        {tasks.map(task => {
          return <Task key={task.id} {...task} />;
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
export default connect(mapStateToProps)(Listtasks);
