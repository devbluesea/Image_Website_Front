import axios from 'axios';

const get_port = 8000;
const URL = "localhost";
const get_Route = "posts";

export const getPosts = ( data = null ) => {
	return axios.get(`http://${URL}:${get_port}/${get_Route}`, { params: data});
}

export const getPost = ( id ) => {
	return axios.get(`http://${URL}:${get_port}/${get_Route}/${id}`)
}

export const addPosts = (data) => {
	return axios.post(`http://${URL}:${get_port}/${get_Route}`, data)
}

export const updatePost = (data = null) => {
	return axios.put(`http://${URL}:${get_port}/${get_Route}/${data.id}`, data)
}

const image_port = 7000;
const Image_Route = "uploads";

export const addPostsImage = (upLoadData) => {
	return axios.post(`http://${URL}:${image_port}/${Image_Route}`, upLoadData);
}
