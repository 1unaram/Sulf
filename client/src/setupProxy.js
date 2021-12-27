const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/postReq", {
            target: "http://localhost:8080",
            changeOrigin: true,
        })
    );

    app.use(
        createProxyMiddleware("/sendPost", {
            target: "http://localhost:8080",
            changeOrigin: true,
        })
    );
};