import React, { useState } from "react";
import { View } from "react-native";

// removes "flickering" when switching input focus
export const FocusManager = ({ children, styleFocusManager }) => {
	const [isInputFocused, setInputFocused] = useState(false);

	const handleFocusChange = (isFocused) => {
		setInputFocused(isFocused);
	};

	return (
		<View
			style={styleFocusManager}
			onTouchStart={() => handleFocusChange(false)}
			onStartShouldSetResponder={() => true}
			onFocused={isInputFocused}>
			{children}
		</View>
	);
};
