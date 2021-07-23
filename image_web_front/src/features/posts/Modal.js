import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommentForm } from '../../util/Forms';
import { commentsAction } from '../comments/commentsSlice';
import '../../scss/Posts/Modal.scss';
import likeStar from '../../images/star.png';
import likeStarYellow from '../../images/star_yellow.png';

const Modal = ({ onPutPost, isVisible, closeModal }) => {
	const {data, loading, error} = useSelector( (state) => state.posts.post)
	const loginInfo = useSelector( (state) => state.users );
	const commentsData = useSelector( (state) => state.comments.comments.data)
	const [commentInputForm, setCommentInputForm] = useState(CommentForm)
	const dispatch = useDispatch();

	const handleChangeForm = (e) => {
		setCommentInputForm({
			...commentInputForm,
			postId: data.id,
			postData: {
				name: loginInfo.users.data[0].nickname,
				content: e.target.value
			}
		});
	};

	const onClick = () => {
		//console.log(commentInputForm);
		//console.log(data.id);
		//console.log(loginInfo)
		dispatch(commentsAction.addComments(commentInputForm));
	}

	if (loading) return <div>Loading..</div>
	if (error) return <div>Error..</div>
	if (!data) return null

	if (data != null) {
		return (
			<div className="modal-template" data-visible={isVisible}>
				<div className="wrapper">
					<div className="modal-header">
						<div className="like">
							<div className="star-like" onClick = {() => {onPutPost(data, !data.isLike)}}>
								{ data.isLike && <img className="icon" src={likeStarYellow} alt="좋아"/>}
							</div>
							<div className="star" onClick = {() => {onPutPost(data, !data.isLike)}}>
								{ !data.isLike && <img className="icon" src={likeStar} alt="좋아요"/> }
							</div>
						</div>
						<div className="close">
							<span onClick={() => {closeModal(false)}}>닫기</span>
						</div>
					</div>
					<div className="modal-body">
						<img src={data.image_url} className="image" alt="image_url"></img>
						<div className="comment">
							<div className="subject">
								<span>Comment</span>
								<span>|</span>
							</div>
							<div className="sentence">{data.comment}</div>
						</div>
					</div>
					<div className="modal-footer">
						<div className="writer">
							<div className="profile-img">PROFILE IMG</div>
							<div className="profile-info">
								<div>{data.writer.nickname}</div>
								<div>{data.writer.email}</div>
							</div>
						</div>
						<div>
							<div className="reply">
								{ commentsData && commentsData.map((comment) => {
									return (
										<div className="reples">
											<div className="text" key={comment.id}>
												<span>{comment.name}</span>
												<span>:</span>
											</div>
											<div className="content">
												<div>{comment.content}</div>
											</div>
										</div>);
									})}
							</div>
							<div className="reply-write">
								{ loginInfo.isLogin &&
									<div>
										<input className="input" placeholder="    댓글" name="content" value={commentInputForm.content} onChange={handleChangeForm} />
										<button className="btn" onClick={onClick}>입력</button>
									</div>
								}
							</div>
						</div>
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
