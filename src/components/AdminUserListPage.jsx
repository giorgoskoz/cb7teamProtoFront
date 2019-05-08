import React from 'react';
import { GlobalContext } from './GlobalContext';
import PaginationFooter from './PaginationFooter';
import UserRow from "./UserRow";

class AdminUserListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            searchResults: [],
            currentPage: 0,
            resultsPerPage: 5,
            numberOfTotalPages: 0,
            numberOfTotalResults: 0,
            noResults: false
        };
        this.setActivePage = this.setActivePage.bind(this);
        this.setResultsPerPage = this.setResultsPerPage.bind(this);
        this.fetchPageResults = this.fetchPageResults.bind(this);
    }

    static contextType = GlobalContext;

    setActivePage(newActivePage) {
        this.setState({
            currentPage: newActivePage - 1,
        }, () => this.fetchPageResults());
    }

    setResultsPerPage(option) {
        this.setState({
            currentPage: 0,
            resultsPerPage: option
        }, () => this.fetchPageResults());
    }

    componentDidMount() {
        console.log('Messages component did mount');
        this.fetchPageResults();
    }

    fetchPageResults() {
        const url = 'http://localhost:8080/users/all?page=' + this.state.currentPage + '&size=' + this.state.resultsPerPage;
        fetch(url, {
            method: 'GET',
            headers: {
                'X-KLICKS-AUTH': this.context.token,
                'Accept': 'application/json',
            }
        }).then((response) => {
            if (response.status === 200) {
                response.json().then(data => {
                    const lastPageResults = data.count % this.state.resultsPerPage;
                    const pagesNumber = (lastPageResults > 0) ? (((data.count - lastPageResults) / this.state.resultsPerPage) + 1) : (data.count / this.state.resultsPerPage);
                    this.setState({
                        numberOfTotalPages: pagesNumber,
                        numberOfTotalResults: data.count,
                        users: data.results,
                        noResults: data.count === 0 ? true : false
                    });
                })
            } else {
                this.setState({
                    currentPage: 0,
                    users: [],
                    numberOfTotalPages: 0,
                    numberOfTotalResults: 0,
                    noResults: true,
                });
            }
        }).catch(error => console.error('Error:', error));
    }
    render() {
        return (
            <React.Fragment>
                <div><h2>AdminUserListPage</h2></div>
                <table className="table table-striped custab" style={{ width: "80%", margin: "auto" }}>
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th> Username</th>
                            <th> FirstName </th>
                            <th> LastName </th>
                            <th> email </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.length == 0 ? (<img src="http://photodentro.edu.gr/v/images/loading.gif" alt="Loading" width="80px" />) : null}
                        {this.state.users.map((user, index) => {
                            return (
                                <UserRow key={user.id} user={user} i={((this.state.currentPage) * this.state.resultsPerPage)+ (index + 1)} />);
                        })}
                    </tbody>
                </table>

                <PaginationFooter activePage={this.state.currentPage + 1} totalPages={this.state.numberOfTotalPages} handle={this.setActivePage} />
            </React.Fragment>
        );
    }
}

export default AdminUserListPage;