import React,{ Component } from "react";
import { Row,Col, Container } from "react-bootstrap";

export default class Education extends Component{
    render(){
        return(<div>
                          <div>
                                <hr></hr>
                                <div><h5>Education</h5></div>
                                <hr></hr>
                            </div>
                        <Container>
                            <Row>
                                <Col>2019-2020</Col>
                                <Col>
                                    <Row>Sunbeam Institute
                                    of Information
                                    Technology,Karad
                                    </Row>
                                    <Row>
                                    PG-Diploma in Advanced Computing(CDAC)
                                    </Row>
                                    <Row>
                                    Percentage: 62.80%
                                    </Row>
                                </Col>
                                <hr></hr>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col>2014-2018</Col>
                                <Col>
                                    <Row>Priyadarshini
                                    College of
                                    Engineering, Nagpur
                                    </Row>
                                    <Row>B.E, Electrical Engineering
                                    </Row>
                                    <Row>Percentage: 62.83%</Row>
                                </Col>
                                <hr></hr>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col>2014</Col>
                                <Col>
                                    <Row>R.K Jr. College, Pulgaon</Row>
                                    <Row>HSC</Row>
                                    <Row>Percentage: 68.31%</Row>
                                </Col>
                                <hr></hr>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col>2012</Col>
                                <Col>
                                    <Row>St. John High School, Pulgaon</Row>
                                    <Row>SSC</Row>
                                    <Row>Percentage: 78.55%</Row>
                                </Col>
                                <hr></hr>
                                <Col></Col>
                                <hr></hr>
                             </Row>
                        </Container>
                     
            </div>)
    }
}