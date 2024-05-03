import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    <html>
      <head>
        <link href="/static/ide/style.css" rel="stylesheet" />
      </head>
      <body>
        <h1>Cat App</h1>
      </body>
    </html>
  )
})

export default app
