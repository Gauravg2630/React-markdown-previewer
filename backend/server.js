import express from 'express'
import cors from 'cors'
import markdownRoutes from './routes/markdownRoutes.js'

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.use('/api/markdown', markdownRoutes)

app.get('/', (req, res) => {
  res.send('Markdown Previewer Backend Running')
})

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`)
})
