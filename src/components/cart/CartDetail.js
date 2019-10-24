import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { connect } from "react-redux";
import { Table, Button } from "reactstrap";
import alertify from "alertifyjs";
class CartDetail extends Component {
  removeFromCart = product => {
    this.props.actions.removeFromCart(product).then(response => {
      alertify.error(product.productName + " removed from cart!");
    });
  };
  render() {
    return (
      <React.Fragment>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Category Id</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map(c => (
              <tr key={c.product.id}>
                <td>{c.product.id}</td>
                <td>{c.product.categoryId}</td>
                <td>{c.product.productName}</td>
                <td>{c.product.unitPrice}</td>
                <td>{c.product.unitsInStock}</td>
                <td>{c.quantity}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => this.removeFromCart(c.product)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartDetail);
