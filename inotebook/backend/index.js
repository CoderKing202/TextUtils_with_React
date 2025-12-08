const connectToMango = require ('./db')
const express = require('express')
connectToMango()
const app = express()
const port = 3000

app.use(express.json())// to get req.body we need this middleware

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`INoteBook backend listening on port ${port}`)
})
