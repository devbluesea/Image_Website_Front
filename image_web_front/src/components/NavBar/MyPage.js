import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/NavBar/MyPage.scss';

const MyPage = () => {

	return (
		<div className="MyPage-template">
			<Link className="link" to="/write">
				<span className="menu">
					<div className="list">글쓰기</div>
					{/*<div className="underbar"></div>*/}
				</span>
			</Link>
			<Link className="link" to="/mypage">
				<span className="menu">
					<div className="list">내정보</div>
					{/*<div className="underbar"></div>*/}
				</span>
			</Link>
		</div>
	);
};

export default MyPage;
