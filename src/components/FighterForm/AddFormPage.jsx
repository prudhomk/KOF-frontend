import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import FighterForm from './FighterForm';
import { createFighter } from '../../services/fetchApi';


export default class AddFormPage extends Component {
  handleAdd = async addedFighter => {
    const history = useHistory();
    const newFighter = await createFighter(addedFighter);
    history.push(`/fighters/${newFighter.id}`);
  }
  render() {

    return (
      <div className="AddBeingPage">
        <h2>A New Challenger Appears!</h2>
        <FighterForm onSubmit={this.handleAdd}/>
      </div>
    );
  }
}
