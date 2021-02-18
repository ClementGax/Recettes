import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import recipesMiddleware from 'src/middlewares/recipes';

import reducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    recipesMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
