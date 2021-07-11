import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class LoginPage extends Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div class="modal-header">
                            <h4 className="modal-title">Login with</h4>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body">
                        <div className="box">
                            <div className="content">
                                <div className="social">
                                    <div className="row">
                                        <div className="col">
                                            <a id="google_login" className="circle google" href="/">
                                                <i className="fab fa-google-plus"></i>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a id="facebook_login" class="circle facebook" href="/">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="division">
                                    <div className="line l"></div>
                                    <span>or</span>
                                    <div className="line r"></div>
                                </div>
                                <div className="error"></div>
                                <div className="form loginBox" style={{ 'display': 'block' }}>
                                    <form method="" action="" accept-charset="UTF-8">
                                        <input id="pnumber" className="form-control" type="number" placeholder="Mobile Number (10-digit)" name="number" style={{ 'font-size': '12px' }} />
                                        {/* <input id="password" className="form-control" type="password" placeholder="Password" name="password" style={{ 'font-size': '12px' }} /> */}
                                        <button type="submit" className="btn btn-default btn-login" onclick="loginAjax()">Submit</button>
                                        {/* <a href="/" >forget password</a> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content registerBox" style={{ 'display': 'none' }}>
                                <div className="form">
                                    <form method="" html="{:multipart=>true}" data-remote="true" action="" accept-charset="UTF-8">
                                        <input id="email" className="form-control" type="text" placeholder="Email" name="Mobile Number (10-digit) / Email Address" />
                                        <input id="password" className="form-control" type="password" placeholder="Password" name="password" />
                                        <input id="password_confirmation" className="form-control" type="password" placeholder="Repeat Password" name="password_confirmation" />
                                        <input class="btn btn-default btn-register" type="button" value="Create account" name="commit" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div className="modal-header">
                            <p className="small" style={{
                                'position': 'absolute',
                                'bottom': '0px !important',
                                'color': '#979797',
                                'font-size': '10px',
                                'letter-spacing': '-0.22px'
                            }}>By continuing, you agree to our
                                <a style={{ 'text-decoration': 'none', 'color': '#518ef8' }} href="/" target="_blank">Terms and Conditions</a>
                                and
                                <a style={{ 'text-decoration': 'none', 'color': '#518ef8' }} href="/" target="_blank">Privacy Policy.</a>
                            </p>
                        </div>
                    </Modal.Title>
                </Modal.Body>
                <Modal.Footer>
                    <div className="modal-footer">
                        <div className="forgot login-footer" style={{ 'display': 'block' }}>
                            <span>Looking to
                                <a href="/"> create an account</a>
                                ?</span>
                        </div>
                        <div class="forgot register-footer" style={{ 'display': 'none' }}>
                            <span>Already have an account?</span>
                            <a href="/">Login</a>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default LoginPage;
