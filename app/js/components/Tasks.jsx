import React from 'react';
import TaskStore from '../stores/TaskStore';

class Tasks extends React.Component {
  getInitialState() {
    return TaskStore.getState();
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
    return (
      <ul>
        {this.state.tasks.map((task) => {
          return (
            <li>{ task.text }</li>
          );
        })}
      </ul>
    );
  }
}

export default Tasks;
