import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

const ProductDetail = ({ categories, product, onSave, onChange, valid }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
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
        options={categories}
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
      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
};

export default ProductDetail;
