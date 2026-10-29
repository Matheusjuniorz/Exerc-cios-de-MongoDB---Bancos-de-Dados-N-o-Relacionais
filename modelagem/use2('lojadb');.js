use('lojadb');

db.vendas.updateOne(
  { nome: "João" },
  { $set: { endereco: { rua: "Rua Um", numero: 1000, complemento: "Apto 1 Bloco 1", cidade: "São Paulo", estado: "SP" } } }
);

db.vendas.updateOne(
  { nome: "Marcos" },
  { $set: { endereco: { rua: "Rua Dois", numero: 4000, complemento: "", cidade: "Campinas", estado: "SP" } } }
);

db.vendas.updateOne(
  { nome: "Maria" },
  { $set: { endereco: { rua: "Rua Três", numero: 3000, complemento: "", cidade: "Londrina", estado: "PR" } } }
);


db.vendas.updateOne(
  { nome: "João" },
  { $set: { compras: [
      { nome_produto: "notebook", preco: 5000.00, quantidade: 1 }
    ] 
  } }
);

db.vendas.updateOne(
  { nome: "Marcos" },
  { $set: { compras: [
      { nome_produto: "Caderno", preco: 20.00, quantidade: 1 },
      { nome_produto: "Caneta", preco: 3.00, quantidade: 5 }
    ] 
  } }
);

db.vendas.updateOne(
  { nome: "Maria" },
  { $set: { compras: [
      { nome_produto: "Borracha", preco: 2.00, quantidade: 2 },
      { nome_produto: "Tablet", preco: 2500.00, quantidade: 1 },
      { nome_produto: "Capa para tablet", preco: 50.00, quantidade: 1 }
    ] 
  } }
);