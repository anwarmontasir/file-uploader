import React from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterOption: 'All'
    }
  }
  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }
  updateFilterOption(option) {
    this.setState({
      filterOption: option
    })
  }
  render() {
    return (
      <div className='App'>
        <SearchBar searchTerm={this.state.searchTerm} filterOption={this.state.filterOptions} />
        <FilterableList files={this.props.files} searchTerm={this.state.searchTerm} filterOption={this.state.filterOptions} />
      </div>
    );
  }
  
}

export default App;