import React from 'react';
import { Card, Button } from 'react-bootstrap';

class GearCard extends React.Component {

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="left" src="http://lorempixel.com/180/120/technics/" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Footer>Whatevs</Card.Footer>
                </Card.Body>
            </Card>
        );
    }
}

export default GearCard;