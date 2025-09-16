import * as React from 'react'

export function NotFound() {
	return (
		<div style={{ padding: '2rem', fontFamily: 'system-ui', textAlign: 'center' }}>
			<h1 style={{ fontSize: '6rem', margin: '0', color: '#6b7280' }}>404</h1>
			<h2 style={{ margin: '1rem 0', color: '#374151' }}>Page Not Found</h2>
			<p style={{ color: '#6b7280' }}>The page you're looking for doesn't exist.</p>
		</div>
	)
}
