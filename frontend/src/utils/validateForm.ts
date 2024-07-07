export const validateFormData = (formData: { email: string; password: string }) => {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

	const errors = {
		email: '',
		password: '',
	};

	if (!emailRegex.test(formData.email)) {
		errors.email = 'E-mail Inválido';
	}
	if (!passwordRegex.test(formData.password)) {
		errors.password = 'Senha Inválida';
	}

	return errors;
};
