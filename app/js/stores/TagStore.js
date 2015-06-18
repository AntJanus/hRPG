import alt from '../alt';
import TagActions from '../actions/TagActions';

class TagStore {
  constructor() {
    this.tags = [];

    this.bindListeners({
      handleUpdateTags: TagActions.updateTags,
      handleFetchTags: TagActions.fetchTags
    });
  }

  handleUpdateTags(tags) {
    this.tags = tags;
    this.setState({ tags });
  }

  handleFetchTags() {
    this.tags = [];
    const tags = this.tags;

    this.setState(tags);
  }
}

export default alt.createStore(TagStore, 'TagStore');
