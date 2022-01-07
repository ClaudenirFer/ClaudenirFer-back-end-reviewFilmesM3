const express = require('express')
const Conn = require('./model/conn/conn')
const Filme = require('./model/filmes')
const router = require('./model/routes/filme.routes')
const app = express()

app.use(express.json())
const port = 8000

const banco = 'mongodb'
const uri = 'localhost'
const portDB = 27017
const nameBanco = 'movie'

// Conn(banco, uri, portDB, nameBanco)
Conn()

app.use('/filmes', router)

app.listen(port, () => {
    console.log("Servidor rodando na porta ", port)
})