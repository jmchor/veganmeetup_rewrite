import ReactDOM from 'react-dom/client';

import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/dist/loader';
import { DEFAULT } from '@public-ui/themes';
import { StrictMode } from 'react';

const router = createRouter({
	routeTree,
	defaultPreload: 'intent',
});

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

const link = createUploadLink({
	uri: 'http://localhost:3000/api/graphql',
	credentials: 'include',
	headers: {
		'Apollo-Require-Preflight': 'true',
	},
});

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link,
});

register(DEFAULT, defineCustomElements)
	.then(() => {
		ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
			<StrictMode>
				<ApolloProvider client={client}>
					<RouterProvider router={router} />
				</ApolloProvider>
			</StrictMode>
		);
	})
	.catch(console.warn);
