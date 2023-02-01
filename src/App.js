import './App.css';
import ProductList from './components/ProductList';
import NewProduct from './components/NewProduct';
import sony from './images/1.png';
import dell from './images/5.png';
import hp from './images/8.png';
import { useState } from 'react';

const productInitData = [
  { id: "asdfs343", title: "Sony", price: 20000, image: sony },
  { id: "2343bv4234", title: "Dell", price: 45000, image: dell },
  { id: "657543sadsda", title: "HP", price: 31000, image: hp }
];

function App() {

  const [productsData, setProductsData] = useState(productInitData);

  const onAddproductSaveHandler = (productData) => {

    const randomImages = [sony, dell, hp];
    
    productData.image = randomImages[Math.floor(Math.random() * 3)];

    setProductsData((pdtData) => {
      return [productData, ...pdtData];
    });
  }
  const DeleteProduct = (id) => {
    setProductsData(productsData.filter((data) => data.id !== id))
  }
  const UpdateProduct = (data) => {
    setProductsData(productsData.map((item) => {
      if (item.id === data.id) {
        return data;
      } else {
        return item;
      }
    }))
  }
  const [search, setSearch] = useState("")
  let productView = <p>No Products Found</p>;
  
  if (productsData.length > 0) {
    let filtervalue = productsData.filter((query)=>query.title.toLowerCase().includes(search))
    if (filtervalue.length > 0) {
      productView = filtervalue.map((pdtObj) => { 
        return <ProductList title={pdtObj.title} price={pdtObj.price} image={pdtObj.image} id={pdtObj.id} key={pdtObj.id} DeleteProduct={DeleteProduct} UpdateProduct={UpdateProduct} />})
    }
    else {
      productView = <p>No Products Found</p>;
    }
  } 

  return (
    <div>
      <h1>Products Management</h1>
      <NewProduct onAddproductSave={onAddproductSaveHandler} />
      <input onChange={(e) =>setSearch(e.target.value)} placeholder="Search Products Name"/>
      {productView}
    </div>
  )
}

export default App;
