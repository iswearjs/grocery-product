import React from 'react';

const SideBarMenu = () => {
    return (
        <>
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
        </>
    );
}

export default SideBarMenu;