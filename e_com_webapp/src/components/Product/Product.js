import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./product.css";


const Product = (props) => {
    console.log(props)
    const{img,name,seller,price,stock}=props.product;
    return (
        <div className="product_area">
            <div className="product_img">
                <img src={props.product.img} alt=""/>

            </div>
            <div className="product_details">
                <h3 id="product_name">{props.product.name}</h3>
                <br/>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p>Only {stock} left in stock - order soon</p>
                <button className="cart-button" onClick= {() => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} />add to cart
                    
                    </button>

            </div>
            
            
        </div>
    );
};

export default Product;