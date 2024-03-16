import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import '../App.css'
import 'swiper/css';
import 'swiper/css/pagination';
import Header from '../components/Header';
import ArrowTop from '../components/ArrowTop';

const Home = () => {

    return (
        <>
            <Header />
            <div className="hero">
                <div className="container">
                    <div className="slide-flex">
                        <div className="slide-img">
                            <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/h9-img-1.jpg" alt="" />
                        </div>
                        <div className="slide-first-container">
                            <div className="slide-text">
                                <h2>BEYMARAL HONEY</h2>
                                <p>Introducing our premium white honey, a product of excellence crafted in harmony with nature's processes.
                                </p>
                                <div className="slide-btn">
                                    <button>View More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-flex-two">
                        <div className="slide-first-container-two">
                            <div className="slide-text-two">
                                <h5>THE BEST</h5>
                                <h2>WHITE HONEY, A <br />TRUE REFLECTION OF NATURE</h2>
                                <p>Experience the subtle sweetness and unique floral notes of our white honey, a true reflection of nature's beauty and bounty.</p>
                                <div className="slide-btn">
                                    <button>View More</button>
                                </div>
                                <div className="jars">
                                    <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/h9-img-10.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="slide-img-two">
                            <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/h9-img-3.jpg" alt="" />
                        </div>
                    </div>
                    <div className="slide-flex">
                        <div className="slide-img-third">
                            <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/h9-img-5.jpg" alt="" />
                        </div>
                        <div className="slide-first-container-third">
                            <div className="slide-text-third">
                                <h5>WHITE HONEY</h5>
                                <h2>NATURAL INGREDIENTS AND
                                    FINE TASTY QUALITY</h2>
                            </div>
                            <div className="slide-box-flex">
                                <div className="slide-box">
                                    <div className="slide-box-img">
                                        <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/Group-144.png" alt="" />
                                    </div>
                                    <div className="slide-box-text">
                                        <h4>Busy Little Bees</h4>
                                        <p>Natural honey collected with love by busy little bees.</p>
                                    </div>
                                </div>
                                <div className="slide-box">
                                    <div className="slide-box-img">
                                        <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/h9-img-7.png" alt="" />
                                    </div>
                                    <div className="slide-box-text-two">
                                        <h4>High Class Food</h4>
                                        <p>Exquisite high-className food for true gourmets and connoisseurs.</p>
                                    </div>
                                </div>
                                <div className="slide-beymaral">
                                    <h1 className="beymaral">BEYMARAL HONEY BEYMARAL HONEY </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-flex-three">
                        <div className="slide-first-container-three">
                            <div className="slide-text-three">
                                <h5>OUR TEAM</h5>
                                <h2>CRAFTED WITH CARE
                                    BY OUR SKILLED TEAM FOR ULTIMATE SATISFACTION.</h2>
                                <div className="slide-btn">
                                    <button>View More</button>
                                </div>
                            </div>
                            <div className="honey-img">
                                <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/h9-img-11.jpg" alt="" />
                            </div>
                        </div>
                        <div className="slide-img-three">
                            <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/h9-img-6.jpg" alt="" />
                        </div>
                    </div>
                    <div className="slide-flex">
                        <div className="slide-img-honey">
                            <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/h9-img-8.jpg" alt="" />
                        </div>
                        <div className="slide-first-container-third">
                            <div className="slide-text-fifth">
                                <h5>FINEST PRODUCE</h5>
                                <h2>WITH LONG EXPERIENCE IN
                                    FARMING & ORGANIC FOOD</h2>
                                <h6>Honey Farm</h6>
                                <div className="spans">
                                    <span>4, Shkolnaya street, Zhyrgalan village, Issyk-Kul region, Kyrgyzstan</span>
                                    <span>+996 550 205-988</span>
                                    <span>info@beymaral-honey.com</span>
                                </div>
                            </div>
                            <div className="slide-beymaral">
                                <h1 className="beymaral">BEYMARAL HONEY BEYMARAL HONEY </h1>
                            </div>
                        </div>
                        <ArrowTop />
                    </div>

                    {/* <div className="slide-flex">
                        <div className="slide-img"></div>
                        <div className="slide-first-container">
                            <div className="slide-text">
                                <h2>BEYMARAL HONEY</h2>
                                <p>Introducing our premium white honey, a product of excellence crafted in harmony with nature's processes.
                                </p>
                                <div className="slide-btn">
                                    <button>View More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-flex-two">
                        <div className="slide-first-container-two">
                            <div className="slide-text-two">
                                <h5>THE BEST</h5>
                                <h2>WHITE HONEY, A <br />TRUE REFLECTION OF NATURE</h2>
                                <p>Experience the subtle sweetness and unique floral notes of our white honey, a true reflection of nature's beauty and bounty.</p>
                                <div className="slide-btn">
                                    <button>View More</button>
                                </div>
                                <div className="jars">
                                    <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/h9-img-10.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="slide-img-two"></div>
                    </div>
                    <div className="slide-flex">
                        <div className="slide-img-third"></div>
                        <div className="slide-first-container-third">
                            <div className="slide-text-third">
                                <h5>WHITE HONEY</h5>
                                <h2>NATURAL INGREDIENTS AND
                                    FINE TASTY QUALITY</h2>
                            </div>
                            <div className="slide-box-flex">
                                <div className="slide-box">
                                    <div className="slide-box-img">
                                        <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/Group-144.png" alt="" />
                                    </div>
                                    <div className="slide-box-text">
                                        <h4>Busy Little Bees</h4>
                                        <p>Natural honey collected with love by busy little bees.</p>
                                    </div>
                                </div>
                                <div className="slide-box">
                                    <div className="slide-box-img">
                                        <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/h9-img-7.png" alt="" />
                                    </div>
                                    <div className="slide-box-text-two">
                                        <h4>High Class Food</h4>
                                        <p>Exquisite high-className food for true gourmets and connoisseurs.</p>
                                    </div>
                                </div>
                                <h1 className="beymaral">BEYMARAL HONEY BEYMARAL HONEY </h1>
                            </div>
                        </div>
                    </div>
                    <div className="slide-flex-three">
                        <div className="slide-first-container-three">
                            <div className="slide-text-three">
                                <h5>OUR TEAM</h5>
                                <h2>CRAFTED WITH CARE
                                    BY OUR SKILLED TEAM FOR ULTIMATE SATISFACTION.</h2>
                                <div className="slide-btn">
                                    <button>View More</button>
                                </div>
                            </div>
                            <div className="honey-img">
                                <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/h9-img-11.jpg" alt="" />
                            </div>
                        </div>
                        <div className="slide-img-three"></div>
                    </div>
                    <div className="slide-flex">
                        <div className="slide-img-honey"></div>
                        <div className="slide-first-container-third">
                            <div className="slide-text-fifth">
                                <h5>FINEST PRODUCE</h5>
                                <h2>WITH LONG EXPERIENCE IN
                                    FARMING & ORGANIC FOOD</h2>
                                <h6>Honey Farm</h6>
                                <div className="spans">
                                    <span>4, Shkolnaya street, Zhyrgalan village, Issyk-Kul region, Kyrgyzstan</span>
                                    <span>+996 550 205-988</span>
                                    <span>info@beymaral-honey.com</span>
                                </div>
                            </div>
                            <h1 className="beymaral">BEYMARAL HONEY BEYMARAL HONEY </h1>
                        </div>
                    </div> */}
                    {/* <Swiper
                        direction={'vertical'}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="slide-flex">
                                <div className="slide-img"></div>
                                <div className="slide-first-container">
                                    <div className="slide-text">
                                        <h2>BEYMARAL HONEY</h2>
                                        <p>Introducing our premium white honey, a product of excellence crafted in harmony with nature's processes.
                                        </p>
                                        <div className="slide-btn">
                                            <button>View More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-flex-two">
                                <div className="slide-first-container-two">
                                    <div className="slide-text-two">
                                        <h5>THE BEST</h5>
                                        <h2>WHITE HONEY, A <br />TRUE REFLECTION OF NATURE</h2>
                                        <p>Experience the subtle sweetness and unique floral notes of our white honey, a true reflection of nature's beauty and bounty.</p>
                                        <div className="slide-btn">
                                            <button>View More</button>
                                        </div>
                                        <div className="jars">
                                            <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/h9-img-10.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="slide-img-two"></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-flex">
                                <div className="slide-img-third"></div>
                                <div className="slide-first-container-third">
                                    <div className="slide-text-third">
                                        <h5>WHITE HONEY</h5>
                                        <h2>NATURAL INGREDIENTS AND
                                            FINE TASTY QUALITY</h2>
                                    </div>
                                    <div className="slide-box-flex">
                                        <div className="slide-box">
                                            <div className="slide-box-img">
                                                <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/Group-144.png" alt="" />
                                            </div>
                                            <div className="slide-box-text">
                                                <h4>Busy Little Bees</h4>
                                                <p>Natural honey collected with love by busy little bees.</p>
                                            </div>
                                        </div>
                                        <div className="slide-box">
                                            <div className="slide-box-img">
                                                <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/h9-img-7.png" alt="" />
                                            </div>
                                            <div className="slide-box-text-two">
                                                <h4>High Class Food</h4>
                                                <p>Exquisite high-className food for true gourmets and connoisseurs.</p>
                                            </div>
                                        </div>
                                        <h1 className="beymaral">BEYMARAL HONEY BEYMARAL HONEY </h1>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-flex-three">
                                <div className="slide-first-container-three">
                                    <div className="slide-text-three">
                                        <h5>OUR TEAM</h5>
                                        <h2>CRAFTED WITH CARE
                                            BY OUR SKILLED TEAM FOR ULTIMATE SATISFACTION.</h2>
                                        <div className="slide-btn">
                                            <button>View More</button>
                                        </div>
                                    </div>
                                    <div className="honey-img">
                                        <img src="https://beymaral-honey.com/wp-content/uploads/2023/03/h9-img-11.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="slide-img-three"></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-flex">
                                <div className="slide-img-honey"></div>
                                <div className="slide-first-container-third">
                                    <div className="slide-text-fifth">
                                        <h5>FINEST PRODUCE</h5>
                                        <h2>WITH LONG EXPERIENCE IN
                                            FARMING & ORGANIC FOOD</h2>
                                        <h6>Honey Farm</h6>
                                        <div className="spans">
                                            <span>4, Shkolnaya street, Zhyrgalan village, Issyk-Kul region, Kyrgyzstan</span>
                                            <span>+996 550 205-988</span>
                                            <span>info@beymaral-honey.com</span>
                                        </div>
                                    </div>
                                    <h1 className="beymaral">BEYMARAL HONEY BEYMARAL HONEY </h1>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper> */}
                </div>
            </div>
        </>
    )
}

export default Home
