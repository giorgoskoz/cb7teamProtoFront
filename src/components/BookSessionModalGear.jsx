import React from 'react';

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
        <div className="row">
            <div className="col"><img src={this.props.gear.photoLink} alt=""/></div>
            <div className="col">{this.props.gear.description}</div>
            <div className="col">{this.props.gear.price}</div>
            {((!this.state.added) ? <div className="btn btn-dark" onClick={ this.handleAddClick }>Add</div> : <div className="btn btn-dark disabled" onClick={null}>Added</div>)}
            {((this.state.added) ? <div className="btn btn-dark" onClick={ this.handleRemoveClick }>Remove</div> : <div className="btn btn-dark disabled" onClick={null}>Remove</div>)}
            
            
        </div>

        )
    }
}

export default BookSessionModalGear;