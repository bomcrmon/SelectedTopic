const express = require('express')
const app = express()
const port = 8000
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

app.get('/api/form-get', (request, response) => {
    let t = request.query.target || ''
    let k = request.query.kw || ''
    let n = parseInt((Math.random() * 1000))
    let r = {
        target: t,
        kw: k,
        results: n
    }
    response.json(r)
})

app.listen(port, () => {
    console.log('Server listening on port ' + port)
})
