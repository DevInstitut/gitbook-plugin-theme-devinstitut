//const insertLogoPlugin = require('./_assets/plugins/gitbook-plugin-insert-logo');

const bookConfig = {js: [], css: []};


const addPlugin = (cfg, plugin) => {
    const plug = require(plugin);
    if (plug.book) {
        [ 'js', 'css']
            .forEach(
                prop => cfg[prop] = cfg[prop].concat(plug.book[prop].map(v => `${plugin}/${plug.book['assets']}/${v}`)))
    }
};

addPlugin(bookConfig, './_assets/plugins/gitbook-plugin-insert-logo');

console.log("bookConfig", bookConfig)

module.exports = {
    book: bookConfig,
    hooks: {
        config: function (config) {

            config.styles = config.styles || config.pluginsConfig['theme-default'].styles;

            config.pluginsConfig['insert-logo'] = {
                "url": "http://www.dev-institut.fr/img/logo.svg",
                "style": "width: 50px"
            };

            return config;
        }
    }
};


