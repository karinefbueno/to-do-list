import { useState } from 'react';
import context from './context.js';
import React from 'react';

type ProviderProps = {
	children: React.ReactNode;
};

function Provider({ children }: ProviderProps) {
	const INITIAL_VALUE = {
		email: '',
		password: '',
		name: '',
	};
	const [formData, setFormData] = useState(INITIAL_VALUE);
	const [loading, setLoading] = useState<boolean>(false);

	const contex = {
		formData,
		setFormData,
		loading,
	};

	return <context.Provider value={contex}>{children}</context.Provider>;
}

export default Provider;
