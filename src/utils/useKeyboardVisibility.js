const { useState, useEffect } = require("react");
const { Keyboard } = require("react-native");

export const useKeyboardVisibility = () => {
	// keyboard visibility control
	const [keyboardVisible, setKeyboardVisible] = useState(false);
	useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener(
			"keyboardDidShow",
			() => {
				setKeyboardVisible(true);
			}
		);
		const keyboardDidHideListener = Keyboard.addListener(
			"keyboardDidHide",
			() => {
				setKeyboardVisible(false);
			}
		);
		return () => {
			keyboardDidShowListener.remove();
			keyboardDidHideListener.remove();
		};
	}, []);

	return keyboardVisible;
};
