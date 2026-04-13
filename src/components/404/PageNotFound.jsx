import styles from './PageNotFound.module.css';

const PageNotFound = () => {
	return (
		<div className={styles.errorPage}>
			<p>404</p>
			<p>Page not found</p>
		</div>
	);
};

export default PageNotFound;
