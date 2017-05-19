import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

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

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
