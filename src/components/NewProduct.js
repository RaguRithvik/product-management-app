import AddProducts from "./AddProducts";

function NewProduct(props) {


    const onAddProductHandler = (productData) => {
        productData.id = Math.random().toString();
        props.onAddproductSave(productData);
    }

    return (
        <div>
            <h2>Add Your New Products</h2>

            <AddProducts onAddProduct={onAddProductHandler} />
        </div>
    )
}

export default NewProduct;