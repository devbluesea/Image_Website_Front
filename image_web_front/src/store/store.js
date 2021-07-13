import { configureStore, combineReducers} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import { all, call } from 'redux-saga/effects';
import logger from 'redux-logger';
import { postsReducer, POSTS} from '../features/posts/postSlice';
import { postsSaga } from '../features/posts/postSaga'

export const rootReducer = combineReducers ({
	[POSTS] : postsReducer
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
	yield all([
		call(postsSaga),
	])
}

export default function createStore() {
	const store = configureStore({
		reducer : rootReducer,
		devTools : true,
		middleware : [ sagaMiddleware, logger]
	})

	sagaMiddleware.run(rootSaga);

	return store;
};

