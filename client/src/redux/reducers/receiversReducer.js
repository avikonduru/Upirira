import {
	SET_RECEIVERS,
	SET_USER_RECEIVER,
	SET_RECEIVER_DASH_LINK,
	LOADING_RECEIVERS,
	CLEAR_RECEIVERS,
	RECEIVERS_ERROR,
	LOGOUT
} from '../types';

const initialState = {
	receiversData: [],
	userReceiver: null,
	dashLink: null,
	loading: true
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SET_RECEIVERS:
			return {
				...state,
				loading: false,
				receiversData: payload
			};
		case SET_USER_RECEIVER:
			return {
				...state,
				loading: false,
				userReceiver: payload
			};
		case SET_RECEIVER_DASH_LINK:
			return {
				...state,
				loading: false,
				dashLink: payload
			};
		case CLEAR_RECEIVERS:
		case RECEIVERS_ERROR:
		case LOGOUT:
			return {
				...state,
				loading: false,
				receiversData: [],
				userReceiver: null,
				dashLink: null
			};
		case LOADING_RECEIVERS:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}
