import React, { Component } from "react";
import { bindActionCreators } from "C:/Users/hasan.turan/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux";
import { connect } from "react-redux";
import * as productActions from "../../redux/actions/productActions";
import { Table } from "reactstrap";
class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  render() {
    let title = "Product List";
    if (this.props.currentCategory)
      title += " Of " + this.props.currentCategory.categoryName;
    return (
      <div>
        {title}
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Unit Price</th>
              <th>Qunatity Per Unit</th>
              <th>Units In Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice} </td>
                <td>{product.quantityPerUnit} </td>
                <td>{product.unitsInStock} </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.selectCategoryReducer,
    products: state.getProductReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
