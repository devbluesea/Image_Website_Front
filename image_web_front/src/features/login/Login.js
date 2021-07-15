import React, { useState } from 'react';
import { LoginForm } from '../../util/LoginRegitsterForm';
import { useDispatch } from 'react-redux';
import { usersAction } from '../users/usersSlice';

const Login = () => {
	const [loginForm, setLoginForm] = useState(LoginForm);

	const handleChangeForm = (e) => {
		const {value, name} = e.target;
		setLoginForm({
			...loginForm,
			[name]: value
		});
	};

	const dispatch = useDispatch()

	const handleLoginBtnClick = (data) => {
		dispatch(usersAction.getUsers(data))
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
					<button className="login-btn" onClick={() => {handleLoginBtnClick(loginForm)}}>로그인</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
