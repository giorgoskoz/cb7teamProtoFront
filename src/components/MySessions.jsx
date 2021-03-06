import React from 'react';
import { Jumbotron, Container, Button, Row } from 'react-bootstrap';
import axios from 'axios';
import $ from 'jquery';
import { GlobalContext } from './GlobalContext';
import MySessionsSession from './MySessionsSession';

class MySessions extends React.Component {

    static contextType = GlobalContext;

    constructor(props){
        super(props);
        this.state = {
            sessionsList: []
        };
    }

    componentDidMount(){
            let that = this;
            let gearArray = this.state.selectedExtraGear;
            $.ajax({
              url: "http://localhost:8080/sessions/for-user",
              dataType: 'json',
              contentType: "application/json; charset=utf-8",                       
              type: 'get',         
              headers: {'X-KLICKS-AUTH': this.context.token },
              data: JSON.stringify(gearArray)
          }).done(
            function( response ) {
                console.log("soukse");
                that.setState({sessionsList: response});
            }).catch(
                function( response ) {
                    console.log(response);
                  })
    }

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
                {this.state.sessionsList.map(session =>{
                    return <MySessionsSession key={session.id} session={session}></MySessionsSession>
                })}
            </div>
        )
    }

}

export default MySessions;