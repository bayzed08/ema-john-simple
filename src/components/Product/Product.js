import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props.product.key);
    //console.log(props);
    const {img, name,seller,price,stock,key} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h3 className="product-name">Product Name: <Link to={"/product/"+key}>{name}</Link> </h3>
                <p><small>by : {seller}</small></p>
                <br/>
                <p><small>${price}</small></p>
                <p><small>only {stock} left in stock - Order Soon</small></p>
                <button
                    className="main-button"
                    onClick={() => { props.handleAddProduct(props.product) }}>
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to
                </button>
            </div>
        </div>
    );
};

export default Product;