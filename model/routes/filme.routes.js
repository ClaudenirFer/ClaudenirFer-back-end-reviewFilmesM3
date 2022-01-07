const express = require("express");
// const { type } = require("express/lib/response");
// const { find } = require("../filmes");
// const Filme = require("../filmes");
const Controller = require('../../controller/controllers')
const router = express.Router();


// GET
router.get("/", (req, res) => {
  Controller.getFindFilmes(req, res)  
});

// GET - ByNome
router.get("/filmeByNome/:nome", async (req, res) => {
    Controller.getFindFilmesById(req, res, req.params.nome)
});

// POST
router.post("/add", async (req, res) => {
  Controller.postAddFilme(req, res)
});

// PUT
router.put("/update/:id", async (req, res) => {
  Controller.putUpdateFilmeById(req, res)
});

// DELETE
router.delete("/delete/:id", async (req, res) => {
  Controller.deleteFilmeById(req, res)
});

module.exports = router;
