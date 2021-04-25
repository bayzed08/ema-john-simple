import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const { ProductKey } = useParams();
    const product = fakeData.find(pd => pd.key === ProductKey);
    //console.log(product);
    return (
        <div>
            <Product product={product} showAddtoCard={false}></Product>
            <h2>Product Features</h2>
            {product.features.map(ft =>
            (
                <p>{ft.description}: {ft.value}</p>

            ))}
        </div>
    );
};

export default ProductDetail;