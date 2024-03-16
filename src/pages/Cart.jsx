
import HeaderMain from "../components/HeaderMain"
import Footer from '../components/Footer'
import { IoMdClose } from "react-icons/io";
const Cart = () => {
    return (
        <>
            <HeaderMain />
            <div className="cart-main">
                <div className="main-container">
                    <div className="cart-names">
                        <h6 className="product">Product</h6>
                        <h6 className="price">Price</h6>
                        <h6 className="quantity">Quantity</h6>
                        <h6 className="subtotal">Subtotal</h6>
                    </div>
                    <div className="cart-items">
                        <div className="cart-item">
                            <div className="first-cart-flex">
                                <IoMdClose />
                                <div className="cart-item-img">
                                    <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/product-21.jpg" alt="" />
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
                                        <input type="number" />
                                    </div>
                                    <div className="cart-quantity-btns">
                                        <div className="cart-quantity-btn-minus">
                                            <button>-</button>
                                        </div>

                                        <div className="cart-quantity-btn-plus">
                                            <button>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-subtotal">
                                <h4>$50.00</h4>
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="first-cart-flex">
                                <IoMdClose />
                                <div className="cart-item-img">
                                    <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/product-21.jpg" alt="" />
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
                                        <input type="number" />
                                    </div>
                                    <div className="cart-quantity-btns">
                                        <div className="cart-quantity-btn-minus">
                                            <button>-</button>
                                        </div>

                                        <div className="cart-quantity-btn-plus">
                                            <button>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-subtotal">
                                <h4>$50.00</h4>
                            </div>
                        </div>
                    </div>
                    <div className="cart-main-btns">
                        <div className="cart-coupon">
                            <input type="text" placeholder="Coupon code" />
                            <button>Apply coupon</button>
                        </div>
                        <button>Update cart</button>
                    </div>
                    <div className="cart-totals">
                        <h2>CART TOTALS</h2>
                        <div className="cart-totals-flex">
                            <div className="cart-totals-subtotal">
                                <h4>Subtotal</h4>
                                <h5>$100.00</h5>
                            </div>

                            <div className="cart-totals-total">
                                <h4>Total</h4>
                                <h5>$100.00</h5>
                            </div>
                        </div>
                        <button>Proceed to checkout</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart
