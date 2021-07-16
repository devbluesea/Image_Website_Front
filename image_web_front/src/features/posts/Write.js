import React, { useState } from 'react';
import { UploadForm } from '../../util/Forms';
import { addPostsImage } from '../../api/posts';

const Write = () => {
	const [upLoadFileForm, setUpLoadFileForm] = useState(UploadForm)

	const handleImageUpload = (e) => {
		const value = e.target.files;
		setUpLoadFileForm({
			...upLoadFileForm,
			imageUpLoad: value
		});
	}

	const handleChangeForm = (data) => {
		const formData = new FormData();
		formData.append('imageUpload', data.imageUpLoad[0]);
		addPostsImage(formData).then(res => {
			console.log(res)
		})
	};

	const handleWriteSubmit = (form) => {
		console.log(form)
		//const prints = document.getElementById('myFile').files;
		//console.log(prints)
	}

	return (
		<div>
			{/*<form>*/}
				<div>
					<img src=""/>
					<input id="myFile" type="file" name="imageUpload" onChange={handleImageUpload}/>
					<button onClick={() => {handleChangeForm(upLoadFileForm)}}>이미지 업로드</button>
				</div>
				<div>
					<input/>
					<button onClick={() => {handleWriteSubmit(upLoadFileForm)}}>글쓰기</button>
				</div>
			{/*</form>*/}
		</div>
	);
};

export default Write;
