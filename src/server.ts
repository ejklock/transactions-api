import { app } from './app'
import { env } from './env'

app.listen(
  {
    host: env.HOST,
    port: env.PORT,
  },
  (err, address) => {
    if (err) {
      console.error(err)
    }
    console.log(`Server listening at ${address}`)
  },
)
