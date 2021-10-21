import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';


function Header() {
    return (
        <header className="p-2">
            <Jumbotron fluid style={{ backgroundColor: '#e8e8e8', borderColor: '#dbdad7', borderRadius: "10px" }}>
                <Row>
                    <Col className="my-auto">
                        <div style={{ width: "auto", height: "200px" }}>
                            <img src="/assets/images/headshot2.jpg" style={{ height: "100%", borderRadius: "50%" }} />
                        </div>
                    </Col>
                    <Col>
                        <h1 className="display-5 text-center mt-2">Ryan Doan</h1>
                        <p className="lead p-2">
                            Web Developer  <small class="text-muted">--  full-stack</small>
                        </p>
                        <p className="mx-5">Lorem ipsum dolor sit,cupiditate optio. Minus soluta perspiciatis et quos? Dolorem, numquam tenetur autem explicabo aspernatur quasi provident? Explicabo, sit.</p>
                    </Col>
                </Row>
            </Jumbotron>

        </header>
    )
}


export default Header