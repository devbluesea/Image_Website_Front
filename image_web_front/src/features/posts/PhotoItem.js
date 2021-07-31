import React from 'react';
import '../../scss/Posts/PhotoItem.scss';

const PhotoItem = ({ post , onSetPostIndex }) => {
	return (
		<div className="PhotoItem-template" onClick={onSetPostIndex}>
			<div className="wrapper">
				<div className="screen">
					<img className="picture" src={post.image_url} alt="img"/>
				</div>
				{/*<div>
					<span>{post.comment}</span>
					<span>{post.countLike}</span>
				</div>*/}
			</div>
		</div>
	);
};

export default PhotoItem;
