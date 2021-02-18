import axios from 'axios';
import { FETCH_RECIPES, saveRecipes } from 'src/actions/recipes';

const recipes = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      axios.get('http://localhost:3001/recipes')
        .then((response) => {
          store.dispatch(saveRecipes(response.data));
        })
        .catch((error) => {
          // error
        })
      next(action);
      break;

    default:
      next(action);
  }
};

export default recipes;
