import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="footer-columns">
                            <div className="first-footer-column">
                                <h2>Vinyl Head</h2>
                                <img src="https://patrickgeorge.com/wp-content/uploads/2023/01/Vinyl_05-1.webp" alt="" />
                            </div>
                            <div className="second-footer-column">
                                <h2>GET IN TOUCH</h2>
                                <span>1600 Vinyl Avenue, Brooklyn, NY 11201</span>
                                <span>+39 344 199 8286 </span>
                                <span>info@vinylhead.com</span>
                                <span>SHOW ON MAP</span>
                            </div>
                            <div className="third-footer-column">
                                <h2>USEFUL LINKS</h2>
                                <Link to='/about'>About us</Link>
                                <Link to='/doing'>What we do</Link>
                                <Link to='/shop'>Shop</Link>
                                <Link to='/contact'>Contact Us</Link>
                            </div>
                            <div className="fourth-footer-column">
                                <h2>FACTORY OPENING HOURS</h2>
                                <div>Mon - Fri 09:00 - 20:00 hrs</div>
                                <div>Saturday 09:00 - 18:00 hrs</div>
                                <div>Sunday 09:00 - 15:00 hrs</div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
