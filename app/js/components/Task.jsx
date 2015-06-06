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

    var classes = task.type + ' task';

    return (
      <li className={ classes } key={ task.id }>{ task.text }</li>
    );
  }
}

export default Task;
