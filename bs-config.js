module.exports = {
  server: {
    port : process.env.PORT,
    //port: 8080,
    middleware: {
      // overrides the second middleware default with new settings
      1: require('connect-history-api-fallback')({index: '/index.html', verbose: true})
    }
  }
};
