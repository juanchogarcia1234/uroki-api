const app = require('./src/app')
const pool = require('./src/pool')

pool.connect({
  host: 'localhost',
  port: 5432,
  database: 'uroki',
  user: 'postgres',
  password: '5432'
}).then(() => {
  app().listen(3005, () => {
    console.log('Listening on port 3005, yeah')
  })
}).catch((err)=>console.log(err))
