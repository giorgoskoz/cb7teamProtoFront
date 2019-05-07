import React from 'react';
import { Route, Redirect } from 'react-router';

class Dashboard extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Dashboard</h1>
                        <p class="lead">Arrange the inner workings</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Dashboard;