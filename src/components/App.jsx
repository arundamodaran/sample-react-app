import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

const API_KEY = 'AIzaSyCyR64wkjkgbIB9-SmY1ujUtQlwnroIF0I';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  handleSearchSumbit = async (searchString) => {
    const result = await youtube.get('/search', {
      params: {
        q: searchString,
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${API_KEY}`,
      },
    });
    this.setState({
      videos: result.data.items,
      selectedVideo: result.data.items[0]
    });
  };

  handleVideoSelection = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className='container'>
        <SearchBar onSearchSumbit={this.handleSearchSumbit} />
        <VideoList
          videos={this.state.videos}
          onSelectVideo={this.handleVideoSelection}
        />
      </div>
    );
  }
}

export default App;
