module.exports = {
    hooks: {
        config: function (config) {

            config.styles = config.styles || config.pluginsConfig['theme-default'].styles;

            // config insert-logo plugin
            config.pluginsConfig['insert-logo'] = {
                "url": "http://www.dev-institut.fr/img/logo.svg",
                "style": "width: 50px"
            };

            return config;
        }
    }
};


