import { createFileRoute } from '@tanstack/react-router'
import * as React from 'react'

export const Route = createFileRoute('/')({
	component: HomeComponent,
})

function HomeComponent() {
	return (
		<div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
			<h1>🚀 Cloudflare Monorepo Starter</h1>
			<p>Welcome to your TanStack Start application running on Cloudflare Workers!</p>
			<div style={{ marginTop: '2rem' }}>
				<h2>Technology Stack</h2>
				<ul>
					<li>✅ TanStack Start - Modern full-stack React framework</li>
					<li>✅ Cloudflare Workers - Serverless runtime</li>
					<li>✅ Vite - Build tool and development server</li>
					<li>✅ TypeScript - Type safety</li>
					<li>🚧 Tailwind CSS - Coming soon</li>
					<li>🚧 Shadcn/UI - Coming soon</li>
					<li>🚧 Better Auth - Coming soon</li>
					<li>🚧 Convex.Dev - Coming soon</li>
				</ul>
			</div>
		</div>
	)
}
