import React from 'react';
import { Route, Redirect } from 'react-router';
import AdminAddExtraGear from './AdminAddExtraGear';
import AdminAddProvidedGear from './AdminAddProvidedGear';
import AdminUserListPage from './AdminUserListPage';

class Dashboard extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Dashboard</h1>
                        <p className="lead">Arrange the inner workings</p>
                    </div>
                </div>
                <div className="whiteBgHere">   
                    <div className="row justify-content-center">
                        <div className="col col-8">
                            <AdminAddProvidedGear></AdminAddProvidedGear>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-8">
                            <AdminAddExtraGear></AdminAddExtraGear>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-8">
                            <AdminUserListPage></AdminUserListPage>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Dashboard;