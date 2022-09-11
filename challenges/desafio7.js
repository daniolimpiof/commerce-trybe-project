db.produtos.find({
    $and:
     [{ tags: { $exists: false } }, { vendidos: { $ne: 50 } }] },
    { _id: 0, nome: 1, vendidos: 1 });