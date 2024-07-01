import { createRootRoute, Outlet } from '@tanstack/react-router';
import { GlobalStyles } from 'src/styles/GlobalStyles.js';

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<>
			<GlobalStyles />
			<Outlet />
		</>
	);
}
