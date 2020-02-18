module.exports = {
    entry: __dirname + "/Scripts/src/react/app",
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: "babel-loader"
        }]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devtool: "source-map",
    output: {
        path: __dirname + "/Scripts/dist",
        filename: "bundle.js"
    }
};