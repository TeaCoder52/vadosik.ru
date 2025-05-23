import { LINKS } from '../data/links'

export function SocialButtons() {
	return (
		<div className='flex gap-4'>
			{LINKS.map(({ href, icon: Icon, label }) => (
				<a
					key={label}
					href={href}
					target='_blank'
					rel='noopener noreferrer'
					className='flex items-center gap-2 bg-transparent border border-zinc-700 hover:border-zinc-500 transition px-4 py-2 rounded text-zinc-300 hover:text-white font-semibold shadow-sm'
				>
					<Icon size={20} />
					{label}
				</a>
			))}
		</div>
	)
}
