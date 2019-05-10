import React, { Component } from 'react';
import DeleteModal from "./DeleteModal";

class UserRow extends Component {
render() {

    return (
        <tr>
            <td>{this.props.i}</td>
            <td>{this.props.user.username}</td>
            <td>{this.props.user.firstName}</td>
            <td>{this.props.user.lastName}</td>
            <td>{this.props.user.email}</td>
            <td> <button type="button" className="btn btn-outline-danger btn block" onClick={() => {if(window.confirm('Are you sure you want to delete this user?')){this.props.handleDeletion(this.props.user.id)};}}>Delete</button></td>
        </tr>
    )
}
}

export default UserRow