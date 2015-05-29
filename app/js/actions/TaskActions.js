import alt from '../alt';

class TaskActions {
  updateTasks(tasks) {
    this.dispatch(tasks);
  }
}

export default alt.createActions(TaskActions);
