var http = require('http');
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackDevConfig = require('./webpack.config.js');
var app = express();
var server = http.createServer(app);
var isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
    app.use(express.static(webpackDevConfig.output.path));
}
else {
    let compiler = webpack(webpackDevConfig);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: '/',
        hot: true,
        inline: true,
        quiet: false,
        noInfo: true,
        stats: { colors: true },
        historyApiFallback: true
    }));

    app.use(webpackHotMiddleware(compiler, {
        log: console.log
    }));
}

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, './src/index.html'));
});

var PORT = process.env.PORT || 8080;
server.listen(PORT, '0.0.0.0', function (err) {
    if (err) {
        console.log('Error starting server' + err);
    }
    else {
        console.log('Server started on port ' + PORT);
    }
});
