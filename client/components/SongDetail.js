import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import { getSong } from '../queries';
import LyricCreate from './LyricCreate';

class SongDetail extends Component {
  render() {
    const { data } = this.props;
    if (data.loading) {
      return <div></div>;
    }

    const { song } = data;
    return (
      <div>
        <h3>
          {song.title}
        </h3>
        <LyricCreate/>
      </div>
    );
  }
}

export default graphql(getSong, {
  options: (props) => ({
    variables: {
      id: props.match.params.id
    }
  })
})(SongDetail);


