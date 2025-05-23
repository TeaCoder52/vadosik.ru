import { PROJECTS } from '../data/projects'

export function Projects() {
	return (
		<ul className='list-disc list-inside text-zinc-400 space-y-2'>
			{PROJECTS.map(({ link, title }) => (
				<li key={title}>
					<a
						href={link}
						target='_blank'
						rel='noopener noreferrer'
						className='text-cyan-400 hover:underline'
					>
						{title}
					</a>
				</li>
			))}
		</ul>
	)
}
