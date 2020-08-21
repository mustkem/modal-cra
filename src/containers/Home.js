import { connect } from "react-redux";
import { path } from "ramda";

import Home from "../components/Home/Home";

import { getProducts } from "../store/actions";

const mapStateToProps = (state) => {
  return {
    products: path(["products", "products"], state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
