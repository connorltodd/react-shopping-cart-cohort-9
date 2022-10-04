export default function Cart (props) {
    // lifting up the state in react

    const calculateTotal = () => {
        const total = props.cartProducts.reduce((accumulator, product) =>
        {
            return (accumulator + product.price * product.quantity).toFixed(2)
        },0);
        return total;
    }

    return (
        <div>
            <h1>Cart</h1>
            {props.cartProducts.map(item => (
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
            <p>TOTAL: {calculateTotal()}</p>
        </div>
    )
}