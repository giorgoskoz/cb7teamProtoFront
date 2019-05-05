import React from 'react';
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';
import moment from 'moment';
import './CalendarTest.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

class CalendarTest extends React.Component{


    constructor( props ){
        super(props);
        this.state = {
            baseDate: moment().add(1, "day"),
            sessionList: [ { "date": "2019"} ]
        }

        this.dailySchedule2 = this.dailySchedule2.bind(this);
        this.sixDays = this.sixDays.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.getAvailableSessions = this.getAvailableSessions.bind(this);
        this.handleSessionClick = this.handleSessionClick.bind(this);
    }

    sixDays( date ){
        let sixDaysCols = [];
        for(let i = 0; i < 6; i++){
            let sixDaysCol = this.dailySchedule2( moment( date ).add(i, 'day') );
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
            let sessionDate = moment( date ).set({ hour: parseInt(timeslotsTimes[i]), minute: 0, second: 0});
            let sessionDateEnd = moment ( sessionDate ).add(4, 'hours')
            let unique = moment( sessionDate ).format('YYYY-MM-DD HH') + ":00:00";
            let timeslotRow;
            for (let j=0; j < this.state.sessionList.length; j++) {
                if( (moment(sessionDate).format('YYYY-MM-DD HH') + ":00:00") === this.state.sessionList[ j ].date){
                    console.log((moment(sessionDate).format('YYYY-MM-DD HH') + ":00:00") + "BOOKED SESSION DATE: " + this.state.sessionList[j].date);
                    timeslotRow = <div key = {unique} className="row justify-content-center d-flex align-items-center dailyBox booked">BOOKED</div>
                }
            }
            if(!timeslotRow){
                timeslotRow = <div key = {unique} className="row justify-content-center d-flex align-items-center dailyBox available" onClick={ this.handleSessionClick.bind(this, unique) }>{timeslots[i]}</div>
            }
            timeslotList.push(timeslotRow)
        };
        
        return <div key={ moment( date ).format("YYYY/MM/DD") } className="col-md-2 col-4">{ timeslotList }</div>;
    }

    handleSessionClick( unique ){
        console.log( unique )
    }

    handlePrev(){
        console.log('clank');
        console.log(this.state.baseDate);
        this.setState({baseDate: moment( this.state.baseDate ).subtract( 6, 'days' )});
        console.log(this.state.baseDate);
        this.getAvailableSessions();
    }

    handleNext(){
        console.log('clank');
        console.log(this.state.baseDate);
        this.setState({baseDate: moment( this.state.baseDate ).add( 6, 'days' )});
        console.log(this.state.baseDate);
        this.getAvailableSessions();
    }

    getAvailableSessions(){
        let bookedSessionsStart = moment( this.state.baseDate );
        bookedSessionsStart = moment( bookedSessionsStart ).set({ hour:7,minute:0,second:0,millisecond:0 }).toDate();
        let bookedSessionsEnd = moment( this.state.baseDate ).add(5, 'days');
        // bookedSessionsEnd = moment( bookedSessionsEnd ).set({ hour:21,minute:48,second:0,millisecond:0 }).toDate();
        bookedSessionsEnd = moment( bookedSessionsEnd ).set({hour:21}).set({minute:0}).toDate();
        bookedSessionsEnd = moment( bookedSessionsEnd ).set({minute:0}).toDate();
        // console.log("HERE " + moment(bookedSessionsStart).format( 'YYYY-MM-DD HH') + ':00:00' );
        // console.log("and HERE " + moment(bookedSessionsEnd).format( 'YYYY-MM-DD HH:MM:SS') );
        // axios.get(`http://localhost:8080/sessions/between/${ moment(bookedSessionsStart).format( 'YYYY-MM-DD HH') + ':00:00' }/${ moment(bookedSessionsEnd).format( 'YYYY-MM-DD HH') +":00:00" }`
        axios.get(`https://api.myjson.com/bins/7i8dg`
        ).then( response => {
            this.setState( { sessionList: response.data } );
            console.log(this.state.sessionList[0].date);
        });
      }

      componentDidMount(){
        this.getAvailableSessions();
      }

    render(){
        console.log("session list length: " + this.state.sessionList.length)
        // console.log(moment(this.state.baseDate).format());
        // console.log('START DATE: ' + moment( this.state.baseDate ).format( 'YYYY-MM-DD' ));
        // console.log('END DATE: ' + moment( this.state.baseDate ).add(5, 'days').format( 'YYYY-MM-DD' ));
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