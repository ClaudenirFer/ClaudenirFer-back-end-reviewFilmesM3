const mongoose = require("mongoose");

const filmesModel = mongoose.Schema({
  nome: { type: String, required: true },
  genero: { type: String, required: true },
  duracao: { type: Number, required: true },
  dataLancamento: { type: Date },
  dataCad: { type: Date, default: Date.now },
});

const Filme = mongoose.model("movel", filmesModel);

module.exports = Filme;
