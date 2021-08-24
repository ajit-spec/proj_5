require('dotenv').config()
const express = require('express')
const app = express()

app.listen(process.env.PORT)

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(value => {
    console.log(`db connected`)
  }, reason => {
    console.log(reason)
  })

var cors = require('cors')
const listroutes = require('./routes/list')
const taskroutes = require('./routes/task')
const path = require('path')
app.use(cors())

app.use(express.json())
app.use(
  express.static(path.join(__dirname, '../dist/client'))
)

app.use(listroutes)
app.use(taskroutes)

app.get(
  '/*',
  (req, res) => {
    res.sendFile(
      path.join(__dirname, '../dist/client/index.html')
    )
  }
)

app.use((req, res) => {
  res.status(404).send(
    {
      status: 0,
      msg: '404 error'
    }
  )
})
