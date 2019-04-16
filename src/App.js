import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList.js';
import Yelp from './util/Yelp';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  
  searchYelp(term, location, sortBy) {
    // location required, else there's an error
    if (location) {
      // undo box shadow on required field
      document.getElementById('required').style.boxShadow = 'none';
      // search Yelp ***
      Yelp.search(term, location, sortBy).then(businesses => {
        this.setState({
          businesses: businesses
        })
      });  
    } else {
      // box shadow required field
      document.getElementById('required').style.boxShadow = '0 0 5px 5px #b23737';
      // if the location field is empty when searching and there were locations on screen from a previous search.. clear the page after modifying the box shadow
      this.setState({
        businesses: []
      })
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
          <SearchBar searchYelp={this.searchYelp} />
          <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
