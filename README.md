Nesse modulo aprendemos como criar uma aplicação front-end serverless, utilizando os recursos de banco de dados do FaunaDB, api de pagamentos do Stripe e sistema de gerenciamento de conteúdo Prismic CMS. O resultado final seria um blog com posts que para serem consumidos em sua totalidade, o usuário deveria estar logado e com uma assinatura ativa. Seguem abaixo algumas telas do sistema:

![Ignews - Home](https://i.imgur.com/S8H7szA.png)
![Ignews - Posts](https://i.imgur.com/gdjLDI0.png)
![Ignews - PostPreview](https://i.imgur.com/qnjcSCF.png)
![Ignews - Post](https://i.imgur.com/bSvRrUd.png)
![Ignews - Checkout](https://i.imgur.com/3oJvsa0.png)

#### Comando que roda o projeto
```npm run rev```

#### Comando para criar o projeto:
```npm create next-app ignews```
(Selecionar não para tudo)

#### No inicio do projeto apaguei:
- A pasta styles
- O conteudo da public
- A pasta api dentro da pasta pages
- E o arquivo document dentro da pasta pages tbm
- O jsconfig.json na pasta Raiz
- O conteúdo da index.js e substitui por Hello World em um h1.
- Limpei os imports também

#### Instalando typescript no projeto:
```npm add typescript @types/react @types/node -D```

#### Instalando o sass:
```npm add sass```

#### Instalando o react icons:
```npm add react-icons```

#### Instalando o stripe:
```npm add stripe```

#### Instalando o nextAuth:
```npm add next-auth```
```npm add @types/next-auth -D```

Obs: Tive que dar um downgrade na versão do next-auth para 3.xx porque não estava reconhecendo a forma como o diego escreve o nextauth para o github e usando o atualizado não encontrei como definir o escopo da maneira correta.

#### Instalando o FaunaDB:
``` npm add faunadb ```

#### Instalando axios:
``` npm add axios ```

#### Instalando o stripe-js:
``` npm add @stripe/stripe-js ```

### Instalando scoop (Windows PowerShell):
```Set-ExecutionPolicy RemoteSigned -Scope CurrentUser```
```irm get.scoop.sh | iex```

#### Instalando o stripe-cli via o scoop no terminal:
```scoop bucket add stripe https://github.com/stripe/scoop-stripe-cli.git```
```scoop install stripe``` 

Obs: Depois executar o comando "stripe login" e autorizar no navegador para funcionar na nossa maquina durante 90 dias.

#### Rodando o stripe-cli:
``` stripe listen --forward-to http://localhost:3000/api/webhooks```

OBS: Para testar o stripe basta por o cartao: 4242 4242 4242 4242 e os demais dados aleatórios.

#### Instalando o Prismic CMS Slice Machine:
```npx @slicemachine/init --repository ignewsmah```
```npm run slicemachine```

Obs: Isso foi necessário para poder criar o custom type.

#### Instalando a API do Prismic:
```npm add @prismicio/client@^4```

OBS: Optei por instalar a versão da epoca do tutorial por conta de várias incompatibilidades.

#### Instalando a Prismic DOM para facilitar a formatação dos results:
```npm add prismic-dom```
```npm add @types/prismic-dom -D```