
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import HeaderMain from "../components/HeaderMain"
import ArrowTop from '../components/ArrowTop'
import { useSelector } from 'react-redux';

const Shop = () => {
    const vinyls = useSelector(state => state.vinyls.vinyls);
    return (
        <>
            <HeaderMain />
            <div className="shop">
                <div className="main-container">
                    <div className="shop-settings">
                        <div className="shop-items-total">
                            <h5>Showing all {vinyls.length} results</h5>
                        </div>
                        <select name="" id="">
                            <option value="">Default sorting</option>
                            <option value="">Sort by popularity</option>
                        </select>
                    </div>
                    <div className="shop-items">
                        {vinyls.map((product, index) => (
                            <div className="shop-item" key={index}>
                                <div className="shop-item-img">
                                    <Link to={`/product/${product.id}`}>
                                        <img src={product.imgUrl} alt={product.title} />
                                    </Link>
                                    <button className="btn">Add to cart</button>
                                </div>
                                <div className="shop-item-text">
                                    <h2>{product.title}</h2>
                                    <h5>{product.price}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ArrowTop />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Shop