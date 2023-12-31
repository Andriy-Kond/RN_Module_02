// import { createSlice } from "@reduxjs/toolkit";

// import {
// 	shoppingListGet,
// 	shoppingListAdd,
// 	shoppingListRemove,
// } from "./shoppingListOperations";

// // & Fulfilled
// const getShoppingListFulfilled = (state, action) => {
// 	handleFulfilled(state);
// 	state.shoppingListSliceState = action.payload;
// };

// const addFulfilled = (state, action) => {
// 	handleFulfilled(state);
// 	state.shoppingListSliceState.push(action.payload);
// };

// const removeFulfilled = (state, action) => {
// 	handleFulfilled(state);
// 	const index = state.shoppingListSliceState.findIndex((ingredient) => {
// 		return ingredient.uniqId === action.payload;
// 	});
// 	state.shoppingListSliceState.splice(index, 1);
// };

// // & identic in all "fulFilled" states:
// const handleFulfilled = (state) => {
// 	state.isLoading = false;
// 	state.error = null;
// };

// // & identic in all "pending"
// const handlePending = (state) => {
// 	state.isLoading = true;
// };

// // & identic in all "rejected"
// const handleRejected = (state, action) => {
// 	state.isLoading = false;
// 	state.error = action.payload;
// 	// state.error = action.error.message;
// };

// const inputsInitialState = createSlice({
// 	name: "form",
// 	initialState: {
// 		inputs: {
// 			loginInput: "",
// 			emailInput: "",
// 			passwordInput: "",
// 		},
// 		login: "",
// 		email: "",
// 		password: "",
// 	},

// 	reducers: {},

// 	extraReducers: (builder) => {
// 		builder
// 			.addCase(shoppingListGet.pending, handlePending)
// 			.addCase(shoppingListGet.fulfilled, getShoppingListFulfilled)
// 			.addCase(shoppingListGet.rejected, handleRejected)

// 			.addCase(shoppingListAdd.pending, handlePending)
// 			.addCase(shoppingListAdd.fulfilled, addFulfilled)
// 			.addCase(shoppingListAdd.rejected, handleRejected)

// 			.addCase(shoppingListRemove.pending, handlePending)
// 			.addCase(shoppingListRemove.fulfilled, removeFulfilled)
// 			.addCase(shoppingListRemove.rejected, handleRejected);
// 	},
// });
