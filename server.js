import express from 'express'
import errorHandlerMiddleware from './middleware/error-handler.js'
import notFoundMiddleware from './middleware/not-found.js'
import dotenv from 'dotenv'
import connectDB from './db/connect.js'
import authRouter from './routes/authRoutes.js'
import jobRouter from './routes/jobsRoutes.js'

dotenv.config()

const app = express()
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.url)
  console.log(req.method)
  next()
})

app.get('/', (req, res) => {
  res.send('Welcome!')
})

app.use('api/v1/auth', authRouter)
app.use('api/v1/jobs', jobRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 8000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
