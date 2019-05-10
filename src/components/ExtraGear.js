import React from 'react';
import { Jumbotron, Container, Row, Col, CardDeck, Tabs, Tab, Sonnet } from 'react-bootstrap';
import Gear from './Gear';
import './Gear.css';
import DisplayPic from './DisplayPic';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

class ExtraGear extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            extraGearList: []
        }

        this.extraProvidedGear = this.extraProvidedGear.bind(this);
        this.createGearCards = this.createGearCards.bind(this);
    }

    extraProvidedGear() {
        Axios.get("http://localhost:8080/gear/all-extra/",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        ).then(response => {
            this.setState({ extraGearList: response.data });
        })
    }

    createGearCards() {
        let extraGearCardsList = [];
        for (let i = 0; i < this.state.extraGearList.length; i++) {
            let gearCard = <div class="col-12 col-md-6 col-lg-4">
                            <div key={this.state.extraGearList[i].id} className="card">
                                <img className="card-img-top" src={this.state.extraGearList[i].photoLink} alt="Card image cap"></img>
                                <div className="card-body">
                                    <h4 className="card-title"><b>{this.state.extraGearList[i].name}</b></h4>
                                    <p className="card-text">{this.state.extraGearList[i].description}</p>
                                    <div className="row">
                                    <hr></hr>
                                        Provided with each session at no extra cost
                                            </div>
                                </div>
                            </div>
                            </div>;
            extraGearCardsList.push(gearCard);
        }
        return extraGearCardsList;
    }

    componentDidMount(){
        this.extraProvidedGear();
    }

    render() {
        return (
            <div>
                <Jumbotron fluid className="mb-0 here">
                    <Container>
                        {/* <DisplayPic></DisplayPic> */}
                        <h1>Check the goods</h1>
                        <p>
                            A selection of lights and photography paraphernalia are provided with the studio, and cameras as well as lenses are available to rent.
                    </p>
                    </Container>
                </Jumbotron>
                <Tabs defaultActiveKey="gear" id="uncontrolled-tab-example" className="mt-0 justify-content-end here" >
                    <Tab eventKey="gear" title="Lights and Paraphernalia">
                        <Gear></Gear>
                    </Tab>
                    <Tab eventKey="extraGear" title="Cameras and Lenses"  to="/extragear">
                        <ExtraGear></ExtraGear>
                    </Tab>
                </Tabs>
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

export default withRouter(ExtraGear);