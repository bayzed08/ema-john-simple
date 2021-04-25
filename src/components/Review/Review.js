import React, { useEffect,useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Review = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productkeys = Object.keys(savedCart);
        const cardProducts = productkeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        //const counts = Object.values(savedCart);
        //console.log(counts);
        console.log(cardProducts);
        setCart(cardProducts);
    }, []);

    return (
        <div>
            <h2>This Is Review Order length: { cart.length}</h2>
        </div>
    );
};

export default Review;