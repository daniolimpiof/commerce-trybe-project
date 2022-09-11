db.produtos.find(
    {
        $and: [{
            valoresNutricionais: { $elemMatch: { 
            tipo: "proteínas", 
            percentual: { $lte: 40, $gte: 30 } } },
        }] },
        { _id: 0, nome: 1 },
);