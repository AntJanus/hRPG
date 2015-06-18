import React from 'react';
import TagStore from '../stores/TagStore';

class Tag extends React.Component {
  constructor() {
    super();
    this.state = TagStore.getState();

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    TagStore.listen(this.onChange);
  }

  componentWillUnmount() {
    TagStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    var tagList = this.props.tag.split(' ');
    var tags = [];

    this.state.tags.forEach(function(tag) {
      if(tagList === tag.id || tagList.indexOf(tag.id) > -1) {
        tags.push(<span>{ tag.name }</span>);
      }
    });

    return (
      <span>
        { tags }
      </span>
    )
  }
}

export default Tag;
