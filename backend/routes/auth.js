const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    obj = {
        a: 'thinos',
        number: 24
    }
    res.json(obj)

})  


module.exports = router