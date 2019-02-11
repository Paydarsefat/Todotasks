import React, { Component } from "react";
import Task from "./Tasks";

export default class Listtasks extends Component {
  state = {
    tasks: [
      {
        id: 1,
        text: "task 1"
      },
      {
        id: 2,
        text: "task 2"
      }
    ]
  };
  render() {
    return (
      <ul>
        {this.state.tasks.map(task => {
          return <Task key={task.id} {...task} />;
        })}
      </ul>
    );
  }
}
