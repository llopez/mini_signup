module.exports = {
  entry: "./src/client/index.js",
  output: {
    path: "./dist/js",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { 
        test: /\.jsx?$/, 
        loader: "babel",
        exclude: "node_modules",
        query: 
          {
            presets:['react', 'es2015']
          }
      }
    ]
  }
};
