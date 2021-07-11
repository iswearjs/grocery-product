import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class SignupPage extends Component {
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
                            <h4 class="modal-title">Register with</h4>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="modal-body">
                        <div class="box">
                            <div class="content">
                                <div class="social">
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
                                <div class="division">
                                    <div class="line l"></div>
                                    <span>or</span>
                                    <div class="line r"></div>
                                </div>
                                <div class="error"></div>
                                <div class="form loginBox" style={{ 'display': 'none' }}>
                                    <form method="" action="" accept-charset="UTF-8">
                                        <input id="email" class="form-control" type="text" placeholder="Email" name="email" />
                                        <input id="password" class="form-control" type="password" placeholder="Password" name="password" />
                                        <input class="btn btn-default btn-login" type="button" value="Login" onclick="loginAjax()" />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="content registerBox" style={{ 'display': 'block' }}>
                                <div class="form">
                                    <form method="" html="{:multipart=>true}" data-remote="true" action="" accept-charset="UTF-8">
                                        <input id="email" class="form-control" type="text" placeholder="Email" name="email" />
                                        <input id="password" class="form-control" type="password" placeholder="Password" name="password" />
                                        <input id="password_confirmation" class="form-control" type="password" placeholder="Repeat Password" name="password_confirmation" />
                                        <input class="btn btn-default btn-register" type="button" value="Create account" name="commit" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div class="modal-footer">
                        <div class="options text-right">
                            <p class="pt-1">Already have an account? <a href="#" class="blue-text">Log In</a></p>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default SignupPage;
