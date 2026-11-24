import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

console.log("started")

app.use("*", cors())

app.get('/article', (c) =>
  c.html(Bun.file(`${import.meta.dir}/article.html`).text())
)

export default app
