import { SELF } from 'cloudflare:test'
import { expect, it } from 'vitest'

it('response with TanStack Start HTML', async () => {
	const res = await SELF.fetch('https://example.com')
	expect(res.status).toBe(200)
	const html = await res.text()
	expect(html).toContain('<!DOCTYPE html>')
	expect(html).toContain('🚀 Cloudflare Monorepo Starter')
	expect(html).toContain('TanStack Start application')
	expect(res.headers.get('Content-Type')).toContain('text/html')
})
