import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Previous(props) {
    if (props.activePage === 1) return (
        <li className="page-item active" aria-current="page">
            <span className="page-link">
                {/* <span aria-hidden="true"><FontAwesomeIcon icon="angle-left" /></span> */}
                <span className="sr-only">(current)</span>
            </span>
        </li>);
    else return (
        <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous" onClick={() => props.setActivePage(props.activePage - 1)}>
                <span aria-hidden="true"><FontAwesomeIcon icon="angle-left" /></span>
            </a>
        </li>
    );
}

function Next(props) {
    if (props.activePage === props.lastPage) return (
        <li className="page-item active" aria-current="page">
            <span className="page-link">
                {/* <span aria-hidden="true"><FontAwesomeIcon icon="angle-right" /></span> */}
                <span className="sr-only">(current)</span>
            </span>
        </li>);
    else return (
        <li className="page-item">
            <a className="page-link" href="#" aria-label="Next" onClick={() => props.setActivePage(props.activePage + 1)}>
                <span aria-hidden="true"><FontAwesomeIcon icon="angle-right" /></span>
            </a>
        </li>
    );
}

function PageNumberIcon(props) {
    const numberOfSideButtons = 2; 
    const leftBreakPoint = props.activePage - (numberOfSideButtons + 1);
    const rightBreakPoint = props.activePage + (numberOfSideButtons + 1);

    
    if (props.pageNumber === 1 || props.pageNumber === props.lastPage || (props.pageNumber > leftBreakPoint && props.pageNumber < rightBreakPoint)) {
        if (props.activePage !== props.pageNumber)
            return (
                <li className="page-item" onClick={() => props.setActivePage(props.pageNumber)}><a className="page-link" href="#">{props.pageNumber}</a></li>
            ); else return (
                <li className="page-item active" aria-current="page">
                    <span className="page-link">
                        {props.pageNumber}
                        <span className="sr-only">(current)</span>
                    </span>
                </li>
            );
    } 
    else if (props.pageNumber === leftBreakPoint || props.pageNumber === rightBreakPoint) {
        return (
            <li className="page-item disabled" aria-current="page">
                <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">...</a>
            </li>
        );
    }

    return null;
}

class PaginationFooter extends Component {
    render() {
        if (this.props.totalPages <= 1) return null;
        return (
            <div className="container">
                <nav aria-label="Pagination">
                    <ul className="pagination">
                        <Previous activePage={this.props.activePage} setActivePage={this.props.handle} />
                        {Array.from({ length: this.props.totalPages }, (v, i) => {
                            return <PageNumberIcon key={i} activePage={this.props.activePage} pageNumber={i + 1} lastPage={this.props.totalPages} setActivePage={this.props.handle} />
                        })}
                        <Next activePage={this.props.activePage} setActivePage={this.props.handle} lastPage={this.props.totalPages} />
                    </ul>
                </nav>
            </div>
        );
    }
}

export default PaginationFooter;