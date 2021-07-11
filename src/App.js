// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
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
import ProductsPage from './Product_Items/ProductsPage';
import ProDetails from './Products/ProDetails';
import ProDetail from './Products/ProDetail';
import Details from './Products/Details';
import Cart from './Cart/Cart';
import { Provider } from 'react-redux';
import store from './store';
import Todo from './components/todo';

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Route path="/" excat component={Header} />
          <Route path="/cart" excat component={Cart} />
          {/* <Route path="/" exact component={ProductCategory} /> */}
          <Route path="/" exact component={SliderImage} />
          <Route path="/" exact component={ProductSliderOne} />
          <Route path="/" exact component={ProductDetails} />
          <Route path="/productspage" component={ProductsPage} />
          {/* <Route path="/prodetail" component={ProDetail} /> */}
          <Route path="/details/:id" exact component={Details} />
          <Route path="/" exact component={ProductSliderTwo} />
          <Route path="/" exact component={ProductBannerOne} />
          <Route path="/" exact component={ProductSliderThree} />
          <Route path="/" exact component={ProductBannerTwo} />
          <Route path="/" exact component={Footer} />
          <Route path="/" exact component={Todo} />
        </Provider>
      </Router>
    );
  }
}
export default App;
