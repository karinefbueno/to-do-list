import { createContext } from 'react';
import { BodyType } from '../../types/types';
// import { ReposProps } from '../types/types';

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
};

const context = createContext({} as ContextType);

export default context;
