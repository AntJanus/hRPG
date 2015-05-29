import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
  }

  login() {

  }

  render() {
    return(
      <form>
        <input type="text" placeholder="api key" />
        <input type="text" placeholder="user id" />
      </form>
    );
  }
}
