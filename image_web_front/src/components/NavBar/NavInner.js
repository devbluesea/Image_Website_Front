import React from 'react';
import { useSelector } from 'react-redux';
import '../../scss/NavBar/NavInner.scss'
import SignInUp from './SignInUp';
import MyPage from './MyPage';

const NavInner = () => {

	const isLogin = useSelector( (state) => state.users.isLogin );

	return (
		<div className = "nav-list" data-login={isLogin}>
			<div className = 'nav-item menu-mypage'><MyPage/></div>
			<div className = 'nav-item menu-login'><SignInUp/></div>
		</div>
	);
};

export default NavInner;
