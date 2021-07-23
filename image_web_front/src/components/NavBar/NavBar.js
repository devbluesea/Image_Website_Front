import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/NavBar/NavBar.scss';
import logo from '../../logo.svg';
import NavInner from './NavInner';
import { useSelector } from 'react-redux';

const NavBar = () => {
	const loginInfo = useSelector( (state) => state.users)

	return (
		<div className = "NavBar-Template">
			<div className = "Wrapper">
				<Link to="/">
					<img className = "Logo" src={logo} alt = "logo"></img>
				</Link>
				<div className="Menu"><NavInner/></div>
			</div>
		</div>
	);
};

export default NavBar;
