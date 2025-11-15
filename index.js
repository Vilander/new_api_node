const express = require("express");
const app = express();
app.use(express.json());

const itensCardapio = [
  {
    id: 1,
    nome: "Marmita Delicia 01",
    descricao: "arroz, feijao, batata frita, bife a cavalo",
    foto: "https://www.shutterstock.com/image-photo/this-dish-bife-cavalo-features-600nw-2644507385.jpg",
    preco: 25.9,
  },
  {
    id: 2,
    nome: "Marmita Delicia 02",
    descricao: "arroz, feijao, batata frita, parmegiana de frango",
    foto: "https://anamariareceitas.com.br/wp-content/uploads/2024/07/5520-768x512.jpg.jpg",
    preco: 24.9,
  },
  {
    id: 3,
    nome: "Marmita Mama Mia",
    descricao: "macarrão molho bolonhesa",
    foto: "https://receitadaboa.com.br/wp-content/uploads/2024/10/Macarronada.jpg",
    preco: 20.5,
  },
  {
    id: 4,
    nome: "Marmita Feijuca",
    descricao: "arroz, feijoada, torresmo, farofa",
    foto: "https://sabores-new.s3.amazonaws.com/public/2024/11/feijoada_1.jpg",
    preco: 28.5,
  },
  {
    id: 5,
    nome: "Coca-Cola 2L",
    descricao: "Refrigerante Coca-Cola 2 litros",
    foto: "https://cdn.awsli.com.br/2500x2500/98/98381/produto/3118837/6ca9c634ea.jpg",
    preco: 10.0,
  },
  {
    id: 6,
    nome: "Suco de laranja 1L",
    descricao: "Suco natural de laranja",
    foto: "https://m.media-amazon.com/images/I/41mXlyVaWnL._AC_UF894,1000_QL80_.jpg",
    preco: 8.5,
  },
  {
    id: 7,
    nome: "Salada Caesar",
    descricao: "alface-romana, croton e molho Caesar",
    foto: "https://static.itdg.com.br/images/1200-630/f6acb58cd0215a6d2118c4a87ebab1fe/153730-original.jpg",
    preco: 12.5,
  },
  {
    id: 8,
    nome: "Salada Caprese",
    descricao:
      "salada italiana composta por fatias de mussarela fresca, tomates e manjericão doce, temperada com sal e azeite",
    foto: "https://cafeinacafe.com.br/wp-content/uploads/2023/02/salada_caprese-1000x1000-1.jpg",
    preco: 12.5,
  },
];

app.get("/cardapio", function (req, res) {
  res.send(itensCardapio);
});

// app.get("/cardapio/:id", function (req, res) {
//   const id = req.params.id;
//   res.send(cardapio[id - 1]);
// });

// app.post("/cardapio", function (req, res) {
//   let itemCardapio = req.body.nome;
//   cardapio.push(itemCardapio);
//   res.send("ok");
// });

// // app.post("/cardapio/i", function (req, res) {
// //   let newProduto = req.body.newProduto.trim();
// //   cardapio.push(newProduto);
// //   res.send(`${newProduto}`);
// // });

// app.put("/cardapio/", function (req, res) {
//   let id = req.params.id;
//   let novoNome = req.body.newProduto;
//   let antigoNome = cardapio[id - 1];
//   antigoNome = novoNome;
//   res.send(`${antigoNome} alterado para ${novoNome}`);
// });

// app.delete("/cardapio", function (req, res) {
//   let id = req.params.id;
//   let produto = cardapio[id - 1];
//   cardapio.splice(id - 1, 1);
//   res.send(`${produto} removido com sucesso!`);
// });
app.listen(3000);
