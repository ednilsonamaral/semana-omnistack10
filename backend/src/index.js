const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-3hejk.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.listen(3333)