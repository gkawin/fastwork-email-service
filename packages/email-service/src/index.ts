import body from 'body-parser'
import express from 'express'
import request from 'request'

const servers = [
  'http://localhost:8080', 'http://localhost:8081'
]

function handler(serverNum: number) {
  return (req: express.Request, res: express.Response) => {
    console.log(`server ${serverNum}`, req.method, req.url, req.body);
    setTimeout(() => { res.send(`Hello from server ${serverNum}!`); }, 10000);
  }
}

const app1 = express()
const app2 = express()
const server = express()

app1.use(body.json())
app2.use(body.json())

app1.get('*', handler(1))
app2.get('*', handler(2))

app1.listen(8080)
app2.listen(8081)

let cur = 0
const serverHandler = (req: express.Request, res: express.Response) => {
  const balancer = request({ url: servers[cur] + req.url })
  .on('error', (error) => {
    res.status(500).send(error.message);
  })
  req.pipe(balancer).pipe(res);
  cur = (cur + 1) % servers.length;
};

server.get('*', serverHandler)
server.listen(9100)