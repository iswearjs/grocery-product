import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCategory from '../ProductCategory/ProductCategory';
import Footer from '../Footer/Footer';
import ProductPreview from './ProductPreview';
import ProductsDetails from './ProductsDetails';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import currencyFormatter from "currency-formatter";
import { BsDash, BsPlus } from 'react-icons/bs';
import ProductSlider from './ProductSlider';
import SideBarMenu from '../SideMenu/SideBarMenu';


const Details = () => {
    function clickme(smallImg) {
        const fullImg = document.getElementById("imagebox");
        fullImg.src = smallImg.src;
    }

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
        <div>
            <ProductCategory /><br /><br />

            {/* Start SideBar */}
            <div className="TitleDetailsBar">
                <section>
                    <div className="container">
                        <div className="row" style={{ 'border': '1px solid red' }}>
                            <div className="col">1 of 2</div>
                            <div className="col-md-7 ml-5" style={{ 'border': '1px solid yellow', 'float': 'right' }}>
                                <div className="d-flex justify-content-end form-floating p-2 bd-highlight">
                                    <div className="social-links">
                                        <div className="_1YmWw">
                                            <span className="_1bexe">Share on: </span>
                                            <span className="fbook">
                                                <a href="#">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </span>
                                            <span className="twitte">
                                                <a href="#">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </span>
                                            <span className="insta">
                                                <a href="#">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </span>
                                            <span className="wsapp">
                                                <a href="#">
                                                    <i className="fab fa-whatsapp"></i>
                                                </a>
                                            </span>
                                            <span className="pinter">
                                                <a href="#">
                                                    <i className="fab fa-pinterest"></i>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{}}>
                            <div className="col-md-2" style={{ 'border': '1px solid blue' }}>
                                <SideBarMenu />
                            </div>
                            {/* DETAILS COL START */}
                            <div className="col-md-10" style={{ 'border': '1px solid black' }}>
                                <div className="row">
                                    <div className="col-md-6" key={product.id} style={{ 'border': '1px solid black' }}>
                                        <img src={`/images/${product.vname}`} alt="..." style={{ 'height': '15px', 'width': '15px', 'float': 'left' }} />
                                        <ProductSlider />
                                    </div>
                                    <div className="col-md-6 pt-2" style={{ 'border': '1px solid red' }}>
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
                                        <div className="price mt-2">
                                            <span className="mrp ml-2" style={{ 'font-size': '16px' }}>
                                                MRP&nbsp;
                                                <s style={{ 'font-size': '16px' }}>
                                                    &nbsp;{currencyFormatter.format(product.price, { code: 'INR' })}
                                                </s>&nbsp;
                                                <span style={{ 'font-size': '12px', 'color': 'grey' }}>
                                                    {product.discount}%
                                                </span>
                                                <span style={{ 'font-size': '18px' }}>
                                                    &nbsp;{currencyFormatter.format(product.discountPrice, { code: 'INR' })}
                                                </span>
                                            </span><br />
                                            <span className="fontawesome ml-2">
                                                <FontAwesomeIcon icon={faTruck} />&nbsp;
                                            </span>
                                            <span>Standard Delivery: 23 April, 6:00AM - 8:00AM</span>
                                        </div>
                                        <div className="row">
                                            <div class="col-md-2 p-1" style={{ 'border': '10px soild red' }}>
                                                {/* <Link to="/cart" target="_blank"> */}
                                                <div className="purchase--info">
                                                    <input type="number" min="0" placeholder="1" />
                                                </div>
                                                {/* </Link> */}
                                            </div>
                                            <div className="col-md-6" style={{ 'border': '1px soild black', 'right': '10px' }}>
                                                <Link>
                                                    <button type="button" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })}
                                                        className="b2n _2KpZ6l"
                                                        style={{}}>
                                                        add to cart <i className="fas fa-shopping-cart"></i>
                                                    </button>
                                                </Link>
                                            </div>
                                            <div className="col-md-4" style={{ 'border': '1px soild blue', 'right': '70px' }}>
                                                <Link>
                                                    <button type="button" className="b2nn _2KpZ6l" style={{}}>
                                                        <span style={{}}>
                                                            buy now <i className="fas fa-bolt"></i>
                                                        </span>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-12 product-detail">
                                            <h2>about this item: </h2>
                                            <p>{product.desc}</p>
                                            <p>{product.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* DETAILS COL END */}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
            {/* End SiderBar */}
        </div>

    )
}

export default Details;