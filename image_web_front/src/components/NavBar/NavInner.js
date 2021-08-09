import React from 'react';
import { useSelector } from 'react-redux';
import '../../scss/NavBar/NavInner.scss'
import SignInUp from './SignInUp';
import MyPage from './MyPage';
import { getCookie } from '../../util/CookieUtil';

const NavInner = () => {
	const loginCookie = getCookie("loginInfo")
	const loginInfo = useSelector( (state) => state.users)

	return (
		<div className = "nav-list" >
			{loginCookie > 0 || loginInfo.isLogin ? <div className = 'nav-item menu-mypage'><MyPage/></div>:
			<div className = 'nav-item menu-login'><SignInUp/></div>}
		</div>
	);
};

export default NavInner;
