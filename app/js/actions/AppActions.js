import alt from '../alt';
import AllFetcher from '../utils/AllFetcher';

class AppActions {
  updateAll(data) {
    this.dispatch(data);
  }

  fetchAll() {
    this.dispatch();

    AllFetcher
      .fetch()
      .then((response) => {
        var data = JSON.parse(response.text);
        this.actions.updateAll(data);
      })
      .catch((e) => {
        console.log('Error fetching tasks:', e);
      })
    ;
  }
}

export default alt.createActions(AppActions);
