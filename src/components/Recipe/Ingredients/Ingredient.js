import React from 'react';
import PropTypes from 'prop-types';

const Ingredient = ({
  id, quantity, unit, name,
}) => (
  <div key={id} className="ingredients__item">
    <span className="ingredients__item__quantity">
      {`${quantity} ${unit}`}
    </span>
    <span className="ingredients__item__name">
      {name}
    </span>
  </div>
);

Ingredient.propTypes = {
  id: PropTypes.number.isRequired,
  quantity: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  unit: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Ingredient;
