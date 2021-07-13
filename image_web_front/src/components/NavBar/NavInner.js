import React from 'react';
import '../../scss/NavBar/NavInner.scss'
import SignInUp from './SignInUp';
import MyPage from './MyPage';

const NavInner = () => {
	return (
		<div className = "nav-list" data-login="false">
			<div className = 'nav-item menu-mypage'><MyPage/></div>
			<div className = 'nav-item menu-login'><SignInUp/></div>
		</div>
	);
};

export default NavInner;
