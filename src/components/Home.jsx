import React from 'react';
import { Jumbotron, Container, Button, Row } from 'react-bootstrap';
import { Route, Redirect } from 'react-router';
import Calendar from './Calendar';
import './Home.css';

class Home extends React.Component {

    constructor( props ){
        super( props );
        this.handleBookClick = this.handleBookClick.bind(this);
        this.handleGearClick = this.handleGearClick.bind(this);
        this.handleCrewClick = this.handleCrewClick.bind(this);
    }

    handleBookClick () {
        this.props.history.push('/calendar');
    }

    handleGearClick () {
        this.props.history.push('/gear');
    }
    handleCrewClick () {
        this.props.history.push('/crew');
    }

    render() {
        return (
            <div>
                <Jumbotron id="here" fluid className="mb-0">
                    <Container>
                        <h1>We've got the spot, if you've got the coin</h1>
                        <p>
                            Welcome, make yourself at home.
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Row className="justify-content-end">
                        <Button variant="secondary" size="lg" className="mx-3" onClick={ this.handleBookClick }>
                            Book your session
                        </Button>
                        <Button variant="secondary" size="lg" className="mx-3" onClick={ this.handleGearClick }>
                            Check out the gear
                        </Button>
                        <Button variant="secondary" size="lg" className="mx-3" onClick={ this.handleCrewClick }>
                            Meet the team
                        </Button>
                    </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}


export default Home;