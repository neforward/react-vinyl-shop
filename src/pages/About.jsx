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
                                <h2>BEYMARAL HONEY</h2>
                            </div>
                            <div className="about-des-one">
                                <span>Beymaral</span>
                                <p>Lupin or Onobrychis vicifolia is a perennial
                                    herbaceous plant. Widely found in mountain pastures
                                    in Kyrgyzstan, it blooms from May to August. Its
                                    countless flowers, gathered in long panicle-shaped
                                    inflorescences of a very intense pink color,
                                    attract bees in a kind of dance of abundance,
                                    from which they obtain the healing White Lupin Honey,
                                    belonging to the family of rare and precious honeys.</p>
                            </div>
                            <div className="about-des-two">
                                <p><span>Beymaral Honey</span> has a
                                    characteristic and unmistakable taste and aroma.
                                    The main note is a pleasant floral scent, especially
                                    of roses. Therefore, lupin honey has a taste characterized
                                    by a soft balance between sweetness and acidity, with a slightly
                                    herbaceous aftertaste that distinguishes it from its “siblings.”</p>
                            </div>
                            <p>It pairs perfectly with most fruits, fresh cheeses, white meat dishes, and fish.</p>

                            <span>THE BEES</span>
                            <div className="about-des-three">
                                <p><span>Beymaral Honey</span> stands out not only for the exceptional quality of its lupin honey, but also for its ethical and sustainable approach to beekeeping. The company adopts a responsible practice that respects the natural cycle of bees, avoiding the overexploitation of these precious insects.</p>
                            </div>
                            <div className="about-des-four">
                                <p>In conclusion, <span>Beymaral Honey</span> not only offers a high-quality product but does so in a way that respects and supports the environment and the living beings contributing to its production. This represents an excellent example of how business practices can be aligned with environmental and ethical responsibility, creating a positive impact for both consumers and the planet.</p>
                            </div>
                            <div className="about-des-five">
                                <span>COMPOSITION</span>
                                <p>– A large amount of ascorbic acid (vitamin C)</p>
                                <p>– Calcium pantothenate, trace elements and minerals (vitamin B5)</p>
                                <p>– Sucrose, which promotes the absorption of heavy metals in the human body</p>
                                <p>– It has a caloric value of 315 Kcal. per 100 g of nectar.</p>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="one">
                                <div className="logo-box">
                                    <TiHome size={50} />
                                    <img src="" alt="" />
                                    <h2>Beymaral Honey</h2>
                                    <p>We offers high-quality, ethically produced honey that respects the environment and supports bee well-being.</p>
                                </div>
                                <div className="logo-box">
                                    <TiHome size={50} />
                                    <img src="" alt="" />
                                    <h2>Quality Products</h2>
                                    <p>We provide top-quality products while respecting and supporting the environment and its contributing living beings.</p>
                                </div>
                            </div>
                            <div className="two">
                                <div className="logo-box">
                                    <TiHome size={50} />
                                    <img src="" alt="" />
                                    <h2>Flavorful Symphony</h2>
                                    <p>Beymaral Honey presents a delightful combination of exquisite flavor and captivating fragrance, harmonizing to create a truly memorable experience.</p>
                                </div>
                                <div className="logo-box">
                                    <TiHome size={50} />
                                    <img src="" alt="" />
                                    <h2>Finest Nectar</h2>
                                    <p>Our bees are expertly tended to, ensuring they gather the finest nectar from the vibrant pink lupin flowers.</p>
                                </div>
                            </div>
                            <div className="right-des">
                                <h2>Beneficial Properties of Beymaral Honey</h2>
                                <p>The beneficial properties of lupin honey are attributed to the presence of phytoncides. Almost a century ago, a group of scientists discovered that biologically active volatile substances can destroy the development and growth of bacteria and pathogens that cause inflammation.</p>
                                <span>– Stabilizes metabolism</span>
                                <span>– Strengthens the immune system</span>
                                <span>– Has anti-inflammatory properties</span>
                                <span>– Stabilizes cholesterol and glucose levels, fights bad cholesterol</span>
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
