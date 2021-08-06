import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FighterList from '../Fighters/FighterList';


export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={FighterList} />
      <Route exact path="/:id" component={FighterDetails} />
    </Switch>
  );
}
