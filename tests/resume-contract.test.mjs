import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'

const read = (path) => readFileSync(new URL('../' + path, import.meta.url))
const sha = (contents) => createHash('sha256').update(contents).digest('hex')

test('résumé uses its locally bundled file instead of a remote raw GitHub dependency', () => {
  const app = read('src/App.jsx').toString('utf8')
  assert.match(app, /href="\/AJ-Miller-T-Perez-Resume\.pdf"/)
  assert.doesNotMatch(app, /raw\.githubusercontent\.com\/peremiller\/aj-miller-t-perez\/master\/public\/AJ-Miller-T-Perez-Resume\.pdf/)
  const pdf = read('public/AJ-Miller-T-Perez-Resume.pdf')
  assert.ok(pdf.byteLength > 1000, 'expected an actual nonempty résumé PDF')
  assert.equal(pdf.subarray(0, 5).toString('ascii'), '%PDF-')
})

test('Vite production build includes the unmodified résumé PDF', () => {
  const bundled = read('dist/AJ-Miller-T-Perez-Resume.pdf')
  const original = read('public/AJ-Miller-T-Perez-Resume.pdf')
  assert.equal(sha(bundled), sha(original), 'Vite must preserve the PDF bytes')
  const index = read('dist/index.html').toString('utf8')
  assert.match(index, /<html\b/i)
})
