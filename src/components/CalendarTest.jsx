import React from 'react';
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';
import Moment from 'react-moment';

class CalendarTest extends React.Component{


    constructor( props ){
        super(props);
        this.state = {
            baseDate: new Date(),
            baseDay: (new Date()).getDate()
        }

        this.dayWithWords = this.dayWithWords.bind(this);
        this.dailySchedule = this.dailySchedule.bind(this);
        this.sixDays = this.sixDays.bind(this);
    }

    dayWithWords( dayNo ) {
        ((dayNo>6)? dayNo = dayNo - 7 : dayNo = dayNo)
        var weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
        return weekdays[dayNo];
    }

    sixDays( date ){
        let sixDaysCols = [];
        for(let i = 0; i < 6; i++){
            let nextDay = new Date();
            nextDay.setDate(date.getDate()+1);
            let sixDaysCol = this.dailySchedule( nextDay, i );
            sixDaysCols.push(sixDaysCol);
        };
        return sixDaysCols;
    }

    dailySchedule ( date, j ){
        let timeslots = ["Morning", "Midday", "Afternoon", "Night"];
        let timeslotList = [<Row style={{border: "2px solid black"}}><b>{this.dayWithWords(date.getDay() + j)}</b></Row>];
        for(let i = 0; i<=timeslots.length ; i++){
            let timeslotRow = <Row style={{border: "2px solid black"}}>{timeslots[i]}</Row>
                timeslotList.push(timeslotRow)
        };
        
        return <Col style={{border: "2px solid black"}} className="col-2">{ timeslotList }</Col>;
    }

    render(){
        return(
            <Row className="justify-content-center whiteBgHere">
                    <Col align-center className="col-12 col-md-10" align="center">
                        <Container className="mt-5">
                            <Row style={{border: "2px solid black"}}>
                                <Col style={{border: "2px solid black"}}>prev</Col>
                                <Col xs={8} style={{border: "2px solid black"}} >This week<br></br> from { this.state.baseDay } to </Col>
                                <Col style={{border: "2px solid black"}}>Next</Col>
                            </Row>
                            <Row style={{border: "2px solid black"}}>
                                {/* <Col style={{border: "2px solid black"}} className="col-2">
                                    <Row style={{border: "2px solid black"}}><b>{this.dayWithWords(this.state.baseDate.getDay())}</b></Row>
                                    <Row style={{border: "2px solid black"}}>Morning</Row>
                                    <Row style={{border: "2px solid black"}}>Midday</Row>
                                    <Row style={{border: "2px solid black"}}>Afternoon</Row>
                                    <Row style={{border: "2px solid black"}}>Night</Row>
                                </Col>
                                    {this.dailySchedule( this.state.baseDate, 1)} */}
                                {this.sixDays( this.state.baseDate)}
                            </Row>
                        </Container>
                    </Col>
                </Row>
        )
    }

}

export default CalendarTest;