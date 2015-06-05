import alt from '../alt';
import TaskActions from '../actions/TaskActions';

class TaskStore {
  constructor() {
    this.tasks = [];

    this.bindListeners({
      handleUpdateTasks: TaskActions.UPDATE_TASKS,
      handleFetchTasks: TaskActions.FETCH_TASKS
    });
  }

  handleUpdateTasks(tasks) {
    this.tasks = tasks;
  }

  handleFetchTasks() {
    this.tasks = [];
  }
}

export default alt.createStore(TaskStore, 'TaskStore');
