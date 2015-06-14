import React from 'react';

class Task extends React.Component {
  constructor() {
    super();
  }

  render() {
    if(!this.props.taskData) {
      return (
        <li></li>
      );
    }

    const task = this.props.taskData;

    var classes = (task.completed ? 'completed' : task.type) + ' task';

    return (
      <li className={ classes } key={ task.id }>
        <div className="task-check">[ ]</div>
        <div className="task-content">
          { task.text }
        </div>
      </li>
    );
  }
}

export default Task;
