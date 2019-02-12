import React, { Component } from 'react';
import Addtodo from './components/Addtodo';
import Listtasks from './components/Listtasks'



class App extends Component {
  render() {
    return (
      <div>
        <Addtodo></Addtodo>
        <Listtasks></Listtasks>
      </div>
    );
  }
}

export default App;
