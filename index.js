const express = require('express')
const app = express()
const connect = require('./src/db/db-connection')

require('dotenv').config()
//Config server
app.use(express.json())

connect.connect()

//configure port
const PORT = process.env.PORT || 5000

//listening
app.listen(PORT, () => console.log('server running on', PORT))
