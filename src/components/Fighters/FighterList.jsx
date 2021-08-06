import React from 'react';
import { Link } from 'react-router-dom';
import { useFighters } from '../../state/customHooks';
import Fighter from './Fighter';

const FighterList = () => {
  const { fighters, loading } = useFighters();
  if(loading) return <h1>Loading...</h1>;

  const fighterElements = fighters.map((fighter) => (
    <li key={fighter.id}>
      <Link to={`/${fighter.id}`}>
        <Fighter {...fighter} />
      </Link>
    </li>
  ));

  return (
  
    <ul>{fighterElements}</ul>
  );

};

export default FighterList;
