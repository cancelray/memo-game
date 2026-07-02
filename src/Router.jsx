import { useEffect, useState } from 'react';

import { BASE_URL } from './api/constants';

const useRoute = () => {
	const getCurrentPath = () => {
		const pathname = window.location.pathname;

		return pathname.startsWith(BASE_URL)
			? pathname.slice(BASE_URL.length - 1) || '/'
			: pathname;
	};

	const [path, setPath] = useState(getCurrentPath());

	useEffect(() => {
		const onLocationChange = () => {
			setPath(getCurrentPath());
		};

		window.addEventListener('popstate', onLocationChange);

		return () => {
			window.removeEventListener('popstate', onLocationChange);
		};
	}, []);

	return path;
};

const Router = (props) => {
	const { routes } = props;
	const path = useRoute();

	for (const route in routes) {
		if (path === route) {
			const Page = routes[route];
			return <Page />;
		}
	}

	const NotFound = routes['*'];
	return <NotFound />;
};

export default Router;
