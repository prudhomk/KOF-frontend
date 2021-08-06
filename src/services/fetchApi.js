/* eslint-disable max-len */
export const fetchFighters = async () => {
  const res = await fetch('https://guarded-falls-13158.herokuapp.com/api/v1/fighters/');
  const fighters = await res.json();

  return fighters;
};

export const fetchFighter = async (id) => {
  const res = await fetch(`https://guarded-falls-13158.herokuapp.com/api/v1/fighters/${id}`);
  return res.json();
};

export const createFighter = async (fighter) => {
  const res = await fetch('https://guarded-falls-13158.herokuapp.com/api/v1/fighters/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(fighter)
  });
  const newFighter = res.json();
  return newFighter;
};

export const updateFighter = async (id) => {
  const res = await fetch(`https://guarded-falls-13158.herokuapp.com/api/v1/fighters/${id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(id)
  });
  const updatedFighter = res.json();
  return updatedFighter;
};

export const deleteFighter = async (id) => {
  const res = await fetch(`https://guarded-falls-13158.herokuapp.com/api/v1/fighters/${id}`, {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(id)
  });
  const deadFighter = res.json();
  return deadFighter;
};

