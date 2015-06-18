import React from 'react';
import TaskStore from '../stores/TaskStore';
import TaskActions from '../actions/TaskActions';

import TaskGroup from './TaskGroup.jsx';

class Tasks extends React.Component {
  constructor() {
    super();
    this.state = TaskStore.getState();

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    TaskActions.fetchTasks();
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
          <h3>Habits</h3>
          <TaskGroup tasks={ habits } />
        </div>
        <div className="col-3">
          <h3>Dailies</h3>
          <TaskGroup tasks={ dailies } />
        </div>
        <div className="col-3">
          <h3>Todos</h3>
          <TaskGroup tasks={ todos } />
        </div>
      </div>
    );
  }
}

export default Tasks;
