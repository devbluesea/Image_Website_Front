export const RegisterForm = {
		email: "",
		name: "",
		nickname: "",
		password: ""
	}

export const LoginForm = {
	email: "",
	password: ""
}

export const UploadForm = {
	imageUpLoad: {},
}

export const PostForm = {
	image_url: "",
	comment: "",
	tag:"",
	isLike: false,
	countLike: 0,
	writer: {}
}

export const SearchForm = {
	tag: ""
}

export const CommentForm = {
	postId: "",
	postData:{
		content: "",
		name: ""
	}
}
