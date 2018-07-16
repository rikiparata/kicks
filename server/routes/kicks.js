const express = require('express')
const router = express.Router()

const kicksDB = require('../db/kicks')

router.get('/', (req, res) => {
    kicksDB.getKicks()
        .then(kicks => {
            res.json(kicks)
        })
})

router.post('/', (req, res) => {
    const kick = req.body
    kicksDB.addKick(kick)
        .then(id => {
            res.json(id[0])
        })
})

module.exports = router