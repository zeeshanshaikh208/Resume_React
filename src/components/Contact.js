import React, { Component } from "react";
import {Row, Col, Container} from 'react-bootstrap';
export default class Contact extends Component{
    render(){
       return(
        <div>
                <div>
                <hr></hr>
                <div><h5>Contact</h5></div>
                <hr></hr>
                </div>

                <Container>
                <Row>
                    <Col>
                    Contact No:
                    </Col>
                    <Col>
                        +91 7028134104
                    </Col>
                    <hr></hr>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                    email
                    </Col>
                    <Col>
                       jishan.sheikh208@gmail.com
                    </Col>
                    <hr></hr>
                    <Col></Col>
                </Row>
                </Container>
        </div>
       )
    }
}