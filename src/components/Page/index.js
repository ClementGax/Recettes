import React from 'react';
import { Route } from 'react-router-dom';

import Recipe from 'src/components/Recipe';
import Home from 'src/components/Home';

import data from 'src/data';

import './page.scss';

const Page = () => (
  <div className="page">
    <h1 className="page-title">Orecipes</h1>
    <div className="page-content">
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/recipe/recette1">
        <Recipe recipe={data[0]} />
      </Route>
    </div>
  </div>
);

export default Page;
