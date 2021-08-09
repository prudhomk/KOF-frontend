/* eslint-disable max-len */
export const fetchFighters = async () => {
  const res = await fetch('https://guarded-falls-13158.herokuapp.com/api/v1/fighters/');
  const fighters = await res.json();

  return fighters;
};

export const fetchFighter = async (id) => {
  console.log(id);
  const res = await fetch(`https://guarded-falls-13158.herokuapp.com/api/v1/fighters/${id}`);
  const fighter = await res.json();
  return fighter;
};

export const createFighter = async (fighter) => {
  const res = await fetch('https://guarded-falls-13158.herokuapp.com/api/v1/fighters/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(fighter)
  });
  const newFighter = res.json();
  return await newFighter;
};

export const updateFighter = async (fighter, id) => {
  console.log(fighter);
  const res = await fetch(`https://guarded-falls-13158.herokuapp.com/api/v1/fighters/${id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(fighter)
  });
  console.log(res);
  const updatedFighter = res.json();
  console.log(updatedFighter);
  return await updatedFighter;
};

export const deleteFighter = async (id) => {
  const res = await fetch(`https://guarded-falls-13158.herokuapp.com/api/v1/fighters/${id}`, {
    method: 'DELETE'
  });
  console.log(res);
  if(res.status === 200) alert('Fighter Eliminated');
  
};

