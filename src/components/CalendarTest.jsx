import React from 'react';
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';
import moment from 'moment';
import './CalendarTest.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CalendarTest extends React.Component{


    constructor( props ){
        super(props);
        this.state = {
            baseDate: moment().add(1, "day")
        }

        this.dayWithWords = this.dayWithWords.bind(this);
        this.dailySchedule2 = this.dailySchedule2.bind(this);
        this.sixDays = this.sixDays.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
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
            let sixDaysCol = this.dailySchedule2( moment(this.state.baseDate).add(i, 'day') );
            sixDaysCols.push(sixDaysCol);
        };
        return sixDaysCols;
    }

    dailySchedule2 ( date, j ){
        let timeslots = ["Morning", "Midday", "Afternoon", "Night"];
        let timeslotsTimes = ["8", "12", "16", "20"];
        let timeslotList = [<div key={ moment( date ).format("YYYY/MM/DD") } className="row justify-content-center d-flex align-items-center dayWordBox mb-0"><b>{moment( date ).format("dddd")}</b>{"\n"}</div>];
        console.log( moment( date ).format("YYYY/MM/DD") );
        timeslotList.push( <div key={ moment( date ).format("DD / MM") } className="row justify-content-center d-flex align-items-center mb-2"><small>{moment( date ).format("DD / MM")}</small></div>);
        for(let i = 0; i<timeslots.length ; i++){
            let sessionDate = moment( date ).set({ hour: parseInt(timeslotsTimes[i], 10), minute: parseInt(0, 10) }).toDate();
            let sessionDateEnd = moment ( sessionDate ).add(4, 'hours')
            let unique = moment( sessionDate ).format() + " " + timeslots[i];
            console.log(unique);
            console.log(moment( sessionDateEnd ).format());
            let timeslotRow = <div key = {unique} className="row justify-content-center d-flex align-items-center dailyBox">{timeslots[i]}</div>
            timeslotList.push(timeslotRow)
        };
        
        return <div key={ moment( date ).format("YYYY/MM/DD") } className="col-md-2 col-4">{ timeslotList }</div>;
    }

    handlePrev(){
        console.log('clank');
        console.log(this.state.baseDate);
        this.setState({baseDate: moment( this.state.baseDate ).subtract( 6, 'days' )});
        console.log(this.state.baseDate);
    }

    handleNext(){
        console.log('clank');
        console.log(this.state.baseDate);
        this.setState({baseDate: moment( this.state.baseDate ).add( 6, 'days' )});
        console.log(this.state.baseDate);
    }

    render(){
        console.log(moment(this.state.baseDate).format());
        return(
            <Row className="justify-content-center whiteBgHere">
                    <Col className="col-12 col-md-10 align-center">
                        <Container className="mt-5">
                            <Row className="mb-4">
                                <Col className="calendarNav justify-content-center d-flex align-items-center" onClick={ this.handlePrev }><i className="far fa-arrow-alt-circle-left"></i></Col>
                                <Col className="col-6 col-md-8 justify-content-center d-flex align-items-center calendarHead">this "week"<br></br>from { moment(this.state.baseDate).format("DD / MM")  } to { moment(this.state.baseDate).add(6, 'days').format("DD / MM")  }</Col>
                                <Col className="calendarNav justify-content-center d-flex align-items-center" onClick={ this.handleNext }><i className="far fa-arrow-alt-circle-right"></i></Col>
                            </Row>
                            <Row>
                                {this.sixDays( this.state.baseDate )}
                            </Row>
                            <Row className="justify-content-center">For appointments on the same day <br></br><br></br><a href="#">contact us</a></Row>
                        </Container>
                    </Col>
                </Row>
        );
    }

}

export default CalendarTest;