import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import {
    Container,
    Row,
    Col,
} from 'reactstrap'


function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Projects</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <a
                            className="btn btn-social-icon btn-twitter"
                            role="button"
                            href="https://twitter.com/ShadFyt"
                            style={{ fontSize: "20px" }}
                        >
                            <FaTwitter />
                        </a>{" "}
                        <a
                            className="btn btn-social-icon btn-github"
                            href="https://github.com/ShadFyt"
                            style={{ fontSize: "18px" }}
                        >
                            <FaGithub />
                        </a>{" "}
                        <a
                            className="btn btn-social-icon btn-linkedin"
                            href="https://linkedin.com/in/ryan-doan-pynub"
                            style={{ fontSize: "20px" }}
                        >
                            <FaLinkedin />
                        </a>{" "}
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+12065551234">
                            <i className="fa fa-phone" /> 1-206-555-1234
                        </a>
                        <br />
                        <a
                            role="button"
                            className="btn btn-link"
                            href="mailto:notreal@notreal.co"
                        >
                            <i className="fa fa-envelope-o" /> daonryan10@gmail.com
                        </a>
                    </div>
                </Row>
            </Container>
        </footer >
    )
}

export default Footer