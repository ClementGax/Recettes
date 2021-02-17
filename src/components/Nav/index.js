import React from 'react';

import { NavLink } from 'react-router-dom';

import './nav.scss';

const Nav = () => (
  <nav className="nav">
    <NavLink className="nav-item" to="/" activeClassName="nav-item-active" exact>Accueil</NavLink>
    <NavLink className="nav-item" to="/recipe/recette1" activeClassName="nav-item-active">Recette 1</NavLink>
    <NavLink className="nav-item" to="/recipe/recette2" activeClassName="nav-item-active">Recette 2</NavLink>
  </nav>
);

export default Nav;
