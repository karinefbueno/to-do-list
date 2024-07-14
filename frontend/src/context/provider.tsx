import { useState } from 'react';
import context from './context.js';
import React from 'react';
import { NewEventType } from '../../types/types.js';

type ProviderProps = {
	children: React.ReactNode;
};

function Provider({ children }: ProviderProps) {
	const INITIAL_VALUE = {
		email: '',
		password: '',
		name: '',
	};

	const INICIAL = {
		title: '',
		description: '',
		priority: '',
	};

	const [formData, setFormData] = useState(INITIAL_VALUE);
	const [loading, setLoading] = useState<boolean>(false);
	const [newEvent, setNewEvent] = useState<NewEventType>(INICIAL);

	const contex = {
		formData,
		setFormData,
		loading,
		newEvent,
		setNewEvent,
		INICIAL,
	};

	return <context.Provider value={contex}>{children}</context.Provider>;
}

export default Provider;
