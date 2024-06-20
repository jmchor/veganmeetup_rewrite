import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), TanStackRouterVite()],
	resolve: {
		alias: {
			src: '/src',
			components: '/src/components',
			assets: '/src/assets',
			lib: '/src/lib',
			gql: '/src/gql',
			styles: '/src/styles',
			services: '/src/services',
		},
	},
});
