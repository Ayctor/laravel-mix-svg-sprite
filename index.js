let mix = require('laravel-mix');

class SvgSprite {

    constructor() {
        this.entries = 'resources/svg/*.svg';
        this.options = {
            output:  {
                filename: 'svg/sprite.svg',
                chunk: {
                    name: '/svg/sprite',
                    keep: true
                },
                svgo: {
                    plugins: [{
                        removeEmptyAttrs: true,
                        convertStyleToAttrs: true,
                    }],
                }
            },
            sprite: {
                prefix: false,
            }
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
    register(entries = false, options = false) {
        if (typeof entries != 'boolean') {
            this.entries = entries;
        }

        if (typeof options == 'object') {
            Object.assign(this.options, options);
        }
    }

    /*
     * Plugins to be merged with the master webpack config.
     *
     * @return {Array|Object}
     */
    webpackPlugins() {
        let SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

        return new SVGSpritemapPlugin(this.entries, this.options);
    }
}

mix.extend('svgSprite', new SvgSprite());
