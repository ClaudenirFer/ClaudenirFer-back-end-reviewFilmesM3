if (process.env.NODE_ENV !== 'production') {//  Retorna onde o Node está rodando
  require("dotenv").config(); // carrega o arquivo dotEnv para o servidor(no nosso caso, o banco local)
}
const express = require("express");
const Conn = require("./model/conn/conn");
// const Filme = require("./model/filmes");
const router = require("./model/routes/filme.routes");
const app = express();

app.use(express.json());
const port = 8000;

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

// Conn(banco, uri, portDB, nameBanco)
Conn(db_url, db_user, db_pass, db_data);

app.use("/filmes", router);

app.listen(process.env.PORT || port, () => {
  console.log("Servidor rodando na porta ", port);
});
