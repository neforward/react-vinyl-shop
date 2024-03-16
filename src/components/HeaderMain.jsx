import { useState } from "react";
import { Link } from "react-router-dom"
import { IoMdClose } from "react-icons/io";
const HeaderMain = () => {

    const [isActive, setIsActive] = useState(false);
    const toggleMenu = () => {
        setIsActive(!isActive);
    }

    const [sidebarActive, setSidebarActive] = useState(false);
    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive);

        if (!sidebarActive) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    return (
        <>
            <header className="main-header">
                <div className="container">
                    <div className="main-header-content">
                        <nav className="main-header-nav">
                            <Link to='/'>
                                <img src="https://beymaral-honey.com/wp-content/uploads/2024/02/transparent-logo.png" alt="" />
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
                            <img className="cart" onClick={toggleSidebar} src="../../public/cart.svg" alt="" />
                            <div className={sidebarActive ? 'sidebar active' : 'sidebar'} id="sidebar">
                                <div className="sidebar-container">
                                    <div className="sidebar-top">
                                        <h2>YOUR CART (1 ITEM)</h2>
                                        <IoMdClose size={30} onClick={toggleSidebar} />
                                    </div>
                                    <div className="bought-items">
                                        <div className="bought-item">
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
                                                            <button>-</button>
                                                        </div>
                                                        <div className="total-sum">
                                                            <input type="number" />
                                                        </div>
                                                        <div className="btn-plus">
                                                            <button>+</button>
                                                        </div>
                                                    </div>
                                                    <div className="bought-item-remove-btn">
                                                        <span>Remove item</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bought-item-price">
                                                <h4>$40.00</h4>
                                            </div>
                                        </div>
                                        <div className="bought-item">
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
                                                            <button>-</button>
                                                        </div>
                                                        <div className="total-sum">
                                                            <input type="number" />
                                                        </div>
                                                        <div className="btn-plus">
                                                            <button>+</button>
                                                        </div>
                                                    </div>
                                                    <div className="bought-item-remove-btn">
                                                        <span>Remove item</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bought-item-price">
                                                <h4>$40.00</h4>
                                            </div>
                                        </div>
                                        <div className="bought-item">
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
                                                            <button>-</button>
                                                        </div>
                                                        <div className="total-sum">
                                                            <input type="number" />
                                                        </div>
                                                        <div className="btn-plus">
                                                            <button>+</button>
                                                        </div>
                                                    </div>
                                                    <div className="bought-item-remove-btn">
                                                        <span>Remove item</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bought-item-price">
                                                <h4>$40.00</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-bottom">
                                        <div className="sidebar-bottom-top">
                                            <h3>Subtotal</h3>
                                            <h2>$40.00</h2>
                                        </div>
                                        <div className="sidebar-bottom-des">
                                            <p>Shipping, taxes, and discounts calculated at checkout.</p>
                                        </div>
                                        <div className="sidebar-bottom-btns">
                                            <Link to='/cart'>
                                                <button className="cart-btn">Veiw my cart</button>
                                            </Link>
                                            <Link to='checkout'>
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
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderMain
