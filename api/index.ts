import { Hono } from 'hono'
import themes from '../db/themes.json'
import Fuse from 'fuse.js'

// export interface Env {
// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
// MY_KV_NAMESPACE: KVNamespace;
//
// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
// MY_DURABLE_OBJECT: DurableObjectNamespace;
//
// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
// MY_BUCKET: R2Bucket;
//
// Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
// MY_SERVICE: Fetcher;
// }

const app = new Hono()

const fuse = new Fuse(themes, { keys: ['name'] })

app.get('/', (ctx) => {
  return ctx.json({
    endpoints: [
      {
        url: '/themes',
        description: 'Get al oh-my-zsh themes'
      }
    ]
  })
})

app.get('/themes', (c) => {
  const { search } = c.req.query()
  if (!search) return c.json(themes)

  const filteredThemes = fuse.search(search)
  const mappedFilteredThemes = filteredThemes.map((theme) => theme.item)
  return c.json(mappedFilteredThemes)
})

export default app
