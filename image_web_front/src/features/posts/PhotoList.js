import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PhotoItem from './PhotoItem';
import Modal from './Modal';
import Search from './Search';
import '../../scss/Posts/PhotoList.scss';
import { postsAction } from './postSlice';

const PhotoList = ({data}) => {
	const [isVisible, setIsVisible] = useState(false);
	const dispatch = useDispatch();

	const onSetPostIndex = ( id ) => {
		dispatch( postsAction.getPost(id))
		setIsVisible(true);
		console.log("id:",id);
	}

	const onPutPost = (data, isLike) => {
		let requestData = { ...data };
		requestData.isLike = isLike;
		console.log(requestData);
		dispatch(postsAction.putPost(requestData));
	}

	return (
		<div className="photoList-template">
			<div className="wrapper">
				<div>
					<Search></Search>
				</div>
				<div className="frame">{ data.map((post) => {
					return <PhotoItem key={post.id}
														image_url = {post.image_url}
														onSetPostIndex={ () => {onSetPostIndex(post.id) }}/>
				}) }</div>
			</div>
			<Modal onPutPost={onPutPost} isVisible={isVisible} closeModal={setIsVisible}/>
		</div>
	);
};

export default PhotoList;
