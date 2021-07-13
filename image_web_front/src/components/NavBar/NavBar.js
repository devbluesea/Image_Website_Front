import React from 'react';
import '../../scss/NavBar/NavBar.scss';
import logo from '../../logo.svg';
import NavInner from './NavInner';

const NavBar = () => {
	return (
		<div className = "NavBar-Template">
			<div className = "Wrapper">
				<img className = "Logo" src={logo} alt = "logo"></img>
				<div><NavInner/></div>
			</div>
		</div>
	);
};

export default NavBar;
