import React from 'react';
import PropTypes from 'prop-types';
// import './Fighter.css';

const Fighter = ({ name, birthplace, style, image }) => (
  <figure className="Fighter">
    <h2>Name: {name}</h2>
    <img src={image} alt={name} />
    <figcaption>
      <p>Birthplace: {birthplace}</p>
      <p>Fighting Style: {style}</p>
    </figcaption>
   
  </figure>
);

Fighter.propTypes = {
  name: PropTypes.string.isRequired,
  birthplace: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Fighter;
