module.exports = (api) => {
  api.cache(true);

  const presets = ['@babel/env'];
  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ];

  return { presets, plugins };
};
