import React from 'react';
import fakeData from '../../fakeData/fakeData'
import Product from '../Product/Product';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import './Cource.css'


const Cource = () => {
    const data = fakeData.slice(0,12);
    const [products, setProduct] = useState(data);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="couurce-container">
            <div className="product-container">
                {
                    products.map(product => <Product 
                        handleAddProduct = {handleAddProduct} product={product}>    
                        </Product>)
                }
            </div>
            <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Cource;