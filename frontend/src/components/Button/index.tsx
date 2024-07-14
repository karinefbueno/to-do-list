import { useState } from 'react';
import { ButtonComponent } from './style';

type ButtonProp = {
	onclick?: () => void;
	text: string;
	variant: 'primary' | 'secondary';
};

function Button({ onclick, text, variant = 'primary' }: ButtonProp) {
	const [focused, setFocused] = useState(false);

	return (
		<ButtonComponent
			variant={variant}
			onClick={onclick}
			onFocus={() => setFocused(true)}
			onBlur={() => setFocused(false)}
			focused={focused}
		>
			{text}
		</ButtonComponent>
	);
}

export default Button;
