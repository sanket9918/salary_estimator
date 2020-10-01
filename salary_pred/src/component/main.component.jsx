import React, { Component } from 'react'
import { Row, Col, Container, Input, Button } from 'reactstrap'
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/counter.action';
class Main extends Component {


    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            formData: {
                years: ''
            },
            result: ''
        }
    }
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        var formData = this.state.formData;
        formData[name] = value;
        this.setState({
            formData
        });
    }

    handlePredictClick = (event) => {
        const formData = this.state.formData;
        this.setState({ isLoading: true });
        fetch('http://127.0.0.1:5000/prediction/',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                },
                method: 'POST',
                body: JSON.stringify(formData)
            })

            .then(response => response.json())
            .then(response => {
                this.setState({
                    result: response.result,
                    isLoading: false
                });
            });
    }

    handleCancelClick = (event) => {
        this.setState({ result: "" });
    }


    render() {
        const isLoading = this.state.isLoading;
        const formData = this.state.formData;
        const result = this.state.result;
        return (
            <>
                <div className='position-relative main-content'>
                    <section className="section section-lg section-hero section-shaped">
                        {/* Background circles */}
                        <div className="shape shape-style-1 shape-default">

                        </div>
                        <Container className="py-lg-md d-flex">
                            <div className="col px-0">
                                <Row>
                                    <Col lg="12" >
                                        <center>
                                            <div>
                                                <h1 className="display-3" style={{ fontSize: '48px', paddingTop: '.5em', color: '#601660' }}>
                                                    Salary Tracker{" "}

                                                </h1>
                                                <Input

                                                    placeholder="Enter the years of experience"
                                                    type="text"
                                                    value={formData.years}
                                                    name="years"
                                                    onChange={this.handleChange}
                                                    style={{ width: "70%", marginBottom: "0.5em" }}
                                                />
                                                <div className="btn-wrapper">

                                                    <Button
                                                        className="btn-icon mb-3 mb-sm-0"
                                                        color="white"
                                                        disabled={isLoading}
                                                        onClick={!isLoading ? this.handlePredictClick : null}
                                                    >

                                                        <span className="btn-inner--text">{isLoading ? 'Making prediction' : 'Predict'}</span>
                                                    </Button>

                                                    <Button
                                                        className="btn-icon mb-3 mb-sm-0"
                                                        color="white"
                                                        disabled={isLoading}
                                                        onClick={this.handleCancelClick}
                                                    >

                                                        <span className="btn-inner--text">Reset</span>
                                                    </Button>

                                                </div>



                                                {result === "" ? null :
                                                    (<Row>
                                                        <Col className="result-container" style={{ marginTop: "1em" }}>
                                                            <h5 id="result"><b>{result}</b></h5>
                                                        </Col>
                                                    </Row>)
                                                }

                                            </div>
                                        </center>
                                        {/* <div style={{margin:"auto",textAlign:`center`}}>
                                            <h3>Counter = {this.props.counter} from the class component</h3>
                                            <button onClick={() => this.props.increment()}>+</button>
                                            <button onClick={() => this.props.decrement()}>-</button>


                                            <h3>Another container to display the states : {this.props.counter}</h3>
                                        </div>                                        */}


                                        <div className="btn-wrapper">

                                            {/* <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="info"
                      >

                        <span className="btn-inner--text">Join US</span>
                      </Button> */}

                                        </div>
                                    </Col>


                                </Row>
                            </div>

                        </Container>

                    </section>

                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
        
    }
}   

const mapDispatchToProps = () => {
    return {
        increment,
        decrement
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Main);

