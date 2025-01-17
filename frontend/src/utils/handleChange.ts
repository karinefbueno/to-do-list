import React, { ChangeEvent } from 'react';

export const handleChange =
	<T>(setState: React.Dispatch<React.SetStateAction<T>>) =>
	(event: ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = event.target;
		setState((prevState) => ({
			...prevState,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};
