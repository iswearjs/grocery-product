import React, { } from 'react'
// import { Container, Row, Image, Col } from "react-bootstrap";
class ProductBannerTwo extends React.Component {
    render() {
        return (
            <div className="App ProBanTwo">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <a href="/">
                                <img src="img/biscuit-snacks.jpg" alt="Invalid" style={{ 'margin': '0px -30px' }} fluid />
                            </a>
                        </div>
                    </div>
                </div><hr />
            </div>

        )
    }
}

export default ProductBannerTwo;