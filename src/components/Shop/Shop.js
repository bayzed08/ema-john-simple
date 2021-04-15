import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';

const Shop = () => {
    console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    console.log(first10);
    const [products, setProducts] = useState(first10);
    return (
        <div className="shop-container">
            <div className="product-container">
            <h3>Total Products {products.length}</h3>
            <ul>
                {
                    products.map(product => <li>Product name: { product.name}</li>)
                }
            </ul>
            </div>
            <div className="cart-container">
              <h3>This Cart Container</h3>
            </div>


        </div>
    );
};

export default Shop;