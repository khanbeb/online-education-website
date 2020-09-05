import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    let totalPrice = 0;

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];

        totalPrice = totalPrice + product.price;
        
    }
    return (
        <div>
            <h4>Enrol Courses</h4>
            <p>Items Orders: {cart.length}</p>
            <h3 className="total-price">Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;