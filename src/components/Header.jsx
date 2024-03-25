import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    }
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
                                    <Link to='/'>HOME</Link>
                                    <Link to='/about'>ABOUT US</Link>
                                    <Link to='/doing'>WHAT WE DO</Link>
                                    <Link to='/shop'>SHOP</Link>
                                    <Link to='/contact'>CONTACT US</Link>
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
