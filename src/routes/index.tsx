import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: LandingPage,
});

function LandingPage() {
	return (
		<>
			<h1>Landing Page</h1>
		</>
	);
}
