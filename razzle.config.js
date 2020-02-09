const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    config.plugins.push(new LoadablePlugin({ writeToDisk: true }));

    console.log(config)

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