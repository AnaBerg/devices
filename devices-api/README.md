# Devices Api

Esse é o backend da prova.

## Iniciar a aplicação

Faça a instalação dos pacotes com o gerenciador de pacotes `Yarn`, é possivel usar outros gerenciadores como `npm` ou `pnpm`, mas é recomendado deletar a `yarn.lock` antes. (os comandos serão mostrados com o yarn, caso tenha trocado gerenciador, é só rodar os mesmos comandos com o seu escolhido).

Crie uma `.env` com a partir de uma copia do arquivo `.env.exemple`.

Após a instalação, é necessário rodar as migrations para o banco de dados, o comando para isso é `yarn migration`, caso queria adicionar uma massa de dados, rode o comando `yarn seed`, ele adicionará uma massa aleatória de dados.

Após a configuração do banco, é possível rodar o servidor com o comando `yarn dev`, o servidor irá se abrir na porta *8080* (caso queira troca, é só mudar o API_PORT na `.env`)

## Testes

Para rodar os testes, basta rodar o comando `yarn test`.

Caso queira ver mais informações sobre a cobertura de testes, rode o comando `yarn coverage` e abra o html que está em `coverage/Icov-report/index.html`.
