import './Product.css';

function Product (props) {
    console.log(props)
    return (
        <div>
            <img className='product-image' src={props.image} alt={props.title}  />
            <h1>{props.title}</h1>
            <p>Category: {props.category}</p>
            <p>Price: {props.price}</p>
        </div>
    )
}

export default Product;