import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge
} from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs";
class CartSummary extends Component {
  renderEmpty = () => {
    return (
      <NavItem>
        <NavLink>Cart is empty</NavLink>
      </NavItem>
    );
  };
  renderSummary = () => {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map(item => {
            return (
              <DropdownItem key={item.product.id}>
                <Badge
                  color="danger"
                  onClick={() => this.removeFromCart(item.product)}
                >
                  X
                </Badge>
                <span>{item.product.productName} </span>
                <Badge color="secondary">{item.quantity}</Badge>
              </DropdownItem>
            );
          })}
          <DropdownItem divider />
          <DropdownItem>
            <Link to="/cart/detail">Got to cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };
  removeFromCart = product => {
    this.props.actions.removeFromCart(product).then(response => {
      alertify.notify(product.productName + " removed from cart!");
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
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
)(CartSummary);
