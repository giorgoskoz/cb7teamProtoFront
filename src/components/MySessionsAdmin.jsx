import React from 'react';
import { Jumbotron, Container, Button, Row } from 'react-bootstrap';

class MySessionsAdmin extends React.Component {


    render(){
        return(
            <div>
                <Jumbotron id="here" fluid className="mb-0">
                    <Container>
                    {/* <DisplayPic></DisplayPic> */}
                        <h1>Admin Session Page</h1>
                        <p>
                            All booked sessions appear here
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

export default MySessionsAdmin;