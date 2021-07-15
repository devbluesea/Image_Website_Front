import React, { useState } from 'react';
import { LoginForm } from '../../util/LoginRegitsterForm';

const Login = () => {
	const [loginForm, setLoginForm] = useState(LoginForm);

	const handleChangeForm = (e) => {
		const {value, name} = e.target;
		setLoginForm({
			...loginForm,
			[name]: value
		});
	};

	const handleLoginBtnClick = () => {
		console.log(loginForm)
	}

	return (
		<div className="login-template">
			<div className="wrapper">
				<div className="email">
					<input className="email-input" placeholder="이메일" name="email" value={loginForm.email} onChange={handleChangeForm}/>
				</div>
				<div className="password">
					<input className="password-input" placeholder="비밀번호" name="password" value={loginForm.password} onChange={handleChangeForm}/>
				</div>
				<div className="submit">
					<button className="login-btn" onClick={() => {handleLoginBtnClick()}}>로그인</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
