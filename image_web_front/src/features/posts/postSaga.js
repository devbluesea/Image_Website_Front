import { call, takeLatest, put, all, fork } from "redux-saga/effects";
import { postsAction } from './postSlice';
import * as postsApi from '../../api/posts';

function* getPosts( action ) {
	const { getPostsSuccess, getPostsError } = postsAction;

	try {
		const payload = yield call( postsApi.getPosts, action.payload )
		yield put( getPostsSuccess({ data : payload.data }))
	}catch(error) {
		yield put( getPostsError({ error} ))
	}
}

function* watchGetPosts() {
	yield takeLatest( postsAction.getPosts, getPosts );
}

function* watchSetKeyword() {
	yield takeLatest( postsAction.setKeyword, getPosts);
}

export function* postsSaga() {
	yield all([
		fork(watchGetPosts),
		fork(watchSetKeyword)
	])
}
