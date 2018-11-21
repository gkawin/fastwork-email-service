import { Db, MongoClient } from 'mongodb'

class DBConnect {
  private url = 'mongodb://localhost:27017'
  private dbname = 'email_service'
  private client: MongoClient | null = null
  private db: Db | null = null


  public async get(): Promise<Db> {
    try {
      if (this.db !== null) {
        console.log(`db connection is already alive`, this.db);
        return this.db;
      }

      await this.createConnection();

      if (!this.client) {
        throw new Error('no connection')
      }

      this.db = this.client.db(this.dbname)
      return this.db;
    } catch (error) {
      return error
    }
  }

  private async createConnection() {
    this.client = new MongoClient(this.url, { useNewUrlParser: true })
    await this.client.connect()
  }
}

export default new DBConnect().get()