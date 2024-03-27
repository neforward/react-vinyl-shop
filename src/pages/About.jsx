import ArrowTop from "../components/ArrowTop";
import Footer from "../components/Footer"
import HeaderMain from "../components/HeaderMain"
import { TiHome } from "react-icons/ti";
const About = () => {

    return (
        <>
            <HeaderMain />
            <div className="about">
                <div className="main-container">
                    <div className="flex-side">
                        <div className="left-side">
                            <div className="about-text">
                                <h5>ABOUT US</h5>
                                <h2>Vinyl Head</h2>
                            </div>
                            <div className="about-des-one">
                                <span>Vinyl Records</span>
                                <p>"Welcome to Vinyl Haven, the quintessential vinyl store nestled in the heart of Brooklyn, New York. As you step through the inviting doorway, you're immediately enveloped in the rich, nostalgic ambiance that only a vinyl record store can offer.</p>
                            </div>
                            <div className="about-des-two">
                                <p><span>Vinyl Head</span> has a
                                    The walls are adorned with vibrant album covers, creating a kaleidoscope of musical history spanning decades and genres. From classic rock icons to underground indie gems, Vinyl Haven boasts an extensive collection curated to satisfy every musical palate.</p>
                            </div>
                            <p>It pairs perfectly with most fruits, fresh cheeses, white meat dishes, and fish.</p>

                            <span>THE BEES</span>
                            <div className="about-des-three">
                                <p><span>Vinyl Head</span> Amidst the rows of meticulously organized vinyl records, you'll find vintage turntables and audio equipment, inviting enthusiasts to immerse themselves fully in the analog experience. Knowledgeable staff members are always on hand, ready to offer recommendations or engage in spirited discussions about favorite albums and artists.</p>
                            </div>
                            <div className="about-des-four">
                                <p>In conclusion, <span>Vinyl Head</span> isn't just a record store; it's a sanctuary for music aficionados, a haven where the past meets the present in a symphony of sound. With its vast selection, vibrant atmosphere, and commitment to community, Vinyl Haven stands as a testament to the enduring allure of vinyl culture in the digital age. So whether you're seeking sonic nostalgia or embarking on a musical odyssey, step into Vinyl Haven and let the groove guide you on a journey you won't soon forget.</p>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="one">
                                <div className="logo-box">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/PgLang.png" alt="" />
                                    <h2>pgLang</h2>
                                    <p>Our valued partners in creating immersive experiences and thrilling adventures for all ages.</p>
                                </div>
                                <div className="logo-box">
                                    <img src="https://www.theaudiodb.com/images/media/label/logo/rpvyrt1588510717.png" alt="" />
                                    <h2>Dreamville</h2>
                                    <p>Our esteemed partners, fostering creativity and innovation in music, art, and culture alongside us.</p>
                                </div>
                            </div>
                            <div className="two">
                                <div className="logo-box">
                                    <img src="https://upload.wikimedia.org/wikipedia/en/3/30/G.O.O.D._Music_logo.png" alt="" />
                                    <h2>GOOD Music</h2>
                                    <p>Our esteemed collaborators in crafting soulful and innovative sounds that resonate with audiences worldwide.</p>
                                </div>
                                <div className="logo-box">
                                    <img src="https://seeklogo.com/images/C/cactus-jack-logo-B9A772D2E0-seeklogo.com.png" alt="" />
                                    <h2>Cactus Jack</h2>
                                    <p>Our Partners: A dynamic team of outdoor enthusiasts specializing in adventurous expeditions and wilderness experiences."</p>
                                </div>
                            </div>
                            <div className="right-des">
                                <h2>Beneficial Properties of Vinyl Head</h2>
                                <p>Our products are designed with precision and care, utilizing advanced manufacturing techniques and premium materials to ensure durability, comfort, and style. From classic designs to cutting-edge trends, Vinyl Head offers a diverse range of headgear options to suit every taste and occasion.</p>
                                <span>– Durability</span>
                                <span>– Water Resistance</span>
                                <span>– Easy Maintenance</span>
                                <span>– Versatility</span>
                            </div>
                            <div className="gif-about">
                                <img src="https://interscope.com/cdn/shop/files/SCOPE-0127-Logo-GIF-for-Email_SMALL_18166f4c-dea6-4595-94f9-1b4353d2f3d8_500x.gif?v=1689893789" alt="" />
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

export default About
