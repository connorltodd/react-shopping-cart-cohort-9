import React from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from '../Popup/Popup';

export default function Cart(props) {
    const [isPaymentPopupDisplayed, setPaymentPopupDisplay] = React.useState(false);
    // lifting up the state in react
    const navigate = useNavigate();



    const calculateTotal = () => {
        const total = JSON.parse(window.localStorage.getItem('cartProductsLocalStorage')).reduce((accumulator, product) => {
            return (accumulator + product.price * product.quantity)
        }, 0);
        return total;
    }

    // Steps to implement the popup
    // firstly we need a button to display the popup
    // The button will change a state item to display the popup
    // button on the popup to confirm the order
    // this function will clear the cart and will redirect user back to main page

    const confirmOrder = () => {
        props.clearCartProducts()
        setPaymentPopupDisplay(false)
        navigate('/products')
    }


    return (
        <div>
            {isPaymentPopupDisplayed ? (
                <Popup total={calculateTotal()} confirmOrder={confirmOrder} />
            ) : null}
            <div>
                <h1>Cart</h1>
                {JSON.parse(window.localStorage.getItem('cartProductsLocalStorage')) !== null && 
                JSON.parse(window.localStorage.getItem('cartProductsLocalStorage')).map(item => (
                    <div>
                        <p>{item.title}</p>
                        <img src={item.image} height={50} width={50} />
                        <p>{item.price}</p>
                        <p>Quantity {item.quantity}</p>
                        <p onClick={() => props.addProductToCart(item)}>+</p>
                        {item.quantity >= 2 && <p onClick={() => props.handleProductQuantityInCart(item, false)}>-</p>}
                        <button onClick={() => props.removeProductFromCart(item)}>Delete Product</button>
                    </div>
                )
                )}
                {JSON.parse(window.localStorage.getItem('cartProductsLocalStorage')).length ? (
                    <div>
                        <p>TOTAL: {calculateTotal()}</p>
                        <button onClick={() => setPaymentPopupDisplay(true)}>Checkout</button>
                    </div>
                )
                    :
                    <h1>There are currently no products within the cart</h1>
                }


            </div>
        </div>
    )
}