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

    return (
      <li className={ task.type } key={ task.id }>{ task.text }</li>
    );
  }
}

export default Task;
