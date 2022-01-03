module.exports = ({env}) => ({
  plugins: [
    require('tailwindcss')(),
    require('postcss-preset-env')(),
    require('autoprefixer')(),
    env === 'production' ? require('cssnano')() : false,
  ]
});

