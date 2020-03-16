module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://sso.test/api.php',
                changeOrigin: true
            }
        }
    }
}