import React, { Component } from 'react';
import './App.css';
import UserData from './user-data';

class App extends Component {
  render() {
    return (
      <div >
        <header className="App-header">
          <UserData/>
        </header>
      </div>
    );
  }
}

export default App;
