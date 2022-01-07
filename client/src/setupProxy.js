const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware(
            ['/postReq', '/uploadSurvey', '/countupViews'],
            {
                target: "http://localhost:8080",
                changeOrigin: true,
            })
    );
};