import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';

const API_KEY = 'AIzaSyCZiAOMOAio-LIVe7P-xtgr9vb2KdwJKgA'

// const SearchBar = () => {
// 	return <input type='text' />
// };
class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {term: ''};




	}



	render(){
		return(
			<div className="search-bar">

				<div className='search'><h5 className='search-label'>Search</h5><input 
				className="searchMe"
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)}
				type='text' /></div>
			</div>
		)

	}
	onInputChange(term){
		this.setState({term})
		this.props.onSearchTermChange(term)
	}
}

export default SearchBar;
