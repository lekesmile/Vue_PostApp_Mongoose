const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/vuedemo'


mongoose.connect(url, {useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true  })

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})