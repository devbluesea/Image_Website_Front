import React, { useState } from 'react';
import { UploadForm, PostForm } from '../../util/Forms';
import { addPostsImage, addPosts } from '../../api/posts';

const Write = () => {
	const [upLoadFileForm, setUpLoadFileForm] = useState(UploadForm);
	const [postForm, setPostForm] = useState(PostForm);

	const handleImageUpload = (e) => {
		const value = e.target.files;
		setUpLoadFileForm({
			...upLoadFileForm,
			imageUpLoad: value
		});
	};

	const handleChangeForm = (data) => {
		const formData = new FormData();
		formData.append('imageUpload', data.imageUpLoad[0]);
		addPostsImage(formData).then(res => {
			setPostForm({
				...postForm,
				image_url: `http://localhost:3000/upload_img/${res.data.image_url}`
			})
		})
	};

	const handleCommentChange = (e) => {
		const {value, name} = e.target;
		setPostForm({
			...postForm,
			[name]: value
		});
	}

	const handleWriteSubmit = () => {
		addPosts(postForm)
	}

	return (
		<div>
			{/*<form>*/}
				<div>
					{postForm.image_url ? <img src={postForm.image_url} alt="upload_img"/> : ''}
					<input type="file" name="imageUpload" onChange={handleImageUpload}/>
					<button onClick={() => {handleChangeForm(upLoadFileForm)}}>이미지 업로드</button>
				</div>
				<div>
					<div><textarea name="comment" value={postForm.comment} onChange={handleCommentChange}/></div>
					<div><textarea name="tag" value={postForm.tag} onChange={handleCommentChange}/></div>
					<button onClick={() => {handleWriteSubmit()}}>글쓰기</button>
				</div>
			{/*</form>*/}
		</div>
	);
};

export default Write;
