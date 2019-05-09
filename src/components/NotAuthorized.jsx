import React from 'react';
import { Jumbotron, Container, Button, Row } from 'react-bootstrap';

class NotAuthorized extends React.Component {


    render(){
        return(
            <Jumbotron id="here" fluid className="mb-0">
                    <Container>
                    {/* <DisplayPic></DisplayPic> */}
                        <h1>Hey you're not allowed here...</h1>
                        <p>
                            
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    </Container>
                </Jumbotron>
        )
    }
    
}

export default NotAuthorized;