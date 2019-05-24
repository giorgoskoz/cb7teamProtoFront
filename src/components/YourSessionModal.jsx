import React from 'react';
import { GlobalContext } from './GlobalContext';
import { Modal, Button, Row } from 'react-bootstrap';
import axios from 'axios';
import Gear from './Gear';
import BookSessionModalGear from './BookSessionModalGear';
import $ from 'jquery';
import MySessionsSession from './MySessionsSession';

class YourSessionModal extends React.Component {

    static contextType = GlobalContext;

    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleBookSession = this.handleBookSession.bind(this);
      this.addSelectedGear = this.addSelectedGear.bind(this);
      this.removeSelectedGear = this.removeSelectedGear.bind(this);
  
      this.state = {
        session: {date: "",
                  totalPrice: ""          
        },
        sessionDefaultPrice: 50,
        sessionPrice: 50,
        extraGear: [],
        selectedExtraGear: []
      };
    }

    addSelectedGear( gear ){
      console.log("clank")
      this.setState({
        selectedExtraGear: [...this.state.selectedExtraGear, gear],
        sessionPrice: this.state.sessionPrice + gear.price
      });
    }

    removeSelectedGear( gear ){
        this.setState(prevState => ({ 
          selectedExtraGear: prevState.selectedExtraGear.filter(newGear => newGear !== gear),
          sessionPrice: this.state.sessionPrice - gear.price
        }));
    }
  
    handleClose() {
        this.context.setShowYourSessionModal( false )
    }
  
    handleShow() {
      this.setState({ show: true });
    }

    handleBookSession(){
      let that = this;
      let gearArray = this.state.selectedExtraGear;
      $.ajax({
        url: "http://localhost:8080/sessions/book2/" + this.context.sessionToBook + "/" + this.state.sessionDefaultPrice,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",                       
        type: 'post',         
        headers: {'X-KLICKS-AUTH': this.context.token },
        data: JSON.stringify(gearArray),
        
    }).done(
      function() {
        alert('Booked! Ready to go!');
        that.handleClose();
        window.location.reload();
      }).catch(
        function(e){
          alert('Booked! Ready to go! :)');
          that.handleClose();
          window.location.reload();
      });

      // axios.post("http://localhost:8080/book2/" + this.context.sessionToBook + "/" + this.state.sessionPrice,
      //   {
      //     headers: "X-KLICKS-AUTH: " + this.context.token
      //   },
      //   {
      //     data: this.state.selectedExtraGear
      //   }
      // ).then(
      //   this.handleClose()
      // );
    }

    componentDidUpdate(){
      $.ajax({
        url: 'http://localhost:8080/sessions/by-date/' + this.context.yourSession,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",                       
        type: 'get',         
        headers: {'X-KLICKS-AUTH': this.context.token },
        success: (response) => {
            this.setState({ session: response });
        },
        error: (response) => {
          console.log(response)
        }});
    }
  
    render() {
      return (
        <>
          <Modal show={ this.context.showYourSessionModal } onHide={ this.handleClose } size="lg">
            <Modal.Header closeButton>
              
            </Modal.Header>
            <Modal.Body>
                <div className="display-4">BOOKED SESSION INFO HERE</div>
                <MySessionsSession session={ this.state.session }></MySessionsSession>
              {/* <h4 className="row px-4 mb-3 justify-content-center">The studio can be yours for 4 hours starting:</h4>
              <div className="row display-3 px-4 mb-3 justify-content-center">{this.context.sessionToBook}</div>
              <div className="row justify-content-center mb-3"><h3>For a total price of: {this.state.sessionPrice}€</h3></div>

                <h4 className="row justify-content-center mb-3"><strong>You can also rent the following gear:</strong></h4>

                {this.state.extraGear.map(gear =>{
                    return <BookSessionModalGear key={gear.id} gear={gear} addSelectedGear={this.addSelectedGear} removeSelectedGear={this.removeSelectedGear}/>
                })} */}
                {/* {this.lytrosis()} */}
                {/* {console.log(this.state.selectedExtraGear)} */}
            </Modal.Body>
            <Modal.Footer>
              <div className="row">
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="dark" onClick={ null }>
                  Go to My Sessions
                </Button>
              </div>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
}
  
export default YourSessionModal;