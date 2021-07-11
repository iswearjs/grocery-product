import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import classes from '../css/ProductsDetails.css';
import { ProductsData } from '../Data/ProductsData';
// import { ProductsData } from '../Data/ProductsData';

const ProductsDetails = (props) => {
    const colorOptions = props.data.colorOptions.map((item, pos) => {
        const classArr = ["ProductImage"]
        if (pos === props.currentPreviewImagePos) {
            classArr.push("SelectedProductImage");
        }
        return (
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={() => props.onColorOptionClick(pos)} />
        );
    })

    const featureList = props.data.featureList.map((item, pos) => {
        const classArr = ["FeatureItem"];

        if (pos === props.currentSelectedFeature) {
            classArr.push("SelectedFeatureItem");
        }
        // else if (pos === 0 && !props.showHeartBeatSection) {
        //     classArr.push("SelectedFeatureItem");
        // }
        return (
            <button onClick={() => props.onFeatureItemClick(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
        );
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12" style={{ 'border': '1px solid green' }}>
                    <div className="ProductData">
                        <a href="/" alt=".." className="ProductSTitle">Fresho</a>
                        <h1 className="ProductTitle">{props.data.title}</h1>
                        {/* <p className="ProductDescription">{props.data.description}</p> */}
                        {/* <h3 className="SectionHeading">Select Color</h3> */}
                        {/* <div>
                {colorOptions}
            </div> */}
                        {/* <h3 className="SectionHeading">Features</h3>
            <div>{featureList}</div> */}
                        <div className="price mt-2">
                            <table>
                                <tr>
                                    <td className="mrp ml-2" style={{ 'font-size': '14px' }}>
                                        <span>{props.data.mrp} <s style={{ 'font-size': '12px' }}>
                                            &#8360;&nbsp;{props.data.mprice}</s></span>
                                    </td>
                                    <td><>&nbsp;{props.data.price}:&nbsp;{props.data.dprice}</></td>
                                    <td><span>You Save: 20% (inclusive of all taxes)</span></td>
                                </tr>
                            </table>
                            <div className="row">
                                <div class="col-md-6 p-1" style={{}}>
                                    <Link to="/cart" target="_blank">
                                        <button type="button" className="b2n _2KpZ62 _2KpZ6l" style={{}}>
                                            <img src="https://img.icons8.com/material-outlined/24/000000/fast-cart.png" alt="" />add to cart
                                                                                    </button>
                                    </Link>
                                </div>
                                <div class="col-md-6 p-1" style={{}}>
                                    <Link to="/cart" target="_blank">
                                        <button type="button" className="b2nn _2KpZ62 _2KpZ6l" style={{}}>
                                            <span style={{}}><img src="https://img.icons8.com/offices/30/000000/lightning-bolt.png" alt="" /> buy now</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <span className="fontawesome ml-2"><FontAwesomeIcon icon={faTruck} />&nbsp;&nbsp;
                            Standard: Please collect token before ordering
                            </span>
                        </div>
                        {/* <button className="PrimaryButton">Add to cart</button>&nbsp;
            <button className="PrimaryBtn">Buy Now</button> */}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProductsDetails;