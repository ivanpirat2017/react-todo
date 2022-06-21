const mix = require('laravel-mix');
const path = require('path')


// mix.ts('resources/js/app.tsx', 'public/js').sass('resources/sass/app.scss', 'public/css');
mix.babelConfig({
    "presets": ["@babel/preset-react"],
    "plugins": [
        [
            "babel-plugin-react-scoped-css",

        ]
    ]
}).webpackConfig({
    mode: 'none',
    entry: {
        app: path.join(__dirname, 'resources/js/', 'app.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public')
    }
})
