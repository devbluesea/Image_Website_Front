import React from 'react';
import '../../scss/Posts/PhotoItem.scss'

const PhotoItem = ({ image_url }) => {
	return (
		<div className="PhotoItem-template">
			<img className="Picture" src={image_url} alt="img"/>
		</div>
	);
};

export default PhotoItem;
