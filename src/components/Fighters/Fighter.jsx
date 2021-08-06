import React from 'react';
import PropTypes from 'prop-types';

const Fighter = ({ name, birthplace, style, image }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      <p>{name}</p>
      <p>{birthplace}</p>
      <p>{style}</p>
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
