import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    //const total = cart.reduce((total, prd) => total + prd.price, 0);

    // let total = 0;
    // for (let i = 0; i < cart.length; i++)
    // {
    //     const product = cart[i];
    //     total += product.price;
    // }

    let total = 0;
    {
        cart.map(product => total += product.price);
    }
    let shipping = 0;
    if (total > 55) {
        shipping = 5;
    }
    else if(total > 20){
        shipping = 10;
    }
    else if (total > 0) {
        shipping = 15;
    }
    const taxVat = total / 10;
    const grandTotal = total + shipping + taxVat;
    const formatToNumber=(num)=>{
        const precision = num.toFixed(3);
        return Number(precision);
    }
    return (
        <div>
            <h2>Ordered Summary</h2>
            <p>Items Ordered: {cart.length}</p>
            <br/>
            <p>Carts Prouct price: {formatToNumber(total)}</p>
            <p><small>Shiping Charge:</small> {formatToNumber(shipping)}</p>
            <p><small>Vat Tax Charge:</small> {formatToNumber(taxVat)}</p>
            <p>Total Price : {formatToNumber(grandTotal)}</p>
            <br></br>
            <Link to='/review'>
                <button class="main-button">Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;