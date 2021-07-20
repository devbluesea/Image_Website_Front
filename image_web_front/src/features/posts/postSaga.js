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

function* getPost( action ) {
	const { getPostSuccess, getPostError } = postsAction;

	try {
		const payload = yield call( postsApi.getPost, action.payload )
		yield put( getPostSuccess({ data : payload.data }))
	}catch(error) {
		yield put( getPostError({ error} ))
	}
}

function* putPost( action ) {
	const { putPostSuccess, putPostError } = postsAction;

	try {
		const payload = yield call( postsApi.updatePost, action.payload )
		yield put( putPostSuccess({ data : payload.data }))
	}catch(error) {
		yield put( putPostError({ error} ))
	}
}

function* watchGetPosts() {
	yield takeLatest( postsAction.getPosts, getPosts );
}

function* watchGetPost() {
	yield takeLatest( postsAction.getPost, getPost );
}

function* watchSetKeyword() {
	yield takeLatest( postsAction.setKeyword, getPosts);
}

function* watchPutPost() {
	yield takeLatest( postsAction.putPost, putPost);
}

export function* postsSaga() {
	yield all([
		fork(watchGetPosts),
		fork(watchPutPost),
		fork(watchSetKeyword),
		fork(watchGetPost)
	])
}
