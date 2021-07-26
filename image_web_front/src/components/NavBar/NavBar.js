import React from 'react';
import '../../scss/NavBar/NavBar.scss';
import logo from '../../logo.svg';
import NavInner from './NavInner';

const NavBar = () => {

	const handleClick = () => {
		window.location.replace("/");
	}

	return (
		<div className = "NavBar-Template">
			<div className = "Wrapper">
				<img className = "Logo" onClick={handleClick} src={logo} alt = "logo"></img>
				<div className="Menu"><NavInner/></div>
			</div>
		</div>
	);
};

export default NavBar;
