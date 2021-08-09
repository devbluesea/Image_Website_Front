import React,{useEffect} from 'react';
import Profile_IMG from '../../images/profile_img_defualt.png'
import { useSelector, useDispatch } from 'react-redux';
import { getCookie, setCookie } from '../../util/CookieUtil';
import { getUsersById } from '../../api/users';
import { usersAction } from '../../features/users/usersSlice';

const MyPageList = () => {
	const loginInfo = useSelector( (state) => state.users);
	const loginCookie = getCookie("loginInfo");
	let loginForm = {};

	const dispatch = useDispatch();

	getUsersById(loginCookie).then((res) => {
		loginForm = {
			email : res.data.email,
			password : res.data.password
		}
	});

	useEffect( () => {
		dispatch(usersAction.getUsers(loginForm));
	}, [dispatch])

	const handleClickLogout = () => {
		setCookie("loginInfo",null, 1);
		console.log("setCookie");
		window.location = '/';
	}

	if (loginInfo.isLogin === false && !loginCookie) {
		window.location = '/'
	}

	return (
		<div>
			<div>
				<img src={ Profile_IMG } alt="profile_images"></img>
			</div>
			{console.log("aa",loginInfo)}
				{/*<div>
					{loginInfo.users.data[0].email}
				</div>
				<div>
					{loginInfo.users.data[0].name}
				</div>
				<div>
					{loginInfo.users.data[0].nickname}
				</div>*/}
				<div>마이페이지</div>
				<div onClick={handleClickLogout}>로그아웃</div>
			{/*<div>{loginInfo.users.data[0]}</div>*/}
		</div>
	);
};

export default MyPageList;
