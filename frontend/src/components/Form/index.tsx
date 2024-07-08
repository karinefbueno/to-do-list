import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import context from '../../context/context';
import { handleChange } from '../../utils/handleChange';
import { validateFormData } from '../../utils/validateForm';
import { ContainerForm, ContainerInput, FormComponent, Input, MessageError } from './style';

type FormProps = {
	input?: React.ReactNode;
	buttonLogin?: React.ReactNode;
	button?: React.ReactNode;
	isLoginForm?: boolean;
	onSubmit?: (e: React.FormEvent<HTMLFormElement>, formData: typeof INITIAL_VALUE) => void;
};

const INITIAL_VALUE = {
	email: '',
	password: '',
	name: '',
};

const Form: React.FC<FormProps> = ({ input, buttonLogin, button, onSubmit }) => {
	// const [formData, setFormData] = useState(INITIAL_VALUE);
	const { formData, setFormData } = useContext(context);

	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const errors = validateFormData(formData);
		if (errors.email) {
			setEmailError(errors.email);
		} else {
			setEmailError('');
		}
		if (errors.password) {
			setPasswordError(errors.password);
		} else {
			setPasswordError('');
		}

		if (!errors.email && !errors.password) {
			if (onSubmit) {
				onSubmit(e, formData);
			}
			setFormData(INITIAL_VALUE);
			navigate('/profile');
		}
	};

	return (
		<ContainerForm>
			<FormComponent onSubmit={handleSubmit}>
				{input}
				<ContainerInput>
					<label htmlFor='email'>
						<Input name='email' onChange={handleChange(setFormData)} value={formData.email} type='email' placeholder='E-mail' />
					</label>
					{emailError && <MessageError>{emailError}</MessageError>}
				</ContainerInput>
				<ContainerInput>
					<label htmlFor='password'>
						<Input
							name='password'
							onChange={handleChange(setFormData)}
							value={formData.password}
							type='password'
							placeholder='Senha'
							minLength={6}
						/>
					</label>
					{passwordError && <MessageError>{passwordError}</MessageError>}
				</ContainerInput>

				{buttonLogin}
				{button}
			</FormComponent>
		</ContainerForm>
	);
};

export default Form;
