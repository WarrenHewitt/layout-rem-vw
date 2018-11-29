module.exports = {
    devServer: {
        compress: true,
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
