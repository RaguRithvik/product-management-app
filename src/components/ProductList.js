import { useState } from "react";


function ProductList(props) {

    const { title, price, image, id } = props;

    const [count, setCount] = useState(0);

    const cartClickHandler = () => {

        setCount((prevCount) => {
            return prevCount + 1;
        });
    }
    const deleteProducts = (id) => {
        if (window.confirm("Are sure want to delete this?")) {
            props.DeleteProduct(id)
        }
        else {
            return
        }
    }
    const [titleValue, setTitleValue] = useState(title)
    const [priceValue, setPriceValue] = useState(price)
    const [editBtn, seteditBtn] = useState("")
    const [updateBtn, setupdateBtn] = useState("hide")

    const editBtnClick = () => {
        seteditBtn("hide")
        setupdateBtn("un-hide")
    }
    const updateProducts = () => {
        props.UpdateProduct({ id: id, title: titleValue, price: priceValue, image: image })
        seteditBtn("un-hide")
        setupdateBtn("hide")
    }
    return (
        <div>
            <div className="product-list">
                <img src={image} alt="products" /> <br /><br />
                Title: {title} <br /><br />
                Price: {price} <br /><br />
                Count: {count} <br /><br />
                <button onClick={cartClickHandler} disabled={count === 5}>Add to Cart</button> <button onClick={() => setCount(count - 1)} disabled={count === 0}>Remove Cart</button>
                <br />
                <button onClick={editBtnClick} className={editBtn}>Edit</button> <button onClick={() => deleteProducts(id)} className={editBtn}>Delete</button>

                <input value={titleValue} onChange={(e) => setTitleValue(e.target.value)} className={updateBtn} name="title" /><br />

                <input value={priceValue} onChange={(e) => setPriceValue(e.target.value)} className={updateBtn} name="price" type="number" />

                <button onClick={updateProducts} className={updateBtn}>Update</button>

            </div>
        </div>
    )
}

export default ProductList;