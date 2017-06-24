import express from 'express';
import WebpackDevMiddleware from 'webpack-dev-middleware'
import Webpack from 'webpack';
import configs from './webpack.config';
import path from 'path';

const port = process.env.PORT || 9000;
const app = express();

app.use(WebpackDevMiddleware(Webpack(configs)));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/index.html'));
});

app.listen(port, () => {
    console.log(`---- Server running on port ${port} ----`);
});