#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const args = process.argv.slice(2)
const check = args.includes('--check')
const target = args.find((a) => !a.startsWith('--'))
const file = target ? resolve(process.cwd(), target) : resolve(root, 'slides.md')

const original = readFileSync(file, 'utf8')

// A blank line between an opening `---` and the first frontmatter key turns the
// separator into a Markdown <hr>, so Slidev merges slides. Drop that blank line.
const fixed = original.replace(/^---\n\n(?=[A-Za-z][\w-]*:)/gm, '---\n')

const fences = (fixed.match(/^```/gm) ?? []).length
const balance = (re) =>
  fixed.split('\n').reduce((n, l) => {
    const open = (l.match(re.open) ?? []).length
    const close = (l.match(re.close) ?? []).length
    return n + open - close
  }, 0)

const divs = balance({ open: /<div[\s>]/g, close: /<\/div>/g })
const spans = balance({ open: /<span[\s>]/g, close: /<\/span>/g })

const warnings = []
if (fences % 2 !== 0) warnings.push(`Odd number of code fences (${fences}) - a \`\`\` is unclosed or stray.`)
if (divs !== 0) warnings.push(`Unbalanced <div> tags (net ${divs}).`)
if (spans !== 0) warnings.push(`Unbalanced <span> tags (net ${spans}).`)

const changed = fixed !== original

if (check) {
  if (changed) console.error(`✗ ${file}: malformed frontmatter found (run without --check to fix).`)
  warnings.forEach((w) => console.error(`⚠ ${w}`))
  process.exit(changed || warnings.length ? 1 : 0)
}

if (changed) {
  writeFileSync(file, fixed)
  console.log(`✓ Fixed malformed frontmatter in ${file}`)
} else {
  console.log(`✓ No frontmatter issues in ${file}`)
}
warnings.forEach((w) => console.warn(`⚠ ${w}`))
