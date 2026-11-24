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

test('mobile navigation focuses the first visible link and Escape restores the toggle', () => {
  const app = read('src/App.jsx').toString('utf8')
  assert.match(app, /const navLinks = useRef\(null\)/)
  assert.match(app, /ref=\{navLinks\}/)
  assert.match(app, /if \(!menuOpen \|\| window\.innerWidth > 760\) return/)
  assert.match(app, /navLinks\.current\?\.querySelector\('a'\)\?\.focus\(\)/)
  assert.match(app, /event\.key === 'Escape' && menuOpen/)
  assert.match(app, /menuButton\.current\?\.focus\(\)/)
  assert.match(app, /aria-expanded=\{menuOpen\}/)
})

test('mobile navigation has a viewport-bounded scrollable link list', () => {
  const css = read('src/index.css').toString('utf8')
  assert.match(css, /\.nav__links\{visibility:hidden;pointer-events:none;max-height:calc\(100vh - 64px\);max-height:calc\(100dvh - 64px\);overflow-y:auto;overscroll-behavior:contain\}/)
})
