import { connect } from 'react-redux';

import Nav from 'src/components/Nav';

const mapStateToProps = (state) => ({
  recipes: state.recipes.recipesList,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
