import React, { Component } from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	//const video = props.video;
	const imageURL = video.snippet.thumbnails.default.url;
	const Description = video.snippet.description
	const url = "https://www.youtube.com/embed/"+video.id.videoId

	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item" href={url}>
			<div className="media-body">
				<div className='media-heading'>{video.snippet.title}</div>
			</div>
			<div className='video-list media'>
				<div className='media-left' id='AHAH'>
					<img className='media-object' src={imageURL} /><p className='Description'>{Description}</p>
				</div>
			</div>
			<script>{
			console.log(document.getElementById('AHAH'))
		}
		</script>
		</li>


		)
}
export default VideoListItem;