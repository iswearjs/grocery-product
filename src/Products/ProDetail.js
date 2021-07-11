import React, { Component } from 'react'
import { ProductsData } from '../Data/ProductsData';
import ProductPreview from './ProductPreview';
import ProductsDetails from './ProductsDetails';
import classes from '../css/Custome.css';
import TopBar from './TopBar';

import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import ProductCategory from '../ProductCategory/ProductCategory';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import storeProducts, { ProductData } from '../Data/ProductData';

export default class ProDetail extends Component {
    state = {
        productData: ProductsData,
        // currentPreviewImage: 'https://imgur.com/xSIK4M8.png',
        currentPreviewImagePos: 0,
        // showHeartBeatSection: false,
        currentSelectedFeature: 0,
    }

    onColorOptionClick = (pos) => {
        // const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl
        // console.log(updatedPreviewImage);
        this.setState({ currentPreviewImagePos: pos })
    }

    onFeatureItemClick = (pos) => {
        // console.log(pos)
        // let updatedState = false;
        // if (pos === 1) {
        //     updatedState = true;
        // }
        this.setState({ currentSelectedFeature: pos });
    }

    render() {
        return (
            <div>
                <ProductCategory /><br /><br />

                {/* Start SideBar */}
                <div>
                    <section>
                        <div className="container">
                            <div className="row" style={{ 'border': '1px solid red' }}>
                                <div className="col">1 of 2</div>
                                <div className="col-md-7 ml-5" style={{ 'border': '1px solid yellow', 'float': 'right' }}>
                                    <div className="d-flex justify-content-end form-floating p-2 bd-highlight">
                                        <div className="">
                                            <div className="_1YmWw">
                                                <span className="_1bexe">Share on</span>
                                                <a className="_30asG" href="/" target="_blank" rel="noopener noreferrer">
                                                    <i class="fas fa-envelope-square _2LYDy"></i>
                                                    {/* <img class="_2LYDy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='20' viewBox='0 0 21 20'%3E %3Cg fill='none' fill-rule='nonzero' transform='translate(.5)'%3E %3Ccircle cx='9.929' cy='9.929' r='9.929' fill='%233B5998'/%3E %3Cpath fill='%23FFF' d='M12.425 10.318h-1.772v6.49H7.97v-6.49H6.692V8.036H7.97V6.56c0-1.055.501-2.708 2.708-2.708l1.988.008v2.214h-1.442c-.237 0-.57.119-.57.622V8.04h2.006l-.234 2.279z'/%3E %3C/g%3E %3C/svg%3E" alt="facebook" /> */}
                                                </a>
                                                <a className="_30asG vl" href="/" target="_blank" rel="noopener noreferrer">
                                                    <i class="fab fa-facebook-square _2LYDy"></i>
                                                    {/* <img class="_2LYDy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='20' viewBox='0 0 21 20'%3E %3Cg fill='none' fill-rule='nonzero' transform='translate(.528)'%3E %3Ccircle cx='9.929' cy='9.929' r='9.929' fill='%2355ACEE'/%3E %3Cpath fill='%23F1F2F2' d='M16.01 7.136a4.735 4.735 0 0 1-1.362.373 2.38 2.38 0 0 0 1.043-1.313c-.458.272-.966.47-1.507.576a2.374 2.374 0 0 0-4.044 2.165 6.737 6.737 0 0 1-4.892-2.48 2.373 2.373 0 0 0 .734 3.169 2.357 2.357 0 0 1-1.074-.298v.03c0 1.15.818 2.11 1.903 2.327a2.365 2.365 0 0 1-1.071.041 2.376 2.376 0 0 0 2.217 1.649 4.762 4.762 0 0 1-3.514.982 6.713 6.713 0 0 0 3.638 1.067c4.365 0 6.752-3.617 6.752-6.753 0-.103-.002-.206-.007-.307a4.813 4.813 0 0 0 1.185-1.228z'/%3E %3C/g%3E %3C/svg%3E" alt="twitter" /> */}
                                                </a>
                                                <a className="_30asG vl" href="/" target="_blank" rel="noopener noreferrer">
                                                    <i class="fab fa-whatsapp-square _2LYDy"></i>
                                                    {/* <img class="_2LYDy" src="data:image/svg+xml,%3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --%3E %3Ctitle%3Egoogle-plus%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E %3Cpolygon id='path-1' points='0.00015 -5e-05 12 -5e-05 12 7.7524 0.00015 7.7524'%3E%3C/polygon%3E %3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='7_404_-pd-page' transform='translate(-1265.000000, -139.000000)'%3E %3Cg id='Social-media' transform='translate(1174.000000, 139.000000)'%3E %3Cg id='google-plus' transform='translate(91.014205, 0.000000)'%3E %3Cellipse id='XMLID_30_' fill='%23BA5252' fill-rule='nonzero' cx='9.92884956' cy='10.0170175' rx='9.92884956' ry='9.84175439'%3E%3C/ellipse%3E %3Cg id='Group-3' transform='translate(3.985795, 6.000000)'%3E %3Cmask id='mask-2' fill='white'%3E %3Cuse xlink:href='%23path-1'%3E%3C/use%3E %3C/mask%3E %3Cg id='Clip-2'%3E%3C/g%3E %3Cpath d='M0.55565,7.08095 L0.55565,1.37445 C0.55565,1.28595 0.65115,1.23045 0.72815,1.27345 L5.96265,4.21295 C5.99765,4.23295 6.04115,4.23295 6.07615,4.21295 L11.27165,1.28395 C11.34865,1.24045 11.44415,1.29595 11.44415,1.38445 L11.44415,7.08095 C11.44415,7.14495 11.39215,7.19645 11.32815,7.19645 L0.67165,7.19645 C0.60765,7.19645 0.55565,7.14495 0.55565,7.08095 M11.05965,0.76645 L6.07565,3.57545 C6.04015,3.59495 5.99715,3.59495 5.96215,3.57545 L0.94315,0.76645 C0.83915,0.70795 0.88015,0.54945 0.99965,0.54945 L11.00315,0.54945 C11.12215,0.54945 11.16365,0.70745 11.05965,0.76645 M0.00015,0.23145 L0.00015,7.52095 C0.00015,7.64895 0.10365,7.75245 0.23165,7.75245 L11.76865,7.75245 C11.89615,7.75245 12.00015,7.64895 12.00015,7.52095 L12.00015,0.23295 C12.00015,0.10495 11.89615,0.00145 11.76865,0.00145 L0.23165,-5e-05 C0.10365,-5e-05 0.00015,0.10345 0.00015,0.23145' id='Fill-1' fill='%23FFFFFF' mask='url(%23mask-2)'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E" alt="email" /> */}
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{}}>
                                <div className="col-md-2" style={{ 'border': '1px solid blue' }}>
                                    <div class="wrapper">
                                        {/* <!-- Sidebar  --> */}
                                        <nav id="sidebar">
                                            <div className="sidebar-header">
                                                <h3>Categories</h3><hr style={{ 'width': '9rem' }} />
                                            </div>
                                            <ul className="list-unstyled components">
                                                <li className="active">
                                                    <a href="#fvSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                                        Fruits &#38; Vegetables
                                                    </a>
                                                    <ul className="collapse list-unstyled" id="fvSubmenu">
                                                        <li><a href="/">Fresh Vegetables</a></li>
                                                        <li><a href="/">Fresh Fruits</a></li>
                                                        <li><a href="/">Herbs &#38; Seasonings</a></li>
                                                        <li><a href="/">Cuts &#38; Sprouts</a></li>
                                                        <li><a href="/">Exotic Fruits &#38; Veggies</a></li>
                                                        <li><a href="/">Organic Fruits &#38; Vegetables</a></li>
                                                        <li><a href="/">Flower Bouquets, Bunches</a></li>
                                                    </ul>
                                                </li>
                                                <li className="active">
                                                    <a href="#fomSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                                        Foodgrains, Oil &#38; Masala
                                                    </a>
                                                    <ul className="collapse list-unstyled" id="fomSubmenu">
                                                        <li><a href="/">Dals &#38; Pulses</a></li>
                                                        <li><a href="/">Rice &#38; Rice Products</a></li>
                                                        <li><a href="/">Atta , Flours &#38; Sooji</a></li>
                                                        <li><a href="/">Salt, Sugar &#38; Jaggery</a></li>
                                                        <li><a href="/">Edible Oils &#38; Ghee</a></li>
                                                        <li><a href="/">Organic Staples</a></li>
                                                        <li><a href="/">Malasals &#38; Spices</a></li>
                                                        <li><a href="/">Dry Fruits</a></li>
                                                    </ul>
                                                </li>
                                                <li className="active">
                                                    <a href="#bcdSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                                        Baker, Cakes &#38; Dairy
                                                    </a>
                                                    <ul className="collapse list-unstyled" id="bcdSubmenu">
                                                        <li><a href="/">Dairy</a></li>
                                                        <li><a href="/">Breads &#38; Buns</a></li>
                                                        <li><a href="/">Bakery Snacks</a></li>
                                                        <li><a href="/">Cookies, Rusk &#38; Khari</a></li>
                                                        <li><a href="/">Cakes &#38; Pastries</a></li>
                                                        <li><a href="/">Ice Creams &#38; Desserts</a></li>
                                                        <li><a href="/">Gourmet Breads</a></li>
                                                    </ul>
                                                </li>
                                                <li className="active">
                                                    <a href="#bevSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                                        Beverages
                                                    </a>
                                                    <ul className="collapse list-unstyled" id="bevSubmenu">
                                                        <li><a href="/">Water</a></li>
                                                        <li><a href="/">Energy &#38; Soft Drinks</a></li>
                                                        <li><a href="/">Tea</a></li>
                                                        <li><a href="/">Coffee</a></li>
                                                        <li><a href="/">Fruit Juices &#38; Drinks</a></li>
                                                        <li><a href="/">Health Drink, Supplement</a></li>
                                                    </ul>
                                                </li>
                                                <li className="active">
                                                    <a href="#sbfoodSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                                        Snacks &#38; Branded Foods
                                                    </a>
                                                    <ul className="collapse list-unstyled" id="sbfoodSubmenu">
                                                        <li><a href="/">Noodle, Pasta, Vermicelli</a></li>
                                                        <li><a href="/">Biscuits &#38; Cookies</a></li>
                                                        <li><a href="/">Breakfast Cereals</a></li>
                                                        <li><a href="/">Spreads, Souces, Ketchup</a></li>
                                                        <li><a href="/">Frozen Veggies &#38; Snacks</a></li>
                                                        <li><a href="/">Snacks &#38; Namkeen</a></li>
                                                        <li><a href="/">Ready To Cook &#38; Eat</a></li>
                                                        <li><a href="/">Chocolates &#38; Candies</a></li>
                                                        <li><a href="/">Pickles &#38; Chutney</a></li>
                                                        <li><a href="/">Indian Mithai</a></li>
                                                    </ul>
                                                </li>
                                                <li className="active">
                                                    <a href="#bhSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                                        Beauty &#38; Hygiene
                                                    </a>
                                                    <ul className="collapse list-unstyled" id="bhSubmenu">
                                                        <li><a href="/">Feminine Hygiene</a></li>
                                                        <li><a href="/">Oral Care</a></li>
                                                        <li><a href="/">Bath &#38; Hand Wash</a></li>
                                                        <li><a href="/">Health &#38; Medicine</a></li>
                                                        <li><a href="/">Hair Care</a></li>
                                                        <li><a href="/">Men's Grooming</a></li>
                                                        <li><a href="/">Skin Care</a></li>
                                                        <li><a href="/">Fragrances &#38; Deos</a></li>
                                                        <li><a href="/">Makeup</a></li>
                                                    </ul>
                                                </li>
                                                <li className="active">
                                                    <a href="#chSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                                        Cleaning &#38; Household
                                                    </a>
                                                    <ul className="collapse list-unstyled" id="chSubmenu">
                                                        <li><a href="/">Detergents &#38; Dishwash</a></li>
                                                        <li><a href="/">All Purpose Cleaners</a></li>
                                                        <li><a href="/">Disposables, Garbage Bag</a></li>
                                                        <li><a href="/">Mops, Brushes &#38; Scrubs</a></li>
                                                        <li><a href="/">Fresheners &#38; Repellents</a></li>
                                                        <li><a href="/">Bins &#38; Bathroom Ware</a></li>
                                                        <li><a href="/">Stationery</a></li>
                                                        <li><a href="/">Party &#38; Festive Needs</a></li>
                                                        <li><a href="/">Pooja Needs</a></li>
                                                        <li><a href="/">Cars &#38; Shoe Care</a></li>
                                                    </ul>
                                                </li>
                                                <li className="active">
                                                    <a href="#kgpSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                                        Kitchen, Garden &#38; Pets
                                                    </a>
                                                    <ul className="collapse list-unstyled" id="kgpSubmenu">
                                                        <li><a href="/">Appliances &#38; Electricals</a></li>
                                                        <li><a href="/">Kitchen Accessories</a></li>
                                                        <li><a href="/">Pet Food &#38; Accessories</a></li>
                                                        <li><a href="/">Cookware &#38; Non Stick</a></li>
                                                        <li><a href="/">Bakeware</a></li>
                                                        <li><a href="/">Steel Utensils</a></li>
                                                        <li><a href="/">Gardening</a></li>
                                                        <li><a href="/">Crockery &#38; Cutlery</a></li>
                                                        <li><a href="/">Flask &#38; Casserole</a></li>
                                                        <li><a href="/">Storage &#38; Accessories</a></li>
                                                    </ul>
                                                </li>
                                                <li className="active">
                                                    <a href="#emfSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                                        Eggs, Meat &#38; Fish
                                                    </a>
                                                    <ul className="collapse list-unstyled" id="emfSubmenu">
                                                        <li><a href="/">Eggs</a></li>
                                                        <li><a href="/">Poultry</a></li>
                                                        <li><a href="/">Sausages, Bacon &#38; Salami</a></li>
                                                        <li><a href="/">Mutton &#38; Lamb</a></li>
                                                        <li><a href="/">Fish &#38; Seafood</a></li>
                                                        <li><a href="/">Marinades</a></li>
                                                        <li><a href="/">Pork &#38; Other Meats</a></li>
                                                    </ul>
                                                </li>
                                                <li className="active">
                                                    <a href="#gwfoodSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                                        Gourmet &#38; World Food
                                                    </a>
                                                    <ul className="collapse list-unstyled" id="gwfoodSubmenu">
                                                        <li><a href="/">Oils &#38; Venegar</a></li>
                                                        <li><a href="/">Dairy &#38; Cheese</a></li>
                                                        <li><a href="/">Pasta, Soup &#38; Noodles</a></li>
                                                        <li><a href="/">Snacks, Dry Fruits, Nuts</a></li>
                                                        <li><a href="/">Cookies &#38; Baking Needs</a></li>
                                                        <li><a href="/">Sauces, Spreads &#38; Dips</a></li>
                                                        <li><a href="/">Cereals &#38; Breakfast</a></li>
                                                        <li><a href="/">Chocolates &#38; Biscuits</a></li>
                                                        <li><a href="/">Drinks &#38; Beverages</a></li>
                                                        <li><a href="/">Tinned &#38; Processed Food</a></li>
                                                    </ul>
                                                </li>
                                                <li className="active">
                                                    <a href="#babycareSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                                        Baby Care
                                                    </a>
                                                    <ul className="collapse list-unstyled" id="babycareSubmenu">
                                                        <li><a href="/">Baby Food &#38; Formula</a></li>
                                                        <li><a href="/">Baby Bath &#38; Hygiene</a></li>
                                                        <li><a href="/">Diapers &#38; Wipes</a></li>
                                                        <li><a href="/">Baby Accessories</a></li>
                                                        <li><a href="/">Feeding &#38; Nursing</a></li>
                                                        <li><a href="/">Mothers &#38; Maternity</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-md-10" style={{ 'float': 'right', 'border': '1px solid black' }}>
                                    <div className="row MainContainer">
                                        <div className="col-md-6 ProductPreview" style={{ 'border': '1px solid red' }}>
                                            <div className="">
                                                <ProductPreview data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentPreviewImage={this.state.productData.colorOptions
                                                [this.state.currentPreviewImagePos].imageUrl} currentPreviewImagePos={this.state.currentPreviewImagePos} currentSelectedFeature=
                                                    {this.state.currentSelectedFeature} />
                                                {/* <div className="_20oi0" style={{ 'transform': 'translate3d(181px, 129px, 0px)', 'height': '150px', 'width': '150px' }}></div> */}
                                            </div>
                                        </div>
                                        <div className="col-md-6 ProductData" style={{ 'border': '1px solid black' }}>
                                            <div className="">
                                                <ProductsDetails data={this.state.productData} onFeatureItemClick={this.onFeatureItemClick} currentSelectedFeature={this.state.currentSelectedFeature} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* START */}
                                    <section className="">
                                        <div className="MainContainer">



                                            {/* <div className="ProductPreview">
                                                <ProductPreview currentPreviewImage={this.state.productData.colorOptions
                                                [this.state.currentPreviewImagePos].imageUrl} currentSelectedFeature=
                                                    {this.state.currentSelectedFeature} />
                                            </div>

                                            <div className="ProductData">
                                                <ProductsDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentPreviewImagePos={this.state.currentPreviewImagePos} onFeatureItemClick={this.onFeatureItemClick} currentSelectedFeature={this.state.currentSelectedFeature} />
                                            </div> */}
                                        </div>
                                    </section>
                                    {/* END */}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
                {/* End SiderBar */}
            </div>
        );
    }
}
