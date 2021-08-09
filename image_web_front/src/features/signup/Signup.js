import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RegisterForm } from '../../util/Forms';
import { usersAction } from '../users/usersSlice';
import { Link } from 'react-router-dom';
import '../../scss/Signup/Signup.scss';

const SignUp = () => {
	const [registerForm, setRegisterForm] = useState(RegisterForm);
	const [passwordCheck, setPasswordCheck] = useState("");

	const handleChangeForm = (e) => {
		const {value, name} = e.target;
		setRegisterForm({
			...registerForm,
			[name]: value
		});
	};

	const handleChangePasswordCheck = (e) => {
		setPasswordCheck(e.target.value);
	}

	const dispatch = useDispatch();

	const handleSubmit = (data) => {
		if (!registerForm.email) {
			alert("email을 입력하세요")
		}
		else if (!registerForm.name) {
			alert("이름을 입력하세요")
		}
		else if (!registerForm.nickname) {
			alert("닉네입을 입력하세요")
		}
		else if (!registerForm.password) {
			alert("비밀번호를 입력하세요")
		}
		else if (!passwordCheck) {
			alert("비밀번호를 다시 한 번 입력하세요")
		}
		else if (registerForm.password !== passwordCheck) {
			alert("비밀번호가 같지 않습니다.")
		}
		else {
			alert("회원가입 완료");
			dispatch(usersAction.addUsers(data));
			window.location = '/';
		}
	}

	return (
		<div className="signup-template">
			<div>
				<div className="header">Like Pinterest 회원가입</div>
				<div className="wrapper">
					<div className="email">
						<input className="email-input" placeholder="  이메일 주소" name="email" value={registerForm.email} onChange={handleChangeForm}/>
					</div>
					<div className="name">
						<input className="name-input" placeholder="  이름" name="name" value={registerForm.name} onChange={handleChangeForm}/>
					</div>
					<div className="nickname">
						<input className="nickname-input" placeholder="  닉네임" name="nickname" value={registerForm.nickname} onChange={handleChangeForm}/>
					</div>
					<div className="password">
						<input className="password-input" type="password" placeholder="  비밀번호" name="password" value={registerForm.password} onChange={handleChangeForm}/>
					</div>
					<div className="password-check">
						<input className="password-check-input" type="password" placeholder="  비밀번호 확인" value={passwordCheck} onChange={handleChangePasswordCheck}/>
					</div>
					<div className="submit">
						<button className="submit-btn" onClick={() => handleSubmit(registerForm)}>회원가입</button>
					</div>
					<div className="to-login">
						<span className="signage">아이디가 있으세요?</span>
						<Link className="link" to="/login">
							<span>로그인</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
