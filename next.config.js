module.exports = {
  webpack5: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  }
};
