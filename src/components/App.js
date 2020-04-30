import React, {Component} from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

const API_KEY = 'AIzaSyCyR64wkjkgbIB9-SmY1ujUtQlwnroIF0I';

class App extends Component {
  state = {
    videos: []
  };

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
    this.setState({videos: result.data.items});
  }

  render() {
    return (
      <div className="container">
        <SearchBar onSearchSumbit = {this.handleSearchSumbit}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
