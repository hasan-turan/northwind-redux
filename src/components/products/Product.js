import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { listCategories } from "../../redux/actions/categoryActions";
import {
  insertProduct,
  getProduct,
  updateProduct
} from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";

export function getProductById(products, productId) {
  console.log(products);
  console.log(productId);
  let product = products.find(p => p.id === productId) || null;
  return product;
}
/**
 *  properties comes from mapStateToProps like: products, categories,
 *  actions comes from mapDispatchToProps like : getProduct,listCategories,insertProduct,updateProduct,
 */
function Product({
  products,
  categories,
  getProduct,
  listCategories,
  insertProduct,
  updateProduct,
  history,
  ...props
}) {
  const [product, setProduct] = useState({ ...props.product });
  useEffect(() => {
    if (categories.length === 0) {
      listCategories();
    }
    setProduct({ ...props.product });
  }, [props.product]);

  function handleChange(event) {
    const { name, value } = event;
    setProduct(previousProduct => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value //if field name is categoryId then parseInt else set value to field
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    if (product.id === 0) {
      insertProduct(product).then(() => {
        history.push("/");
      });
    } else {
      updateProduct(product.id).then(() => {
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
    />
  );
}

const mapsDispatchToProps = {
  listCategories,
  insertProduct,
  getProduct,
  updateProduct
};

function mapStateToProps(state, ownProps) {
  //ownProps.match.params.productId is parameter from query string
  const productId = parseInt(ownProps.match.params.productId);
  // //if productId exists in querstring and data returned from state.getProductReducer
  // //then filter product inside
  // const product =
  //   productId && state.getProductReducer.length > 0
  //     ? getProductById(state.getProductReducer, productId)
  //     : {};
  const product = getProduct(productId);

  return {
    product,
    products: state.getProductReducer,
    categories: state.listCategoryReducer
  };
}
export default connect(
  mapStateToProps,
  mapsDispatchToProps
)(Product);
