import React from 'react';
import { useHistory } from 'react-router-dom';
import NewFighterForm from './NewFighterForm';
import { createFighter } from '../../services/fetchApi';


const FormPage = () => {
  
  const handleAdd = async (addedFighter) => {
    const history = useHistory();
    const newFighter = await createFighter(addedFighter);
    history.push(`/fighters/${newFighter.id}`);
  };

  console.log('HEY');
  return (
    <div>
      <h2>A New Challenger Appears!</h2>
      <NewFighterForm onSubmit={handleAdd}/>
    </div>
  );
};

export default FormPage;
