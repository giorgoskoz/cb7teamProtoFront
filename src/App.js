import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavDropdownExample from './components/NavDropdownExample';
import Gear from './components/Gear';
import Calendar from './components/Calendar';
import CalendarTest from './components/CalendarTest';
import Home from './components/Home';
import './App.css';
import { GlobalProvider } from './components/GlobalContext';
import { Navbar } from "react-bootstrap";
import NavbarStranger from "./components/Navbar";
import RegisterModal from "./components/RegisterModal";
import LoginModal from "./components/LoginModal";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

library.add(faUser);
library.add(faLock);

class App extends React.Component {

  constructor( props ) {
    super(props);
    let user;
    (((this.props.loggedUser.user === null) || (this.props.loggedUser.user === undefined)) ?  user = {
      username: "",
        firstname: "",
        lastname: "",
        email: "",
        role: ""
                      } : user = this.props.loggedUser.user);
    this.state = {
      token: this.props.loggedUser.token,
      user: user,
      setToken: ( token ) => this.setState({
        token: token
      }),
      setUser: ( user ) => this.setState({
        user: user
      }),
      showLoginModal: false,
      showRegisterModal: false,
      setShowLoginModal: ( value ) => this.setState({
        showLoginModal: value
      }),
      setShowRegisterModal: ( value ) => this.setState({
        showRegisterModal: value
      })
    };
  }

  // componentDidMount(){
  //   let user;
  //   ((this.props.loggedUser.user === null) ?  user = {
  //     username: "",
  //       firstname: "",
  //       lastname: "",
  //       email: "",
  //       role: ""
  //                     } : user = localStorage.getItem( 'user' ));
  //   this.setState( {user: user} );
  //   this.setState( {token: localStorage.getItem( 'token' )} );
  // }

  welcome(){
    if(( this.state.token === null ) || (this.state.token === undefined)){
      return(
        <NavbarStranger></NavbarStranger>
      );
    } else {
      return(
        <NavDropdownExample/>
      )
    }
  }

  render(){
    return (
      <GlobalProvider value = { this.state }>
        <Router>
          <div id="forBackgroundImg">
            <LoginModal></LoginModal>
            <RegisterModal></RegisterModal>
            <NavDropdownExample></NavDropdownExample>
    
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/gear" component={Gear} />
            <Route path="/crew" component={Topics} />
            <Route path="/ctest" component={CalendarTest} />
          </div>
        </Router>
      </GlobalProvider>
    );
  }
}

function About() {
  return <h2>About</h2>;
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
}

export default App;
