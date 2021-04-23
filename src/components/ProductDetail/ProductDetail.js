import React from 'react';
import { useParams } from 'react-router';

const ProductDetail = () => {
    const { ProductKey } = useParams();
    return (
        <div>
            <h3>{ ProductKey} Product Details Coming Soooo.......n</h3>
        </div>
    );
};

export default ProductDetail;