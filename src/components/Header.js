import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/" style={{"textDecoration":"none"}}><h1>weiwei</h1></Link>
      </div>
    );
  }
}

export default App;
