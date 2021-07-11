import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCategory from '../ProductCategory/ProductCategory';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import currencyFormatter from "currency-formatter";
import SideBarMenu from '../SideMenu/SideBarMenu';

const ProductsPage = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.ProductsReducer);
    console.log(products);
    useEffect(() => {
        dispatch({ type: 'PRODUCT', id })
    }, [id])
    const decQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <div className="TitleProductsBar">
            <section>
                <div className="container">
                    <div className="row" style={{ 'border': '1px solid red' }}>
                        <div className="col">1 of 2</div>
                    </div>
                    <div className="row" style={{}}>
                        <div className="col-md-2" style={{ 'border': '1px solid blue' }}>
                            <SideBarMenu />
                        </div>
                        <div className="col-md-10" style={{ 'float': 'right', 'border': '1px solid black' }}>
                            <div className="col-md-12" style={{ 'border': '1px solid green' }}>
                                <a href="/">
                                    <img src="img/atta-flours-sooji-.jpg" alt="Invalid" style={{ 'width': '100%', 'height': '220px' }} fluid />
                                </a>
                            </div>
                            <section>
                                <div className="row">
                                    <div className="col-md-4 ml-3" style={{ 'border': '1px solid green' }}>
                                        <div className="d-flex justify-content-start">
                                            <div class="p-2 bd-highlight">Product Title Name</div>
                                        </div>
                                    </div>
                                    <div className="col-md-7 ml-5" style={{ 'border': '1px solid yellow', 'float': 'right' }}>
                                        <div class="d-flex justify-content-end form-floating p-2 bd-highlight">
                                            <div class="">
                                                <select class="form-select form-select-sm" id="floatingSelectGrid" aria-label=".form-select-sm example">
                                                    <option selected>Popularity</option>
                                                    <option value="2">Price - Low to High</option>
                                                    <option value="3">Price - Low to High</option>
                                                    <option value="4">Alphabetical</option>
                                                    <option value="5">Rupee Saving - High to Low</option>
                                                    <option value="6">Rupee Saving - Low to High</option>
                                                    <option value="7">% Off - Hign to Low</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>< br />
                            {/*  */}
                            {/* START */}
                            <section>
                                <div className="container">
                                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-2" style={{ 'border': '1px solid red' }}>
                                        {products.map(product => (
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
                                                                <div className="col-md-8" style={{ 'right': '10px' }}>
                                                                    <Link to="">
                                                                        <button type="button" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })}
                                                                            className="b2n _2KpZ6l"
                                                                            style={{}}>
                                                                            add to cart <i className="fas fa-shopping-cart"></i>
                                                                        </button>
                                                                    </Link>
                                                                </div>
                                                                <div className="col-md-4" style={{ 'right': '20px' }}>
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

                                            // <div className="col p-2">    
                                            //     <div class="card h-100">
                                            //         <div className="d-flex justify-content-center">
                                            //             <Link to={`/details/${product.id}`} target="_blank">
                                            //                 <img src={`/images/${product.image}`} style={{ 'height': '130px', 'width': '130px' }} class="card-img-top" alt="image name" />
                                            //             </Link>
                                            //         </div>
                                            //         <div class="veg-indian pl-2">
                                            //             <img src="images/veg.png" alt="..." style={{ 'height': '15px', 'width': '15px', 'float': 'left' }} />
                                            //         </div>
                                            //         <div className="d-flex justify-content-start pl-2">
                                            //             <span style={{ 'font-size': '12px', 'text-transform': 'capitalize' }}>
                                            //                 {product.product_bname}
                                            //             </span>
                                            //         </div>
                                            //         <div className="d-flex justify-content-start pl-2">
                                            //             <a href="/" alt=".." style={{ 'font-size': '16px', 'color': 'black', 'text-transform': 'capitalize' }}>
                                            //                 {product.product_name}
                                            //             </a>
                                            //         </div>
                                            //         <div className="container">
                                            //             <div className="row">
                                            //                 <div className="col-md-12" style={{ 'border': '1px solid red' }}>
                                            //                     <section className="main">
                                            //                         <div class="custom-select">
                                            //                             <select>
                                            //                                 <option value="0">1 kg - Rs. 20.00</option>
                                            //                                 <option value="1">750 gm - Rs. 15.00</option>
                                            //                                 <option value="2">500 gm - Rs. 10.00</option>
                                            //                                 <option value="3">250 gm - Rs. 5.00</option>
                                            //                             </select>
                                            //                         </div>
                                            //                     </section>
                                            //                 </div>
                                            //                 <div className="col-md-12" style={{ 'border': '1px solid yellow' }}>
                                            //                     <div className="price mt-2">
                                            //                         <span className="mrp ml-2" style={{ 'font-size': '12px' }}>
                                            //                             MRP&nbsp;
                                            //                             <s style={{ 'font-size': '14px' }}>
                                            //                                 &nbsp;{currencyFormatter.format(product.price, { code: 'INR' })}
                                            //                             </s>&nbsp;
                                            //                             <span style={{ 'font-size': '11px', 'color': 'grey' }}>
                                            //                                 {product.discount}%
                                            //                             </span>
                                            //                             <span style={{ 'font-size': '16px' }}>
                                            //                                 &nbsp;{currencyFormatter.format(product.discountPrice, { code: 'INR' })}
                                            //                             </span>
                                            //                         </span><br />
                                            //                         <span className="fontawesome ml-2"><FontAwesomeIcon icon={faTruck} /></span>
                                            //                         <span>Standard Delivery: 23 April, 6:00AM - 8:00AM</span>
                                            //                         <div className="row">
                                            //                             <div class="col-md-12 p-1" style={{}}>
                                            //                                 <div className="purchase--info">
                                            //                                     <input type="number" min="0" placeholder="1" />
                                            //                                 </div>
                                            //                             </div>
                                            //                             <div class="col-md-12 p-1" style={{}}>
                                            //                                 <button type="button" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })}
                                            //                                     className="b2n _2KpZ6l"
                                            //                                     style={{}}>
                                            //                                     add to cart <i className="fas fa-shopping-cart"></i>
                                            //                                 </button>
                                            //                             </div>
                                            //                         </div>
                                            //                     </div>
                                            //                 </div>
                                            //             </div>
                                            //         </div>
                                            //         <p class="card-text"></p>
                                            //     </div>
                                            // </div>
                                        ))}
                                    </div>
                                    {/* End */}
                                </div>
                            </section>
                            {/* END */}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ProductsPage;
