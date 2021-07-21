import { createSlice } from "@reduxjs/toolkit";
import { reducerUtils } from "../../util/async.utill";

const initialState = {
	comments : reducerUtils.initial(),
	comment : reducerUtils.initial()
};

const name = "comments";

const sclice = createSlice({
	name,
	initialState,
	reducers : {
		getComments( state ) {
			state.comments = reducerUtils.loading()
		},
		getCommentsSuccess( state, { payload }) {
			state.comments = reducerUtils.success(payload.data)
		},
		getCommentsError( state, { payload }) {
			state.comments = reducerUtils.error(payload)
		},

		addComments( state ) {
			state.comment = reducerUtils.loading()
		},
		addCommentsSuccess( state, { payload }) {
			state.comment = reducerUtils.success(payload.data)
		},
		addCommentsError( state, { payload }) {
			state.comment = reducerUtils.error(payload)
		}
	}
})

export const commentsReducer = sclice.reducer;
export const commentsAction = sclice.actions;
export const COMMENTS = sclice.name;
