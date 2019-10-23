import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import { ListGroup, ListGroupItem } from "reactstrap";
import * as productActions from "../../redux/actions/productActions";
class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.listCategories();
  }
  categoryClick = category => {
    this.props.actions.selectCategory(category);
    this.props.actions.getProducts(category.id);
  };
  render() {
    return (
      <div>
        <h1>Categories</h1>
        <ListGroup>
          {this.props.categories.map(category => (
            <ListGroupItem
              active={this.props.currentCategory.id === category.id}
              key={category.id}
              onClick={() => this.categoryClick(category)}
              className="link"
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.selectCategoryReducer,
    categories: state.listCategoryReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      selectCategory: bindActionCreators(
        categoryActions.selectCategory,
        dispatch
      ),
      listCategories: bindActionCreators(
        categoryActions.listCategories,
        dispatch
      ),
      getProducts: bindActionCreators(productActions.getProducts, dispatch)
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
