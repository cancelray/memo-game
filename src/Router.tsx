import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import PageNotFound from './components/404/PageNotFound';
import GamePage from './pages/GamePage/GamePage';
import IndexPage from './pages/IndexPage/IndexPage';
import LeaderboardPage from './pages/LeaderboardPage/LeaderboardPage';

const currentMode = import.meta.env.MODE;
const isProd = currentMode === 'production';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <App />,
			children: [
				{ index: true, element: <IndexPage /> },
				{ path: 'game', element: <GamePage /> },
				{ path: 'leaderboard', element: <LeaderboardPage /> },
				{ path: '*', element: <PageNotFound /> },
			],
		},
	],
	{
		basename: isProd ? '/memo-game/' : '/',
	},
);

export default router;
