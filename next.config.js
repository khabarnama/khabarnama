const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  },
  images: {
    domains: ['admin.iap.af', 'www.khaama.com', 'reporterly.net', 'secure.gravatar.com']
  }
})
