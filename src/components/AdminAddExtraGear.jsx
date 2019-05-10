import React from 'react';
import $ from "jquery";
import { GlobalContext } from './GlobalContext';

class AdminAddExtraGear extends React.Component {
    constructor(props) {
        super(props);
        this.name = React.createRef();
        this.description = React.createRef();
        this.price = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    static contextType = GlobalContext;

    uploadPic = (id) => {
        let profilePicInput = document.getElementById("extraPicInput");
        let files = profilePicInput.files;
        if (files.length === 0) {
            alert("Please select a file");
        } else {
            let formData = new FormData();
            formData.append("file", files[0]);
            $.ajax({
                type: "POST",
                enctype: 'multipart/form-data',
                url: "http://localhost:8080/files/uploadFile",
                data: formData,
                processData: false,
                contentType: false,
                success: (response) => {
                    this.savePhotoLink(id, response.fileDownloadUri);
                },
                error: (error) => {
                    console.log(error);
                }
            });
        }

    }

    savePhotoLink = (id, link) => {
        $.ajax({
            type: "POST",
            contentType: "text/plain",
            url: `http://localhost:8080/files/savePhotoLinkExtra/` + id,
            data: link,
            async: true,
            success: () => {
                alert("SUCCESFULLY UPLOADED");
            },
            error: () => { }
        });
    };

    handleSubmit(event) {
        const url = 'http://localhost:8080/gear/add-extra/' + this.name.current.value + '/' + this.price.current.value
        fetch(url, {
            method: 'POST',
            headers: {
                "X-KLICKS-AUTH": this.context.token,
                'Accept': 'application/json'
            },
            body: this.description.current.value
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    this.uploadPic(data.id);
                })

            }
        }).catch(error => console.error('Error:', error));

        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <div><h2>Admin add extra gear</h2></div>
                <form onSubmit={this.handleSubmit} className="pt-3 pb-2">
                    <div className="form-group row justify-content-center">
                        <label htmlFor="name" className="col-sm-3 col-form-label">Name</label>
                        <div className="col-sm-4">
                            <input type="input" className="form-control" id="name" name="name"
                                required ref={this.name} />
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <label htmlFor="description" className="col-sm-3 col-form-label">Description</label>
                        <div className="col-sm-4">
                            <textarea className="form-control" id="description" name="description" required ref={this.description} />
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <label htmlFor="price" className="col-sm-3 col-form-label">Price</label>
                        <div className="col-sm-4">
                            <input type="number" step="0.01" className="form-control" id="price" name="price"
                                required ref={this.price} />
                        </div>
                    </div>
                    <div className="custom-file text-left">
                        <input type="file" className="custom-file-input" id="extraPicInput" accept=".jpg, .png, .gif" />
                        <label className="custom-file-label" htmlFor="profilePicInput">Upload Picture</label>
                    </div>
                    <div className="form-group row justify-content-center">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}


export default AdminAddExtraGear;