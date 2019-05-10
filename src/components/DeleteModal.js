import React from 'react'; 
import { GlobalContext } from './GlobalContext';

class DeleteModal extends React.Component{

    render() {
        return (
            <React.Fragment>
                <button type="button" className="btn btn-outline-danger btn block" data-toggle="modal" data-target={'#deleteModal'+this.props.user.id}>Delete</button>
                <div className="modal fade" id={'deleteModal'+this.props.user.id}>
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="deleteModalLabel">Delete</h5>
                                <button className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="text-center">
                                    Are you sure you want to delete the following user:
                            </div>
                                <h3>{this.props.user.firstName+" "+this.props.user.lastName}</h3>
                                <div className="modal-footer justify-content-center">
                                    <button className="btn btn-secondary" data-dismiss="modal">No</button>
                                    <button className="btn btn-danger" data-dismiss="modal" onClick={this.props.handleDeletion.bind(this,this.props.user.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default DeleteModal;