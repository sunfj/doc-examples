/* eslint-env node */
const path = require('path');
const { shared, externals } = require('../../../../../../../../webpack.shared.js');

module.exports = {
    ...shared({
       publicPath: '/org/visallo/examples/graph_export/dist/',
       dir: __dirname
    }),
    entry: {
        plugin: './src/plugin.js',
        configuration: './src/configuration.js'
    },
    externals: externals(
        'public/v1/api',
        'handlebars'
    )
}