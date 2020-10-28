# Webpack Demo
Projeto destinado a ensinar como inicializar um projeto frontend utilizando
webpack.

# Pré Requisitos
Ter npm e node instalados

# Inicializando projeto
1. Na linha de comando execute o seguinte comando <code>npm init -y</code>.
2. Executar comandos <code>npm i webpack webpack-cli --save-dev</code>
3. Criar pasta `/app`
4. Dentro da pasta `app` cria uma pasta `src`
5. Criar arquivo `index.html` na raiz de `app` e inserir o seguinte código
```
<html>
  <head>
    <title>Webpack demo - getting started</title>
  </head>
  <body>
    <script src="./src/index.js"></script>
  </body>
</html>
```
6. No mesmo local onde se encontra seu `package.json` cria um arquivo nomeado `webpack.config.js`
7. Coloque o seguinte código base no arquivo recém criado
```
const path = require('path');

module.exports = {
  entry: './app/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```
8. No arquivo `package.json` chave "scripts" insira o seguinte conteúdo.
```
{
    "dev": "echo \"Success: mode development\" && exit 0",
    "staging": "echo \"Success: mode staging\" && exit 0",
    "prod": "echo \"Success: mode production\" && exit 0",
    "test": "echo \"Success: mode test\" && exit 0"
}
``` 

# Configurar ambientes
### Desenvolvimento
1. Executar comando <code>npm i webpack-dev-server --save-dev</code>
2. Aletere o arquivo `package.json` chave "scripts" insira o seguinte conteúdo.
```
{
    "dev": "webpack-dev-server --open --mode development",
    "staging": "echo \"Success: mode staging\" && exit 0",
    "prod": "echo \"Success: mode production\" && exit 0",
    "test": "echo \"Success: mode test\" && exit 0"
}
```
2. Execute ```npm run dev``` para iniciar o servidor local de desenvolvimento.

# Entry

```
entry: './app/src/index.js',
```

# Output
```
output: {
  filename: 'main.js',
  path: path.resolve(__dirname, 'dist'),
},
```


# Devtools

# Optimization

# Module
Módulos de cofiguração para identificar e carregar arquivos dos mais diversos tipos.
Cada módulo possui um teste para identificação da extensão de arquivo assim com as 
regras de carregamento e tratamento.

# Plugins
Plugins são extonsões do webpack que permitem a adição de mais funcionalidades
a ferramenta.

### HtmlWebpackPlugin
Cria um arquivo HTML5 para incorporar os bundles criados pelo webpack.

### MiniCssExtractPlugin
Utilizado para extrair arquivos de estilos de dentro do JS e separá-los em arquivos
css separados.