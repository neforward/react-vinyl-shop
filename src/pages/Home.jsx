import '../App.css'
import 'swiper/css';
import 'swiper/css/pagination';
import Header from '../components/Header';
import ArrowTop from '../components/ArrowTop';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <Header />
            <div className="hero">
                <div className="container">
                    <div className="slide-flex-one">
                        <div className="slide-img"></div>
                        <div className="slide-first-container">
                            <div className="slide-text">
                                <h2>Vinyl Head</h2>
                                <p>Dive into a curated collection sourced from the depths of musical history, each vinyl record a masterpiece crafted by legendary artists and cherished by connoisseurs.</p>
                                <Link to='/shop'>

                                    <div className="slide-btn">
                                        <button>View More</button>
                                    </div>

                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="slide-flex-two">
                        <div className="slide-first-container-two">
                            <div className="slide-text-two">
                                <h5>THE BEST</h5>
                                <h2>VINYL HEAD: <br /> A MELODIC OASIS IN THE CITY</h2>
                                <p>Experience the subtle crackle and unique sonic tones of our vinyl collection, a true reflection of music's beauty and bounty. </p>
                                <Link to='/shop'>
                                    <div className="slide-btn">
                                        <button>View More</button>
                                    </div>
                                </Link>
                                <div className="jars">
                                    <img src="https://png.pngtree.com/png-vector/20231220/ourmid/pngtree-stack-of-vinyl-records-on-white-background-vintage-png-image_11211814.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="slide-img-two"></div>
                    </div>
                    <div className="slide-flex">
                        <div className="slide-img-third"></div>
                        <div className="slide-first-container-third">
                            <div className="slide-text-third">
                                <h5>Vinyl Records</h5>
                                <h2>Organic essence, premium quality, crafted vinyl.</h2>
                            </div>
                            <div className="slide-box-flex">
                                <div className="slide-box">
                                    <div className="slide-box-img">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Interscope_Records.png" alt="" />
                                    </div>
                                    <div className="slide-box-text">
                                        <h4>Interscope Records</h4>
                                        <p>stands as our esteemed partner, infusing our endeavors with a blend of creativity and industry expertise. Together, we embark on a journey of innovation, shaping the landscape of music and vinyl quality.</p>
                                    </div>
                                </div>
                                <div className="slide-box">
                                    <div className="slide-box-img">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Def_Jam_Recordings.svg/1200px-Def_Jam_Recordings.svg.png" alt="" />
                                    </div>
                                    <div className="slide-box-text-two">
                                        <h4>Def Jam Recordings</h4>
                                        <p>an iconic force in the world of music. This collaboration brings an electrifying blend of legendary hip-hop, R&B, and urban sounds to our shelves, curated with passion and expertise.</p>
                                    </div>
                                </div>
                                <div className="slide-beymaral">
                                    <h1 className="beymaral">Vinyl Head Vinyl Head </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-flex-three">
                        <div className="slide-first-container-three">
                            <div className="slide-text-three">
                                <h5>OUR TEAM</h5>
                                <h2>Crafted all vinyls with care by our skilled team of audiophiles for the ultimate sonic satisfaction.</h2>
                                <Link to='/shop'>
                                    <div className="slide-btn">
                                        <button>View More</button>
                                    </div>
                                </Link>
                            </div>
                            <div className="honey-img">
                                <img src="https://webuyvinylrecords.co.uk/wp-content/uploads/2022/01/record-trs.png" alt="" />
                            </div>
                        </div>
                        <div className="slide-img-three"></div>
                    </div>
                    <div className="slide-flex">
                        <div className="slide-img-honey"></div>
                        <div className="slide-first-container-third">
                            <div className="slide-text-fifth">
                                <h5>FINEST PRODUCE</h5>
                                <h2>Experienced in making, crafting organic vinyl selections.</h2>
                                <h6>Vinyl Store</h6>
                                <div className="spans">
                                    <span>1600 Vinyl Avenue, Brooklyn, NY 11201</span>
                                    <span>+996 550 205-988</span>
                                    <span>info@vinylhead.com</span>
                                </div>
                            </div>
                            <div className="slide-beymaral">
                                <h1 className="beymaral">Vinyl Head Vinyl Head </h1>
                            </div>
                        </div>
                        <ArrowTop />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
