import React from 'react';
import SongList from './SongList';
import SongCreate from './SongCreate';
import SongDetail from './SongDetail';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={SongList} />
        <Switch>
          <Route path="/songs/new" component={SongCreate} />
          <Route path="/songs/:songId" component={SongDetail} />
        </Switch>

        <Link to="/">Song List</Link> >
        <Link
          to="/songs/new"
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </Router>
  )
};

export default App;
