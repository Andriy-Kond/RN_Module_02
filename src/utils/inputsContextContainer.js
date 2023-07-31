import { useReducer, createContext } from "react";
import { inputsReducer } from "./inputsReducer";
import { initialState } from "./initialState";

export const StateContext = createContext();

export const InputsContextContainer = ({ children }) => {
	const [inputsState, dispatch] = useReducer(inputsReducer, initialState);

	return (
		<StateContext.Provider value={{ inputsState, dispatch }}>
			{children}
		</StateContext.Provider>
	);
};
