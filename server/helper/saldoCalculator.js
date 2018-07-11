function SaldoCalculator(tracker) {
  let result = new Map()
  let averagePerParticipant = 0
  tracker.participants.forEach(particpant => result.set(particpant, 0))
  tracker.expenses.forEach(expense => {
    result.set(expense.paidBy, result.get(expense.paidBy)+ expense.amount)
    averagePerParticipant += expense.amount
  })
  averagePerParticipant = averagePerParticipant / tracker.participants.length
  let resultJSON = []
  result.forEach((saldoValue, participantKey) => resultJSON.push({name: participantKey, saldo: saldoValue-averagePerParticipant}))
  console.log(resultJSON)
  return resultJSON
}

module.exports = SaldoCalculator
