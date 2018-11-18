import body from 'body-parser'
import express from 'express'
// import request from 'request'

const app = express()
const port = process.env.PORT || 9100

app.use(body.json())

app.get('*', (req, res) => {
  console.log('request from port ' + port)
  res.json({ 'success': port })
})

app.listen(port, () => { console.log('running port ' + port) })