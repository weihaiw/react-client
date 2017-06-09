import React, { Component } from 'react';
import './App.css';
// import axios from 'axios'
import Header from "./components/Header.js"
import Postlist from "./components/Postlist.js"
import Newlist from "./components/Newlist.js"
import Showlist from "./components/Showlist.js"
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
          <Route exact path="/" component={Postlist}></Route>
          <Route path="/post/new" component={Newlist}></Route>
          <Route path="/post/:id/edit" component={Newlist}></Route>
          <Route path="/post/:id/Showlist" component={Showlist}></Route>
      </div>
    </Router>
    );
  }
}

export default App;
