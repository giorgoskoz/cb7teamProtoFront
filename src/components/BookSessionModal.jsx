import React from 'react';
import { GlobalContext } from './GlobalContext';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import Gear from './Gear';
import BookSessionModalGear from './BookSessionModalGear';

class BookSessionModal extends React.Component {

    static contextType = GlobalContext;

    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleShowGear = this.handleShowGear.bind(this);
  
      this.state = {
        extraGear: []
      };
    }
  
    handleClose() {
        this.context.setShowBookSessionModal( false )
    }
  
    handleShow() {
      this.setState({ show: true });
    }

    handleShowGear(){
        
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
          <Modal show={ this.context.showBookModal } onHide={ this.handleClose }>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>You can also rent the following gear:</p>
                {this.state.extraGear.map(gear =>{
                    return <BookSessionModalGear key={gear.id} gear={gear}/>
                })}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Book Session!
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
}
  
export default BookSessionModal;