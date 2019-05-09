import React from 'react';
import { GlobalContext } from './GlobalContext';
import { Modal, Button, Row } from 'react-bootstrap';
import axios from 'axios';
import Gear from './Gear';
import BookSessionModalGear from './BookSessionModalGear';
import $ from 'jquery';

class BookSessionModal extends React.Component {

    static contextType = GlobalContext;

    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleBookSession = this.handleBookSession.bind(this);
      this.addSelectedGear = this.addSelectedGear.bind(this);
      this.removeSelectedGear = this.removeSelectedGear.bind(this);
  
      this.state = {
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
        this.context.setShowBookSessionModal( false )
        this.setState({
          sessionPrice: 50
        })
    }
  
    handleShow() {
      this.setState({ show: true });
    }

    handleBookSession(){

      $.ajax({
        url: "http://localhost:8080/book2/" + this.context.sessionToBook + "/" + this.state.sessionPrice,
        dataType: 'json',                       
        type: 'post',         
        headers: {'X-MSG-AUTH': this.context.token },
        data: {selectedExtraGear:this.state.selectedExtraGear}
    }).done( this.forceUpdate() ).catch( function(e){
        alert(e);
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

    componentDidMount(){
        axios.get('http://localhost:8080/gear/all-extra'
        ).then( response => {
            this.setState({extraGear: response.data})
        })
    }
  
    render() {
      return (
        <>
          <Modal show={ this.context.showBookModal } onHide={ this.handleClose } size="lg">
            <Modal.Header closeButton>
              <Modal.Title>
                <div className="row">
                  <div className="col col-9">Modal heading</div>
                  <div className="col col-3"><h3>{this.state.sessionPrice}€</h3></div>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4 className="row px-4 mb-3 justify-content-center">The studio can be yours for 4 hours starting:</h4>
              <div className="row display-3 px-4 mb-3 justify-content-center">{this.context.sessionToBook}</div>
              <div className="row justify-content-center mb-3"><h3>For a total price of: {this.state.sessionPrice}€</h3></div>

                <h4 className="row justify-content-center mb-3"><strong>You can also rent the following gear:</strong></h4>

                {this.state.extraGear.map(gear =>{
                    return <BookSessionModalGear key={gear.id} gear={gear} addSelectedGear={this.addSelectedGear} removeSelectedGear={this.removeSelectedGear}/>
                })}
                {/* {this.lytrosis()} */}
                {console.log(this.state.selectedExtraGear)}
            </Modal.Body>
            <Modal.Footer>
              <div className="row">
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.handleBookSession}>
                  Book Session!
                </Button>
              </div>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
}
  
export default BookSessionModal;