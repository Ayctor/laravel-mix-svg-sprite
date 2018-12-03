# Laravel mix svg sprite

This extension provides instant svg sprite support to your Mix (v4 and up) builds.

## Usage

First, install the extension.

```
npm install @ayctor/laravel-mix-svg-sprite --save-dev
```

Then, require it within your `webpack.mix.js` file, like so:

```js
let mix = require('laravel-mix');

require('@ayctor/laravel-mix-svg-sprite');

// customizable config
mix.svgSprite('resources/svg/*.svg', {
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
});
```

And you're done! Compile everything down with `npm run dev`.

For full documentation on the configuration check out [svg-spritemap-webpack-plugin](https://github.com/cascornelissen/svg-spritemap-webpack-plugin)
