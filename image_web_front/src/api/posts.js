import axios from 'axios';

const port = 8000;
const get_URL = "localhost";
const get_Route = "posts";

export const getPosts = () => {
	return axios.get(`http://${get_URL}:${port}/${get_Route}`);
}
