const express = require("express");
const app = express();
app.use(express.json());

const cardapio = [];

app.get("/cardapio", function (req, res) {
  res.send(cardapio);
});

app.get("/cardapio/:id", function (req, res) {
  const id = req.params.id;
  res.send(cardapio[id - 1]);
});

app.post("/cardapio", function (req, res) {
  let itemCardapio = req.body.nome;
  cardapio.push(itemCardapio);
  res.send("ok");
});

app.listen(3000);
