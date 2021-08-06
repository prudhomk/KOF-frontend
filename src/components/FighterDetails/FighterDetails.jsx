/* eslint-disable max-len */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useFighter } from '../../state/customHooks';
import { deleteFighter } from '../../state/customHooks';
import { Link } from 'react-router-dom';

const FighterDetails = () => {
  const { id } = useParams();
  const fighter = useFighter(id);
  if(!fighter) return <h1>Loading...</h1>;

  const handleDelete = async () => {
    const fighter = useFighter(id);
    await deleteFighter(fighter.id);
  };

  return (
    <section>
      <h2>Fighter Info</h2>
      <dl data-testid="1">
        <dt>Name</dt>
        <dd>{fighter.name}</dd>

        <dt>Japanese Name</dt>
        <dd>{fighter.japanese}</dd>

        <dt>Portrait</dt>
        <dd>
          <img src={fighter.image} alt={fighter.name}/>
        </dd>

        <dt>Original Appearance</dt>
        <dd>{fighter.origin}</dd>

        <dt>Country of Origin</dt>
        <dd>{fighter.birthplace}</dd>

        <dt>Fighting Style</dt>
        <dd>{fighter.style}</dd>

        <dt>Job</dt>
        <dd>{fighter.job}</dd>

        <dt>Powers and Abilities</dt>
        <dd>{fighter.powers}</dd>

        <dt>Quote</dt>
        <dd>{fighter.quote}</dd>
      </dl>

      <Link to={`/fighters/${fighter.id}/edit`}>
        Edit Fighter Info
      </Link>

      <button onClick={handleDelete}>
        Remove Fighter
      </button>
    </section>
  );
};

export default FighterDetails;
