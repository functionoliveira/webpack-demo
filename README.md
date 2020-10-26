# Webpack Demo
Projeto destinado a ensinar como inicializar um projeto frontend utilizando
webpack.

# Pré Requisitos
Ter npm e node instalados

1. Na linha de comando execute o seguinte comando <code>npm init -y</code>.
2. Executar comandos <code>npm i webpack webpack-cli --save-dev</code>
3. No mesmo local onde se encontra seu `package.json` cria um arquivo nomeado `webpack.config.js`
4. Coloque o seguinte código base no arquivo recém criado
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
5. No arquivo `package.json` chave "scripts" insira o seguinte conteúdo.
```
{
    "dev": "echo \"Success: mode development\" && exit 0",
    "staging": "echo \"Success: mode staging\" && exit 0",
    "prod": "echo \"Success: mode production\" && exit 0",
    "test": "echo \"Success: mode test\" && exit 0"
}
``` 