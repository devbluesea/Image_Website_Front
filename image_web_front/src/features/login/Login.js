import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { LoginForm } from '../../util/Forms';
import { useDispatch } from 'react-redux';
import { usersAction } from '../users/usersSlice';
import '../../scss/Login/Login.scss'

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
				<div className="header">Like Pinterest 로그인</div>
				<div className="email">
					<input className="email-input" type="text" placeholder="  이메일" name="email" value={loginForm.email} onChange={handleChangeForm}/>
				</div>
				<div className="password">
					<input className="password-input" type="password" placeholder="  비밀번호" name="password" value={loginForm.password} onChange={handleChangeForm}/>
				</div>
				<div className="submit">
					<Link to="/"><button className="login-btn" onClick={() => {handleLoginBtnClick(loginForm)}}>로그인</button></Link>
				</div>
				<div className="to-signup">
					<span className="signage">계정이 없으신가요?</span>
					<Link className="link" to="/signup"><span>회원가입</span></Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
