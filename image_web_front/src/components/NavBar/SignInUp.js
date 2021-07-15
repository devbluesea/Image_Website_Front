import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/NavBar/SignInUp.scss';

const SignInUp = () => {
	return (
		<div>
			<Link to="/login"><span>로그인</span></Link>
			<Link to="/signup"><span>회원가입</span></Link>
		</div>
	);
};

export default SignInUp;
