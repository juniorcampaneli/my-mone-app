const express = require('express')
//const auth = require('./auth')

module.exports = function (server) {
    const router = express.Router()
    server.use('/api', router)
   

    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')

   
}