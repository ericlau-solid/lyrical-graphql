import React, {Component}from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { fetchSongs } from '../queries';

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {title: ''};
  }

  onSubmit = async (event) => {
    event.preventDefault();
    await this.props.mutate({
      variables: {
        title: this.state.title
      },
      refetchQueries: [{
       query: fetchSongs
      }]
    })
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create new song</h3>
        <form onSubmit={this.onSubmit}>
          <label>Song Title:</label>
          <input
            onChange={event => this.setState({title: event.target.value})}
            value={this.state.title}/>
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String){
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
