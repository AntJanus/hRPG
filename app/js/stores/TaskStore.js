import alt from '../alt';
import TaskActions from '../actions/TaskActions';
import AppActions from '../actions/AppActions';

class TaskStore {
  constructor() {
    this.tasks = [];

    this.bindListeners({
      handleUpdateAll: AppActions.updateAll,
      handleFetchAll: AppActions.fetchAll,
      handleUpdateTasks: TaskActions.updateTasks,
      handleFetchTasks: TaskActions.fetchTasks
    });
  }

  handleUpdateAll(data) {
    var tasks = data.todos.concat(data.dailys).concat(data.habits);
    this.handleUpdateTasks(tasks);
  }

  handleFetchAll() {
    this.handleFetchTasks();
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
