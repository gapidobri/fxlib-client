import './App.css';
import React from 'react'

import Player from './components/Player';
import { Button, Container, Navbar, NavbarBrand } from 'reactstrap';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }

  callAPI() {
    fetch('http://fxlib.gasperdobrovoljc.com/api/file/')
    .then(res => res.text())
    .then(res => {
      const generatedList = JSON.parse(res).files.map(file => <Player title={ file }></Player>);
      this.setState({ apiResponse: generatedList });
    });
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return <div className='App'>
      <Navbar className='navbar-horizontal navbar-dark bg-default' expand='lg'>
          <NavbarBrand>
            FXLIB
          </NavbarBrand>
          <div className='ml-lg-auto'>
            <Button>Upload</Button>
          </div>
      </Navbar>
      <div className='Buttons'>
        { this.state.apiResponse }
      </div>
    </div>
  }

}

export default App;