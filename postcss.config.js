module.exports = ({ env }) => {
  const isProd = env === 'production'

  const plugins = {
    'postcss-easy-import': {},
    'postcss-mixins': {},
    'postcss-nested': {},
    'postcss-custom-media': {},
  }

  if (isProd) {
    plugins['postcss-preset-env'] = {}
  }

  return { plugins }
}
