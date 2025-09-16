import { createFileRoute } from '@tanstack/react-router'
import * as React from 'react'

import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
	component: HomeComponent,
})

function HomeComponent() {
	return (
		<div className="p-8 min-h-screen bg-background text-foreground">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold mb-4">🚀 Cloudflare Monorepo Starter</h1>
				<p className="text-lg text-muted-foreground mb-8">
					Welcome to your TanStack Start application running on Cloudflare Workers!
				</p>

				<div className="mb-8">
					<Button onClick={() => console.log('Button clicked!')}>Click me</Button>
				</div>

				<div>
					<h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
					<ul className="space-y-2 text-sm">
						<li className="flex items-center gap-2">
							<span className="text-green-500">✅</span>
							<span>TanStack Start - Modern full-stack React framework</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="text-green-500">✅</span>
							<span>Cloudflare Workers - Serverless runtime</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="text-green-500">✅</span>
							<span>Vite - Build tool and development server</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="text-green-500">✅</span>
							<span>TypeScript - Type safety</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="text-green-500">✅</span>
							<span>Tailwind CSS v4 - Utility-first CSS framework</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="text-green-500">✅</span>
							<span>Shadcn/UI - Beautiful component library</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="text-yellow-500">🚧</span>
							<span>Better Auth - Coming soon</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="text-yellow-500">🚧</span>
							<span>Convex.Dev - Coming soon</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
