import { ErrorComponent } from '@tanstack/react-router'
import * as React from 'react'

import type { ErrorComponentProps } from '@tanstack/react-router'

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
	return (
		<div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
			<h2 style={{ color: '#ef4444' }}>Something went wrong!</h2>
			<details style={{ marginTop: '1rem' }}>
				<summary>Error details</summary>
				<ErrorComponent error={error} />
			</details>
		</div>
	)
}
