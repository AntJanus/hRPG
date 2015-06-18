import alt from '../alt';
import AppActions from '../actions/AppActions';

class AppStore {
  constructor() {
    this.tasks = [];
    this.tags = [];
    this.user = {};

    this.bindListeners({
      handleUpdateAll: AppActions.updateAll,
      handleFetchAll: AppActions.fetchAll
    });
  }

  handleUpdateAll(data) {
    this.tasks = data.tasks;
    this.tags = data.tags;
    this.user = data.user;

    this.setState({
      tasks: data.tasks,
      tags: data.tags,
      user: data.user
    });
  }

  handleFetchAll() {
    this.tasks = [];
    this.tags = [];
    this.user = {};

    const tasks = this.tasks;
    const tags = this.tags;
    const user = this.user;

    this.setState({
      tasks,
      tags,
      user
    });
  }
}

export default alt.createStore(AppStore, 'AppStore');
