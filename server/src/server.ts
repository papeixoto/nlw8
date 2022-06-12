import express from "express";
import { routes } from "./router";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log("HTTP server running");
});

// GET, POST, PUT, PATCH, DELETE
// GET - buscar informação
// POST - Cadastrar info
// PUT - Atualizar info de uma entidade (alterar perfil - nome, email, ...)
// PATCH - Atualizar informação única de uma entidade ()
// DELETE - apagar uma informação

// SOLID
// S - Single responsibility Principle
// Cada classe/função deve ter uma responsabilidade única
// O - Open/Closed Principle
// As classes da nossa aplicação devem ser abertas para extensão mas fechadas para modificação
// L - Liskov Substitution Principle
// Devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando
// I - Interface Segregation Principle
// Impressora implements Digitalizar, Imprimir, Fotocopiar, ...
// Em vez de Impressora implements MegaImpressora.
// D - Dependency Inversion Principle
// As classes não devem elas próprias ir buscar as dependências, mas sim recebê-las do exterior
