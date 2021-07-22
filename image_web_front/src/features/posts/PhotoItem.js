import React from 'react';
import '../../scss/Posts/PhotoItem.scss';

const PhotoItem = ({ post , onSetPostIndex }) => {
	return (
		<div className="PhotoItem-template" onClick={onSetPostIndex}>
			<div>
				<img className="Picture" src={post.image_url} alt="img"/>
			</div>
			<div>
			</div>
			{console.log(post)}
		</div>
	);
};

export default PhotoItem;
