import React, { useState, useEffect } from 'react';
import { UploadForm, PostForm } from '../../util/Forms';
import { addPostsImage, addPosts } from '../../api/posts';
import { useSelector, useDispatch } from 'react-redux';
import { getCookie } from '../../util/CookieUtil';
import { usersAction } from '../users/usersSlice';
import { getUsersById } from '../../api/users';
import '../../scss/Posts/Write.scss';

const Write = () => {
	const [upLoadFileForm, setUpLoadFileForm] = useState(UploadForm);
	const [postForm, setPostForm] = useState(PostForm);
	const loginInfo = useSelector( (state) => state.users)
	const [image, setImage] = useState("")
	const [upLoadSuccess, setUpLoadSuccess] = useState(false)
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


	const onFileChange = (e) => {
		const { target : {files} } = e;
		const theFile = files[0];
		const reader = new FileReader();
		reader.readAsDataURL(theFile);
		reader.onloadend = (finishedEvent) =>{
		const {currentTarget : { result }} = finishedEvent;
		setImage(result);
		setUpLoadFileForm({
			...upLoadFileForm,
			imageUpLoad: e.target.files
		});
	}
}

	if (loginInfo.isLogin === false && loginCookie > 0 ) {
		console.log("setIsLogin")
		console.log("isLogin :", loginInfo.isLogin);
		console.log("Cookie : ", loginCookie);
	}

	if (loginInfo.isLogin === false && !(loginCookie > 0)) {
		window.location = '/';
		console.log("isLogin : ", loginInfo.isLogin);
		console.log("Cookie : ", loginCookie);
	}

	const handleChangeForm = (data) => {
		const formData = new FormData();
		formData.append('imageUpload', data.imageUpLoad[0]);
		addPostsImage(formData).then(res => {
			setPostForm({
				...postForm,
				image_url: `http://localhost:7000/filelist/${res.data.image_url}`
			});
		});
		setUpLoadSuccess(true);
	};

	const handleCommentChange = (e) => {
		const {value, name} = e.target;
		setPostForm({
			...postForm,
			[name]: value,
			writer: loginInfo.users.data[0]
		});
	}

	const handleWriteSubmit = () => {
		if (!upLoadSuccess && !image) {
			alert("이미지를 등록하세요")
		}
		else if (!upLoadSuccess && image) {
			alert("업로드 버튼을 누르세요")
		}
		else if (!postForm.comment) {
			alert("comment를 입력하세요")
		}
		else if (!postForm.tag) {
			alert("tag를 입력하세요")
		}
		else {
			addPosts(postForm).then(
				alert("글쓰기 완료"),
				window.location = '/'
			);
		}
	}


	return (
		<div className="Write-template">
			<div className="wrapper">
				<div className="image">
					<div className="screen">
						{image && <img className="picture" src={image} alt="upload_img"/>}
					</div>
					<div className="input">
						<div><input type="file" name="imageUpload" onChange={onFileChange}/></div>
						{ upLoadSuccess ? <div className="state-true">이미지가 업로드 되었습니다.</div>
						: <div className="state-false">이미지를 업로드 해주세요.</div> }
						{image && <button className="imgsubmit" onClick={() => {handleChangeForm(upLoadFileForm)}}>업로드</button>}
					</div>
				</div>
				<div className="texts">
					<div className="comment">
						<span >Comment</span>
						<span className="txtarea"><textarea name="comment" value={postForm.comment} onChange={handleCommentChange}/></span>
					</div>
					<div className="tag">
						<span>Image Tag</span>
						<span className="txtarea"><textarea name="tag" value={postForm.tag} onChange={handleCommentChange}/></span>
					</div>
				</div>
				<div className="submit">
					 <button className="submit-btn" onClick={() => {handleWriteSubmit()}}>글쓰기</button>
				</div>
			</div>
		</div>
	);
};

export default Write;
