
import HeaderMain from "../components/HeaderMain"
import Footer from '../components/Footer'
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import { decrementCartItem, removeFromCart, incrementCartItem } from "../state/actions/cartAction";
const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const updateCart = () => {
        window.location.reload();
    };
    const handleRemoveItem = (item) => {
        dispatch(removeFromCart(item));
    };
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {

            const updatedItem = { ...item, quantity: item.quantity - 1 };
            dispatch(decrementCartItem(updatedItem));
        }
    };
    const handleIncrement = (item) => {
        const updatedItem = { ...item, quantity: item.quantity + 1 };
        dispatch(incrementCartItem(updatedItem))
    };
    const getSubtotal = (item) => {
        return (item.price * item.quantity).toFixed(2)
    };


    return (
        <>
            <HeaderMain />
            <div className="cart-main">
                <div className="main-container">
                    <div className="cart-items">
                        <div className="cart-names">
                            <div className="cart-name-product">
                                <h2>Product</h2>
                            </div>
                            <div className="cart-name-price">
                                <h2>Price</h2>
                            </div>
                            <div className="cart-name-quantity">
                                <h2>Quantity</h2>
                            </div>
                            <div className="cart-name-subtotal">
                                <h2>Subtotal</h2>
                            </div>
                        </div>
                        {cartItems.map((item, index) => (
                            <div className="cart-item" key={index}>
                                <div className="first-cart-flex">
                                    <div className="remove-btn" onClick={() => handleRemoveItem(item)}>
                                        <IoMdClose />
                                    </div>
                                    <div className="cart-item-img">
                                        <img
                                            src={item.imgUrl}
                                            alt=""
                                        />
                                    </div>
                                    <div className="cart-item-name">
                                        <h3>{item.title}</h3>
                                    </div>
                                </div>
                                <div className="cart-price">
                                    <h4>${item.price}</h4>
                                </div>
                                <div className="cart-quantity">
                                    <div className="cart-quantity-plus-minus">
                                        <div className="cart-quantity-total-sum">
                                            <input type="number" value={item.quantity} readOnly />
                                        </div>
                                        <div className="cart-quantity-btns">
                                            <div className="cart-quantity-btn-minus" onClick={() => handleDecrement(item)}>
                                                <button>-</button>
                                            </div>
                                            <div className="cart-quantity-btn-plus" onClick={() => handleIncrement(item)}>
                                                <button>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-subtotal">
                                    <h4>${getSubtotal(item)}</h4>
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
                                <h5>${getSubtotal(item)}</h5>
                            </div>

                            <div className="cart-totals-total">
                                <h4>Total</h4>
                                <h5>${getSubtotal(item)}</h5>
                            </div>
                        </div>
                        <Link to='/checkout'>
                            <button onClick={scrollToTop}>Proceed to checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart
