import styled from 'styled-components';
import { effects, spacing, typography, colors } from '../../tokens';

interface IProps {
	variant: 'primary' | 'secondary' | 'critical';
	focused?: boolean;
	headerButton?: boolean;
}

const primaryStyles = `
  background-color: ${colors['background-accent']['base']};
  color: ${colors.text.invert};
  border-radius: ${effects['border-radius']['border-radius-sm']};
  border: none;
  height: 48px;
  width: auto;
  letter-spacing: 0.02rem;
  padding: 0 ${spacing['space-inline-primitives']['space-inline-xxm']};
  box-shadow: ${effects['elevation-shadow']['shadow-md']};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${colors.text.hover};
  }
`;

const secondaryStyles = `
  background-color: transparent;
  color: ${colors.text.invert};
  border: none;
  height: 48px;
  width: auto;
  font-family: ${typography['text-xl']};
  letter-spacing: 0.02rem;
  padding: 0 ${spacing['space-inline-primitives']['space-inline-xxm']};
  box-shadow: ${effects['elevation-shadow']['shadow-md']};
  transition: background-color 0.2s, border 0.2s;
`;

export const ButtonComponent = styled.button<IProps>`
	position: relative;
	margin-top: 24px;
	border-radius: 10px;
	text-align: center;
	border: 1px solid gray;
	width: 500px;
	height: 60px;
	font-size: 24px;

	${({ variant }) => variant === 'primary' && primaryStyles}
	${({ variant }) => variant === 'secondary' && secondaryStyles}

    &:hover {
		background-color: ${colors['background-accent']['lighter']};
		border: 2px solid ${colors['background-accent']['dark']};
	}

	&:focus {
		outline: none;
	}

	&:focus:before {
		content: '';
		border: 2px solid ${({ focused }) => (focused ? colors.border.info : 'transparent')};
		position: absolute;
		top: -4px;
		left: -4px;
		right: -4px;
		bottom: -4px;
		border-radius: ${effects['border-radius']['border-radius-sm']};
		pointer-events: none;
	}

	@media (max-width: 660px) {
		width: auto;
		height: 60px;
	}
`;
