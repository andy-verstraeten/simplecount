const express = require('express')
const bodyParser = require('body-parser')
const Tracker = require('../model/tracker')

const trackerRouter = express.Router()
const jsonParser = bodyParser.json()


trackerRouter.get('/', (req, res) => {
  Tracker.find({}).then(trackers => res.send(trackers)).catch(error =>  {
    res.sendStatus(400)
    console.log(error)
  })
})



trackerRouter.get('/:id', (req, res) => {
  Tracker.findById(req.params.id).then(tracker => {
    res.json(tracker)
  })
    .catch(error =>  {
    res.sendStatus(400)
    console.log(error)
  })
})


trackerRouter.post('/', jsonParser,  (req, res) => {
  if(!req.body)
    return res.sendStatus(400)
  else {
    Tracker.create(req.body).then(tracker => res.json(tracker))
  }
})



module.exports = trackerRouter
