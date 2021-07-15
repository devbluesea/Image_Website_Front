import { call, takeLatest, put, all, fork, select, delay } from "@redux-saga/core/effects";
import { usersAction } from "./usersSlice";
import * as usersApi from '../../api/users';

function* addUsers( action ){

	const { addUsersSuccess, addUsersError } = usersAction;

	try{
		const payload = yield call( usersApi.addUsers, action.payload)
		yield put( addUsersSuccess({ data : payload.data }))
	}catch(error){
		yield put( addUsersError({ error }))
	}
}

function* watchAddUsers(){
	yield takeLatest( usersAction.addUsers, addUsers);
}

export function* usersSaga(){
	yield all([
		fork(watchAddUsers)
	])
}