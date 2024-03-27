
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import HeaderMain from "../components/HeaderMain"
import ArrowTop from '../components/ArrowTop'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../state/actions/cartAction'
const Shop = () => {
    const dispatch = useDispatch();
    const vinyls = useSelector(state => state.vinyls.vinyls);

    const handleAddToCart = (vinyl) => {
        const newItem = { ...vinyl, quantity: 1 };
        dispatch(addToCart(newItem));
    };

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

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
                            <option value="">Sort by average rating</option>
                            <option value="">Sort by latest</option>
                            <option value="">Sort by price: low to high</option>
                            <option value="">Sort by price: high to low</option>
                        </select>
                    </div>
                    <div className="shop-items">
                        {vinyls.map((product, index) => (
                            <div className="shop-item" key={index}>
                                <div className="shop-item-img">
                                    <Link to={`/product/${product.id}`} onClick={handleClick}>
                                        <img src={product.imgUrl} alt={product.title} />
                                    </Link>
                                    <button className="btn" onClick={() => handleAddToCart(product)}>Add to cart</button>
                                </div>
                                <div className="shop-item-text">
                                    <h2>{product.title}</h2>
                                    <h5>${product.price}</h5>
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