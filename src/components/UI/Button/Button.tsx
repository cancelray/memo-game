import styles from './Button.module.css';

const Button = (props) => {
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
