import * as cheerio from 'cheerio'
import { PurgeCSS } from 'purgecss'
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const root = join(import.meta.dir, '..')
const sourcePath = join(root, 'article.src.html')
const outPath = join(root, 'public', 'article.html')
const assetsDir = join(root, 'public', 'article-media')
const LOSSY = '80'

const $ = cheerio.load(await readFile(sourcePath, 'utf8'))

$('head meta:not([charset]):not([name=viewport])').remove()
$('head link, noscript, template').remove()
$('*')
  .contents()
  .filter((_, node) => node.type === 'comment')
  .remove()

await rm(assetsDir, { recursive: true, force: true })
await mkdir(assetsDir, { recursive: true })

let gifIndex = 0
for (const img of $('img').toArray()) {
  const src = $(img).attr('src') ?? ''
  const match = src.match(/^data:image\/gif;base64,(.+)$/)
  if (!match) continue
  const bytes = Buffer.from(match[1], 'base64')
  if (bytes.length < 10_000) continue

  const name = `gif-${gifIndex++}.gif`
  const tmp = join(assetsDir, `.${name}`)
  const dest = join(assetsDir, name)
  await writeFile(tmp, bytes)
  const proc = Bun.spawn(['gifsicle', '-O3', `--lossy=${LOSSY}`, tmp, '-o', dest], {
    stderr: 'ignore',
  })
  if ((await proc.exited) !== 0) throw new Error(`gifsicle failed on ${name}`)
  await rm(tmp)
  $(img).attr('src', `article-media/${name}`)
}

$('img').removeAttr('fetchpriority')

const css = $('style').toArray().map((el) => $(el).text()).join('\n')
$('style').remove()
const [purged] = await new PurgeCSS().purge({
  content: [{ raw: $.html(), extension: 'html' }],
  css: [{ raw: css }],
  fontFace: false,
  keyframes: true,
  variables: true,
})
// Keep only the latin font subset: the article text has no latin-ext / vietnamese glyphs.
const finalCss = purged.css
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/@font-face\s*\{[^}]*\}/g, (face) =>
    !face.includes('unicode-range') || face.includes('U+0000-00FF') ? face : '',
  )
$('head').append(`<style>${finalCss}</style>`)

const html = $.html().replace(/[ \t]+$/gm, '').replace(/\n{2,}/g, '\n')
await writeFile(outPath, html)

console.log(`css: ${css.length} -> ${finalCss.length} bytes`)
console.log(`gifs: ${gifIndex}, html: ${html.length} bytes`)
