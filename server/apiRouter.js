const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Tracker = require('./model/tracker')
const SaldoCalculator = require('./helper/saldoCalculator')

const router = express.Router()
const jsonParser = bodyParser.json()

router.get('/trackers', (req, res) => {
  Tracker.find({}).then(trackers => res.send(trackers))
})


router.get('/trackers/:id', (req, res) => {
  Tracker.findById(req.params.id).then(tracker => {
    res.json(tracker)
  })
})


router.post('/trackers', jsonParser,  (req, res) => {

  if(!req.body)
    return res.sendStatus(400)
  else {
    Tracker.create(req.body).then(tracker => res.json(tracker))
  }
})



router.get('/expense/:id', (req, res) => {
  Tracker.findById(req.params.id).then(tracker => {
    console.log(tracker)
    res.json(tracker.expenses)
  })
    .error(error => res.send(error))
})

router.post('/expense/:id',jsonParser, (req, res) => {
  const newExpense = req.body
  Tracker.findById(req.params.id).then(tracker => {
    tracker.expenses.push(newExpense)
    console.log(tracker)
    tracker.save()
    res.send(tracker)
  }
  ).error(error => res.send(error))
})

router.get('/saldo/:id', (req, res) => Tracker.findById(req.params.id).then(tracker => {
  let saldo = SaldoCalculator(tracker)
  res.json(saldo)
}))

module.exports = router
