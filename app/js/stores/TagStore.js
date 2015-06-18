import alt from '../alt';

import AppActions from '../actions/AppActions';

class TagStore {
  constructor() {
    this.tags = [];

    this.bindListeners({
      handleUpdateTags: AppActions.updateAll,
      handleFetchTags: AppActions.fetchAll
    });
  }

  handleUpdateTags(data) {
    this.tags = data.tags;
    this.setState({ tags: data.tags });
  }

  handleFetchTags() {
    this.tags = [];
    const tags = this.tags;

    this.setState(tags);
  }
}

export default alt.createStore(TagStore, 'TagStore');
