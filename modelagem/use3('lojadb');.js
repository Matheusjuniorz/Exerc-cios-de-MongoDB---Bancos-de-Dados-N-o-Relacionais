use('lojadb');

db.vendas.find().toArray();

db.vendas.find({ nome: "Maria" }).toArray();

db.vendas.find({ cliente_vip: 1 }, { nome: 1, _id: 0 }).toArray();

db.vendas.find({ nome: "Marcos" }, { compras: 1, _id: 0 }).toArray();

db.vendas.aggregate([
  { $unwind: "$compras" },
  { $project: { _id: 0, nome_cliente: "$nome", produto: "$compras.nome_produto" } }
]).toArray();