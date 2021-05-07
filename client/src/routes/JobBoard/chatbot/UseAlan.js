import React, { useCallback, useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const UseAlan = () => {
	const [alanInstance, setAlanInstance] = useState();

	const COMMANDS = {
		RESPONSE: 'response200',
		HELP: 'responseHelp'
	};

	const responseAlan = useCallback(() => {
		alanInstance.playText('Hello there');
	}, [alanInstance]);

	const responseAlanHelp = useCallback(() => {
		alanInstance.playText('What do you need?');
	}, [alanInstance]);

	useEffect(() => {
		window.addEventListener(COMMANDS.RESPONSE, responseAlan);
		window.addEventListener(COMMANDS.HELP, responseAlanHelp);

		return () => {
			window.removeEventListener(COMMANDS.RESPONSE, responseAlan);
			window.removeEventListener(COMMANDS.HELP, responseAlanHelp);
		};
	}, [responseAlan]);

	useEffect(() => {
		if (alanInstance != null) return;
		setAlanInstance(
			alanBtn({
				bottom: '30px',
				right: '100px',
				key: '89e122f239610b33e1b7aedc19b5eb0d2e956eca572e1d8b807a3e2338fdd0dc/stage',
				onCommand: ({ command, payload }) => {
					window.dispatchEvent(new CustomEvent(command, { detail: payload }));
				}
			})
		);
	}, []);

	return null;
};

export default UseAlan;
