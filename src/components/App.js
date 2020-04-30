import React, {Component} from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
const API_KEY = 'AIzaSyCyR64wkjkgbIB9-SmY1ujUtQlwnroIF0I';

class App extends Component {

  handleSearchSumbit = async (searchString) => {
    const result = await youtube.get('/search', {
      params: {
        q: searchString,
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${API_KEY}`
      }
    });
    console.log(result);
  }

  render() {
    return (
      <div className="container">
        <SearchBar onSearchSumbit = {this.handleSearchSumbit}/>
      </div>
    );
  }
}

export default App;
