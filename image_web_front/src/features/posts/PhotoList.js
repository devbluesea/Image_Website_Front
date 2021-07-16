import React, { useState } from 'react';
import PhotoItem from './PhotoItem';
import Modal from './Modal';
import '../../scss/Posts/PhotoList.scss';

const PhotoList = ({data}) => {
	const [postIndex, setPostIndex] = useState(0);
	const [isVisible, setIsVisible] = useState(false);

	const onSetPostIndex = ( index ) => {
		console.log(index);
		setPostIndex(index);
		setIsVisible(true);
	}

	return (
		<div className="photoList-template">
			<div className="wrapper">
				<div className="frame">{ data.map((post, key) => {
					return <PhotoItem key={key}
														image_url = {post.image_url}
														onSetPostIndex={ () => {onSetPostIndex(key) }}/>
				}) }</div>
			</div>
			<Modal data={ data[postIndex] } isVisible={isVisible} closeModal={setIsVisible}/>
		</div>
	);
};

export default PhotoList;
