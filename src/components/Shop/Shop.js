import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    console.log(first10);
    const [products, setProducts] = useState(first10);

    const handleAddProduct = (product) => {
            console.log("Product added",product);
    };

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(prdct => <Product
                        product={prdct}
                        key={prdct.key}
                        handleAddProduct={handleAddProduct}></Product>)
                }
            </div>
            <div className="cart-container">
              <h3>This Cart Container</h3>
            </div>


        </div>
    );
};

export default Shop;