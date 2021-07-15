import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RegisterForm } from '../../util/RegitsterForm';
import { usersAction } from '../users/usersSlice';
import { Link } from 'react-router-dom';

const SignUp = () => {
	const [registerForm, setRegisterForm] = useState(RegisterForm);

	const handleChangeForm = (e) => {
		const {value, name} = e.target;
		setRegisterForm({
			...registerForm,
			[name]: value
		});
	};

	const dispatch = useDispatch();

	const handleSubmit = (data) => {
		dispatch(usersAction.addUsers(data))
	}

	return (
		<div className="signup-template">
			<form onSubmit={() => handleSubmit(registerForm)}>
				<div className="wrapper">
					<div className="email">
						<input className="email-input" placeholder="이메일 주소" name="email" value={registerForm.email} onChange={handleChangeForm}/>
					</div>
					<div className="name">
						<input className="name-input" placeholder="이름" name="name" value={registerForm.name} onChange={handleChangeForm}/>
					</div>
					<div className="nickname">
						<input className="nickname-input" placeholder="닉네임" name="nickname" value={registerForm.nickname} onChange={handleChangeForm}/>
					</div>
					<div className="password">
						<input className="password-input" placeholder="비밀번호" name="password" value={registerForm.password} onChange={handleChangeForm}/>
					</div>
					<div className="password-check">
						<input className="password-check-input" placeholder="비밀번호 확인"/>
					</div>
					<div className="signup">
						<button className="submit-btn">회원가입</button>
					</div>
				</div>
			</form>
			<div>
				<span>아이디가 있으세요?</span>
				<Link to="/login">
					<span>로그인</span>
				</Link>
			</div>
		</div>
	);
};

export default SignUp;
