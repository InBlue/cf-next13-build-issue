export const runtime = 'edge';
export default async function Home() {
	return (
		<main className="grid place-items-center h-screen w-screen">
			<div className="text-center">
				<h1 className="text-4xl font-bold">Home page</h1>
				<a href="/app/about" className="mt-5">
					Go to app/about page
				</a>
			</div>
		</main>
	);
}
