
import HeaderMain from "../components/HeaderMain"
import Footer from '../components/Footer'
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
const Cart = () => {
    const [quantities, setQuantities] = useState([1, 1, 1]);

    const increaseQuantity = (i) => {
        const newQuantities = [...quantities];
        newQuantities[i] += 1;
        setQuantities(newQuantities);
    };

    const decreaseQuantity = (i) => {
        const newQuantities = [...quantities];
        if (newQuantities[i] > 1) {
            newQuantities[i] -= 1;
            setQuantities(newQuantities);
        }
    };
    const removeItem = (i) => {
        const newQuantities = [...quantities];
        newQuantities.splice(i, 1);
        setQuantities(newQuantities);
    };
    const updateCart = () => {
        window.location.reload();
    };
    return (
        <>
            <HeaderMain />
            <div className="cart-main">
                <div className="main-container">
                    <div className="cart-items">
                        {quantities.map((quantity, index) => (
                            <div className="cart-item" key={index}>
                                <div className="first-cart-flex">
                                    <div className="remove-btn" onClick={() => removeItem(index)}>
                                        <IoMdClose />
                                    </div>
                                    <div className="cart-item-img">
                                        <img
                                            src="https://beymaral-honey.com/wp-content/uploads/2023/03/product-21.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="cart-item-name">
                                        <h3>Fresh Milk</h3>
                                    </div>
                                </div>
                                <div className="cart-price">
                                    <h4>$50.00</h4>
                                </div>
                                <div className="cart-quantity">
                                    <div className="cart-quantity-plus-minus">
                                        <div className="cart-quantity-total-sum">
                                            <input type="number" value={quantity} readOnly />
                                        </div>
                                        <div className="cart-quantity-btns">
                                            <div className="cart-quantity-btn-minus">
                                                <button onClick={() => decreaseQuantity(index)}>-</button>
                                            </div>
                                            <div className="cart-quantity-btn-plus">
                                                <button onClick={() => increaseQuantity(index)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-subtotal">
                                    <h4>${(quantity * 50).toFixed(2)}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-main-btns">
                        <div className="cart-coupon">
                            <input type="text" placeholder="Coupon code" />
                            <button>Apply coupon</button>
                        </div>
                        <button onClick={updateCart}>Update cart</button>
                    </div>
                    <div className="cart-totals">
                        <h2>CART TOTALS</h2>
                        <div className="cart-totals-flex">
                            <div className="cart-totals-subtotal">
                                <h4>Subtotal</h4>
                                <h5>${(quantities.reduce((acc, qty) => acc + qty, 0) * 50).toFixed(2)}</h5>
                            </div>

                            <div className="cart-totals-total">
                                <h4>Total</h4>
                                <h5>${(quantities.reduce((acc, qty) => acc + qty, 0) * 50).toFixed(2)}</h5>
                            </div>
                        </div>
                        <Link to='/checkout'>
                            <button>Proceed to checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart
