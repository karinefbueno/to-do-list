import React from 'react';

import { ButtonComponent } from './style';

type ButtonProp = {
	onclick?: () => void;
	text: string;
};

function Button({ onclick, text }: ButtonProp) {
	return <ButtonComponent onClick={onclick}>{text}</ButtonComponent>;
}

export default Button;
