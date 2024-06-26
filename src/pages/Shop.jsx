import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import HeaderMain from "../components/HeaderMain"
import ArrowTop from '../components/ArrowTop'
import { useSelector } from 'react-redux';
// import { addToCart } from '../state/actions/cartAction'
import { useState } from "react";

const Shop = () => {
    const vinyls = useSelector(state => state.vinyls.vinyls);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const vinylsPerPage = 9;
    const maxButtons = 5;
    const [sortBy, setSortBy] = useState("");
    // const handleAddToCart = (vinyl) => {
    //     const newItem = { ...vinyl, quantity: 1 };
    //     dispatch(addToCart(newItem));
    // };
  

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    const totalPages = Math.ceil(vinyls.length / vinylsPerPage);
    const indexOfLastVinyl = currentPage * vinylsPerPage;
    const indexOfFirstVinyl = indexOfLastVinyl - vinylsPerPage;


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
    const paginateNextPrev = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    const filteredVinyls = vinyls.filter(
        (vinyl) =>
            vinyl.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            vinyl.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedVinyls = [...filteredVinyls];
    if (sortBy === "latest") {
        sortedVinyls.sort((a, b) => new Date(a.date) - new Date(b.date));
        sortedVinyls.reverse();
    } else if (sortBy === "price-low") {
        sortedVinyls.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
        sortedVinyls.sort((a, b) => b.price - a.price);
    }

    const currentVinyls = sortedVinyls.slice(
        indexOfFirstVinyl,
        indexOfLastVinyl
    );
    return (
        <>
            <HeaderMain />
            <div className="shop">
                <div className="main-container">
                    <div className="shop-settings">
                        <div className="shop-items-total">
                            <h5>Showing all  {((currentPage - 1) * vinylsPerPage) + 1} -{" "}
                                {Math.min(currentPage * vinylsPerPage, filteredVinyls.length)}{" "}
                                of {filteredVinyls.length} results</h5>
                        </div>
                        {currentPage === 1 && (
                            <div className="shop-items-input">
                                <input
                                    className="searchItemInput"
                                    type="text"
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        )}
                        <div className="shop-items-select">
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option value="">Default sorting</option>
                                <option value="latest">Sort by latest</option>
                                <option value="price-low">Sort by price: low to high</option>
                                <option value="price-high">Sort by price: high to low</option>
                            </select>
                        </div>
                    </div>
                    <div className="shop-items">
                        {currentVinyls.map((product) => (
                            <div className="shop-item" key={product.id}>
                                <div className="shop-item-img">
                                    <Link to={`/product/${product.id}`} onClick={scrollToTop}>
                                        <img src={product.imgUrl} alt={product.title} />
                                        <img src={product.hover} className="hover-image" />
                                    </Link>
                                    {/* <button className="btn" onClick={() => handleAddToCart(product)}>Add to cart</button> */}
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
                            <button className="paginationBtnPrevious" onClick={() => paginateNextPrev(currentPage - 1)}></button>
                        )}
                        {Array.from({ length: (endPage - startPage) + 1 }, (_, i) => (
                            <div className="btns-centered" key={startPage + i}>
                                <button className={`paginationBtns ${currentPage === startPage + i ? "active" : ""}`} onClick={() => paginate(startPage + i)}>
                                    {startPage + i}
                                </button>
                            </div>
                        ))}

                        {currentPage !== totalPages && (
                            <button className="paginationBtnNext" onClick={() => paginateNextPrev(currentPage + 1)}></button>
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