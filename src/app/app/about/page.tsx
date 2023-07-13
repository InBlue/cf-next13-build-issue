import ExampleClientComponent from './_components/example';

export const runtime = 'edge';
export default async function Home() {
	return (
		<main className="grid place-items-center h-screen w-screen">
			<div className="flex items-center flex-col">
				<a href="/">{'<<'} go back</a>
				<h1 className="text-4xl font-bold mb-5">About page</h1>
				<ExampleClientComponent />
			</div>
		</main>
	);
}
