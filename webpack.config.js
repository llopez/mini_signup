module.exports = {
  entry: "./src/client.js",
  output: {
    path: "./build",
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
