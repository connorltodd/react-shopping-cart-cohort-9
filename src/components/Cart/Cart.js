export default function Cart (props) {
    // lifting up the state in react
    return (
        <div>
            <h1>Cart</h1>
            {props.cartProducts.map(item => (
                <div>
                    <p>{item.title}</p>
                    <img src={item.image} />
                    <p>{item.price}</p>
                </div>
            )
            )}
        </div>
    )
}