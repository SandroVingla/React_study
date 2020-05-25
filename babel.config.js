module.exports = {
    presets: [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties'
    ]
}

/**@babel/preset-env 
 * responsavel por alterar as funcionalidade do javascript
 * que o navegador ainda nao entende, por exemplo
 * import export, erofuctions, clases, etc..
 * 
 *  @babel/preset-react
 * vai transforma r as coisas do react como o JSX e demais coisa do react
 * 
*/
