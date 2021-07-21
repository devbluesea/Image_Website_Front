import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/NavBar/SignInUp.scss';

const SignInUp = () => {
	return (
		<div className="SignInUp-template">
			<Link className="link" to="/login"><span className="login">로그인</span></Link>
			<Link className="link" to="/signup"><span className="signup">회원가입</span></Link>
		</div>
	);
};

export default SignInUp;
