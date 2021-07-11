import React, { } from 'react'
// import { Container, Row, Image, Col } from "react-bootstrap";
class ProductBannerOne extends React.Component {
    render() {
        return (
            <div className="App ProBanOne">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <a href="/ProductsPage.js" target="_blank">
                                <img src="img/baverages.jpg" alt="Invalid" style={{ 'margin': '0px -30px' }} fluid />
                            </a>
                        </div>
                    </div>
                </div><hr />
            </div>

        )
    }
}

export default ProductBannerOne;