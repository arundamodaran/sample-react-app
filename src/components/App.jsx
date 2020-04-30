import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';

const API_KEY = 'AIzaSyCyR64wkjkgbIB9-SmY1ujUtQlwnroIF0I';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.handleSearchSumbit('web development');
  }

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
      selectedVideo: result.data.items[0],
    });
  };

  handleVideoSelection = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className='container'>
        <SearchBar onSearchSumbit={this.handleSearchSumbit} />
        <div className='row'>
          <div className='col-8'>
            <VideoPlayer video={this.state.selectedVideo} />
          </div>
          <div className='col-4'>
            <VideoList
              videos={this.state.videos}
              onSelectVideo={this.handleVideoSelection}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
