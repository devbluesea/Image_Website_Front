import { call, takeLatest, put, all, fork } from "@redux-saga/core/effects";
import { commentsAction } from "./commentsSlice";
import * as commentsApi from '../../api/comments';
import { select } from "redux-saga/effects";

function* getComments( action ){

	const { getCommentsSuccess, getCommentsError } = commentsAction;

	try{
		const payload = yield call( commentsApi.getComments, action.payload)
		yield put( getCommentsSuccess({ data : payload.data }))
	}catch(error){
		yield put( getCommentsError({ error }))
	}
};

function* addComments( action ){

	const { addCommentsSuccess, addCommentsError } = commentsAction;

	try{
		const payload = yield call( commentsApi.addComment, action.payload)
		yield put( addCommentsSuccess({ data : payload.data }))
	}catch(error){
		yield put( addCommentsError({ error }))
	}
};

function* updateComment() {
	const comment = yield select( (state) => {
		return state.comments.comment
	})
	yield put(commentsAction.getComments(comment.data.postId))
}

function* watchGetComments() {
	yield takeLatest( commentsAction.getComments, getComments);
}

function* watchAddComments() {
	yield takeLatest( commentsAction.addComments, addComments);
}

function* watchAddCommentsSuccess() {
	yield takeLatest( commentsAction.addCommentsSuccess, updateComment);
}

export function* commentsSaga(){
	yield all([
		fork(watchGetComments),
		fork(watchAddComments),
		fork(watchAddCommentsSuccess)
	])
}
