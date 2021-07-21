import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommentForm } from '../../util/Forms';
import { commentsAction } from '../comments/commentsSlice';
import '../../scss/Posts/Modal.scss';

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
					<div className="modal-head">
						{ data.isLike && <span> 좋아! </span>}
						<span onClick = {() => {onPutPost(data, !data.isLike)}}>좋아요</span>
						<span onClick={() => {closeModal(false)}}>닫기</span>
					</div>
					<div className="modal-body">
						<img src={data.image_url} alt="image_url"></img>
						<div>{data.comment}</div>
					</div>
					<div className="modal-footer">
						<div className="">
							{ commentsData && commentsData.map((comment) => {
								return (
									<div key={comment.id}>
										<span>{comment.content}</span>
										<span>{comment.name}</span>
									</div>);
								})}
						</div>
						<div>
							{ loginInfo.isLogin &&
								<div>
									<input placeholder="댓글" name="content" value={commentInputForm.content} onChange={handleChangeForm} />
									<button onClick={onClick}>입력</button>
								</div>
							}
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
