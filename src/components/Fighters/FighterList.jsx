import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFighters } from '../../state/customHooks';
import Fighter from './Fighter';

const FighterList = () => {
  const [page, setPage] = useState(1);
  const { fighters, loading } = useFighters(page);
  if(loading) return <h1>Loading...</h1>;

  const fighterElements = fighters.map((fighter) => (
    <li key={fighter.id}>
      <Link to={`/${fighter.id}`}>
        <Fighter {...fighter} />
      </Link>
    </li>
  ));

  return (
    <>
      <button
        disabled={page <= 1}
        onClick={() => setPage((prevPage) => prevPage + 1)}>
       &lt;
      </button>
      {page}
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>&gt;</button>
      <ul>{fighterElements}</ul>
    </>
  );

};

export default FighterList;
