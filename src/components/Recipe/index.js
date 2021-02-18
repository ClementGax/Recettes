import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getRecipeBySlug } from 'src/utils';

import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

import './styles.css';

function Recipe({ recipes }) {
  const { slug } = useParams();

  const recipe = getRecipeBySlug(recipes, slug);

  return (
    <div className="recipe">
      <Header
        name={recipe.title}
        thumbnail={recipe.thumbnail}
        author={recipe.author}
        difficulty={recipe.difficulty}
      />
      <Ingredients
        list={recipe.ingredients}
      />
      <Instructions
        steps={recipe.instructions}
      />
    </div>
  );
}

Recipe.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
      ingredients: PropTypes.array.isRequired,
      instructions: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Recipe;
