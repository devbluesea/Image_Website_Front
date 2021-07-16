import React from 'react';

const Pagination = ({total_count, current_page, onSetCurrentPage}) => {
	const page_count = Math.ceil( total_count / 3);

	const pageArray = [];
	for (let num = 1 ; num <= page_count ; num++) {
		pageArray.push(
			<span key={num}
						onClick={ () => onSetCurrentPage(`${num}`)}
						className={ ( parseInt(current_page) === num ) ? "page_active" : "page_link"}>
				{num}
			</span>
		)
	}

	return (
		<div>
			<span>처음 </span>
			<span>이전 </span>
			<span>{pageArray}</span>
			<span>다음 </span>
			<span>마지막</span>
		</div>
	);
};

export default Pagination;
