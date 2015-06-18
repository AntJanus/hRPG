import React from 'react';
import TaskStore from '../stores/TaskStore';
import TaskActions from '../actions/TaskActions';

import TaskGroup from './TaskGroup.jsx';

class Tasks extends React.Component {
  constructor() {
    super(); this.state = TaskStore.getState();

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    TaskStore.listen(this.onChange);
  }

  componentWillUnmount() {
    TaskStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    if (!this.state.tasks.length) {
      return (
        <div>Fetching tasks...</div>
      );
    }

    var habits = this.state.tasks.filter((task) => {
      return task.type === 'habit';
    });

    var dailies = this.state.tasks.filter((task) => {
      return task.type === 'daily';
    });

    var todos = this.state.tasks.filter((task) => {
      return task.type === 'todo' && !task.completed;
    });


    return (
      <div className="grid">
        <div className="col-3">
          <h2>Habits</h2>
          <TaskGroup tasks={ habits } />
        </div>
        <div className="col-3">
          <h2>Dailies</h2>
          <TaskGroup tasks={ dailies } />
        </div>
        <div className="col-3">
          <h2>Todos</h2>
          <TaskGroup tasks={ todos } />
        </div>
      </div>
    );
  }
}

export default Tasks;
