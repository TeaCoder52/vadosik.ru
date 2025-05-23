import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd())

	const PORT = Number(env['VITE_PORT']) ?? 6000
	const ALLOWED_HOSTS = env['VITE_ALLOWED_HOSTS']
		? env['VITE_ALLOWED_HOSTS'].split(',').map((host) => host.trim())
		: ['localhost']

	return {
		plugins: [react(), tailwindcss()],
		server: {
			host: true,
			port: PORT,
			watch: {
				usePolling: true,
			},
		},
		preview: {
			allowedHosts: ALLOWED_HOSTS,
		},
	}
})
