import React, { } from 'react'
import { Figure, Image, NavLink } from 'react-bootstrap';
import { Link } from "react-router-dom";
// import ProductsPage from '../Product_Items/ProductsPage';

class ProductDetails extends React.Component {
    render() {
        return (
            <div className="ProCont">
                <div className="App">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2>Best Values</h2><hr />
                            </div>
                        </div>
                    </div>
                    <section className="section-meals">
                        <ul className="meals-showcase clearfix">
                            <li>
                                <Figure className="meal-photo">
                                    <Link to="/productspage" target="_blank">
                                        <Figure.Image height={100} width={150} alt='Invalid' src="img/dals-pulses-20200714.png" />
                                    </Link>
                                </Figure>
                            </li>
                            <li>
                                <Figure className="meal-photo">
                                    <Figure.Image height={100} width={150} src="img/atta-flour.png" alt="Invalid" />
                                </Figure>
                            </li>
                            <li>
                                <Figure className="meal-photo">
                                    <Figure.Image height={100} width={150} src="img/edible_oil.png" alt="Invalid" />
                                </Figure>
                            </li>
                            <li>
                                <Figure className="meal-photo">
                                    <Figure.Image height={100} width={150} src="img/salt_sugar_jaggery.png" alt="Invalid" />
                                </Figure>
                            </li>
                        </ul>
                        <ul className="meals-showcase clearfix">
                            <li>
                                <Figure className="meal-photo">
                                    <Figure.Image height={100} width={150} src="img/bath-hand-wash-20200714.png" alt="Invalid" />
                                </Figure>
                            </li>
                            <li>
                                <Figure className="meal-photo">
                                    <Figure.Image height={100} width={150} src="img/toothpaste-20200520.png" alt="Invalid" />
                                </Figure>
                            </li>
                            <li>
                                <Figure className="meal-photo">
                                    <Figure.Image height={100} width={150} src="img/noodle-pasta-vermicelli-20200603.png" alt="Invalid" />
                                </Figure>
                            </li>
                            <li>
                                <Figure className="meal-photo">
                                    <Figure.Image height={100} width={150} src="img/biscuits_cookies.png" alt="Invalid" />
                                </Figure>
                            </li>
                        </ul>
                    </section>
                </div><hr />
                {/*  */}
                <div className="App">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2>Beauty <span>&#38;</span> Hygiene</h2>
                            </div>
                        </div>
                    </div><hr />
                    <div className="main">
                        <div className="gallery">
                            <div className="img" style={{ 'height': '410px', 'width': '550px' }}>
                                <a href="/">
                                    <img src="img/winter-skin-care.jpg" alt="invalid" />
                                </a>
                            </div>
                            <div className="img" style={{ 'width': '250px', 'height': '200px', 'margin': '0 0', 'padding': '10px 30px 0px 10px' }}>
                                <a href="/" alt="">
                                    <img src="img/deos-and-perfumes.jpg" alt="invalid" />
                                </a>
                            </div>
                            <div className="img" style={{ 'width': '250px', 'height': '200px', 'margin': '0px 0px', 'padding': '10px 30px 0px 10px' }}>
                                <a href="/" alt="">
                                    <img src="img/feminine-hygiene.jpg" alt="invalid" />
                                </a>
                            </div>
                            <div className="img" style={{ 'width': '250px', 'height': '200px', 'margin': '0px 0px', 'padding': '10px 30px 0px 20px' }}>
                                <a href="/">
                                    <img src="img/toothpaste-mouthwash.jpg" alt="invalid" />
                                </a>
                            </div>
                            <div className="img" style={{ 'width': '250px', 'height': '200px', 'margin': '0px 0px', 'padding': '10px 20px 0px 10px' }}>
                                <a href="/">
                                    <img src="img/herbal-soap.jpg" alt="invalid" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div><hr />
                {/*  */}
                <div className="App">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h2 class="sc">Cleaning & Household</h2>
                            </div>
                        </div>
                    </div><hr />
                    <section class="section-cities" id="cities">
                        <div className="container">
                            <div class="row">
                                <div class="col-md-3">
                                    <div className="images">
                                        <a href="/">
                                            <Image height={200} width={250} src="img/detergent-febric.jpg" alt="invalid" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div className="images">
                                        <a href="/">
                                            <Image height={200} width={250} src="img/home-freshners.jpg" alt="invalid" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div className="images">
                                        <a href="/">
                                            <Image height={200} width={250} src="img/floor-toilet-clearner.jpg" alt="invalid" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div className="images">
                                        <a href="/">
                                            <Image height={200} width={250} src="img/Mosquito-Repellant-Coils.jpg" alt="invalid" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div><hr />
            </div>
        );
    }
}

export default ProductDetails;