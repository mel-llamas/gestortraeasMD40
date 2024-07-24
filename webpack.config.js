const path = require('path');

module.exports = {
    entry: './src.index.js', // Punto de entrada de tu aplicacion
    output: {
        filename: 'bundle.js', // Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'),// Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, //Regex para identificar archivos CSS
                use: ['style-loader', 'css-loader'], // Loaders para procesar archivos CSS
            },
            {
                test: /\.js$/, // Regex para identificar archivos JS
                excluse: /node_modules/, // Excluir la carpeta node_modules que aparece al crear webpack
                use: {
                    loader: 'babel-loader', // Loader para convertir JS moderno al JS compatible a mas navegadores
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', // Genera source maps para facilitar la depuracion
    devserver: {
        contentbase: path.resolve(__dirname, 'dist'), // Carpeta del que corre el servidor
        compress: true, // Habilitar comprension gzip
        port: 9000, // Puerto del servidor de desarrollo 
    },
};