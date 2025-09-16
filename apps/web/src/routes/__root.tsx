import { createRootRoute, Outlet } from '@tanstack/react-router'
import * as React from 'react'

export const Route = createRootRoute({
	component: RootComponent,
})

function RootComponent() {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Cloudflare Monorepo Starter</title>
			</head>
			<body>
				<div id="root">
					<Outlet />
				</div>
			</body>
		</html>
	)
}
