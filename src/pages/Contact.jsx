import HeaderMain from "../components/HeaderMain"
import Footer from '../components/Footer'
import ArrowTop from "../components/ArrowTop"
const Contact = () => {
    return (
        <>
            <HeaderMain />
            <div className="contact">
                <div className="main-container">
                    <div className="contact-flex">
                        <div className="first-side">
                            <div className="first-side-title">
                                <h4>FARM CONTACT</h4>
                                <p>Connect with our farm team today for inquiries, collaborations, or simply to share your love for our products.</p>
                            </div>
                            <div className="first-side-info">
                                <h6>Contact</h6>
                                <span>4, Shkolnaya street, Zhyrgalan village, Issyk-Kul region, Kyrgyzstan</span>
                                <span>+996 550 205-988</span>
                                <span>info@beymaral-honey.com</span>
                            </div>
                            <div className="first-side-btn">
                                <button>GET DIRECTION</button>
                            </div>
                        </div>
                        <div className="second-side">
                            <h4>CONTACT OUR FARM</h4>
                            <div className="second-side-inputs">
                                <input placeholder="Name" type="text" />
                                <input placeholder="Email" type="text" />
                            </div>
                            <div className="second-side-textarea">
                                <textarea placeholder="Message" name="" id="" cols="80" rows="8"></textarea>
                            </div>
                            <div className="second-side-btn">
                                <button>Send</button>
                            </div>
                        </div>
                    </div>
                    <ArrowTop />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact
