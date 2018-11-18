import body from 'body-parser'
import cors from 'cors'
import express from 'express'

interface IOptions {
  port?: number
}
export default class Server {
  private app: express.Application;

  constructor(options: IOptions) {
    this.app = express();
    this.app.set('port', process.env.PORT || options.port || 9100);
    this.app.use(body.json({ strict: true }));
    this.app.use(body.urlencoded({ extended: false }));
    this.app.use(cors());
  }

  public start() {
    const port = this.app.get("port");
    return this.app.listen(port, () => {
      console.info("Server running on port " + port);
    });
  }
}