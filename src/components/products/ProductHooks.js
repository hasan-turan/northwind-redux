import React, { useEffect, useState } from "react";
import useStateWithCallback from "use-state-with-callback";
import { useDispatch, useSelector } from "react-redux";
import ProductDetail from "./ProductDetail";
import { listCategoriesAsync } from "../../redux/actions/categoryActions";
import { getProduct } from "../../redux/actions/productActions";
import initialState from "../../redux/store/initialState";
import ProductDetailHooks from "./ProductDetailHooks";
import ProductDetailComponent from "./ProductDetailComponent";
import { ProductContext } from "./contexts/ProductContext";

export const ProductHooks = ({ ...props }) => {
  //const dispatch = useDispatch();

  const [product, setProduct] = useState(initialState.product);
  const [categories, setCategories] = useStateWithCallback(
    initialState.categories,
    categories => categoriesCallBack(categories)
  );
  const categoriesCallBack = categories => {
    console.log("ProductWithHooks categories", categories);
  };
  useEffect(() => {
    const productId = props.match.params.productId;

    listCategoriesAsync("ProductHooks").then(categories =>
      setCategories(categories)
    );

    getProduct(productId).then(data => {
      setProduct(data[0]);
    });
  }, [setProduct, setCategories]);

  function handleSave(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    let { name, value } = event.target;
    if (name === "categoryId") value = parseInt(value, 10);

    setProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <ProductContext.Provider value={{ categories }}>
      Product with hooks
      <ProductDetailHooks
        product={product}
        onChange={handleChange}
        onSave={handleSave}
      />
    </ProductContext.Provider>
  );
};
