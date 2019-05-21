import React from 'react';
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';
import moment from 'moment';
import './CalendarTest.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { GlobalProvider, GlobalContext } from './GlobalContext';

class CalendarTest extends React.Component{

    static contextType = GlobalContext;

    constructor( props ){
        super(props);
        this.state = {
            baseDate: moment().add(1, "day"),
            sessionList: [ { "date": "2019",
                                "user":{"id":"pouts"}
            }]
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
        timeslotList.push( <div key={ moment( date ).format("DD / MM") } className="row justify-content-center d-flex align-items-center mb-2"><small>{moment( date ).format("DD / MM")}</small></div>);
        for(let i = 0; i<timeslots.length ; i++){
            let sessionDate = moment( date ).set({ hour: parseInt(timeslotsTimes[i]), minute: 0, second: 0});
            let unique = moment( sessionDate ).format('YYYY-MM-DD HH') + ":00:00";
            let timeslotRow;
            // for (let j=0; j < this.state.sessionList.length; j++) {
            //     if( (moment(sessionDate).format('YYYY-MM-DD HH') + ":00:00") === this.state.sessionList[ j ].date){
            //         timeslotRow = <div key = {unique} className="row justify-content-center d-flex align-items-center dailyBox booked mx-1">BOOKED</div>
            //     }
            // }
            // if(!timeslotRow){
            //     timeslotRow = <div key = {unique} className="row justify-content-center d-flex align-items-center dailyBox available mx-1" onClick={ this.handleSessionClick.bind(this, unique) }>{timeslots[i]}</div>
            // }
            // timeslotList.push(timeslotRow)

            //for GREEN below

            for (let k=0; k<this.state.sessionList.length; k++){
                    

                console.log('this.context.user.id: ' + this.context.user.id);
                console.log('this.state.sessionList[ k ].user.id: ' + this.state.sessionList[ k ].user.id);
                console.log('this.state.sessionList[ k ].date: ' + this.state.sessionList[ k ].date);
                console.log('unique: ' + unique);

                // (((this.context.user.id === this.state.sessionList[ k ].user.id) && (unique === this.state.sessionList[ k ].date)) ? timeslotRow = <div key = {unique} className="row justify-content-center d-flex align-items-center dailyBox own mx-1">THIS IS YOUR SESSION!</div> : timeslotRow = undefined);
                if((this.context.user.id === this.state.sessionList[ k ].user.id) && (unique === this.state.sessionList[ k ].date)){
                    timeslotRow = <div key = {unique} className="row justify-content-center d-flex align-items-center text-center bg-primary dailyBox own mx-1">YOUR SESSION!</div>
                }
            }
            if(!timeslotRow){
                for (let j=0; j < this.state.sessionList.length; j++) {
                    if( (moment(sessionDate).format('YYYY-MM-DD HH') + ":00:00") === this.state.sessionList[ j ].date){
                        timeslotRow = <div key = {unique} className="row justify-content-center d-flex align-items-center dailyBox booked mx-1">BOOKED</div>
                    }
                }
            }
            if(!timeslotRow){
                timeslotRow = <div key = {unique} className="row justify-content-center d-flex align-items-center dailyBox available mx-1" onClick={ this.handleSessionClick.bind(this, unique) }>{timeslots[i]}</div>
            }
            timeslotList.push(timeslotRow)
        };
        
        return <div key={ moment( date ).format("YYYY/MM/DD") } className="col-md-2 col-4 px-0 mx-0">{ timeslotList }</div>;
    }

    handleSessionClick( unique ){
        console.log( unique );
        this.context.setShowBookSessionModal( true );
        this.context.setSessionToBook( unique );
    }

    handlePrev(){
        this.getAvailableSessions( moment( this.state.baseDate ).subtract( 6, 'days' ) );
        this.setState({baseDate: moment( this.state.baseDate ).subtract( 6, 'days' )});
    }

    handleNext(){
        this.setState({baseDate: moment( this.state.baseDate ).add( 6, 'days' )});
        this.getAvailableSessions( moment( this.state.baseDate ).add( 6, 'days' ) );
    }

    getAvailableSessions( date ){
        let bookedSessionsStart = moment( date );
        bookedSessionsStart = moment( bookedSessionsStart ).set({ hour:7,minute:0,second:0,millisecond:0 }).toDate();
        let bookedSessionsEnd = moment( bookedSessionsStart ).add(5, 'days');
        bookedSessionsEnd = moment( bookedSessionsEnd ).set({hour:21}).set({minute:0}).toDate();
        // axios.get(`https://api.myjson.com/bins/ptzx0`
        axios.get(`http://localhost:8080/sessions/between/${ moment(bookedSessionsStart).format( 'YYYY-MM-DD HH') + ':00:00' }/${ moment(bookedSessionsEnd).format( 'YYYY-MM-DD HH') +":00:00" }`
        ).then( response => {
            this.setState( { sessionList: response.data } );
        });
      }

      componentDidMount(){
        this.getAvailableSessions( this.state.baseDate );
      }

    render(){
        return(
            <GlobalProvider value={ this.state }>
                <Row className="justify-content-center whiteBgHere">
                    <Col className="col-12 col-md-10 align-center">
                        <Container className="mt-5">
                            <Row className="mb-4">
                                <Col className="calendarNav justify-content-center d-flex align-items-center" onClick={ this.handlePrev }><i className="far fa-arrow-alt-circle-left"></i></Col>
                                <Col className="col-6 col-md-8 justify-content-center d-flex align-items-center calendarHead">"week"<br></br>from { moment(this.state.baseDate).format("DD / MM")  } to { moment(this.state.baseDate).add(6, 'days').format("DD / MM")  }</Col>
                                <Col className="calendarNav justify-content-center d-flex align-items-center" onClick={ this.handleNext }><i className="far fa-arrow-alt-circle-right"></i></Col>
                            </Row>
                            <Row>
                                {this.sixDays( this.state.baseDate )}
                            </Row>
                            <Row className="justify-content-center">For appointments on the same day <br></br><br></br><a href="#">contact us</a></Row>
                        </Container>
                    </Col>
                </Row>
            </GlobalProvider>
        );
    }

}

export default CalendarTest;