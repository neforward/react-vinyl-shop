import { useState, useEffect } from 'react';
import HeaderMain from '../components/HeaderMain';
import Footer from '../components/Footer';
import { PiStarDuotone } from "react-icons/pi";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementCartItem, incrementCartItem, updateProductQuantity } from '../state/actions/cartAction';


const Product = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.vinyls.vinyls);
  const product = products.find((prod) => prod.id === parseInt(id));

  const cartItems = useSelector(state => state.cart.cartItems);
  const productInCart = cartItems.find(item => item.id === product.id);
  const initialQuantity = productInCart ? productInCart.quantity : 0;

  const [quantity, setQuantity] = useState(initialQuantity);
  const [isHovered, setIsHovered] = useState(false);
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const dispatch = useDispatch();
  const vinyls = useSelector(state => state.vinyls.vinyls);

  useEffect(() => {
    if (productInCart) {
      setQuantity(productInCart.quantity);
    } else {
      setQuantity(0);
    }
  }, [productInCart]);

  const handleQuantityChange = e => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    dispatch(updateProductQuantity(product.id, newQuantity));
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e) => {
    const element = e.target;
    const rect = element.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / element.offsetWidth) * 100;
    const y = ((e.clientY - rect.top) / element.offsetHeight) * 100;
    element.style.transformOrigin = `${x}% ${y}%`;
  };

  const handleButtonClick = (i) => {
    setActiveContentIndex(i);
  };

  const getRandomVinyls = (count, currentProductId) => {
    const filteredVinyls = vinyls.filter(vinyl => vinyl.id !== currentProductId);
    const shuffled = filteredVinyls.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const relatedVinyls = getRandomVinyls(4, product.id);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  };

  const handleDecrementCartItem = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      dispatch(decrementCartItem(product));
    }
  };

  const handleIncrementCartItem = () => {
    setQuantity(quantity + 1);
    dispatch(incrementCartItem(product));
  };

  return (
    <>
      <HeaderMain />
      <div className="product">
        <div className="main-container">
          <div className="flex-over-product">
            <div className="product-flex">
              <div className="product-for-flex">
                <div className="product-img-zoom"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                >
                  <div className="product-img"
                    style={{
                      width: '540px',
                      height: '540px',
                      background: `url("${product.imgUrl}") no-repeat center center`,
                      backgroundSize: 'cover',
                      transform: isHovered ? 'scale(1.5)' : 'scale(1)',
                    }}>
                  </div>
                </div>
                <div className="image-product">
                  <img src={product.imgUrl} className='poa-image' />
                  <img src={product.hover} className="hover-image-product" />
                </div>
              </div>
              <div className="product-text">
                <div className="first-product-text">
                  <h2>{product.title}</h2>
                  <h6>${product.price}</h6>
                  <p>{product.des}</p>
                </div>
                <div className="product-btns">
                  <div className="product-quantity">
                    <div className="product-quantity-plus-minus">
                      <div className="product-quantity-total-sum">
                        <input type="number" value={quantity} onChange={handleQuantityChange} />
                      </div>
                      <div className="product-quantity-btns">
                        <div className="product-quantity-btn-minus" onClick={handleDecrementCartItem}>
                          <button>-</button>
                        </div>
                        <div className="product-quantity-btn-plus" onClick={handleIncrementCartItem}>
                          <button>+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="addBtn" onClick={() => handleAddToCart(product)}>Add to cart</button>
                </div>
                <div className="product-info">
                  <h3>Info</h3>
                  <h5>Artist: {product.artist}</h5>
                  <h5>Genre: <span>{product.genre}</span></h5>
                </div>
                <div className="product-share">
                  <h3>Share:</h3>
                  <div className="product-links">
                    <a href="https://www.instagram.com/neforward/" target="_blank">Instagram</a>
                    <a href="https://t.me/jopaflex" target="_blank">Telegram</a>
                    <a href="https://twitter.com/neforward" target="_blank">Twitter</a>
                    <a href="https://github.com/neforward" target="_blank">GitHub</a>
                  </div>
                </div>
              </div>
              <div className="flex-flex">
                <div className="product-diff-content">
                  <a className={activeContentIndex === 0 ? 'active' : ''} onClick={() => handleButtonClick(0)}>
                    Description
                  </a>
                  <a className={activeContentIndex === 1 ? 'active' : ''} onClick={() => handleButtonClick(1)}>
                    Additional information
                  </a>
                  <a className={activeContentIndex === 2 ? 'active' : ''} onClick={() => handleButtonClick(2)}>
                    Reviews (0)
                  </a>
                </div>
                <div className="content">
                  <div className={activeContentIndex === 0 ? "content-1 active" : "content-1"}>
                    <p>
                      {product.des}
                    </p>
                  </div>
                  <div className={activeContentIndex === 1 ? "content-2 active" : "content-2"}>
                    <div className="flex-row">
                      <h3>Artist:</h3>
                      <h5>{product.artist}</h5>
                    </div>
                    <div className="flex-row">
                      <h3>Genre:</h3>
                      <h5>{product.genre}</h5>
                    </div>
                  </div>
                  <div className={activeContentIndex === 2 ? "content-3 active" : "content-3"}>
                    <div className="product-reviews">
                      <h2>REVIEWS</h2>
                      <p>There are no reviews yet.</p>

                      <h2>BE THE FIRST TO REVIEW “{product.title}”</h2>
                      <p>Your email address will not be published. Required fields are marked *</p>
                      <h6>Your Rating *</h6>
                      <div className="stars">
                        <PiStarDuotone size={25} />
                        <PiStarDuotone size={25} />
                        <PiStarDuotone size={25} />
                        <PiStarDuotone size={25} />
                        <PiStarDuotone size={25} />
                      </div>
                      <div className="review-inputs">
                        <textarea name="" id="" cols="30" rows="10" placeholder='Your Review *' />
                        <div className="rew-inputs">
                          <input type="text" placeholder='Your Name *' /> <input type="text" placeholder='Your Email *' />
                        </div>
                      </div>
                      <div className="review-checkbox">
                        <label>
                          <input type="checkbox" />
                          Save my name, email, and website in this browser for the next time I comment.
                        </label>
                      </div>
                      <div className="product-last-btn">
                        <button>Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-related">
                <div className="product-related-title">
                  <h2>Related Vinyls</h2>
                </div>
                <div className="product-items">
                  {relatedVinyls.map((relatedProduct, index) => (
                    <div className="product-item" key={index}>
                      <div className="product-item-img">
                        <img src={relatedProduct.imgUrl} alt={relatedProduct.title} />
                        <button className="btn" onClick={() => handleAddToCart(relatedProduct)}>Add to cart</button>
                      </div>
                      <div className="product-item-text">
                        <h2>{relatedProduct.title}</h2>
                        <h5>{relatedProduct.price}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Product
