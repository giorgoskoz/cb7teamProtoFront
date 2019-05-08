import React from 'react';
import './BookSessionModalGear.css';

class BookSessionModalGear extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            added: false
        }

        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
    }

    handleAddClick(){
        this.setState({added: true});
        this.props.addSelectedGear.bind(this, this.props.gear);
    }

    handleRemoveClick(){
        console.log('clank');
        this.setState({added: false});
        this.props.removeSelectedGear.bind(this, this.props.gear);
    }

    render(){
        console.log(this.props.gear.price);
        return(
        <div className="row border-top my-1">
        <hr></hr>
            <div className="col col-1 align-items-center"><img className="thumbnail" src={this.props.gear.photoLink} alt=""/></div>
            <div className="col col-2 d-flex align-items-center"><b>{this.props.gear.name}</b></div>
            <div className="col col-6 d-flex align-items-center"><small>{this.props.gear.description}</small></div>
            <div className="col col-1 mr-auto d-flex align-items-center">{this.props.gear.price}€</div>
            <div className="col col-2">
                {((!this.state.added) ? <div className="btn btn-dark" onClick={ this.handleAddClick }>Add</div> : <div className="btn btn-dark disabled" onClick={null}>Added!</div>)}
                {((this.state.added) ? <div className="btn btn-dark" onClick={ this.handleRemoveClick }>Remove</div> : <div className="btn btn-dark disabled" onClick={null}>Remove</div>)}
            </div>
            <div className="row">
            </div>
            
        <hr></hr>
        </div>

        )
    }
}
export default BookSessionModalGear;