module.exports = {
    devServer: {
        compress: true,
        host: '0.0.0.0',
        port: 9090,

        proxy: {
            '/api': {
                target: 'http://localhost:2500',
                changeOrigin: true
            }
        }
    },

    lintOnSave: false
}
