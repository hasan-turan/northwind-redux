import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";
import initialState from "../../redux/store/initialState";
import { listCategories } from "../../redux/actions/categoryActions";

class ProductDetailComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: initialState.categories
    };
  }
  componentDidMount() {
    listCategories().then(categories => {
      this.setState(categories, () => {
        console.log("11111 categories", categories);
      });
    });
  }

  render() {
    const { product, onSave, onChange, valid } = this.props;
    const { categories } = this.state;

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
}

export default ProductDetailComponent;
