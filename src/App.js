import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './components/header'
import Navigator from './components/navigator'
import Subscription from './components/subscription'
import Footer from './components/footer'

import PersonalInformation from './pages/personal-information'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigator />
        <Switch>
          <Route path="/">
            <PersonalInformation />
          </Route>
          {/* Add more routes here */}
        </Switch>
        <Subscription />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
