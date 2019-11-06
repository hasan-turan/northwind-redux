import { Container } from "reactstrap";
import Navigation from "../navi/Navigation";
import Dashboard from "./Dashboard";
import { withRouter } from "react-router";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import NotFound from "../common/NotFound";
import Product from "../products/Product";
import { ProductHooks } from "../products/ProductHooks";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Navigation />
          <Switch>
            <Route exact path="/productredux" component={Product} />
            <Route exact path="/producthooks" component={ProductHooks} />
            <Route
              path="/producthooks/update/:productId"
              component={ProductHooks}
            />
            <Route exact path="/" component={Dashboard} />
            <Route path="/product/new" component={Product} />
            <Route path="/product/update/:productId" component={Product} />
            <Route exact path="/cart/detail" component={CartDetail} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
