import React from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function ProductDetail (props) {
    const [selectedProduct, setSelectedProduct] = React.useState();
    const { id } = useParams();
    
    React.useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => setSelectedProduct(response.data))
    }, []);

    return (
        <div>
            <h1>{selectedProduct?.title}</h1>
            <img src={selectedProduct?.image} height={100} width={100} />
            <p>{selectedProduct?.price}</p>
            <p>{selectedProduct?.description}</p>
            <button onClick={() => props.addProductToCart(selectedProduct)}>Add to cart</button>
        </div>
    )
}


// first render - selected product is not available
// componentDidMount - fetch product from api
// second render - with product info