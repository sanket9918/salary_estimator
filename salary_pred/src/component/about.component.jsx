import React, { Component } from 'react'
import {
    Container,
    Row,
    Col
} from "reactstrap";
class About extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className="position-relative">
                    <section className="section section-sm section-shaped" id="section-forward">
                        <div className="shape shape-style-1 shape-default1">


                        </div>
                        <Container>
                            <Row className="row-grid align-items-center" >

                                <Col className="order-md-1" md="12">
                                    <div className="pr-md-5">
                                        <center>
                                            <h3 className="text-white">About the Project</h3>
                                            <p className="text-white" style={{paddingBottom:"3em"}}>
                                                An app to estimate the salary based on the years of experience                  </p>

                                                
                                        </center>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
            </>
        )
    }
}

export default About
