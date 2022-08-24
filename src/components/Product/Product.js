import './Product.css';

function Product (props) {
    return (
        <div className='product'>
            <img className='product-image' src={props.image} alt={props.title}  />
            <h2 className='product-title' >{props.title}</h2>
            <p className='product-category'>{props.category}</p>
            <p className='product-price'>{props.price} €</p>
        </div>
    )
}

export default Product;