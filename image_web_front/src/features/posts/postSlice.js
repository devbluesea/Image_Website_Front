import { createSlice } from '@reduxjs/toolkit';
import { reducerUtils } from '../../util/async.utill';

const initialState = {
	posts : reducerUtils.initial(),
	post : reducerUtils.initial(),
	keyword : null,
	current_page : 1,
	List : []
};

const name = "posts";

const slice = createSlice({
	name,
	initialState,
	reducers : {
		setKeyword( state, {payload}) {
			state.keyword = payload.data
			state.List = []
		},

		getPosts( state ) {
			state.posts = reducerUtils.loading()
		},
		getPostsSuccess( state, { payload } ) {
			state.posts = reducerUtils.success(payload.data)
			state.List = [...state.List , ...payload.data]
		},
		getPostsError( state, { payload }) {
			state.posts = reducerUtils.error(payload)
		},

		getPost( state ) {
			state.post = reducerUtils.loading()
		},
		getPostSuccess( state, { payload } ) {
			state.post = reducerUtils.success(payload.data);
		},
		getPostError( state, { payload }) {
			state.post = reducerUtils.error(payload)
		},


		putPost( state ) {
			state.post = reducerUtils.loading()
		},
		putPostSuccess( state, { payload } ) {
			state.post = reducerUtils.success(payload.data)
		},
		putPostError( state, { payload }) {
			state.post = reducerUtils.error(payload)
		},

		setCurrentPage( state, {payload}) {
			state.current_page = payload
		}
	}
})

export const postsReducer = slice.reducer;
export const postsAction = slice.actions;
export const POSTS = slice.name;
