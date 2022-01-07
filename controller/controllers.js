// const express = require("express");
// const mongoose = require('mongoose')
const Filme = require("../model/filmes");


// GET - LISTAR TODOS OS FILMES
exports.getFindFilmes = async (req, res) => {
    await Filme.find({})
    .then((filmes) => {
    res.status(200).send(filmes);
    })
    .catch((err) => {
    res.status(400).send("Error");
    });
};


// GET - BUSCAR FILMES PELO ID
exports.getFindFilmesById = async(req, res) => {
    await Filme.find({ nome: req.params.nome })
    .then((filme) => {
      res.status(200).send(filme);
    })
    .catch((err) => {
      res.status(400).res.send("Error");
    });
}

// POST - ADICIONAR FILME
exports.postAddFilme = async (req, res) => {
  const filme = req.body;
  if (!Object.keys(filme).length) {
    // Checa se há chaves no objeto.
    res.send("Não há um filme preenchido");
  } else {
    await Filme.create(filme)
      .then(() => {
        res.status(200).send({ Cadastrado: { filme }, Messeger: "Cadastro Realizado" });
      })
      .catch((err) => {
        res.status(400).send("Erro Inesperado");
      });
  }
}

// PUT - ATUALIZA FILME PELO ID
exports.putUpdateFilmeById = async(req, res) => {
  await Filme.updateOne({ _id: req.params.id }, req.body) // Ou Filme.findByIdAndUpadate para atualizar
    .then(async () => {
      const filme = await Filme.find({ _id: req.params.id });
      res.status(200).send({
        Editado: { filme },
        Messeger: "Atualização Realizada com sucesso",
      });
    });
}

// DELETE - DELETA PELO ID
exports.deleteFilmeById = async(req, res) => {
  const filmeDeletado = await Filme.findById(req.params.id);
  console.log(filmeDeletado, typeof filmeDeletado);

  const deleteFilme = async () => {
    await Filme.deleteOne({ _id: req.params.id }) // Ou Filme.findByIdAndDelete para deletar
      .then(() => {
        res.send({
            deletado: { filmeDeletado },
            Messeger: "Deletado com sucesso"
        });
      })
      .catch((err) => {
          res.status(400).send('Error')
      })
  };
  deleteFilme()
}