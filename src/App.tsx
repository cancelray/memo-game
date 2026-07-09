import GameProvider from './providers/GameProvider';

import Header from './components/header/Header';

import { Outlet } from 'react-router-dom';

function App() {
	return (
		<GameProvider>
			<Header />
			<Outlet />
		</GameProvider>
	);
}

export default App;
