import alt from '../alt';
import TasksFetcher from '../utils/TasksFetcher';

class TaskActions {
  updateTasks(tasks) {
    this.dispatch(tasks);
  }
  fetchTasks() {
    this.dispatch();

    TasksFetcher
      .fetch()
      .then((response) => {
        this.actions.updateTasks(response.data);
      })
      .catch((e) => {
        console.log('Error fetching tasks:', e);
      })
    ;
  }
}

export default alt.createActions(TaskActions);
