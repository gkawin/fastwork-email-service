import dotenv from 'dotenv'
import fs from 'fs'

const loadConfig = (path: string) => {
  if (fs.existsSync(path)) {
    console.log('(Loading configuration from ' + path + ')')
    dotenv.config({ path })
  } else {
    console.log('(Not loading configuration from ' + path + ')')
  }
}

loadConfig('.env')
