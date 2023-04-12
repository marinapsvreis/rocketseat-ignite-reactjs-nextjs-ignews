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
