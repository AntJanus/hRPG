import alt from '../alt';
import TaskActions from '../actions/TaskActions';

class TaskStore {
  constructor() {
    this.tasks = [];

    this.bindListeners({
      handleUpdateTasks: TaskActions.UPDATE_TASKS
    });
  }

  handleUpdateTasks(tasks) {
    this.tasks = tasks;
  }
}

export default alt.createStore(TaskStore);
