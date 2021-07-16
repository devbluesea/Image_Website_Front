import React from 'react';

const Write = () => {

	const handleImageUpload = (data) => {
		const formData = new FormData();

		console.log("img upload")
	}

	const handleWriteSubmit = () => {
		console.log("img submit")
	}

	return (
		<div>
			{/*<form>*/}
				<div>
					<img/>
					<input type="file"/>
					<button onClick={() => {handleImageUpload()}}>이미지 업로드</button>
				</div>
				<div>
					<input/>
					<button onClick={() => {handleWriteSubmit()}}>글쓰기</button>
				</div>
			{/*</form>*/}
		</div>
	);
};

export default Write;
