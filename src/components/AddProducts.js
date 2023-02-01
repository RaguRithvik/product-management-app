import { useState } from "react";
import './AddProducts.css';

const formErrStatus = { titleErr: false, priceErr: false, pnmae: "span-none", pprice: "span-none" };

function AddProducts(props) {
    
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [formErrData, setFormErrData] = useState(formErrStatus);

    const titleHandler = (event) => {

        if (event.target.value.trim().length > 0) {
            setFormErrData((prev) => {
                return { ...prev, titleErr: false, pnmae: "span-none", };
            })
        }

        setTitle(() => {
            return event.target.value;
        })
    }

    const priceHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setFormErrData((prev) => {
                return { ...prev, priceErr: false, pprice: "span-none", };
            })
        }
        setPrice(() => {
            return event.target.value;
        })
    }

    const formHandler = (event) => {
        event.preventDefault();
        if (title.trim().length === 0 || price.trim().length === 0) {
            setFormErrData(() => {
                return { priceErr: true, titleErr: true, pnmae: "span-show", pprice: "span-show" }
            });
            return;
        }
        else if (title.trim().length === 0) {
            setFormErrData(() => {
                return { priceErr: false, titleErr: true, pnmae: "span-show", pprice: "span-hide" }
            });
            return;
        }
        else if (price.trim().length === 0) {
            setFormErrData(() => {
                return { priceErr: false, titleErr: true, pnmae: "span-hide", pprice: "span-show" }
            });
            return;
        }

        const formData = { title, price };
        setTitle('');
        setPrice('');
        props.onAddProduct(formData);
    }
    
    return (
        <form onSubmit={formHandler}>
            Product Name: <input type="text" value={title} onChange={titleHandler} className={formErrData.titleErr ? 'invalid' : ''} /><span className={formErrData.pnmae}> * Please Enter Product Name</span> <br /><br />

            Product Price: <input type="number" value={price} onChange={priceHandler} className={formErrData.priceErr ? 'invalid' : ''} /><span className={formErrData.pprice}> * Please Enter Product Price</span> <br /><br />

            <button type="submit">Add Product</button>
            <hr />
        </form>
    )
}

export default AddProducts;