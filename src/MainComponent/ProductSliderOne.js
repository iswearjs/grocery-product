import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';
import storeProducts from '../Data/ProductData';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import currencyFormatter from "currency-formatter";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


SwiperCore.use([Navigation, Pagination, A11y]);
const handleRoute = () => {
    this.push("/cart");
}

const ProductSliderOne = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.ProductsReducer);
    useEffect(() => {
        dispatch({ type: 'PRODUCT', id })
    }, [id])
    const decQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <div className="App SliderContOne">
            <div className="container">
                <div className="row">
                    <div className="col-my-12">
                        <h2 className="sc">My Smart Basket</h2>
                    </div>
                    <div className="col">
                        <h2 className="sc">
                            <a href="/" style={{ 'color': 'red', 'float': 'right' }}>
                                View All
                            </a>
                        </h2>
                    </div>
                </div><hr />
            </div>
            <Swiper
                spaceBetween={0}
                slidesPerView={4}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {storeProducts.map(product => (
                    <SwiperSlide>
                        <section>
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="d-flex justify-content-center">
                                                <Link to={`/details/${product.id}`} target="_blank">
                                                    <img src={`/images/${product.image}`} class="card-img-top" alt="image name" />
                                                </Link>
                                            </div>
                                            <div class="veg-indian pl-2">
                                                <img src="images/veg.png" alt="..." style={{ 'height': '15px', 'width': '15px', 'float': 'left' }} />
                                            </div>
                                            <div className="d-flex justify-content-start pl-2">
                                                <span style={{ 'font-size': '12px', 'text-transform': 'capitalize' }}>
                                                    {product.product_bname}
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-start pl-2">
                                                <a href="/" alt=".." style={{ 'font-size': '16px', 'color': 'black', 'text-transform': 'capitalize' }}>
                                                    {product.product_name}
                                                </a>
                                            </div>
                                            <div className="card-body">
                                                <section className="main">
                                                    {/* <div class="custom-select"> */}
                                                    <select>
                                                        <option value="0">1 kg - Rs. 20.00</option>
                                                        <option value="1">750 gm - Rs. 15.00</option>
                                                        <option value="2">500 gm - Rs. 10.00</option>
                                                        <option value="3">250 gm - Rs. 5.00</option>
                                                    </select>
                                                    {/* </div> */}
                                                </section>
                                                <p className="card-text">

                                                </p>
                                                <div className="price mt-2">
                                                    <span className="mrp ml-2" style={{ 'float': 'left', 'font-size': '12px' }}>
                                                        MRP&nbsp;
                                                        <s style={{ 'font-size': '14px' }}>
                                                            &nbsp;{currencyFormatter.format(product.price, { code: 'INR' })}
                                                        </s>&nbsp;
                                                        <span style={{ 'font-size': '11px', 'color': 'grey' }}>
                                                            {product.discount}%
                                                        </span>
                                                        <span style={{ 'font-size': '14px' }}>
                                                            &nbsp;{currencyFormatter.format(product.discountPrice, { code: 'INR' })}
                                                        </span>
                                                    </span><br />
                                                    <span style={{ 'font-size': '16px' }} className="fontawesome ml-2">
                                                        <FontAwesomeIcon icon={faTruck} />
                                                    </span>
                                                    <span style={{ 'font-size': '12px' }}>
                                                        Standard Delivery: 23 April, 6:00AM - 8:00AM
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="card-footer">
                                                <small className="">
                                                    <div className="row">
                                                        <div className="col-md-8" style={{ 'right': '15px' }}>
                                                            <Link to="">
                                                                <button type="button" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })}
                                                                    className="b2n _2KpZ6l"
                                                                    style={{}}>
                                                                    add to cart <i className="fas fa-shopping-cart"></i>
                                                                </button>
                                                            </Link>
                                                        </div>
                                                        <div className="col-md-4" style={{ 'right': '17px' }}>
                                                            <Link to="">
                                                                <button type="button" className="b2nn _2KpZ6l" style={{}}>
                                                                    <span style={{}}>
                                                                        buy now <i className="fas fa-bolt"></i>
                                                                    </span>
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                ))}
                {/* <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide> */}
            </Swiper><hr />
        </div>
    );
}
export default ProductSliderOne;
