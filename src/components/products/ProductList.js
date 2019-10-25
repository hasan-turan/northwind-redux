import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import { Table, Button } from "reactstrap";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";
class ProductList extends Component {
  componentDidMount() {
    this.props.actions.listProducts();
  }
  addToCart = product => {
    //https://stackoverflow.com/questions/51219883/showing-success-and-error-messages-in-react-redux-app/51221734
    this.props.actions.addToCart(product).then(response => {
      alertify.success(product.productName + " added to cart!", 2);
    });
  };
  render() {
    let title = "Product List";
    if (this.props.currentCategory)
      title += " Of " + this.props.currentCategory.categoryName;
    return (
      <div>
        {title}
        <Button color="success float-right">
          <Link to="/product/new" className="Link">
            Add New Product
          </Link>
        </Button>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Unit Price</th>
              <th>Qunatity Per Unit</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>
                  <Link to={"/product/update/" + product.id}>
                    {product.productName}
                  </Link>
                </td>
                <td>{product.unitPrice} </td>
                <td>{product.quantityPerUnit} </td>
                <td>{product.unitsInStock} </td>
                <td>
                  <Button
                    color="success"
                    onClick={() => this.addToCart(product)}
                  >
                    Add
                  </Button>
                </td>
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
    products: state.listProductReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      listProducts: bindActionCreators(productActions.listProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
