import './App.css';
import React from 'react';

import { Navbar, Nav, Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Board from './pages/Board';
import Upload from './pages/Upload';

class App extends React.Component {
  
  render() {
    return (
      <Router>
        <Navbar className='navbar-horizontal navbar-dark bg-default' expand='lg'>
          <Nav className="ml-lg-auto" navbar>
            <Link to='/'>
              <Button>SoundBoard</Button>
            </Link>
            <Link to='/upload'>
              <Button>Upload</Button>
            </Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path='/upload'>
            <Upload />
          </Route>
          <Route path='/'>
            <Board />
          </Route>
        </Switch>
      </Router>
    );
  }

}

export default App;