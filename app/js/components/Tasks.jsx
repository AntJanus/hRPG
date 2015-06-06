import React from 'react';
import TaskStore from '../stores/TaskStore';
import TaskActions from '../actions/TaskActions';

class Tasks extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
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
            <li key={ task.id }>{ task.text }</li>
          );
        })}
      </ul>
    );
  }
}

export default Tasks;
