import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="footer-columns">
                            <div className="first-footer-column">
                                <h2>BEYMARAL HONEY</h2>
                                <img src="https://beymaral-honey.com/wp-content/uploads/2024/02/transparent-logo.png" alt="" />
                            </div>
                            <div className="second-footer-column">
                                <h2>GET IN TOUCH</h2>
                                <span>4, Shkolnaya street, Zhyrgalan village, Issyk-Kul region, Kyrgyzstan</span>
                                <span>+39 344 199 8286 </span>
                                <span>info@beymaral-honey.com</span>
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
                                <h2>FARM OPENING HOURS</h2>
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
