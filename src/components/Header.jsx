import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <>
            <header className='header'>
                <div className="container">
                    <div className="header-content">
                        <Link to='/'>
                            <div className="header-logo">
                                <img src="https://patrickgeorge.com/wp-content/uploads/2023/01/Vinyl_05-1.webp" alt="" />
                            </div>
                        </Link>
                        <div className={`menu-btn ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                        <nav className={`nav ${isActive ? 'active' : ''}`}>
                            <div className="span-container">
                                <div className="span-flex">
                                    <Link to='/'><span onClick={scrollToTop}>HOME</span></Link>
                                    <Link to='/about'><span onClick={scrollToTop}>ABOUT US</span></Link>
                                    <Link to='/doing'><span onClick={scrollToTop}>WHAT WE DO</span></Link>
                                    <Link to='/shop'><span onClick={scrollToTop}>SHOP</span></Link>
                                    <Link to='/contact'><span onClick={scrollToTop}>CONTACT US</span></Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
