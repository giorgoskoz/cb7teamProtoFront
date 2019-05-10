import React from 'react';
import { Jumbotron, Container, Row, Col, CardDeck, Tabs, Tab, Sonnet } from 'react-bootstrap';
import Gear from './Gear';

class GearHeader extends React.Component{


    render(){
        return(
            <div>
                <Jumbotron fluid className="mb-0 here">
                        <Container>
                            {/* <DisplayPic></DisplayPic> */}
                            <h1>Check the goods</h1>
                            <p>
                                A selection of lights and photography paraphernalia are provided with the studio, and cameras as well as lenses are available to rent.
                        </p>
                        </Container>
                    </Jumbotron>
                    <Tabs defaultActiveKey="gear" id="uncontrolled-tab-example" className="mt-0 justify-content-end here" >
                        <Tab eventKey="gear" title="Lights and Paraphernalia" to="/gear">
                            <Gear></Gear>
                        </Tab>
                        <Tab eventKey="extraGear" title="Cameras and Lenses"  to="/extragear">
                        </Tab>
                    </Tabs>
            </div>
        )
    }

}

export default GearHeader;