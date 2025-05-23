export function TechStack() {
	const backend = ['NestJS', 'Node.js', 'Express', 'Postgres']
	const frontend = ['Next.js', 'React', 'Tailwind CSS', 'HTML', 'TypeScript']

	return (
		<>
			<h2 className='text-green-400 text-lg font-semibold mb-2'>
				Backend:
			</h2>
			<div className='flex flex-wrap gap-3 mb-6'>
				{backend.map((tech) => (
					<span
						key={tech}
						className='bg-zinc-800 text-zinc-300 px-3 py-1 rounded font-mono text-sm'
					>
						{tech}
					</span>
				))}
			</div>

			<h2 className='text-green-400 text-lg font-semibold mb-2'>
				Frontend:
			</h2>
			<div className='flex flex-wrap gap-3'>
				{frontend.map((tech) => (
					<span
						key={tech}
						className='bg-zinc-800 text-zinc-300 px-3 py-1 rounded font-mono text-sm'
					>
						{tech}
					</span>
				))}
			</div>
		</>
	)
}
