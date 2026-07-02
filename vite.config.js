import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const isProd = mode === 'production';

	return {
		base: isProd ? '/memo-game/' : '/',
		plugins: [react()],
	};
});
