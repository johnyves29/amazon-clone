import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket, 'basket')
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                 <>
                    <p>
                    {/* part of the homework */}
                        Subtotal ({basket?.length} items):
                        <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains gift
                    </small>
                </>
            )}
            decimalScale={2} //for 2 decimal places
            value={getBasketTotal(basket)} //part of the homework
            displayType={"text"} 
            thousandSeparator={true}
            prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
