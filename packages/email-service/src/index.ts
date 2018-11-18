import body from 'body-parser'
import cors from 'cors'
import express from 'express'

import mailto from './mailto';
// import request from 'request'

const app = express()
const port = process.env.PORT || 9100

app.use(body.json())
app.use(body.urlencoded({ extended: true }))
app.use(cors())

app.post('/api/mailto', mailto)

app.listen(port, () => { console.log('running port ' + port) })