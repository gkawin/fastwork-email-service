import body from 'body-parser'
import express from 'express'
// import request from 'request'

const app = express()

app.use(body.json())

app.get('*', (req, res) => {
  console.log('request from port ' + process.env.PORT)
  res.json({ 'success': process.env.PORT })
})

app.listen(process.env.PORT, () => { console.log('running') })