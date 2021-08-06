import React from 'react';
import { useHistory } from 'react-router-dom';
import FighterForm from './FighterForm';
import { createFighter } from '../../services/fetchApi';


const AddFormPage = () => {
  
  const handleAdd = async (addedFighter) => {
    const history = useHistory();
    const newFighter = await createFighter(addedFighter);
    history.push(`/fighters/${newFighter.id}`);
  };

  console.log('HEY');
  return (
    <div className="AddBeingPage">
      <h2>A New Challenger Appears!</h2>
      <FighterForm onSubmit={handleAdd}/>
    </div>
  );
};

export default AddFormPage;
