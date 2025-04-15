const express = require('express')
const app = express()

app.get('/user', function (req, res) {
    res.send('mostrar usuarios')
})

app.post('/user', function (req, res) {
    res.send('incluir usuario')
})
app.put('/user/:id', function (req, res) {
    res.send('usuario modificado')
})
app.delete('/user/:id', function (req, res) {
    res.send('Usuario excluido')
})

app.listen(3000)
