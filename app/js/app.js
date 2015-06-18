import React from 'react';
import Tasks from './components/Tasks.jsx';

import AppStore from './stores/AppStore';
import AppActions from './actions/AppActions';

class App extends React.Component {
  constructor(options) {
    super();

    this.state = AppStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AppActions.fetchAll();
    AppStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AppStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <Tasks />
    );
  }
}

React.render((
  <App />
), document.getElementById('app'));
