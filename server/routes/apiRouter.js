const express = require('express')
const bodyParser = require('body-parser')


const trackerRouter = require('./trackerRouter')
const expenseRouter = require('./expenseRouter')
const saldoRouter = require('./saldoRouter')

const router = express.Router()

router.use('/trackers', trackerRouter)
router.use('/expense', expenseRouter)
router.use('/saldo', saldoRouter)


module.exports = router
