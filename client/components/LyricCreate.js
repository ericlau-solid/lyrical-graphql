import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { addLyricToSong } from '../queries';
import { withRouter } from 'react-router-dom';

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const content = this.state.content;
    this.setState({ content: '' });
    await this.props.mutate({
      variables: {
        content: content,
        songId: this.props.match.params.songId,
      }
    });
    debugger;
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Add a Lyric</label>
        <input
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
      </form>
    )
  }
}

export default withRouter(graphql(addLyricToSong)(LyricCreate));
