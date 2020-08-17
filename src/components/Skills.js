import React,{ Component } from "react";
import {Container, Row, Col} from 'react-bootstrap'
export default class Skills extends Component{
        render()
        {
            return(
                <div>
                        <div>
                            <hr></hr>
                            <h5>SKILLS</h5>
                            <hr></hr>
                        </div>
                        <Container>
                            <Row>
                                <Col>Languages</Col>
                                <Col>
                                    <Row>C,C++,JAVA</Row>
                                </Col>
                                <hr></hr>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col>Database</Col>
                                <Col><Row>MySQL</Row></Col>
                                <hr></hr>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col>Web Technology</Col>
                                <Col><Row>HTML, CSS, Angular 6</Row></Col>
                                <hr></hr>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col>Tools</Col>
                                <Col><Row>VS Code, Eclipse</Row></Col>
                                <hr></hr>
                                <Col></Col>
                            </Row>
                        </Container>
                </div>
                
               
            )
        }
}