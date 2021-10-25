import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const totalReducer = (previous, product) => previous + product.price;
    const total = props.cart.reduce(totalReducer, 0);

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {props.cart.length}</h5>
            <h5>Total Price: {total.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;