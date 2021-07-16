import React from 'react';
import '../../scss/Posts/PhotoItem.scss';

const PhotoItem = ({ image_url , onSetPostIndex }) => {
	return (
		<div className="PhotoItem-template" onClick={onSetPostIndex}>
			<img className="Picture" src={image_url} alt="img"/>
		</div>
	);
};

export default PhotoItem;
