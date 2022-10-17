import './Popup.css';

export default function Popup(props) {
    return (
        <div className='popup'>
            <div className='popup-card'>
                <div className='popup-card-content'>
                    <h1>Your order is ready see below the total</h1>
                    <p>TOTAL: {props.total}</p>
                    <button onClick={props.confirmOrder}>Confirm Order</button>
                </div>
            </div>
        </div>
    )
}