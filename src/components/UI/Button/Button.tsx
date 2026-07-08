import type { ButtonProps } from '../../../types/props/ButtonProps.type';

import styles from './Button.module.css';

const Button = (props: ButtonProps) => {
	const { onClick, children } = props;
	return (
		<button
			className={styles.button}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
