import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';

import './styles.scss';

const App = ({ launchFetchRecipes }) => {
  useEffect(() => {
    launchFetchRecipes();
  }, []);
  return (
    <div className="app">
      <Nav />
      <Page />
    </div>
  );
};

export default App;
