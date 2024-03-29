import HeaderMain from "../components/HeaderMain"
import Footer from '../components/Footer'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
const Checkout = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    const cartItems = useSelector(state => state.cart.cartItems);

    return (
        <>
            <HeaderMain />
            <div className="checkout">
                <div className="main-container">
                    <div className="checkout-content">
                        <div className="checkout-container">
                            <div className="checkout-one">
                                <div className="checkout-txt">
                                    <div className="checkout-flex">
                                        <h2>1.</h2>
                                        <h3>CONTACT INFORMATION</h3>
                                    </div>
                                    <p>We'll use this email to send you details and updates about your order.</p>
                                    <input type="text" placeholder="Email address" />
                                </div>
                            </div>
                            <div className="checkout-two">
                                <div className="checkout-flex">
                                    <h2>2.</h2>
                                    <h3>BILLING ADDRESS</h3>
                                </div>
                                <p>Enter the billing address that matches your payment method.</p>
                                <div className="checkout-names">
                                    <input type="text" placeholder="First name" />
                                    <input type="text" placeholder="Last name" />
                                </div>
                                <div className="checkout-place">
                                    <input type="text" placeholder="Address" />
                                    <input type="text" placeholder="Apartment, suite, etc. (optional)" />
                                    <select name="" id="" >
                                        <option value="" disabled>Country/Region</option>
                                        <option value="">U.S.A</option>
                                        <option value="">Germany</option>
                                    </select>
                                </div>
                                <div className="input-flex">
                                    <div className="checkout-city">
                                        <input type="text" placeholder="City" />
                                        <input type="text" placeholder="State" />
                                    </div>
                                    <div className="checkout-zip">
                                        <input type="text" placeholder="ZIP Code" />
                                        <input type="text" placeholder="Phone (optional)" />
                                    </div>
                                </div>
                            </div>
                            <div className="checkout-three">
                                <div className="checkout-flex">
                                    <h2>3.</h2>
                                    <h3>PAYMENT OPTIONS</h3>
                                </div>
                                <div className="checkout-warning">
                                    There are no payment methods available.
                                    This may be an error on our side.
                                    Please contact us if you need any help
                                    placing your order.
                                </div>
                            </div>
                            <div className="checkout-checkbox">
                                <label>
                                    <input type="checkbox" name="" id="" />
                                    Add a note to your order
                                </label>
                                <span>By proceeding with your purchase you agree to our Terms and Conditions and Privacy Policy</span>
                            </div>
                            <div className="checkout-btns">
                                <Link to='/cart'>
                                    <button onClick={scrollToTop} className="checkout-back">Return to Cart</button>
                                </Link>
                                <button className="place-order">Place Order</button>
                            </div>
                        </div>
                        <div className="checkout-items">
                            <h2>Order Summary</h2>
                            {cartItems.map((item, index) => (
                                <div className="checkout-item" key={index}>
                                    <div className="checkout-item-flex">
                                        <div className="checkout-img">
                                            <img src={item.imgUrl} alt="" />
                                        </div>
                                        <div className="checkout-flex-flex">
                                            <div className="checkout-flex">
                                                <h6>{item.title}</h6>
                                                <h4>${item.price}</h4>
                                                <p>{item.description}</p>
                                            </div>
                                            <h5>${item.price * item.quantity}</h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="checkout-subtotal">
                                <h4>Subtotal</h4>
                                <h5>${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}</h5>
                            </div>
                            <div className="checkout-total">
                                <h4>Total</h4>
                                <h5>${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Checkout

