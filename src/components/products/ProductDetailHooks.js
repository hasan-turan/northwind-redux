import React, { useEffect, useState, useContext } from "react";
import { useSelector, connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";
import initialState from "../../redux/store/initialState";
import { listCategories } from "../../redux/actions/categoryActions";
import listCategoryReducer from "../../redux/reducers/listCategoryReducer";
import { ProductContext } from "./contexts/ProductContext";
function ProductDetailHooks({ product, onSave, onChange, valid, ...props }) {
  // const [categories, setCategories] = useStateWithCallback(
  //   initialState.categories,
  //   categories => writeToConsole(categories)
  // );
  // const dispatch = useDispatch();
  //   const categories2 = useSelector(state => state.listCategoryReducer);
  const { categories } = useContext(ProductContext);
  const [categories1, setCategories] = useState(categories);
  useEffect(() => {
    console.log("Initial categories", categories);
    setCategories([
      {
        id: 1,
        categoryName: "aaaaa"
      }
    ]);
    setTimeout(() => {
      console.log("Changes categories", categories);
    }, 5000);
  }, [categories]);
  const writeToConsole = categories => {
    // console.log("writeToConsole categories", categories);
  };
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "Ekle"} With Hooks</h2>

      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        isrequired="true"
        valid={valid}
      ></TextInput>
      <SelectInput
        name="categoryId"
        label="Product Category"
        value={product.categoryId}
        onChange={onChange}
        options={categories1}
        valueField="id"
        displayField="categoryName"
        defaultValue={0}
        isrequired="true"
        valid={valid}
      ></SelectInput>

      <TextInput
        name="unitPrice"
        label="Unit Price"
        value={product.unitPrice}
        onChange={onChange}
        valid={valid}
      ></TextInput>
      <TextInput
        name="quantityPerUnit"
        label="Quantity per unit"
        value={product.quantityPerUnit}
        onChange={onChange}
        valid={valid}
      ></TextInput>
      <TextInput
        name="unitsInStock"
        label="Units in stock"
        value={product.unitsInStock}
        onChange={onChange}
        valid={valid}
      ></TextInput>
      <TextInput
        name="imageUrl"
        label="Image url"
        value={product.imageUrl}
        onChange={onChange}
        valid={valid}
      ></TextInput>
      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    newCategories: state.listCategoryReducer
  };
}

export default connect(mapStateToProps)(ProductDetailHooks);
