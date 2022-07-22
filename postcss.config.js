const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    cssnano({ preset: 'default' }),
    purgecss({
      content: ['./public/*.html'],
      defaultExtractor: content => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
      safelist: [
        'bg-[url(./assets/svg/call.svg)]',
        'bg-[url(./assets/images/artisan-1.png)]',
        'bg-[url(./assets/images/artisan-2.png)]',
        'bg-[url(./assets/images/artisan-3.png)]',
        'bg-[url(./assets/images/artisan-4.png)]',
        'bg-[url(./assets/images/artisan-5.png)]',
        'bg-[url(./assets/images/artisan-7.png)]',
        'bg-[url(./assets/images/artisan-8.png)]',
        'bg-[url(./assets/images/artisan-9.png)]',
        'bg-[url(./assets/images/artisan-10.png)]',
        'bg-[url(./assets/images/artisan-11.png)]',
      ],
    }),
  ],
};
