import { Link } from 'react-router-dom';
import './Product.css';

function Product (props) {
    // object destructuring (JS & React)
    const { image, title, category, price, id } = props;
    return (
        <Link to={`/products/${id}`}>
            <div className='product'>
                <img className='product-image' src={image} alt={title}  />
                <h2 className='product-title' >{title}</h2>
                <p className='product-category'>{category}</p>
                <p className='product-price'>{price} €</p>
            </div>
        </Link>
    )
}

export default Product;