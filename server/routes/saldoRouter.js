const express = require('express')
const Tracker = require('../model/tracker')

const SaldoCalculator = require('../helper/saldoCalculator')

const saldoRouter = express.Router()

saldoRouter.get('/:id', (req, res) => Tracker.findById(req.params.id).then(tracker => {
  let saldo = SaldoCalculator(tracker)
  res.json(saldo)
}).catch(error =>  {
  res.sendStatus(400)
  console.log(error)
}))

module.exports = saldoRouter
