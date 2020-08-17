import React, { Component } from "react";
import {Row,Col,Container} from 'react-bootstrap'
export default class Projects extends Component{
    render(){
        return(
            <div>
            <div>
            <hr></hr>
            <div><h5>Projects</h5></div>
            <hr></hr>
        </div>
    <Container>
        <Row>
            <Col>
            Temple Booking System
            </Col>
            <Col>
                <Row> <p>Web Application application for Temple slot booking build using Java,Spring MVC, Angular 6 and MySQL.</p></Row>
                <hr></hr>
            </Col>
            <Col></Col>
        </Row>
        <Row>
            <Col>
            Impulse Voltage Generator
            </Col>
            <Col>
                <p>A circuit designed using Marx Circuit which use to generate lightning impulse voltage for
                testing the insulation of high voltage electrical equipments in Electric
                Power Systems.</p>
            </Col>
            <hr></hr>
            <Col></Col>
        </Row>
        </Container>
            </div>
        )
    }
}