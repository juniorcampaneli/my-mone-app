const express = require('express')

module.exports = function(server){
    //recebe como parametr o server.

    //Definir a url base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    //Rotas de Cicle de pagamento
    const BillingCycle = require ('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billiCycles')
}
