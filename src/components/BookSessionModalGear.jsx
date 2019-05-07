import React from 'react';

class BookSessionModalGear extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        console.log(this.props.gear.price);
        return(
        <div className="row">
            <div className="col"><img src={this.props.gear.photoLink} alt=""/></div>
            <div className="col">{this.props.gear.description}</div>
            <div className="col">{this.props.gear.price}</div>
            <div className="btn btn-dark" onClick={ this.props.addSelectedGear(this.props.gear) }>Add</div>
            <div className="btn btn-dark" onClick={ this.props.removeSelectedGear(this.props.gear) }>Remove</div>
        </div>

        )
    }
}

export default BookSessionModalGear;