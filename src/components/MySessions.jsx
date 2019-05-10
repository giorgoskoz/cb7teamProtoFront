import React from 'react';
import { Jumbotron, Container, Button, Row } from 'react-bootstrap';
import axios from 'axios';
import $ from 'jquery';

class MySessions extends React.Component {

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
              that.setState({sessionsList: response})
            }).catch(
                function( response ) {
                    that.setState({sessionsList: response})
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

            </div>
        )
    }

}

export default MySessions;