import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    <html>
      <head>
        <link href="/static/admin/style.css" rel="stylesheet" />
      </head>
      <body>
        <h1>Admin App</h1>
      </body>
    </html>
  )
})

export default app
