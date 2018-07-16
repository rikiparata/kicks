const conn = require('./connection')

function getKicks () {
    return conn('kicks')
}

function addKick (kick) {
    return conn('kicks')
    .insert(kick)
}


module.exports = {
    getKicks,
    addKick
}