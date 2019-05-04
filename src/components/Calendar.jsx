import React from 'react';
// import dateFns from 'date-fns';
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';
import { GlobalContext } from './GlobalContext';
import CalendarTest from './CalendarTest';
import DisplayPic from './DisplayPic';
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
            <div>
                <Jumbotron fluid className="mb-0 here">
                    <Container>
                        {/* <DisplayPic></DisplayPic> */}
                        <h1>Book your session { ( this.context.user ) ? this.context.user.firstname : null }</h1>
                        <p>
                            Portraits, boudoire, fashion, products, or anything else really, the limits of your imagination are free to be explored in this laid back and cozy enviroment. The latest gear and sublime services are just the icing on the cake.
                    </p>
                    </Container>
                </Jumbotron>
                <CalendarTest></CalendarTest>
            </div>
        )
    }
}

export default Calendar;