import React from 'react';

class Tag extends React.Component {
  constructor() {
    super();
  }

  render() {
    var tagList = this.props.tag.split(' ');

    return (
      <span>
        { tagList }
      </span>
    )
  }
}

export default Tag;
