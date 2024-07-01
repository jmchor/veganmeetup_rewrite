/* eslint-disable @typescript-eslint/no-explicit-any */
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), TanStackRouterVite()],
	build: {
		rollupOptions: {
			output: {
				manualChunks(id: any) {
					if (id.includes('node_modules')) {
						return id.toString().split('node_modules/')[1].split('/')[0].toString();
					}
				},
			},
		},
	},
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
