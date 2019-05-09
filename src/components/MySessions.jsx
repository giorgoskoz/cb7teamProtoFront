import React from 'react';
import { Jumbotron, Container, Button, Row } from 'react-bootstrap';

class MySessions extends React.Component {


    render(){
        return(
            <div>
                <Jumbotron id="here" fluid className="mb-0">
                    <Container>
                    {/* <DisplayPic></DisplayPic> */}
                        <h1>MySessions</h1>
                        <p>
                            Your booked sessions appear here
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    </Container>
                </Jumbotron>
            </div>
        )
    }

}

export default MySessions;