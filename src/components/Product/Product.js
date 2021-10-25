import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { name, img, price, seller, stock } = props.product;
    console.log(props.product);
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-description">
                <h4 className="product-name">{name}</h4>
                <p><small>by {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>Only {stock} left in stock. Order soon.</small></p>
                <button className="primary-button"><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;