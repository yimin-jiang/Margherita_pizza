import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';


class CartTotal extends React.Component {


    render() {

        const { discount, cartSubtotal, orderTotal } = this.props;
        // const orderTotal = cartSubtotal - discount;

        return (
            <div className="cart-total flex-item">
                <p>Cart Totals</p>
                <ul>
                    <li className="flex-container">
                        <span className="price-label flex-item">CART SUBTOTAL</span>
                        <span className="price-num flex-item">${cartSubtotal}.00</span>
                    </li>
                    <li className="flex-container">
                        <span className="ship-label flex-item">SHIPPING AND HANDLING</span>
                        <span className="ship-sit flex-item">Free Shipping</span>
                    </li>
                    <li className="flex-container">
                        <span className="discount-label flex-item">DISCOUNT</span>
                        <span className="discount-value flex-item">{discount}</span>
                    </li>
                </ul>
                <div className="order-total">
                    <p className="flex-container">
                        <span className="flex-item">Order Total</span>
                        <span className="flex-item">${orderTotal}.00</span>
                    </p>
                </div>
                <button className="upd-cart">UPDATE CART</button>
                <Link to="/checkout"><button className="checkout">PROCEED TO CHECKOUT</button></Link>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    const { shoppingCartReducer: { discount, cartSubtotal, orderTotal} } = state
    return {
        discount,
        cartSubtotal,
        orderTotal,
    }
}

const mapActionsToProps = {
    
}

export default connect(mapStateToProps, mapActionsToProps)(CartTotal)