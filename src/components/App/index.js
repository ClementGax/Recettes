import React from 'react';

import Nav from 'src/components/Nav';
import Page from 'src/components/Page';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Nav />
    <Page />
  </div>
);

// == Export
export default App;
