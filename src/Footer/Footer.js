import React from 'react'

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer-cont">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Our Services</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Get Help</h4>
                            <ul>
                                <li><a href="/">FAQ</a></li>
                                <li><a href="/">Shipping</a></li>
                                <li><a href="/">Returns</a></li>
                                <li><a href="/">Order Status</a></li>
                                <li><a href="/">Payment Options</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Online Shop</h4>
                            <ul>
                                <li><a href="/">Grocery</a></li>
                                <li><a href="/">Backery</a></li>
                                <li><a href="/">Kitchen</a></li>
                                <li><a href="/">Fashion</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Follow us</h4>
                            <div className="social-links">
                                <a href="/"><i className="fab fa-facebook-f"></i></a>
                                <a href="/"><i className="fab fa-twitter"></i></a>
                                <a href="/"><i className="fab fa-instagram"></i></a>
                                <a href="/"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;