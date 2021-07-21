import axios from "axios";

const get_port = 8000;
const URL = "localhost";
const get_Route = "posts";
const get_Route2 = "comments"

export const getComments = ( data = null ) => {
	return axios.get(`http://${URL}:${get_port}/${get_Route}/${data}/${get_Route2}`);
}

export const addComment = ( data = null ) => {
	console.log(data);
	console.log(`http://${URL}:${get_port}/${get_Route}/${data.postId}/${get_Route2}`);
	return axios.post(`http://${URL}:${get_port}/${get_Route}/${data.postId}/${get_Route2}`, data.postData);
}
