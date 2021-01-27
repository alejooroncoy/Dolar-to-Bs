const path = require('path')

module.exports = {
  root: path.resolve(__dirname, './src'),
  mount: {
    public: "/",
    src: "/src"
  },
  devOptions: {
    port: 5050,
  },
  buildOptions: {
    out: path.resolve(__dirname, './dist'),
  },
}