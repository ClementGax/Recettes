import React from 'react';
import RecipeSmall from './RecipeSmall';

import './home.scss';

const Home = () => (
  <main className="home">
    <p>Bienvenue sur mon site de recettes. Régalez-vous !</p>
    <div className="recipes-small">
      <RecipeSmall />
      <RecipeSmall />
    </div>
  </main>
);

export default Home;
