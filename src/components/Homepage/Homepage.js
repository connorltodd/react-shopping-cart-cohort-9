import React from 'react';
import Product from '../Product/Product';
import axios from 'axios';

export default function Homepage () {
    const [products, setProducts] = React.useState([]);


    const fetchProducts = () => {
        axios.get('https://fakestoreapi.com/products')
        .then(response => setProducts(response.data));
        console.log('fetch button was clicked')
    }

    return (
        <div>
            <button onClick={fetchProducts}>Fetch Products</button>
            {products.map(
                function(item) {
                    return  <Product 
                    title={item.title} 
                    price={item.price} 
                    image={item.image}
                    category={item.category} 
                  />
                }
            )}
        </div>
    )
}