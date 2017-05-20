import React from 'react';
import { deleteSong, fetchSongs } from '../queries';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

export const SongList = (props) => {
  const onSongDelete = async (id) => {
    await props.mutate({
      variables: {
        id
      }
    });

    props.data.refetch();
  }

  const renderSongs = () => (
    props.data.songs.map(({ id, title }) => (
        <li key={id} className="collection-item">
          <Link to={`/songs/${id}`}>
            {title}
          </Link>
          <i
            className="material-icons"
            onClick={() => onSongDelete(id)}
          >
            delete
          </i>
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

export default graphql(deleteSong) (
  graphql(fetchSongs)(SongList)
);
