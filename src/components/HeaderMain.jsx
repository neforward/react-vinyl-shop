import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const HeaderMain = () => {
    const [isActive, setIsActive] = useState(false);
    const [sidebarActive, setSidebarActive] = useState(false);
    const [cartItems, setCartItems] = useState([{ quantity: 1 }, { quantity: 1 }, { quantity: 1 }]);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

    const incrementItemCount = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity += 1;
        setCartItems(updatedCartItems);
    };

    const decrementItemCount = (index) => {
        const updatedCartItems = [...cartItems];
        if (updatedCartItems[index].quantity > 1) {
            updatedCartItems[index].quantity -= 1;
            setCartItems(updatedCartItems);
        }
    };
    const removeItem = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
    };
    const calculateSubtotal = () => {
        let subtotal = 0;
        cartItems.forEach((item) => {
            subtotal += item.quantity * 40;
        });
        return subtotal.toFixed(2);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const sidebar = document.getElementById('sidebar');
            const cartIcon = document.querySelector('.main-header-cart');
            if (sidebarActive && sidebar && !sidebar.contains(event.target) && !cartIcon.contains(event.target)) {
                toggleSidebar();
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [sidebarActive]);

    return (
        <>
            <header className="main-header">
                <div className="container">
                    <div className="main-header-content">
                        <nav className="main-header-nav">
                            <Link to='/'>
                                <img src="https://patrickgeorge.com/wp-content/uploads/2023/01/Vinyl_05-1.webp" alt="" />
                            </Link>
                            <Link to='/'>
                                <span>HOME</span>
                            </Link>
                            <Link to='/about'>
                                <span>ABOUT US</span>
                            </Link>
                            <Link to='/doing'>
                                <span>WHAT WE DO</span>
                            </Link>
                            <Link to='/shop'>
                                <span>SHOP</span>
                            </Link>
                            <Link to='/contact'>
                                <span>CONTACT US</span>
                            </Link>
                        </nav>
                        <div className="main-header-cart">
                            <img className="cart" onClick={toggleSidebar} src="./cart.svg" alt="../../public/cart.svg" />
                            <div className={sidebarActive ? 'sidebar active' : 'sidebar'} id="sidebar">
                                <div className="sidebar-container">
                                    <div className="sidebar-top">
                                        <h2>YOUR CART ({cartItems.length} ITEM{cartItems.length !== 1 ? 'S' : ''})</h2>
                                        <IoMdClose size={30} onClick={toggleSidebar} />
                                    </div>
                                    <div className="bought-items">
                                        {cartItems.map((item, index) => (
                                            <div className="bought-item" key={index}>
                                                <div className="bought-item-img">
                                                    <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/product-19.jpg" alt="" />
                                                </div>
                                                <div className="bought-item-info">
                                                    <div className="bought-item-name">
                                                        <h6>Cheese cream</h6>
                                                    </div>
                                                    <div className="bought-item-price">
                                                        <h5>$40.00</h5>
                                                    </div>
                                                    <div className="bought-item-des">
                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut…</p>
                                                    </div>
                                                    <div className="bought-flex">
                                                        <div className="bought-item-plus-minus">
                                                            <div className="btn-minus">
                                                                <button onClick={() => decrementItemCount(index)}>-</button>
                                                            </div>
                                                            <div className="total-sum">
                                                                <input type="number" value={item.quantity} readOnly />
                                                            </div>
                                                            <div className="btn-plus">
                                                                <button onClick={() => incrementItemCount(index)}>+</button>
                                                            </div>
                                                        </div>
                                                        <div className="bought-item-remove-btn" onClick={() => removeItem(index)}>
                                                            <span>Remove item</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h5>$40.00</h5>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="sidebar-bottom">
                                        <div className="sidebar-bottom-top">
                                            <h3>Subtotal</h3>
                                            <h2>${calculateSubtotal()}</h2>
                                        </div>
                                        <div className="sidebar-bottom-des">
                                            <p>Shipping, taxes, and discounts calculated at checkout.</p>
                                        </div>
                                        <div className="sidebar-bottom-btns">
                                            <Link to='/cart'>
                                                <button className="cart-btn">View my cart</button>
                                            </Link>
                                            <Link to='/checkout'>
                                                <button className="checkout">Cart to checkout</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="responsive-logo">
                            <Link to='/'>
                                <img src="https://beymaral-honey.com/wp-content/uploads/2024/02/transparent-logo.png" alt="" />
                            </Link>
                        </div>
                        <div className={`main-menu-btn ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                        <div className={`main-menu ${isActive ? 'active' : ''}`}>
                            <Link to='/'>HOME</Link>
                            <Link to='/about'>ABOUT US</Link>
                            <Link to='/doing'>WHAT WE DO</Link>
                            <Link to='/shop'>SHOP</Link>
                            <Link to='/contact'>CONTACT US</Link>
                            <Link to='/cart'>CART</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderMain;
