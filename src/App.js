import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from './reducers/root-reducer';
import './App.css';
import thunk from 'redux-thunk';
import {Router, Route } from 'react-router-dom';
import {LoginPage} from './components/LoginPage';
import {RegisterPage} from './components/RegisterPage';
import {history} from './_helpers/history';
import MainComponent from './components/main-component/main-component'

const enhancers = [];
const middleware = [
  thunk,
]
const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store =  createStore(RootReducer, composedEnhancers);
class App extends Component {
  render() {
    return (
      
        <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <Route path="/" exact component={ LoginPage } />
            <Route path="/login" exact component={ LoginPage } />
            <Route path="/register" exact component={ RegisterPage } />
            <Route path="/page"  component={ MainComponent } />
          </div>
          </Router>
        </Provider>
     
    );
  }
}

export default App;