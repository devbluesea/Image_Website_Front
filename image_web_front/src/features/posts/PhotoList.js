import React from 'react';
import PhotoItem from './PhotoItem';

const PhotoList = ({data}) => {
	return (
		<div className="photoList-template">
			<div className="wrapper">
				<div className="frame">{ data.map((post, key) => {
					return <PhotoItem key={key} image_url = {post.image_url} />
				}) }</div>
			</div>
		</div>
	);
};

export default PhotoList;
