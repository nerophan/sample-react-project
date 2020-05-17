import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './components/header'
import Subscription from './components/subscription'
import Footer from './components/footer'

import Home from './pages/home'
import PersonalInformation from './pages/personal-information'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/personal-information">
            <PersonalInformation />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Subscription />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
