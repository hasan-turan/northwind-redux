import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { listCategories } from "../../redux/actions/categoryActions";
import {
  insertProduct,
  updateProduct
} from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";

export function getProductById(products, productId) {
  let product = products.find(p => p.id === productId) || null;
  return product;
}

function Product({
  products,
  categories,
  getProducts,
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
  updateProduct
};

function mapStateToProps(state, ownProps) {
  const productId = ownProps.match.params.productId;
  const product =
    productId && state.productReducer.length > 0
      ? getProductById(state.productReducer, productId)
      : {};
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
