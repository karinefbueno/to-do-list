import Button from '../../components/Button/index.js';
import Form from '../../components/Form/index.js';
import { ContainerLogin, Title } from './style.ts';
import { Input } from '../../components/Form/style.js';
import { useState, useContext } from 'react';
import { handleChange } from '../../utils/handleChange.js';
import context from '../../context/context.js';
import { fetchCreateUser } from '../../service/api.ts';

function Login() {
	const [showForm, setShowForm] = useState(false);
	const { formData, setFormData } = useContext(context);

	const handleClick = () => setShowForm(!showForm);
	const handleRegisterClick = async () => {
		await fetchCreateUser(formData);
	};

	return (
		<ContainerLogin>
			<Title>To do List</Title>

			{!showForm && (
				<Form
					buttonLogin={<Button variant={'primary'} text='Login' />}
					button={<Button variant={'primary'} text='Criar nova conta' onclick={handleClick} />}
				></Form>
			)}
			{showForm && (
				<Form
					input={
						<label htmlFor='nome'>
							<Input
								type='text'
								name='name'
								onChange={handleChange(setFormData)}
								value={formData.name}
								min={2}
								placeholder='Nome'
							/>
						</label>
					}
					button={<Button variant={'primary'} onclick={handleRegisterClick} text='Registrar' />}
				></Form>
			)}
		</ContainerLogin>
	);
}

export default Login;
