const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    config.plugins.push(new LoadablePlugin({ writeToDisk: true }));

    if (target === `web` && dev) {
      config.devServer.port = 3000;
      console.log('devServer -> ', config.devServer);
    }

    if (target === 'node' && !dev) {
      //target for backend
      config.output.path = path.resolve(__dirname, 'dist/')
    }
    else if (target === 'web' && !dev) {
      //target for frontend
      config.output.path = path.resolve(__dirname, 'dist/public')
    }

    return config;
  }
}