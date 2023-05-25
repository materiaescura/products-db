# Products-DB

Uma abstração em node.js, utilizando a biblioteca Ramda.js, para a manipulação de um banco de dados de produtos em MYSQL.

## Início

Estas instruções fornecerão uma cópia do projeto em execução em sua máquina local para fins de desenvolvimento e teste. Consulte implantação para obter notas sobre como implantar o projeto em um sistema ativo.

### Pré-requisitos:

Você precisa do NodeJS e do NPM instalado em sua máquina.

```
npm install
```

## Como utilizar:

1 - No arquivo .env preencher as configurações local do MYSQL
2 - Importar a conexão, ex: const connection = require('./src/connection.js')
3 - Criar um novo repositório, ex: const products = await productsRepository(await connection)
4 - Agora estamos pronto para usar o repositório, ex:  await products.create({product:'foo', price:'2000'}))


## Construído com:

- [RamdaJS](https://ramdajs.com/) - A practical functional library for JavaScript programmers.

## Author:

- **Diego Rabelo**

## Licença

Este projeto é licenciado sobre a licença MIT - veja [LICENSE.md](LICENSE.md) para mais informações.
