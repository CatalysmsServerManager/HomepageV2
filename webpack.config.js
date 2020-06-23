require('dotenv').config();
const merge = require('webpack-merge');
const parts = require('./webpack.parts.js');
const chalk = require('chalk');

const PublicEnvironmentVariables = {
  'process.env': {
  }
}

const commonConfig = merge([
  parts.start(),
  parts.aliases(),
  parts.IO(),
  parts.loadHtml(),
  parts.cssExtract(),
  parts.RebuildOnModuleInstall(),
  parts.progress()
])

const productionConfig = merge([
  parts.cleanDist(),
  parts.manifest(),
  parts.loaders({ filename: '[contenthash].[ext]' }),
  parts.banner(),
  parts.minify(),
  parts.minimizeImages(),
  parts.ServiceWorker(),
  parts.dotEnv(PublicEnvironmentVariables),
  parts.CopyPublicFolder()
]);

const developmentConfig = merge([
  parts.loaders({ filename: '[name].[ext]' }),
  parts.devServer({
    host: process.env.HOSTNAME,
    port: process.env.PORT
  }),
  parts.sourceMap(),
  parts.dotEnv(PublicEnvironmentVariables),
]);

module.exports = ({ mode }) => {
  console.log(chalk.white('webpack mode:'), chalk.green(mode));
  switch (mode) {
    case 'development':
      return merge(commonConfig, developmentConfig, { mode })
    case 'production':
      return merge(commonConfig, productionConfig, { mode })
  }
}