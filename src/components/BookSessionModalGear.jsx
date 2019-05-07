import React from 'react';

class BookSessionModalGear extends React.Component{

    render(){
        return(
        <div className="row">
            <div className="col"><img src={this.props.gear.photoLink} alt=""/></div>
            <div className="col">{this.props.gear.description}</div>
            <div className="col">{this.props.gear.price}</div>
            <div className="btn">Add</div>
        </div>

        )
    }
}

export default BookSessionModalGear;