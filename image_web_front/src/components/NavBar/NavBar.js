import React from 'react';
import '../../scss/NavBar/NavBar.scss';
import SignInUp from './SignInUp';
import MyPage from './MyPage';

const NavBar = () => {
	return (
		<div className = 'NavBar-Template'>
			<div className = 'Wrapper'>
				<span className = 'Logo'>logo</span>
				<span className = 'MyPage'><MyPage></MyPage></span>
				<span className = 'Sign'><SignInUp></SignInUp></span>
			</div>
		</div>
	);
};

export default NavBar;
