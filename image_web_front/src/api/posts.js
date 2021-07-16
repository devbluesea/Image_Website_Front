import axios from 'axios';

const get_port = 8000;
const URL = "localhost";
const get_Route = "posts";

export const getPosts = () => {
	return axios.get(`http://${URL}:${get_port}/${get_Route}`);
}

export const addPosts = (data) => {
	return axios.post(`http://${URL}:${get_port}/${get_Route}`, data)
}

const image_port = 7000;
const Image_Route = "uploads";

export const addPostsImage = (upLoadData) => {
	return axios.post(`http://${URL}:${image_port}/${Image_Route}`, upLoadData);
}
