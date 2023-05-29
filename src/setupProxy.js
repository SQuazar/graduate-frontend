const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8081',
            changeOrigin: true,
            onError: function (err, req, res, target) {
                res.status(503).send(
                    {
                        "status": 503,
                        "message": "Сервис недоступен"
                    }
                );
            }
        })
    );
};