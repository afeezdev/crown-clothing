import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
}


const App = () => (
  <div>
    <Switch>
      <Route exact path={"/"} component={HomePage} />
      <Route exact path={"/:hats"} component={HatsPage} />
    </Switch>
  </div>
);
  
export default App; 