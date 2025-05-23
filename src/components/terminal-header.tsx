interface TerminalHeaderProps {
	title: string
}

export function TerminalHeader({ title }: TerminalHeaderProps) {
	return (
		<div className='relative bg-zinc-800 rounded-t-lg select-none px-4 py-2 flex justify-center items-center'>
			<div className='absolute left-4 flex space-x-2'>
				<span className='w-3 h-3 bg-red-500 rounded-full'></span>
				<span className='w-3 h-3 bg-yellow-400 rounded-full'></span>
				<span className='w-3 h-3 bg-green-500 rounded-full'></span>
			</div>
			<div className='text-zinc-400 text-sm font-semibold tracking-wide'>
				{title}
			</div>
		</div>
	)
}
