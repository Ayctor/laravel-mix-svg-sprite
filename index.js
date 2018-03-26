let mix = require('laravel-mix');

class SvgSprite {

    constructor() {
        this.options = {
            src: '**/*.svg',
            glob: {},
            svgo: {},
            svg4everybody: false,
            gutter: 2,
            prefix: 'sprite-',
            filename: 'spritemap.svg',
            chunk: 'spritemap',
            deleteChunk: true
        };
    }

    /**
     * All dependencies that should be installed by Mix.
     *
     * @return {Array}
     */
    dependencies() {
        return ['svg-spritemap-webpack-plugin'];
    }

    /**
     * Register the component.
     *
     * @param {string} entry
     * @param {string} output
     */
    register(entry, output = false) {
        if (typeof entry == 'string') {
            this.options.src = entry;
            this.options.filename = output;
            return;
        }

        if (typeof entry == 'object') {
            Object.assign(this.options, entry);
            return;
        }
    }

    /*
     * Plugins to be merged with the master webpack config.
     *
     * @return {Array|Object}
     */
    webpackPlugins() {
        let SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

        return new SVGSpritemapPlugin(this.options);
    }
}

mix.extend('svgSprite', new SvgSprite());
