import React, { Component } from 'react';

class UserRow extends Component {
render() {
    const { user } = this.props;
    return (
        <tr>
            <td>{this.props.i}</td>
            <td>{user.username}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
        </tr>
    )
}
}

export default UserRow