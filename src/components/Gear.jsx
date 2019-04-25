import React from 'react';
import { Jumbotron, Container, Row, Col, CardDeck, Tabs, Tab, Sonnet } from 'react-bootstrap';
import GearCard from './GearCard';
import './Gear.css';

class Gear extends React.Component {

    render() {
        return (
            <div>
                <Jumbotron fluid className="mb-0 here">
                    <Container>
                        <h1>Check the goods</h1>
                        <p>
                            A selection of lights and photography paraphernalia are provided with the studio, and cameras as well as lenses are available to rent.
                    </p>
                    </Container>
                </Jumbotron>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mt-0 justify-content-end here" >
                    <Tab eventKey="home" title="Lights and Paraphernalia">
                    </Tab>
                    <Tab eventKey="profile" title="Cameras and Lenses">
                    </Tab>
                </Tabs>
                <Row className="justify-content-center whiteBgHere">
                    <Col align-center className="col-10" align="center">
                        <CardDeck className="my-5">
                            <GearCard></GearCard>
                            <GearCard></GearCard>
                            <GearCard></GearCard>
                        </CardDeck>
                        <CardDeck>
                            <GearCard></GearCard>
                            <GearCard></GearCard>
                            <GearCard></GearCard>
                        </CardDeck>
                    </Col>
                </Row>
            </div>

        );
    }

}

export default Gear;