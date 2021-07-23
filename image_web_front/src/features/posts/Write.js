import React, { useState } from 'react';
import { UploadForm, PostForm } from '../../util/Forms';
import { addPostsImage, addPosts } from '../../api/posts';
import { useSelector } from 'react-redux';
import '../../scss/Posts/Write.scss';

const Write = () => {
	const [upLoadFileForm, setUpLoadFileForm] = useState(UploadForm);
	const [postForm, setPostForm] = useState(PostForm);
	const loginInfo = useSelector( (state) => state.users)
	const [image, setImage] = useState("")

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

	if (loginInfo.isLogin === false) {
		window.location = '/';
	}

	const handleChangeForm = (data) => {
		const formData = new FormData();
		formData.append('imageUpload', data.imageUpLoad[0]);
		addPostsImage(formData).then(res => {
			setPostForm({
				...postForm,
				image_url: `http://localhost:3000/upload_img/${res.data.image_url}`
			});
		})
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

		addPosts(postForm)
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
						<button className="imgsubmit" onClick={() => {handleChangeForm(upLoadFileForm)}}>업로드</button>
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
