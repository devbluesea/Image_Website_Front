import axios from "axios";

const get_port = 8000;
const URL = "localhost";
const get_Route = "comments";

export const getComments = ( data = null ) => {
	return axios.get(`http://${URL}:${get_port}/${get_Route}`, { params: data});
}
