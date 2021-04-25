import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    //console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    //console.log(first10);
    const [products, setProducts] = useState(first10);

    const [cart, setCart] = useState([]);
    const handleAddProduct = (product) => {
        console.log("Product added", product);
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count);
    };

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(prdct => <Product
                        product={prdct}
                        key={prdct.key}
                        showAddtoCard={true}
                        handleAddProduct={handleAddProduct}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;