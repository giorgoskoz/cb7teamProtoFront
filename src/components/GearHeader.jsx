import React from 'react';
import { Jumbotron, Container, Row, Col, CardDeck, Tabs, Tab, Sonnet } from 'react-bootstrap';
import Gear from './Gear';
import ExtraGear from './ExtraGear';

class GearHeader extends React.Component{


    render(){
        return(
            <div>
                <Jumbotron fluid className="mb-0 here">
                        <Container>
                            {/* <DisplayPic></DisplayPic> */}
                            <h1>Check the goods</h1>
                            <p className="mb-0">
                                A selection of lights and photography paraphernalia are provided with the studio, and cameras as well as lenses are available to rent.
                            </p>
                            <p className="mt-0">
                                You can choose to rent any of the cameras and lenses when you book your session.
                            </p>
                        </Container>
                    </Jumbotron>
                    <Tabs defaultActiveKey="extraGear" id="uncontrolled-tab-example" className="mt-0 justify-content-end here" >
                        <Tab eventKey="gear" title="Lights and Paraphernalia" to="/gear">
                            <Gear></Gear>
                        </Tab>
                        <Tab eventKey="extraGear" title="Cameras and Lenses">
                            <ExtraGear></ExtraGear>
                        </Tab>
                    </Tabs>
            </div>
        )
    }

}

export default GearHeader;