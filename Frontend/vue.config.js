module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  outputDir: "dist",
  devServer: {
    host: "localhost",
    port: 8080,
  },
};
