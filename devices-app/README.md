# Devices App

Esse é a parte mobile da prova. É recomendado que rode a `devices-api` antes de iniciar essa aplicação (leia o README de `devices-api` para mais informações).

## Iniciar a aplicação

Faça a instalação dos pacotes com o gerenciador de pacotes `Yarn`, é possivel usar outros gerenciadores como `npm` ou `pnpm`, mas é recomendado deletar a `yarn.lock` antes. (os comandos serão mostrados com o yarn, caso tenha trocado gerenciador, é só rodar os mesmos comandos com o seu escolhido)

Após a instalação, basta rodar o comando `yarn dev`, se já tens configurado o emulador android, pode rodar direto nele apernando o `a` no terminal. Caso não tenha, baixe o applicativo Expo Go na app store ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&pli=1) e [iOS](https://apps.apple.com/br/app/expo-go/id982107779)) e leia o QR code.

## Testes

Para rodar os testes, basta rodar o comando `yarn test`.

Caso queira ver mais informações sobre a cobertura de testes, rode o comando `yarn coverage` e abra o html que está em `coverage/Icov-report/index.html`.
