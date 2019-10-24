import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

const ProductDetail = ({ categories, product, onSave, onChange }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        placeHolder="Please Insert Name"
        value={product.name}
        onChange={onChange}
        error="Hata"
      ></TextInput>
      <SelectInput
        name="categoryId"
        label="Product Category"
        placeHolder="Please select category"
        value={product.categoryId}
        onChange={onChange}
        options={categories}
        valueField="id"
        displayField="categoryName"
        defaultValue={7}
        error="Hata"
      ></SelectInput>
      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
};

export default ProductDetail;
