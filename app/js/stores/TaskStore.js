import alt from '../alt';
import TaskActions from '../actions/TaskActions';

class TaskStore {
  constructor() {
    this.tasks = [];

    this.bindListeners({
      handleUpdateTasks: TaskActions.updateTasks,
      handleFetchTasks: TaskActions.fetchTasks
    });
  }

  handleUpdateTasks(tasks) {
    this.tasks = tasks;
    this.setState({ tasks });
  }

  handleFetchTasks() {
    this.tasks = [];
    const tasks = this.tasks;
    this.setState(tasks);
  }
}

export default alt.createStore(TaskStore, 'TaskStore');
