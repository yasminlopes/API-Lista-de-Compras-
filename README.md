# API-Lista-de-Compras-com-Node.js-Moongose-MongoDB-
 API | CRUD para uma lista de supermercado
 
 #
 Essa é uma API para uma lista de mercado, onde contém os itens de desejo de compra e os valores. 

Contém os métodos:
• Listar
• Mostrar
• Inserir
• Editar
• Deletar
#
# Arquitetura
O sistema possui uma estrutura back-end que gerencia as requisições, rotas e URLs, entre outra funcionalidades com o Node Js, um módulo para reiniciar o servidor sempre que houver alteração no código fonte com o Nodemon e o banco de dados MongoDB com o Mongoose que traduz os dados do banco de dados para objetos JavaScript para que possam ser utilizados por na aplicação.

- NodeJS
- Nodemon
- Moongose - MongoDB

# Banco de Dados (MongoDB)
o nome do banco é Produto e contém: 

- id
- items (string)
- valor (number)
- data (create_at) (update_at) (date)
- valortotal (number)

# Como rodar o Projeto

- Criar o arquivo package
  - npm init

- Instalar todas as dependencias indicada pelo package.json
  - npm install

- Rodar o projeto usando o nodemon
  - nodemon app.js
  
- Instalar o MongoDB
  - npm install --save mongodb

# Servidor
O projeto roda na porta 8080, caso seja alterado, modificar no arquivo app.js na função app.listen

#Aluno e RA
- Yasmin Lopes
- 1872363
- Disciplina: Desenvolvimento de Aplicações para Internet
