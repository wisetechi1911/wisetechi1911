import React, { Component } from 'react';
import unsplash from '../src/api/unsplash'
import './App.css';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class App extends Component {

  state = {
    images: []
  };


  onSearchSubmit = async (term) => {
    const response = await unsplash
      .get('/search/photos', {
        params: { query: term }
      });

    this.setState({ images: response.data.results })
  }
  render() {
    return (
      <div className="ui container" style={{ paddingTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;