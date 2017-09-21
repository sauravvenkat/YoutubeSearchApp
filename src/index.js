//CREATE A NEW COMPONENT THAT PRODUCES HTML
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail'
import VideoList from './components/video_list'
const API_KEY = 'AIzaSyCZiAOMOAio-LIVe7P-xtgr9vb2KdwJKgA'




class App extends Component{
	constructor(props){
		super(props)
		this.state = { videos: [], selectedVideo: null};
		this.videoSearch('')

	}
	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos) =>{
			this.setState({videos: videos,
				selectedVideo: videos[0]
			})
			//this.setState({videos: videos})
		})
	}

	render(){
	return (
	<div>

			<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
			<VideoDetail video={this.state.selectedVideo} />
			<VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})}
			videos={this.state.videos} />
			<h4 className='NoResult'></h4>
	</div>
	)
	}
}
//TAKE THIS HTML AND PUT IT IN THE WEBPAGE

ReactDOM.render(
	<App />,
	document.querySelector('.container')
)