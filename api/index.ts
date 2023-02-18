import { Hono } from 'hono'
import themes from '../db/themes.json'

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

app.get('/themes', (ctx) => {
  return ctx.json(themes)
})

export default app
