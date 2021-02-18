import { connect } from 'react-redux';

import { fetchRecipes } from 'src/actions/recipes';

import App from 'src/components/App';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  launchFetchRecipes: () => {
    dispatch(fetchRecipes());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
