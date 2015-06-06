import React from 'react';
import TaskStore from '../stores/TaskStore';
import TaskActions from '../actions/TaskActions';

import Task from './Task.jsx';

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


    return (
      <ul>
        {this.state.tasks.map((task) => {
          return (
              <Task taskData={ task } />
          );
        })}
      </ul>
    );
  }
}

export default Tasks;
