import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Home from './components/Home/Home'
import './css/App.css'

const Container = (props) => props.children

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router history={hashHistory}>
          <Route path='/' component={Container}>
          
            // Main routes
            <IndexRoute component={Home} />

          </Route>
        </Router>
      </div>
    );
  }
}

export default App;