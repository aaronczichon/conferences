class MyPlugin {
    apply(compiler) {
        compiler.plugin('run', (compiler, callback) => {
            console.log('BASTA! Webpack is running!');
            callback();
        })
    }
}

module.exports = MyPlugin;