const express = require('express')
const bodyParser = require('body-parser')
const Tracker = require('../model/tracker')

const jsonParser = bodyParser.json()
const expenseRouter = express.Router()

expenseRouter.get('/expense/:id', (req, res) => {
  Tracker.findById(req.params.id).then(tracker => {
    console.log(tracker)
    res.json(tracker.expenses)
  })
    .catch(error =>  {
      res.sendStatus(400)
      console.log(error)
    })
})

expenseRouter.post('/expense/:id',jsonParser, (req, res) => {
  const newExpense = req.body
  Tracker.findById(req.params.id).then(tracker => {
      tracker.expenses.push(newExpense)
      console.log(tracker)
      tracker.save()
      res.send(tracker)
    }
  ).catch(error =>  {
    res.sendStatus(400)
    console.log(error)
  })
})


module.exports = expenseRouter
