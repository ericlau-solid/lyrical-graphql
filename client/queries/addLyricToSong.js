import gql from 'graphql-tag';

export const addLyricToSong = gql`
  mutation AddLyricToSong($content: String, $songId: ID){
    addLyricToSong(content: $content, songId:$songId) {
      id
      lyrics {
        id
        content
      }
    }
  }
`;

