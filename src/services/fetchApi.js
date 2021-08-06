/* eslint-disable max-len */
import request from 'superagent';

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
  const res = await request.post('https://guarded-falls-13158.herokuapp.com/api/v1/fighters/')
    .then(res.send(fighter));
  return res.body;
};

export const updateFighter = async (fighter, id) => {
  const res = await request.put(`https://guarded-falls-13158.herokuapp.com/api/v1/fighters/${id}`)
    .then(res.send(fighter, id));
  return res.body;
};

export const deleteFighter = async (id) => {
  const res = await request.delete(`https://guarded-falls-13158.herokuapp.com/api/v1/fighters/${id}`)
    .then(res.send(id));
  return res.body;
};

