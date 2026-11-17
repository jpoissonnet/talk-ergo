import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

console.log("started")

app.use("*", cors())

app.get('/article', (c) =>
  c.html(Bun.file(`${import.meta.dir}/article.html`).text())
)

app.post('/rpc', async (c) => {
  const body = await c.req.json();

  if (body.method === "notify") {
    const { data: { msg, author, appName } } = body;
    Bun.spawn(["qs", "-p", `${import.meta.dir}/fake-slack`], {
      env: {
        ...process.env,
        FAKE_SLACK_APP: appName,
        FAKE_SLACK_AUTHOR: author,
        FAKE_SLACK_MSG: msg,
        FAKE_SLACK_DURATION: 6000
      },
      stdout: "ignore",
      stderr: "ignore",
    })

    return c.text("ok")
  }

  return c.text("unknown method")
})


export default app
