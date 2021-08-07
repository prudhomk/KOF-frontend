import React from 'react';
import { useHistory } from 'react-router-dom';
import EditFighterForm from './EditFighterForm';
import { fetchFighter } from '../../services/fetchApi';

const EditFormPage = () => {

  const handleUpdate = async (fighter) => {
    const history = useHistory();
    const editedFighter = await fetchFighter(fighter);
    history.push(`/${editedFighter.id}`);
  };
  console.log('hello');
  return (
    <div>
      
      <h2>Edit Fighter Info</h2>
      <EditFighterForm onSubmit={handleUpdate} />
    </div>
  );
};

export default EditFormPage;
