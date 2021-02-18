import { connect } from 'react-redux';

import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  recipes: state.recipes.recipesList,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
