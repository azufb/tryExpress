const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    const headers = {
        'Content-Type': 'application/json'
    }
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:3001/api',
            changeOrigin: true,
            headers: headers
        })
    );
};