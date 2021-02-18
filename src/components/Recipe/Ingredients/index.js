import React from 'react';
import PropTypes from 'prop-types';

import Ingredient from './Ingredient';

import './ingredients.scss';

const Ingredients = ({ list }) => (
  <section className="ingredients">
    {list.map((ingredient) => (
      <Ingredient key={ingredient.name} {...ingredient} />
    ))}
  </section>
);

Ingredients.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quantity: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      unit: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Ingredients;
