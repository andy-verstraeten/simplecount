const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

const apiRouter = require('./routes/apiRouter')


const port = 3000
const app = express()


mongoose.connect('mongodb://server:server1@ds127961.mlab.com:27961/simplecount',  { useNewUrlParser: true } )
const db = mongoose.connection
db.on('error', error => console.error(error))


//middleware setup
app.use(morgan('dev'))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', apiRouter)

app.get('/', (req, res) =>
{
  console.log('got request')
  res.send('server working')
})

app.listen(port,()=> console.log('server spun up'))


