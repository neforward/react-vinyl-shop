
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import HeaderMain from "../components/HeaderMain"
import ArrowTop from '../components/ArrowTop'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../state/actions/cartAction'
import { useState } from "react";

const Shop = () => {
    const dispatch = useDispatch();
    const vinyls = useSelector(state => state.vinyls.vinyls);
    const [currentPage, setCurrentPage] = useState(1);
    const vinylsPerPage = 9;
    const maxButtons = 5;

    const handleAddToCart = (vinyl) => {
        const newItem = { ...vinyl, quantity: 1 };
        dispatch(addToCart(newItem));
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    const totalPages = Math.ceil(vinyls.length / vinylsPerPage);
    const indexOfLastVinyl = currentPage * vinylsPerPage;
    const indexOfFirstVinyl = indexOfLastVinyl - vinylsPerPage;
    const currentVinyls = vinyls.slice(indexOfFirstVinyl, indexOfLastVinyl);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        scrollToTop();
    };
    let startPage, endPage;
    if (totalPages <= maxButtons) {
        startPage = 1;
        endPage = totalPages;
    } else {
        const maxPagesBeforeCurrent = Math.floor(maxButtons / 2);
        const maxPagesAfterCurrent = Math.ceil(maxButtons / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrent) {
            startPage = 1;
            endPage = maxButtons;
        } else if (currentPage + maxPagesAfterCurrent >= totalPages) {
            startPage = totalPages - maxButtons + 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - maxPagesBeforeCurrent;
            endPage = currentPage + maxPagesAfterCurrent;
        }
    }
    return (
        <>
            <HeaderMain />
            <div className="shop">
                <div className="main-container">
                    <div className="shop-settings">
                        <div className="shop-items-total">
                            <h5>Showing all {((currentPage - 1) * vinylsPerPage) + 1} - {Math.min(currentPage * vinylsPerPage, vinyls.length)} of {vinyls.length} results</h5>
                        </div>
                        <div className="shop-items-select">
                            <select name="" id="">
                                <option value="">Default sorting</option>
                                <option value="">Sort by popularity</option>
                                <option value="">Sort by average rating</option>
                                <option value="">Sort by latest</option>
                                <option value="">Sort by price: low to high</option>
                                <option value="">Sort by price: high to low</option>
                            </select>
                        </div>
                    </div>
                    <div className="shop-items">
                        {currentVinyls.map((product, index) => (
                            <div className="shop-item" key={index}>
                                <div className="shop-item-img">
                                    <Link to={`/product/${product.id}`} onClick={scrollToTop}>
                                        <img src={product.imgUrl} alt={product.title} />
                                    </Link>
                                    <button className="btn" onClick={() => handleAddToCart(product)}>Add to cart</button>
                                </div>
                                <div className="shop-item-text">
                                    <Link to={`/product/${product.id}`} onClick={scrollToTop}>
                                        <h2>{product.title}</h2>
                                    </Link>
                                    <h5>${product.price}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="paginations">
                        {currentPage !== 1 && (
                            <button className="paginationBtnPrevious" onClick={() => paginate(currentPage - 1)}></button>
                        )}
                        {Array.from({ length: (endPage - startPage) + 1 }, (_, i) => (
                            <button className={`paginationBtns ${currentPage === startPage + i ? "active" : ""}`} key={startPage + i} onClick={() => paginate(startPage + i)}>{startPage + i}</button>
                        ))}
                        {currentPage !== totalPages && (
                            <button className="paginationBtnNext" onClick={() => paginate(currentPage + 1)}></button>
                        )}
                    </div>
                    <ArrowTop />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Shop