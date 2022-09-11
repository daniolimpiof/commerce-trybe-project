db.produtos.find(
  { nome: { $nin: [/Big Mac/i, /McChicken/i] } },
  { _id: 0, nome: 1, vendidos: 1, curtidas: 1 },
);
