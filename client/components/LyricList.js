import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { likeLyric } from '../queries';

class LyricList extends Component {
  onLike = async (id) => {
    await this.props.mutate({
      variables: {
        id
      }
    });
  }

  renderLyrics = () => (
    this.props.lyrics.map(({ id, content, likes }) => (
      <li
        key={id}
        className="collection-item"
      >
        {content}
        <div className="vote-box">
          {likes}
          <i
            className="material-icons"
            onClick={() => this.onLike(id)}
          >
            thumb_up
          </i>
        </div>
      </li>
    ))
  )

  render() {
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    );
  }
}

export default graphql(likeLyric)(LyricList);
