'use client';

import { useState } from 'react';

export default function ExampleClientComponent() {
	const [x, setX] = useState(0);
	return (
		<div className="bg-white/10 px-4 py-5 rounded-lg text-center">
			<p>Client component</p>
			<hr className="my-2" />
			<p>State is: {x}</p>
			<button onClick={() => setX((c) => (c += 1))}>Increment</button>
		</div>
	);
}
