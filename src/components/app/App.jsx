import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FighterList from '../Fighters/FighterList';
import FighterDetails from '../FighterDetails/FighterDetails';
import AddFormPage from '../FighterForm/AddFormPage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={FighterList} />
      <Route exact path="/:id" component={FighterDetails} />
      <Route exact path="/add" component={AddFormPage} />
      
    </Switch>
  );
}
