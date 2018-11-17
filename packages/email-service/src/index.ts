import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({ hello: 'world' })
})

app.listen(9100, () => { console.log('app running') })