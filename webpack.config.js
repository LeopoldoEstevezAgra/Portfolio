var Encore = require('@symfony/webpack-encore');

var webpack = require('webpack');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('web/build/')

    //Versioning changes the different file names to a hash name , making all cache irrelevant

    // public path used by the web server to access the output path
    .setPublicPath('/build')

    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */

    //SCCS
    //.addStyleEntry('css/app', './assets/css/app.scss')
    .addStyleEntry('css/bootstrap', './assets/css/bootstrap.css')
    .addStyleEntry('css/baseStyles', './assets/css/baseStyles.scss')

    .addStyleEntry('css/security/register', './assets/css/security/register.scss')

    .addStyleEntry('css/index/index', './assets/css/index/index.scss')

    .addStyleEntry('css/admin/sidebar', './assets/css/admin/sidebar.scss')
    .addStyleEntry('css/admin/index', './assets/css/admin/index.scss')
    .addStyleEntry('css/admin/forms', './assets/css/admin/forms.scss')
    .addStyleEntry('css/admin/adminBase', './assets/css/admin/adminBase.scss')

    //JS
    .addEntry('js/app', './assets/js/app.js')
    .addEntry('js/jquery', './assets/js/jquery.js')
    .addEntry('js/bootstrap', './assets/js/bootstrap.js')
    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()


    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning()

    .autoProvidejQuery()

    // uncomment if you use Sass/SCSS files
    .enableSassLoader(function (sassOptions) { }, {
        resolveUrlLoader: false
    })

    .enableSassLoader()

;

module.exports = Encore.getWebpackConfig();
