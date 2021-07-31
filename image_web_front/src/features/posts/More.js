import React from 'react';
import '../../scss/Posts/More.scss';

const More = ({onSetCurrentPage, current_page}) => {
	return (
		<div className="more-template">
			<div className="more-btn" onClick={() => onSetCurrentPage(current_page)}>더보기</div>
		</div>
	);
};

export default More;
