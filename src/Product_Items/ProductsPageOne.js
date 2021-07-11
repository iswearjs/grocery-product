import React from 'react'
// import { Container, Col, Row } from 'react-bootstrap';
import { Navbar, Nav, FormControl, Col, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMapMarkerAlt, faShoppingCart, faCartPlus } from '@fortawesome/free-solid-svg-icons';

function ProductsPageOne() {
    return (
        <div>
            {/* Start LOGO LOGIN & CART */}
            <Navbar bg="light" expand="lg">
                <div className="container">
                    <div className="row" style={{ 'width': '1200px', 'height': '100px' }}>
                        {/* START */}
                        <div className="col-md-2">
                            <Nav className="justify-content-start">
                                <Navbar.Brand href="/">
                                    <span className="reverse-word" >&/8477;</span><span className="reverse-word-one">&/65;&/84;&/73;&/79;&/78;&/8455;&/66;&/79;&/88;</span>
                                </Navbar.Brand>
                            </Nav>
                        </div>
                        {/* END */}
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        {/* START */}
                        <div className="col-md-6">
                            <Nav className="justify-content-center">
                                <InputGroup className="">
                                    <FormControl size="sm"
                                        placeholder="Search for your favorities in orders..."
                                        aria-label="Search for your favorities in orders..."
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append className="mb-4">
                                        <FontAwesomeIcon icon={faSearch} className="fas fa-search" />
                                    </InputGroup.Append>
                                </InputGroup>
                            </Nav>
                        </div>
                        {/* END */}
                        {/* START */}
                        <div className="col-md-4">
                            <Nav className="justify-content-end">
                                <Nav.Item>
                                    <Nav.Link href="/">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        <span>491001</span><span>,</span><span>Durg</span>
                                        {/* <FontAwesomeIcon icon={faAngleDown} /> */}
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/" title="Account"><spa>Login</spa>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="disabled" disabled><span>&/10073;</span></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/" title="Account"><span>Signup</span></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/" title="Personal Cart">
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        {/* END */}
                    </div>
                </div>
            </Navbar>
            {/* END */}
            {/* START CATEGORY */}

            <div className="menu-bar">
                <ul>
                    <li><a href="/" className="menu-bar-01">Categories <i className="fas fa-caret-down"></i></a>
                        <div className="sub-menu-1">
                            <ul>
                                <li className="hover-me"><a href="/">Fruits & Vegetables <i className="fas fa-caret-right"></i></a>
                                    <div className="sub-menu-2 sub-menu-20">
                                        <ul>
                                            <li><a href="/">Fresh Vegetables</a></li>
                                            <li><a href="/">Fresh Fruits</a></li>
                                            <li><a href="/">Herbs & Seasonings</a></li>
                                            <li><a href="/">Cuts & Sprouts</a></li>
                                            <li><a href="/">Exotic Fruits & Veggies</a></li>
                                            <li><a href="/">Organic Fruits & Vegetables</a></li>
                                            <li><a href="/">Flower Bouquets, Bunches</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hover-me"><a href="/">Foodgrains, Oil & Masala <i className="fas fa-caret-right"></i></a>
                                    <div className="sub-menu-2 sub-menu-21">
                                        <ul>
                                            <li><a href="/">Dals & Pulses</a></li>
                                            <li><a href="/">Rice & Rice Products</a></li>
                                            <li><a href="/">Atta , Flours & Sooji</a></li>
                                            <li><a href="/">Salt, Sugar & Jaggery</a></li>
                                            <li><a href="/">Edible Oils & Ghee</a></li>
                                            <li><a href="/">Organic Staples</a></li>
                                            <li><a href="/">Malasals & Spices</a></li>
                                            <li><a href="/">Dry Fruits</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hover-me"><a href="/">Baker, Cakes & Dairy <i className="fas fa-caret-right"></i></a>
                                    <div className="sub-menu-2 sub-menu-22">
                                        <ul>
                                            <li><a href="/">Dairy</a></li>
                                            <li><a href="/">Breads & Buns</a></li>
                                            <li><a href="/">Bakery Snacks</a></li>
                                            <li><a href="/">Cookies, Rusk & Khari</a></li>
                                            <li><a href="/">Cakes & Pastries</a></li>
                                            <li><a href="/">Ice Creams & Desserts</a></li>
                                            <li><a href="/">Gourmet Breads</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hover-me"><a href="/">Beverages <i className="fas fa-caret-right"></i></a>
                                    <div className="sub-menu-2 sub-menu-23">
                                        <ul>
                                            <li><a href="/">Water</a></li>
                                            <li><a href="/">Energy & Soft Drinks</a></li>
                                            <li><a href="/">Tea</a></li>
                                            <li><a href="/">Coffee</a></li>
                                            <li><a href="/">Fruit Juices & Drinks</a></li>
                                            <li><a href="/">Health Drink, Supplement</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hover-me"><a href="/">Snacks & Branded Foods <i className="fas fa-caret-right"></i></a>
                                    <div className="sub-menu-2 sub-menu-24">
                                        <ul>
                                            <li><a href="/">Noodle, Pasta, Vermicelli</a></li>
                                            <li><a href="/">Biscuits & Cookies</a></li>
                                            <li><a href="/">Breakfast Cereals</a></li>
                                            <li><a href="/">Spreads, Souces, Ketchup</a></li>
                                            <li><a href="/">Frozen Veggies & Snacks</a></li>
                                            <li><a href="/">Snacks & Namkeen</a></li>
                                            <li><a href="/">Ready To Cook & Eat</a></li>
                                            <li><a href="/">Chocolates & Candies</a></li>
                                            <li><a href="/">Pickles & Chutney</a></li>
                                            <li><a href="/">Indian Mithai</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hover-me"><a href="/">Beauty & Hygiene <i className="fas fa-caret-right"></i></a>
                                    <div className="sub-menu-2 sub-menu-25">
                                        <ul>
                                            <li><a href="/">Feminine Hygiene</a></li>
                                            <li><a href="/">Oral Care</a></li>
                                            <li><a href="/">Bath & Hand Wash</a></li>
                                            <li><a href="/">Health & Medicine</a></li>
                                            <li><a href="/">Hair Care</a></li>
                                            <li><a href="/">Men's Grooming</a></li>
                                            <li><a href="/">Skin Care</a></li>
                                            <li><a href="/">Fragrances & Deos</a></li>
                                            <li><a href="/">Makeup</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hover-me"><a href="/">Cleaning & Household <i className="fas fa-caret-right"></i></a>
                                    <div className="sub-menu-2 sub-menu-26">
                                        <ul>
                                            <li><a href="/">Detergents & Dishwash</a></li>
                                            <li><a href="/">All Purpose Cleaners</a></li>
                                            <li><a href="/">Disposables, Garbage Bag</a></li>
                                            <li><a href="/">Mops, Brushes & Scrubs</a></li>
                                            <li><a href="/">Fresheners & Repellents</a></li>
                                            <li><a href="/">Bins & Bathroom Ware</a></li>
                                            <li><a href="/">Stationery</a></li>
                                            <li><a href="/">Party & Festive Needs</a></li>
                                            <li><a href="/">Pooja Needs</a></li>
                                            <li><a href="/">Cars & Shoe Care</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hover-me"><a href="/">Kitchen, Garden & Pets <i className="fas fa-caret-right"></i></a>
                                    <div className="sub-menu-2 sub-menu-27">
                                        <ul>
                                            <li><a href="/">Appliances & Electricals</a></li>
                                            <li><a href="/">Kitchen Accessories</a></li>
                                            <li><a href="/">Pet Food & Accessories</a></li>
                                            <li><a href="/">Cookware & Non Stick</a></li>
                                            <li><a href="/">Bakeware</a></li>
                                            <li><a href="/">Steel Utensils</a></li>
                                            <li><a href="/">Gardening</a></li>
                                            <li><a href="/">Crockery & Cutlery</a></li>
                                            <li><a href="/">Flask & Casserole</a></li>
                                            <li><a href="/">Storage & Accessories</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hover-me"><a href="/">Eggs, Meat & Fish <i className="fas fa-caret-right"></i></a>
                                    <div className="sub-menu-2 sub-menu-28">
                                        <ul>
                                            <li><a href="/">Eggs</a></li>
                                            <li><a href="/">Poultry</a></li>
                                            <li><a href="/">Sausages, Bacon & Salami</a></li>
                                            <li><a href="/">Mutton & Lamb</a></li>
                                            <li><a href="/">Fish & Seafood</a></li>
                                            <li><a href="/">Marinades</a></li>
                                            <li><a href="/">Pork & Other Meats</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hover-me"><a href="/">Gourmet & World Food <i className="fas fa-caret-right"></i></a>
                                    <div className="sub-menu-2 sub-menu-29">
                                        <ul>
                                            <li><a href="/">Oils & Venegar</a></li>
                                            <li><a href="/">Dairy & Cheese</a></li>
                                            <li><a href="/">Pasta, Soup & Noodles</a></li>
                                            <li><a href="/">Snacks, Dry Fruits, Nuts</a></li>
                                            <li><a href="/">Cookies & Baking Needs</a></li>
                                            <li><a href="/">Sauces, Spreads & Dips</a></li>
                                            <li><a href="/">Cereals & Breakfast</a></li>
                                            <li><a href="/">Chocolates & Biscuits</a></li>
                                            <li><a href="/">Drinks & Beverages</a></li>
                                            <li><a href="/">Tinned & Processed Food</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hover-me"><a href="/">Baby Care <i className="fas fa-caret-right"></i></a>
                                    <div className="sub-menu-2 sub-menu-30">
                                        <ul>
                                            <li><a href="/">Baby Food & Formula</a></li>
                                            <li><a href="/">Baby Bath & Hygiene</a></li>
                                            <li><a href="/">Diapers & Wipes</a></li>
                                            <li><a href="/">Baby Accessories</a></li>
                                            <li><a href="/">Feeding & Nursing</a></li>
                                            <li><a href="/">Mothers & Maternity</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="/">View All <i className="fas fa-caret-right"></i></a></li>
                            </ul>
                        </div>
                    </li>
                    {/*  */}
                    <li><a href="/" className="menu-bar-02">Express Delivery <i className="fas fa-caret-down"></i></a>
                        <div className="sub-menu-1">
                            <ul>
                                <li className="hover-me"><a href="/">Fruits & Vegetables <i className="fas fa-caret-right"></i></a>
                                    <div className="sub-menu-2 sub-menu-210">
                                        <ul>
                                            <li><a href="/">Fresh Vegetables</a></li>
                                            <li><a href="/">Fresh Fruits</a></li>
                                            <li><a href="/">Herbs & Seasonings</a></li>
                                            <li><a href="/">Cuts & Sprouts</a></li>
                                            <li><a href="/">Exotic Fruits & Veggies</a></li>
                                            <li><a href="/">Organic Fruits & Vegetables</a></li>
                                            <li><a href="/">Flower Bouquets, Bunches</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hover-me"><a href="/">Foodgrains, Oil & Masala <i className="fas fa-caret-right"></i></a>
                                    <div className="sub-menu-2 sub-menu-220">
                                        <ul>
                                            <li><a href="/">Dals & Pulses</a></li>
                                            <li><a href="/">Rice & Rice Products</a></li>
                                            <li><a href="/">Atta , Flours & Sooji</a></li>
                                            <li><a href="/">Salt, Sugar & Jaggery</a></li>
                                            <li><a href="/">Edible Oils & Ghee</a></li>
                                            <li><a href="/">Organic Staples</a></li>
                                            <li><a href="/">Malasals & Spices</a></li>
                                            <li><a href="/">Dry Fruits</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hover-me"><a href="/">Baker, Cakes & Dairy <i className="fas fa-caret-right"></i></a>
                                    <div className="sub-menu-2 sub-menu-230">
                                        <ul>
                                            <li><a href="/">Dairy</a></li>
                                            <li><a href="/">Breads & Buns</a></li>
                                            <li><a href="/">Bakery Snacks</a></li>
                                            <li><a href="/">Cookies, Rusk & Khari</a></li>
                                            <li><a href="/">Cakes & Pastries</a></li>
                                            <li><a href="/">Ice Creams & Desserts</a></li>
                                            <li><a href="/">Gourmet Breads</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hover-me"><a href="/">Beverages <i className="fas fa-caret-right"></i></a>
                                    <div className="sub-menu-2 sub-menu-240">
                                        <ul>
                                            <li><a href="/">Water</a></li>
                                            <li><a href="/">Energy & Soft Drinks</a></li>
                                            <li><a href="/">Tea</a></li>
                                            <li><a href="/">Coffee</a></li>
                                            <li><a href="/">Fruit Juices & Drinks</a></li>
                                            <li><a href="/">Health Drink, Supplement</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hover-me"><a href="/">Snacks & Branded Foods <i className="fas fa-caret-right"></i></a>
                                    <div className="sub-menu-2 sub-menu-250">
                                        <ul>
                                            <li><a href="/">Noodle, Pasta, Vermicelli</a></li>
                                            <li><a href="/">Biscuits & Cookies</a></li>
                                            <li><a href="/">Breakfast Cereals</a></li>
                                            <li><a href="/">Spreads, Souces, Ketchup</a></li>
                                            <li><a href="/">Frozen Veggies & Snacks</a></li>
                                            <li><a href="/">Snacks & Namkeen</a></li>
                                            <li><a href="/">Ready To Cook & Eat</a></li>
                                            <li><a href="/">Chocolates & Candies</a></li>
                                            <li><a href="/">Pickles & Chutney</a></li>
                                            <li><a href="/">Indian Mithai</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hover-me"><a href="/">Beauty & Hygiene <i className="fas fa-caret-right"></i></a>
                                    <div className="sub-menu-2 sub-menu-260">
                                        <ul>
                                            <li><a href="/">Feminine Hygiene</a></li>
                                            <li><a href="/">Oral Care</a></li>
                                            <li><a href="/">Bath & Hand Wash</a></li>
                                            <li><a href="/">Health & Medicine</a></li>
                                            <li><a href="/">Hair Care</a></li>
                                            <li><a href="/">Men's Grooming</a></li>
                                            <li><a href="/">Skin Care</a></li>
                                            <li><a href="/">Fragrances & Deos</a></li>
                                            <li><a href="/">Makeup</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hover-me"><a href="/">Cleaning & Household <i className="fas fa-caret-right"></i></a>
                                    <div className="sub-menu-2 sub-menu-270">
                                        <ul>
                                            <li><a href="/">Detergents & Dishwash</a></li>
                                            <li><a href="/">All Purpose Cleaners</a></li>
                                            <li><a href="/">Disposables, Garbage Bag</a></li>
                                            <li><a href="/">Mops, Brushes & Scrubs</a></li>
                                            <li><a href="/">Fresheners & Repellents</a></li>
                                            <li><a href="/">Bins & Bathroom Ware</a></li>
                                            <li><a href="/">Stationery</a></li>
                                            <li><a href="/">Party & Festive Needs</a></li>
                                            <li><a href="/">Pooja Needs</a></li>
                                            <li><a href="/">Cars & Shoe Care</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hover-me"><a href="/">Kitchen, Garden & Pets <i className="fas fa-caret-right"></i></a>
                                    <div className="sub-menu-2 sub-menu-280">
                                        <ul>
                                            <li><a href="/">Appliances & Electricals</a></li>
                                            <li><a href="/">Kitchen Accessories</a></li>
                                            <li><a href="/">Pet Food & Accessories</a></li>
                                            <li><a href="/">Cookware & Non Stick</a></li>
                                            <li><a href="/">Bakeware</a></li>
                                            <li><a href="/">Steel Utensils</a></li>
                                            <li><a href="/">Gardening</a></li>
                                            <li><a href="/">Crockery & Cutlery</a></li>
                                            <li><a href="/">Flask & Casserole</a></li>
                                            <li><a href="/">Storage & Accessories</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hover-me"><a href="/">Eggs, Meat & Fish <i className="fas fa-caret-right"></i></a>
                                    <div className="sub-menu-2 sub-menu-290">
                                        <ul>
                                            <li><a href="/">Eggs</a></li>
                                            <li><a href="/">Poultry</a></li>
                                            <li><a href="/">Sausages, Bacon & Salami</a></li>
                                            <li><a href="/">Mutton & Lamb</a></li>
                                            <li><a href="/">Fish & Seafood</a></li>
                                            <li><a href="/">Marinades</a></li>
                                            <li><a href="/">Pork & Other Meats</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hover-me"><a href="/">Gourmet & World Food <i className="fas fa-caret-right"></i></a>
                                    <div className="sub-menu-2 sub-menu-300">
                                        <ul>
                                            <li><a href="/">Oils & Venegar</a></li>
                                            <li><a href="/">Dairy & Cheese</a></li>
                                            <li><a href="/">Pasta, Soup & Noodles</a></li>
                                            <li><a href="/">Snacks, Dry Fruits, Nuts</a></li>
                                            <li><a href="/">Cookies & Baking Needs</a></li>
                                            <li><a href="/">Sauces, Spreads & Dips</a></li>
                                            <li><a href="/">Cereals & Breakfast</a></li>
                                            <li><a href="/">Chocolates & Biscuits</a></li>
                                            <li><a href="/">Drinks & Beverages</a></li>
                                            <li><a href="/">Tinned & Processed Food</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="hover-me"><a href="/">Baby Care <i className="fas fa-caret-right"></i></a>
                                    <div className="sub-menu-2 sub-menu-301">
                                        <ul>
                                            <li><a href="/">Baby Food & Formula</a></li>
                                            <li><a href="/">Baby Bath & Hygiene</a></li>
                                            <li><a href="/">Diapers & Wipes</a></li>
                                            <li><a href="/">Baby Accessories</a></li>
                                            <li><a href="/">Feeding & Nursing</a></li>
                                            <li><a href="/">Mothers & Maternity</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="/" className="menu-bar-03">Best Sellers</a></li>
                    <li><a href="/" className="menu-bar-04">All New</a></li>
                    <li><a href="/" className="menu-bar-05">Deals & Coupons</a></li>
                    <li><a href="/" className="menu-bar-06">Free Samples</a></li>
                    <li><a href="/" className="menu-bar-07">Prince & Spring</a></li>
                    <li><a href="/" className="menu-bar-08">Featured Brands</a></li>
                </ul >
            </div ><br /><br />
            {/* END */}
            {/* Start SideBar */}
            <section>
                <div className="container">
                    <div className="row" style={{ 'border': '1px solid red' }}>
                        <Col>1 of 2</Col>
                    </div>
                    <div className="row">
                        <div className="col-md-3" style={{ 'border': '1px solid blue' }}>
                            1 of 2
                            </div>
                        <div className="col-md-9" style={{ 'position': 'relative', 'float': 'right', 'border': '1px solid black' }}>
                            <section>
                                <div className="row">
                                    <div className="col-md-6" style={{ 'border': '1px solid green' }}>
                                        <div className="d-flex justify-content-start">
                                            <div class="p-2 bd-highlight">Product Title Name</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6" style={{ 'border': '1px solid yellow' }}>
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
                            {/* START */}
                            <section>
                                <div class="container">
                                    <div class="row">
                                        <div class="ml-4 col-sm-4 col-lg-3 mb-2-6" style={{ 'box-shadow': '0px 0px 1px 1px rgba(0, 140, 186, 0.5)' }}>
                                            {/* <div class="card-wrapper mb-4"> */}
                                            <div class="card-img">
                                                <img src="img/pro-1.jpg" alt="..." />
                                            </div>
                                            <div class="card-body">
                                                <div>
                                                    {/* <a href="/"> */}
                                                    <button>Add<FontAwesomeIcon icon={faCartPlus} /></button>
                                                    {/* <i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i> */}
                                                    {/* </a> */}
                                                </div>
                                            </div>
                                            {/* </div> */}
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Hand Gloves</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$11.79</h5>
                                            </div>
                                        </div>
                                        <div class="ml-4 col-sm-4 col-lg-3 mb-2-6" style={{ 'box-shadow': '0px 0px 1px 1px rgba(0, 140, 186, 0.5)' }}>
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-2.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/">
                                                            <i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Products Bag</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$79.00</h5>
                                            </div>
                                        </div>
                                        <div class="ml-4 col-sm-4 col-lg-3 mb-2-6" style={{ 'box-shadow': '0px 0px 1px 1px rgba(0, 140, 186, 0.5)' }}>
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-3.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/">
                                                            <i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Cleaning Equipment</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$19.22</h5>
                                            </div>
                                        </div>
                                        <div class="ml-4 col-sm-4 col-lg-3 mb-2-6" style={{ 'box-shadow': '0px 0px 1px 1px rgba(0, 140, 186, 0.5)' }}>
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-4.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Washing Liquids</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$28.25</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6 mb-lg-0">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-5.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Vacuum Cleaner</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$129.79</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6 mb-lg-0">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-6.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Rubber Gloves</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$44.42</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6 mb-sm-0">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-7.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Rubber Gloves</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$24.69</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-8.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Cleaning Supplies</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$79.79</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6" style={{ 'border': '1px solid black' }}>
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-9.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/">
                                                            <i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Hand Gloves</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$11.79</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-10.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/">
                                                            <i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Products Bag</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$79.00</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-11.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/">
                                                            <i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Cleaning Equipment</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$19.22</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-12.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Washing Liquids</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$28.25</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6 mb-lg-0">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-13.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Vacuum Cleaner</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$129.79</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6 mb-lg-0">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-14.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Rubber Gloves</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$44.42</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6 mb-sm-0">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-15.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Rubber Gloves</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$24.69</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-16.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Cleaning Supplies</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$79.79</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6" style={{ 'border': '1px solid black' }}>
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-17.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/">
                                                            <i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Hand Gloves</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$11.79</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-18.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/">
                                                            <i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Products Bag</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$79.00</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-19.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/">
                                                            <i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Cleaning Equipment</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$19.22</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-20.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Washing Liquids</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$28.25</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6 mb-lg-0">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-21.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Vacuum Cleaner</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$129.79</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6 mb-lg-0">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-22.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Rubber Gloves</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$44.42</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6 mb-sm-0">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-23.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Rubber Gloves</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$24.69</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-24.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Cleaning Supplies</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$79.79</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6" style={{ 'border': '1px solid black' }}>
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-25.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/">
                                                            <i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Hand Gloves</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$11.79</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-26.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/">
                                                            <i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Products Bag</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$79.00</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-27.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/">
                                                            <i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Cleaning Equipment</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$19.22</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-28.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Washing Liquids</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$28.25</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6 mb-lg-0">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-29.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Vacuum Cleaner</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$129.79</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6 mb-lg-0">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-30.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Rubber Gloves</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$44.42</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6 mb-sm-0">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-31.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Rubber Gloves</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$24.69</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-32.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Cleaning Supplies</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$79.79</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6" style={{ 'border': '1px solid black' }}>
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-33.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/">
                                                            <i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Hand Gloves</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$11.79</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-34.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/">
                                                            <i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Products Bag</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$79.00</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-35.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/">
                                                            <i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Cleaning Equipment</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$19.22</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-36.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Washing Liquids</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$28.25</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6 mb-lg-0">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-37.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Vacuum Cleaner</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$129.79</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6 mb-lg-0">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-38.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Rubber Gloves</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$44.42</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3 mb-2-6 mb-sm-0">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-39.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Rubber Gloves</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$24.69</h5>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-3">
                                            <div class="card-wrapper mb-4">
                                                <div class="card-img">
                                                    <img src="img/pro-40.jpg" alt="..." />
                                                </div>
                                                <div class="card-body">
                                                    <div>
                                                        <a href="/"><i class="bg-white p-3 rounded-circle ti-shopping-cart font-weight-600"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <h4 class="h5 mb-2"><a href="/" class="text-secondary">Cleaning Supplies</a></h4>
                                                <div class="product-rating mb-2">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star mr-0"></i>
                                                </div>
                                                <h5 class="mb-0 text-primary">$79.79</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* END */}
                        </div>
                    </div>
                </div>
            </section>
            {/* End SiderBar */}
        </div >
    )
}

export default ProductsPageOne;
