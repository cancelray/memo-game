import styles from './RouterLink.module.css';

const RouterLink = (props) => {
	const { href, children, ...rest } = props;

	const routerLinkClick = (event) => {
		event.preventDefault();

		window.history.pushState({}, '', href);
		window.dispatchEvent(new PopStateEvent('popstate'));
	};

	return (
		<a
			href={href}
			onClick={routerLinkClick}
			className={styles.link}
			{...rest}
		>
			{children}
		</a>
	);
};

export default RouterLink;
