import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PhotoItem from './PhotoItem';
import Modal from './Modal';
import Search from './Search';
import '../../scss/Posts/PhotoList.scss';
import { postsAction } from './postSlice';
import { commentsAction } from '../comments/commentsSlice';

const PhotoList = ({data}) => {
	const [isVisible, setIsVisible] = useState(false);
	const dispatch = useDispatch();

	const onSetPostIndex = ( id ) => {
		dispatch( postsAction.getPost(id));
		dispatch( commentsAction.getComments(id))
		setIsVisible(true);
	}

	const onPutPost = (data, isLike) => {
		let requestData = { ...data };
		requestData.isLike = isLike;
		dispatch(postsAction.putPost(requestData));
	}

	return (
		<div className="PhotoList-template">
			<div className="wrapper">
				<div className="search">
					<Search></Search>
				</div>
				<div className="frame">{ data.map((post) => {
					return <PhotoItem key={post.id} post = {post} onSetPostIndex={ () => {onSetPostIndex(post.id) }}/>}) }
				</div>
				<div className="modal">
					<Modal onPutPost={onPutPost} isVisible={isVisible} closeModal={setIsVisible}/>
				</div>
			</div>
		</div>
	);
};

export default PhotoList;
