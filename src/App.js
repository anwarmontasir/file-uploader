import React from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';

function App() {
  return (
    <div className='App'>
      <SearchBar />
      <FilterableList files={this.props.files} />
    </div>
  );
}

export default App;