import React from 'react';
// import dateFns from 'date-fns';
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';
import { GlobalContext } from './GlobalContext';
// import './Calendar.css';

class Calendar extends React.Component {

    static contextType = GlobalContext;

    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    }

    render() {

        function cols(){
            let cols = [];

            for (let i = 0; i < 5; i++){
                cols.push(<Row style={{border: "2px solid black"}}><b>Sunday</b></Row>)
            } 
            
            return cols;
        }

        return (
            // <Container >
            //     <Row style={{background: "orange"}}>
            //         <Col>prev</Col>
            //         <Col>HERE</Col>
            //         <Col>next</Col>
            //     </Row>
            //     <Row style={{background: "orange"}}>WE</Row>
            //     <Row style={{background: "orange"}}>GO</Row>
            // </Container>
            <div>
                <Jumbotron fluid className="mb-0 here">
                    <Container>
                        <h1>Book your session { ( this.context.user ) ? this.context.user.firstname : null }</h1>
                        <p>
                            Portraits, boudoire, fashion, products, or anything else really, the limits of your imagination are free to be explored in this laid back and cozy enviroment. The latest gear and sublime services are just the icing on the cake.
                    </p>
                    </Container>
                </Jumbotron>
                <Row className="justify-content-center whiteBgHere">
                    <Col align-center className="col-10" align="center">
                        <Container className="mt-5">
                            <Row style={{border: "2px solid black"}}>
                                <Col style={{border: "2px solid black"}}>prev</Col>
                                <Col xs={8} style={{border: "2px solid black"}} >This week</Col>
                                <Col style={{border: "2px solid black"}}>Next</Col>
                            </Row>
                            <Row style={{border: "2px solid black"}}>
                                <Col style={{border: "2px solid black"}} >
                                    <Row style={{border: "2px solid black"}}><b>Sunday</b></Row>
                                    <Row style={{border: "2px solid black"}}>Morning</Row>
                                    <Row style={{border: "2px solid black"}}>Midday</Row>
                                    <Row style={{border: "2px solid black"}}>Afternoon</Row>
                                    <Row style={{border: "2px solid black"}}>Night</Row>
                                </Col>
                                <Col style={{border: "2px solid black"}}>
                                    <Row style={{border: "2px solid black"}}><b>Sunday</b></Row>
                                    <Row style={{border: "2px solid black"}}>Morning</Row>
                                    <Row style={{border: "2px solid black"}}>Midday</Row>
                                    <Row style={{border: "2px solid black"}}>Afternoon</Row>
                                    <Row style={{border: "2px solid black"}}>Night</Row>
                                </Col>
                                <Col style={{border: "2px solid black"}}>
                                    <Row>Tuesday</Row>
                                    {cols()}
                                </Col>

                                <Col style={{border: "2px solid black"}}>Wednesday</Col>
                                <Col style={{border: "2px solid black"}}>Thursday</Col>
                                <Col style={{border: "2px solid black"}}>Friday</Col>
                                <Col style={{border: "2px solid black"}}>Saturday</Col>
                            </Row>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        </Container>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Calendar;