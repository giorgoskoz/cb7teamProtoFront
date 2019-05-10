import React from 'react';
import { GlobalContext } from './GlobalContext';
import BookSessionModalGear from './BookSessionModalGear';
import $ from 'jquery';

class MySessionsSession extends React.Component {

    static contextType = GlobalContext;

    constructor(props){
        super(props);
        this.state = {
            sessionGearList: []
        };
    }

    componentDidMount(){
        let that = this;
        let gearArray = this.state.selectedExtraGear;
        $.ajax({
          url: "http://localhost:8080/gear/by-session/" + this.props.session.id,
          dataType: 'json',
          contentType: "application/json; charset=utf-8",                       
          type: 'get',         
          headers: {'X-KLICKS-AUTH': this.context.token },
          data: JSON.stringify(gearArray)
      }).done(
        function( response ) {
            console.log("soukse");
            that.setState({sessionGearList: response});
        }).catch(
            function( response ) {
                console.log(response);
              })
}

    render(){
        return(
            <div className="row whiteBgHere justify-content-center mb-4">
                <div className="col pt-4 col-8">
                <div className="row my-4">
                    <div className="col mr-auto"><h2>{this.props.session.date}</h2></div>
                    <div className="col row-1"><h3>{this.props.session.totalPrice}€</h3></div>
                </div>
                <div className="row">
                    <div className="col">
                        {this.state.sessionGearList.map(gear =>{
                            return <BookSessionModalGear key={gear.id} gear={gear} addSelectedGear={this.addSelectedGear} removeSelectedGear={this.removeSelectedGear} hideButtons={true}/>
                        })}
                    </div>
                </div>
                </div>
                
            </div>
        )
    }

}

export default MySessionsSession;