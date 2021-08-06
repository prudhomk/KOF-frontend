import React from 'react';
import { useHistory } from 'react-router-dom';
import FighterForm from './NewFighterForm';
import { fetchFighter } from '../../services/fetchApi';

const EditFormPage = () => {

  const handleUpdate = async (fighter) => {
    const history = useHistory();
    const editedFighter = await fetchFighter(fighter);
    history.push(`/fighters/${editedFighter.id}`);
  };

  return (
    <div>
      <h2>Edit Fighter Info</h2>
      <FighterForm onSubmit={handleUpdate} />
    </div>
  );
};

export default EditFormPage;
