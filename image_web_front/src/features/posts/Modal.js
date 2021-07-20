import React from 'react';
import { useSelector } from 'react-redux';
import '../../scss/Posts/Modal.scss';

const Modal = ({ onPutPost, isVisible, closeModal }) => {
	const  {data, loading, error} = useSelector( (state) => state.posts.post)

	const printdata = (data) => {
		console.log(data.id);
	}

	if (loading) return <div>Loading..</div>
	if (error) return <div>Error..</div>
	if (!data) return null

	if (data != null) {
		return (
			<div className="modal-template" data-visible={isVisible}>
				<div className="wrapper">
					<div className="modal-head">
						{ data.isLike && <span> 좋아! </span>}
						<span onClick = {() => {onPutPost(data, !data.isLike)}}>좋아요</span>
						<span onClick={() => {closeModal(false)}}>닫기</span>
						<span onClick={() => {printdata(data)}}>데이터</span>
					</div>
					<div className="modal-body">
						<img src={data.image_url} alt="image_url"></img>
					</div>
					<div className="modal-footer">
						{data.comment}
					</div>
				</div>
			</div>
		);
	}
	else {
		return (
			<div>not found</div>
		)
	}
};

export default Modal;
