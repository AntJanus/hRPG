import React from 'react';
import Tasks from './components/Tasks.jsx';

class App extends React.Component {
  constructor(options) {
    super();
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
