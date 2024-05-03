import { Hono } from 'hono'
import ideApp from './ide'
import adminApp from './admin'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Go to /ide or /admin')
})

app.post('/signin', async (c) => {
  return c.json({}, 200)
})

// ...

app.route('/ide', ideApp)
app.route('/admin', adminApp)

export default app
