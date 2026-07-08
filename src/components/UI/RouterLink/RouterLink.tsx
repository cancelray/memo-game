import { BASE_URL } from '../../../api/constants';

import type { RouterLinkProps } from '../../../types/props/RouterLinkProps.type';

import styles from './RouterLink.module.css';

const RouterLink = (props: RouterLinkProps) => {
	const { href, children } = props;

	const routerLinkClick = (event: React.MouseEvent) => {
		event.preventDefault();

		window.history.pushState({}, '', href);
		window.dispatchEvent(new PopStateEvent('popstate'));
	};

	return (
		<a
			href={`${BASE_URL}${href}`}
			onClick={routerLinkClick}
			className={styles.link}
		>
			{children}
		</a>
	);
};

export default RouterLink;
