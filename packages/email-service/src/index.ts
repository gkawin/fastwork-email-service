
import body from 'body-parser'
import cors from 'cors'
import express from 'express'

import './bootstrap'
import './db/connect'

import { maillog, mailto } from './routes';

const app = express()
const port = process.env.PORT || 9100

app.use(body.json())
app.use(body.urlencoded({ extended: true }))
app.use(cors())

app.post('/api/mailto', mailto)
app.get('/api/maillog', maillog)

app.listen(port, () => { console.log('running port ' + port) })