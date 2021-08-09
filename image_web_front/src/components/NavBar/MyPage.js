import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/NavBar/MyPage.scss';

const MyPage = () => {

	return (
		<div className="MyPage-template">
			<Link className="link" to="/write">
				<span>글쓰기</span>
			</Link>
			<Link className="link" to="/mypage">
				<span>내정보</span>
			</Link>
		</div>
	);
};

export default MyPage;
