Backend

A parte do backend foi desenvolvida em .net core 5.0, para rodar, é necessário ter .net core 5.0 instalado, abrir o projeto backend no visual studio e inicializar pelo próprio visual studio. Ao carregar o projeto pela primeira vez, vai ser feito o download de todas as dependências.

O projeto foi desenvolvido utilizando os recursos do visual studio para a criação da RestApi.
Foi utilizado o sqlite como banco de dados pela simplicidade de uso.

está configurado a porta 44379, sendo o caminho da api:

https://localhost:44379/swagger/index.html

No qual é listado todos os end points do projeto.

Frontend

Foi utilizado o React js para o frontend. Para poder configurar, é necessário rodar o comando npm install para que possa fazer o download de todas as dependencias.
Para rodar, npm start, e ao final, será carregado a página inicial do projeto que está sendo executado na porta 3000 no caminho:

http://localhost:3000/

O projeto:
Inpirado numa loja virtual, o escopo do projeto focou apenas na parte de cadastro do produto, foi abstraido a tela de login. O projeto tem 3 telas: Lista de produtos, cadastro de produtos e edição de produtos, a exclusão do produto é feito na tela de listagem.
