import { createContext } from 'react';
import { BodyType } from '../../types/types';
import { NewEventType } from '../../types/types';

type ContextType = {
	setFormData: React.Dispatch<
		React.SetStateAction<{
			email: string;
			password: string;
			name: string;
		}>
	>;
	loading: boolean;
	formData: BodyType;
	setNewEvent: React.Dispatch<React.SetStateAction<NewEventType>>;
	newEvent: NewEventType;
	INICIAL: NewEventType;
};

const context = createContext({} as ContextType);

export default context;
