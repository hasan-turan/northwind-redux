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
        value={product.productName}
        onChange={onChange}
        error="Hata"
      ></TextInput>
      <SelectInput
        name="categoryId"
        label="Product Category"
        value={product.categoryId}
        onChange={onChange}
        options={categories}
        valueField="id"
        displayField="categoryName"
        defaultValue={7}
        error="Hata"
      ></SelectInput>
      <TextInput
        name="unitPrice"
        label="Unit Price"
        value={product.unitPrice}
        onChange={onChange}
        error="Hata"
      ></TextInput>
      <TextInput
        name="quantityPerUnit"
        label="Quantity per unit"
        value={product.quantityPerUnit}
        onChange={onChange}
        error="Hata"
      ></TextInput>
      <TextInput
        name="unitsInStock"
        label="Units in stock"
        value={product.unitsInStock}
        onChange={onChange}
        error="Hata"
      ></TextInput>
      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
};

export default ProductDetail;
