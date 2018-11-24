import mongoose from 'mongoose'
import * as R from 'ramda'

const url = 'mongodb://localhost:27017/email_service'

function createConnection() {
  const checkInstance = R.either(R.isNil, R.isEmpty)
  if (!checkInstance(mongoose.connection)) {
    mongoose.connect(url, { useNewUrlParser: true })
  }
}

createConnection()