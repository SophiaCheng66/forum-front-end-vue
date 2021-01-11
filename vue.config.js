module.exports = {
  lintOnSave: false,

  publicPath: process.env.NODE_ENV === 'production'
    ? '/forum-front-end-vue/'
    : '/'
}