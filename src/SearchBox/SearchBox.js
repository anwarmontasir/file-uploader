import React, { Component } from 'react';
import './SearchBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBox extends Component {
    render() {
        return (
            <div className="SearchBox">
                <input placeholder="Search term" />
                <FontAwesomeIcon icon={faSearch} />
            </div>
        )
    }
}

export default SearchBox;