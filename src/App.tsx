import { TechStack } from './components/tech-stack'
import { Projects } from './components/projects'
import { TerminalHeader } from './components/terminal-header'
import { SocialButtons } from './components/social-buttons'
import { UserDescription } from './components/description'

export function App() {
	return (
		<main className='min-h-screen bg-zinc-950 flex justify-center items-center px-4 py-12 font-source-code-pro'>
			<div className='max-w-5xl w-full flex gap-8'>
				<section className='flex flex-col gap-8 w-xl'>
					<div className='flex-1 bg-zinc-900 rounded-lg shadow-lg ring-1 ring-zinc-800 font-mono text-zinc-200 flex flex-col'>
						<TerminalHeader title='About' />
						<div className='px-6 py-6 flex-1 overflow-auto'>
							<UserDescription />
							<div className='mt-6'>
								<SocialButtons />
							</div>
						</div>
					</div>
					<div className='flex-1 bg-zinc-900 rounded-lg shadow-lg ring-1 ring-zinc-800 font-mono text-zinc-200 flex flex-col'>
						<TerminalHeader title='Contacts' />
						<div className='px-6 py-6 flex-1 overflow-auto'>
							<p>
								Email:{' '}
								<a
									href='mailto:support@teacoder.ru'
									className='text-cyan-400 hover:underline'
								>
									support@teacoder.ru
								</a>
							</p>
							<p>
								Telegram:{' '}
								<a
									href='https://t.me/Vados_torpeda'
									target='_blank'
									rel='noopener noreferrer'
									className='text-cyan-400 hover:underline'
								>
									@Vados_torpeda
								</a>
							</p>
						</div>
					</div>
				</section>

				<section className='flex flex-col gap-8 w-96'>
					<div className='flex-1 bg-zinc-900 rounded-lg shadow-lg ring-1 ring-zinc-800 font-mono text-zinc-200 flex flex-col'>
						<TerminalHeader title='Tech Stack' />
						<div className='px-6 py-6 overflow-auto'>
							<TechStack />
						</div>
					</div>

					<div className='flex-1 bg-zinc-900 rounded-lg shadow-lg ring-1 ring-zinc-800 font-mono text-zinc-200 flex flex-col'>
						<TerminalHeader title='My Projects' />
						<div className='px-6 py-6 overflow-auto'>
							<Projects />
						</div>
					</div>
				</section>
			</div>
		</main>
	)
}
