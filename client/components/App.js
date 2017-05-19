import React from 'react';
import SongList from './SongList';
import {
  HashRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

const Foo = () => (
  <div>foo this!</div>
)

const App = () => {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={SongList} />
        <Route path="/foo" component={Foo}/>
        <NavLink exact to="/" activeStyle={{
          fontWeight: 'bold',
          color: 'red'
        }}>Song List</NavLink> >
        <NavLink to="/foo" activeStyle={{
          fontWeight: 'bold',
          color: 'red'
        }}>Foo</NavLink>
      </div>
    </Router>
  )
};

export default App;
