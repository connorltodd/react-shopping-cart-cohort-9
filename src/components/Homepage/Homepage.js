import React from 'react';
import Product from '../Product/Product';
import axios from 'axios';
import './Homepage.css';

export default function Homepage () {
    const [products, setProducts] = React.useState([]);

    const fetchProducts = () => {
        axios.get('https://fakestoreapi.com/products')
        .then(response => setProducts(response.data));
    }

    // 1. constructor
    // 2. first render (we cannot see any products as products array is empty)
    // 3. componentDidMount (call api and update products in the state)
    // 4. rerender occurs showing all of the products

    // 5. any update to any state will use componentDidUpdate

    // componentDidMount
    // this runs one time when the page loads
    React.useEffect(
        () => {
            console.log('component did mount')
            fetchProducts()
        },[]
    )

    // componentDidUpdate
    React.useEffect(
        () => {
                console.log('component did update with products: ', products)
        },[products]
    )

    // componentWillUnmount
    React.useEffect(
        () => {
                return () => {
                    // write code to cancel timer, subscriptions etc here
                }
        },[]
    )


    // componentDidUpdate
    // theoretical example, when the url changes for the products page we would
    // fetch new products 
    // React.useEffect(
    //     () => {
    //         if(pageNumber !=== lastPageNumber) {
    //             fetchProducts()
    //         }
    //     },[pageNumber]
    // )

    // this one runs after every render
    // be careful with this if you update the state here you can cause 
    // infinite loops
    // React.useEffect(
    //     () => {
    //         
    //     },
    // )

    return (
        <div className='product-container'>
            {console.log('render')}
            {/* <button onClick={fetchProducts}>Fetch Products</button> */}
            {products.map(
                function(item) {
                    return  <Product
                    key={item.id} 
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