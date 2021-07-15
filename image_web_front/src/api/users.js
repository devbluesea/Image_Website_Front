import axios from 'axios';

const port = 8000;
const post_URL = "localhost";
const post_Route = "users";

export const addUsers = (data) => {
	return axios.post(`http://${post_URL}:${port}/${post_Route}`, data);
}
