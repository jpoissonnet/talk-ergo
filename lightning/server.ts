import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { $ } from 'bun'

const app = new Hono()

console.log("started")

app.use("*", cors())

app.post('/rpc', async (c) => {
  const body = await c.req.text()
  const output = await $`noctalia msg notification-show ${body}`.text();
  console.log(output);
  return c.text(output)
})


export default app
