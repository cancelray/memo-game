import { useEffect, useState } from 'react';

const useRoute = () => {
	const [path, setPath] = useState(window.location.pathname);

	useEffect(() => {
		const onLocationChange = () => {
			setPath(window.location.pathname);
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
