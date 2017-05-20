import React from 'react';
import {graphql} from 'react-apollo';
import {getSong} from '../queries';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

const SongDetail = (props) => {
  const {data} = props;
  if (data.loading) {
    return <div></div>;
  }

  const {song} = data;
  return (
    <div>
      <h3>
        {song.title}
      </h3>
      <LyricList lyrics={song.lyrics} />
      <LyricCreate/>
    </div>
  );
};

export default graphql(getSong, {
  options: (props) => ({
    variables: {
      id: props.match.params.songId
    }
  })
})(SongDetail);


