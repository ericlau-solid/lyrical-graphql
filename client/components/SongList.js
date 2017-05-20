import React from 'react';
import { fetchSongs } from '../queries';
import { graphql } from 'react-apollo';

export const SongList = (props) => {
  const renderSongs = () => (
    props.data.songs.map(song => (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      )
    )
  );

  return props.data.loading ? (<div>Loading ...</div>) : (
    <ul className="collection">
      {renderSongs()}
    </ul>
  )
};

export default graphql(fetchSongs)(SongList);
