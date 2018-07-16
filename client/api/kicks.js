import request from 'superagent'


export function getKicks () {
    console.log('sending request')
    return dispatch => {
        request
        .get('/api/kicks')
        .then(res => {
            console.log(res.body)
        })
    }
}
