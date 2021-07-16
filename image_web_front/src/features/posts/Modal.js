import React from 'react';
import '../../scss/Posts/Modal.scss';


const Modal = ({ data, isVisible, closeModal }) => {
	if (data != null) {
		return (
			<div className="modal-template" data-visible={isVisible}>
				<div className="wrapper">
					<div className="modal-head">
						<div onClick={() => {closeModal(false)}}>닫기</div>
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
