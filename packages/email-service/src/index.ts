import express from 'express'

const app = express()

app.get('/status', (req, res) => {
  res.writeHead(200)
  res.json({ success: true })
})

app.listen(9100, () => { console.log('app running') })