import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.tsx';

import store from './store.ts';

import './styles/index.ts';

createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<StrictMode>
			<App />
		</StrictMode>
		,
	</Provider>,
);
