import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { listCategories } from "../../redux/actions/categoryActions";
import {
  insertProduct,
  getProduct,
  updateProduct
} from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";
import initialState from "../../redux/store/initialState";
import alertify from "alertifyjs";
export function getProductById(products, productId) {
  let product = products.find(p => p.id === parseInt(productId)) || null;
  console.log(" getProductById ", product);
  return product;
}
/**
 *  properties comes from mapStateToProps like: products, categories,
 *  actions comes from mapDispatchToProps like : getProduct,listCategories,insertProduct,updateProduct,
 */
function Product({
  products,
  categories,
  listProduct,
  listCategories,
  insertProduct,
  updateProduct,
  history,
  ...props
}) {
  const [product, setProduct] = useState({ ...props.product });
  const [valid, setValid] = useState(false);
  //useEffect:equivalent of ComponentDidMount
  //useState:equivalent of SetState
  useEffect(() => {
    if (categories.length === 0) {
      listCategories();
    }
    setProduct({ ...props.product });
  }, [props.product]);

  function handleChange(event) {
    let { name, value } = event.target;
    if (name === "categoryId") value = parseInt(value, 10);
    /**
     * A component is changing an uncontrolled input of type text to be controlled.
     * Input elements should not switch from uncontrolled to controlled (or vice versa).
     * Decide between using a controlled or uncontrolled input element for the lifetime of
     * the component. More info: https://fb.me/react-controlled-components
     * for this error we have to initialize object with properties like in initialize.product
     */

    setProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    if (!valid) {
      alertify.error("Please fill all required fields");
      return;
    }
    if (!product.id) {
      insertProduct(product).then(() => {
        history.push("/");
      });
    } else {
      updateProduct(product).then(() => {
        history.push("/");
      });
    }
  }
  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      valid={valid}
    />
  );
}

const mapDispatchToProps = {
  listCategories,
  insertProduct,
  getProduct,
  updateProduct
};

function mapStateToProps(state, ownProps) {
  //ownProps.match.params.productId is parameter from query string
  const { productId } = ownProps.match.params; //parseInt(ownProps.match.params.productId);
  //if productId exists in querstring and data returned from state.getProductReducer
  //then filter product inside
  const product =
    productId && state.listProductReducer.length > 0
      ? getProductById(state.listProductReducer, productId)
      : initialState.product;

  return {
    product,
    products: state.listProductReducer,
    categories: state.listCategoryReducer
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
