import React from 'react';

import Task from './Task.jsx';
import Tag from './Tag.jsx';

class TaskGroup extends React.Component {
  constructor() {
    super();
  }

  render() {
    if(!this.props.tasks) {
      return (
        <ul></ul>
      );
    }

    const tasks = this.props.tasks;

    var taskGroups = {};

    tasks.forEach((task) => {
      var tags = [];

      for(var tag in task.tags) {
        tags.push(tag);
      }

      var tagString = tags.join(' ');

      if(!taskGroups[tagString]) {
        taskGroups[tagString] = [];
      }

      taskGroups[tagString].push(<Task taskData={ task } key={ task.id } />);
    });

    var allTasks = [];

    for(var tagString in taskGroups) {
      var taskGroup = taskGroups[tagString];

      allTasks.push(
        <div key={ tagString }>
          <h5><Tag tag={ tagString } /></h5>
          <ul className="task-list">
            { taskGroup }
          </ul>
        </div>
      );
    }

    return (
      <div>
        { allTasks }
      </div>
    )
  }
}

export default TaskGroup;
