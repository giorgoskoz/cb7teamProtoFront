import React from 'react';
import { Jumbotron, Container, Row, Col, CardDeck, Tabs, Tab, Sonnet } from 'react-bootstrap';
import GearCard from './GearCard';
import './Gear.css';
import DisplayPic from './DisplayPic';
import Axios from 'axios';

class Gear extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            providedGearList: []
        }

        this.fetchProvidedGear = this.fetchProvidedGear.bind(this);
        this.createGearCards = this.createGearCards.bind(this);
    }

    fetchProvidedGear() {
        Axios.get("http://localhost:8080/gear/all-standart/",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        ).then(response => {
            this.setState({ providedGearList: response.data });
        })
    }

    createGearCards() {
        let providedGearCardsList = [];
        for (let i = 0; i < this.state.providedGearList.length; i++) {
            let gearCard = <div class="col-12 col-md-6 col-lg-4">
                            <div key={this.state.providedGearList[i].id} className="card">
                                <img className="card-img-top" src={this.state.providedGearList[i].photoLink} alt="Card image cap"></img>
                                <div className="card-body">
                                    <h4 className="card-title"><b>{this.state.providedGearList[i].name}</b></h4>
                                    <p className="card-text">{this.state.providedGearList[i].description}</p>
                                    <div className="row">
                                    <hr></hr>
                                        Provided with each session at no extra cost
                                            </div>
                                </div>
                            </div>
                            </div>;
            providedGearCardsList.push(gearCard);
        }
        return providedGearCardsList;
    }

    componentDidMount(){
        this.fetchProvidedGear();
    }

    render() {
        return (
            <div>
                <Row className="justify-content-center whiteBgHere">
                    <Col align-center className="col-10" align="center">
                        <div class="col">
                            <div className="container">
                                <div className="row">

                                    {/* DYNAMIC CODE GOES HERE */}

                                    { this.createGearCards() }

                                    {/* <div class="row">
                                        <div class="col-12 col-md-6 col-lg-4">
                                            <div class="card">
                                                <img class="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap"></img>
                                                <div class="card-body">
                                                    <h4 class="card-title"><a href="product.html" title="View Product">Product title</a></h4>
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <div class="row">
                                                        <div class="col">
                                                            <p class="btn btn-danger btn-block">99.00 $</p>
                                                        </div>
                                                        <div class="col">
                                                            <a href="#" class="btn btn-success btn-block">Add to cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-4">
                                            <div class="card">
                                                <img class="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap"></img>
                                                <div class="card-body">
                                                    <h4 class="card-title"><a href="product.html" title="View Product">Product title</a></h4>
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <div class="row">
                                                        <div class="col">
                                                            <p class="btn btn-danger btn-block">99.00 $</p>
                                                        </div>
                                                        <div class="col">
                                                            <a href="#" class="btn btn-success btn-block">Add to cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-4">
                                            <div class="card">
                                                <img class="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap"></img>
                                                <div class="card-body">
                                                    <h4 class="card-title"><a href="product.html" title="View Product">Product title</a></h4>
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <div class="row">
                                                        <div class="col">
                                                            <p class="btn btn-danger btn-block">99.00 $</p>
                                                        </div>
                                                        <div class="col">
                                                            <a href="#" class="btn btn-success btn-block">Add to cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-lg-4">
                                            <div class="card">
                                                <img class="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap"></img>
                                                <div class="card-body">
                                                    <h4 class="card-title"><a href="product.html" title="View Product">Product title</a></h4>
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <div class="row">
                                                        <div class="col">
                                                            <p class="btn btn-danger btn-block">99.00 $</p>
                                                        </div>
                                                        <div class="col">
                                                            <a href="#" class="btn btn-success btn-block">Add to cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}




                                        {/* <div class="col-12">
                    <nav aria-label="...">
                        <ul class="pagination">
                            <li class="page-item disabled">
                                <a class="page-link" href="#" tabindex="-1">Previous</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item active">
                                <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div> */}
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                        {/* <CardDeck className="my-5">
                            <GearCard></GearCard>
                            <GearCard></GearCard>
                            <GearCard></GearCard>
                        </CardDeck> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia libero earum ex quae inventore facilis sunt optio error ducimus iusto?
                        <CardDeck>
                            <GearCard></GearCard>
                            <GearCard></GearCard>
                            <GearCard></GearCard>
                        </CardDeck> */}
                    </Col>
                </Row>
            </div>

        );
    }

}

export default Gear;