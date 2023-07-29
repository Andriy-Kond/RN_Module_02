export const inputsReducer = (state, action) => {
	switch (action.type) {
		case "FOCUS_CHANGE":
			return {
				...state,
				inputs: {
					...state.inputs,
					[action.name]: action.isFocused,
				},
			};
		default:
			return state;
	}
};
