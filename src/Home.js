import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header/Header';
import ProductCategory from './ProductCategory/ProductCategory';
import SliderImage from './Slider/SliderImage';
import ProductSliderOne from './MainComponent/ProductSliderOne';
import ProductSliderTwo from './MainComponent/ProductSliderTwo';
import ProductDetails from './Categories/ProductDetails';
import ProductBannerOne from './Product_Banner/ProductBannerOne';
import ProductSliderThree from './MainComponent/ProductSliderThree';
import ProductBannerTwo from './Product_Banner/ProductBannerTwo';
import Footer from './Footer/Footer';

function AppHome() {
    return (
        <div className="App">
            {/* <Menu defaultSelectKeys={['home']}>
                <menuitem key="header">Header</menuitem>

            </Menu> */}
            <React.Fragment>
                <Router>
                    {/* <Route path="/" component={Header} /> */}
                    <Route path="/" component={ProductCategory} />
                    <Route path="/" component={SliderImage} />
                    <Route path="/" component={ProductSliderOne} />
                    <Route path="/" component={ProductDetails} />
                    <Route path="/" component={ProductSliderTwo} />
                    <Route path="/" component={ProductBannerOne} />
                    <Route path="/" component={ProductSliderThree} />
                    <Route path="/" component={ProductBannerTwo} />
                    <Route path="/" component={Footer} />
                </Router>
            </React.Fragment>
        </div>
    );
}

export default AppHome;
