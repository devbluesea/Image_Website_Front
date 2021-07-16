import { createSlice } from '@reduxjs/toolkit';
import { reducerUtils } from '../../util/async.utill';

const initialState = {
	posts : reducerUtils.initial(),
	keyword : null
}

const name = "posts";

const slice = createSlice({
	name,
	initialState,
	reducers : {
		setKeyword( state, {payload}) {
			state.keyword = payload.data
		},
		getPosts( state ) {
			state.posts = reducerUtils.loading()
		},
		getPostsSuccess( state, { payload } ) {
			state.posts = reducerUtils.success(payload.data)
		},
		getPostsError( state, { payload }) {
			state.posts = reducerUtils.error(payload)
		}
	}
})

export const postsReducer = slice.reducer;
export const postsAction = slice.actions;
export const POSTS = slice.name;
